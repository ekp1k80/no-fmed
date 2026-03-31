'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ZoneDesktop, ImageView, EditorProps, DIRECTION_OPTIONS } from '../types';

type DesktopEditorProps = EditorProps & {
  data: Record<string, ZoneDesktop[]>;
  onDataChange: (data: Record<string, ZoneDesktop[]>) => void;
};

export default function DesktopEditor({ 
  images, 
  data, 
  onDataChange,
  storageKey = 'escapula_zones'
}: DesktopEditorProps) {
  const [currentView, setCurrentView] = useState<string>(images[0]?.key || '');
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const [dragging, setDragging] = useState<{
    idx: number;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    resizing: boolean;
    origW?: number;
    origH?: number;
  } | null>(null);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cargar desde localStorage al inicio
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Solo actualizar si hay datos válidos
        if (parsed && typeof parsed === 'object') {
          onDataChange(parsed);
        }
      } catch (e) {
        console.error('Error loading from localStorage:', e);
      }
    }
  }, [storageKey, onDataChange]);

  // Auto-save a localStorage
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(data));
    }
  }, [data, storageKey]);

  const handleViewChange = (viewKey: string) => {
    setCurrentView(viewKey);
    setSelectedIdx(-1);
  };

  const handleCanvasDoubleClick = useCallback((e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100 * 2) / 2;
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100 * 2) / 2;
    
    const newZone: ZoneDesktop = {
      label: '',
      x,
      y,
      w: 130,
      h: 28
    };
    
    const newData = { ...data };
    if (!newData[currentView]) newData[currentView] = [];
    newData[currentView].push(newZone);
    onDataChange(newData);
    setSelectedIdx(newData[currentView].length - 1);
  }, [currentView, data, onDataChange]);

  const handleMouseDown = useCallback((e: React.MouseEvent, idx: number, isResizeHandle: boolean = false) => {
    e.preventDefault();
    const zone = data[currentView]?.[idx];
    if (!zone) return;
    
    if (isResizeHandle) {
      setDragging({
        idx,
        startX: e.clientX,
        startY: e.clientY,
        origX: zone.x,
        origY: zone.y,
        origW: zone.w,
        origH: zone.h,
        resizing: true
      });
    } else {
      setSelectedIdx(idx);
      setDragging({
        idx,
        startX: e.clientX,
        startY: e.clientY,
        origX: zone.x,
        origY: zone.y,
        resizing: false
      });
    }
  }, [currentView, data]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging || !canvasRef.current) return;
      
      const zone = data[currentView]?.[dragging.idx];
      if (!zone) return;
      
      const rect = canvasRef.current.getBoundingClientRect();
      const newData = { ...data };
      
      if (dragging.resizing && dragging.origW !== undefined && dragging.origH !== undefined) {
        zone.w = Math.max(60, dragging.origW + (e.clientX - dragging.startX));
        zone.h = Math.max(18, dragging.origH + (e.clientY - dragging.startY));
      } else {
        const dx = ((e.clientX - dragging.startX) / rect.width) * 100;
        const dy = ((e.clientY - dragging.startY) / rect.height) * 100;
        zone.x = Math.round(Math.max(0, Math.min(100, dragging.origX + dx)) * 2) / 2;
        zone.y = Math.round(Math.max(0, Math.min(100, dragging.origY + dy)) * 2) / 2;
      }
      
      onDataChange(newData);
    };
    
    const handleMouseUp = () => {
      setDragging(null);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, currentView, data, onDataChange]);

  // Manejar tecla Delete
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedIdx >= 0 && 
          document.activeElement?.tagName !== 'INPUT' && 
          document.activeElement?.tagName !== 'TEXTAREA') {
        const newData = { ...data };
        newData[currentView]?.splice(selectedIdx, 1);
        onDataChange(newData);
        setSelectedIdx(-1);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, currentView, data, onDataChange]);

  const handleAddZone = () => {
    const newZone: ZoneDesktop = {
      label: '',
      x: 50,
      y: 50,
      w: 130,
      h: 28
    };
    
    const newData = { ...data };
    if (!newData[currentView]) newData[currentView] = [];
    newData[currentView].push(newZone);
    onDataChange(newData);
    setSelectedIdx(newData[currentView].length - 1);
  };

  const handleDeleteZone = () => {
    if (selectedIdx < 0) return;
    const newData = { ...data };
    newData[currentView]?.splice(selectedIdx, 1);
    onDataChange(newData);
    setSelectedIdx(-1);
  };

  const handleApplyProperties = () => {
    if (selectedIdx < 0) return;
    const zone = data[currentView]?.[selectedIdx];
    if (!zone) return;
    
    const labelInput = document.getElementById('pLabel') as HTMLInputElement;
    const xInput = document.getElementById('pX') as HTMLInputElement;
    const yInput = document.getElementById('pY') as HTMLInputElement;
    const wInput = document.getElementById('pW') as HTMLInputElement;
    const hInput = document.getElementById('pH') as HTMLInputElement;
    
    if (labelInput && xInput && yInput && wInput && hInput) {
      zone.label = labelInput.value;
      zone.x = parseFloat(xInput.value) || 50;
      zone.y = parseFloat(yInput.value) || 50;
      zone.w = parseInt(wInput.value) || 130;
      zone.h = parseInt(hInput.value) || 28;
      
      const newData = { ...data };
      onDataChange(newData);
    }
  };

  const handleSaveJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zones_desktop.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadJSON = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        onDataChange(parsed);
        setSelectedIdx(-1);
      } catch (err) {
        alert('JSON inválido');
      }
    };
    reader.readAsText(file);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
      .then(() => {
        const btn = document.getElementById('copyBtn');
        if (btn) {
          btn.textContent = '✅ Copiado!';
          setTimeout(() => {
            btn.textContent = '📋 Copiar JSON';
          }, 1500);
        }
      });
  };

  const currentImage = images.find(img => img.key === currentView);
  const zones = data[currentView] || [];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <h1 className="text-xl font-bold mb-2">🛠 Editor de Drop Zones</h1>
      <p className="text-gray-400 text-sm mb-4">
        Colocá las zonas donde terminan las flechas · Doble clic para agregar · Arrastrá para mover · Shift+arrastre para redimensionar
      </p>

      {/* Barra de herramientas */}
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <select 
          className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm"
          value={currentView}
          onChange={(e) => handleViewChange(e.target.value)}
        >
          {images.map((img) => (
            <option key={img.key} value={img.key}>{img.title}</option>
          ))}
        </select>
        
        <button 
          className="px-3 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-medium"
          onClick={handleAddZone}
        >
          + Agregar zona
        </button>
        
        <button 
          className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-sm font-medium"
          onClick={handleSaveJSON}
        >
          💾 Guardar JSON
        </button>
        
        <button 
          className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm"
          onClick={handleLoadJSON}
        >
          📂 Cargar JSON
        </button>
        
        <input 
          type="file" 
          ref={fileInputRef}
          accept=".json" 
          className="hidden" 
          onChange={handleFileChange}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Canvas */}
        <div 
          ref={canvasRef}
          className="flex-1 min-w-0 relative bg-white rounded-xl overflow-hidden cursor-crosshair"
          onDoubleClick={handleCanvasDoubleClick}
        >
          {currentImage && (
            <img 
              src={currentImage.src} 
              alt={currentImage.title}
              className="w-full h-auto rounded-xl"
            />
          )}
          
          {/* Renderizar zonas */}
          {zones.map((zone, idx) => (
            <div
              key={idx}
              className={`absolute border-2 ${idx === selectedIdx ? 'border-yellow-500 bg-yellow-500/20' : 'border-dashed border-purple-500/80 bg-purple-500/15'} rounded-md flex items-center justify-center text-xs font-semibold text-white cursor-move select-none min-w-[80px] min-h-[24px] text-center px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis`}
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.w}px`,
                height: `${zone.h}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: idx === selectedIdx ? 20 : 10,
              }}
              onMouseDown={(e) => handleMouseDown(e, idx)}
            >
              {zone.label || '?'}
              
              {/* Handle de resize */}
              <div 
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-gray-900 cursor-nwse-resize"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleMouseDown(e, idx, true);
                }}
              />
            </div>
          ))}
        </div>

        {/* Panel lateral */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
          {/* Propiedades de la zona seleccionada */}
          {selectedIdx >= 0 && zones[selectedIdx] && (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <h3 className="text-purple-400 font-medium text-sm mb-3">⚙ Propiedades</h3>
              
              <label className="block text-xs text-gray-400 mb-1">Nombre / Respuesta</label>
              <input
                id="pLabel"
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm mb-3"
                placeholder="Ej: Acromion"
                defaultValue={zones[selectedIdx].label}
              />
              
              <div className="flex gap-3 mb-3">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">X %</label>
                  <input
                    id="pX"
                    type="number"
                    className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm"
                    min="0"
                    max="100"
                    step="0.5"
                    defaultValue={zones[selectedIdx].x}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Y %</label>
                  <input
                    id="pY"
                    type="number"
                    className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm"
                    min="0"
                    max="100"
                    step="0.5"
                    defaultValue={zones[selectedIdx].y}
                  />
                </div>
              </div>
              
              <div className="flex gap-3 mb-4">
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Ancho px</label>
                  <input
                    id="pW"
                    type="number"
                    className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm"
                    min="40"
                    step="5"
                    defaultValue={zones[selectedIdx].w}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-400 mb-1">Alto px</label>
                  <input
                    id="pH"
                    type="number"
                    className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm"
                    min="18"
                    step="2"
                    defaultValue={zones[selectedIdx].h}
                  />
                </div>
              </div>
              
              <button
                className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 font-medium text-sm mb-2"
                onClick={handleApplyProperties}
              >
                ✅ Aplicar
              </button>
              
              <button
                className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 font-medium text-sm"
                onClick={handleDeleteZone}
              >
                🗑 Eliminar
              </button>
            </div>
          )}

          {/* Lista de zonas */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h3 className="text-purple-400 font-medium text-sm mb-3">
              📋 Zonas ({zones.length})
            </h3>
            <div className="max-h-64 overflow-y-auto flex flex-col gap-1">
              {zones.map((zone, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-2 rounded-lg text-sm cursor-pointer flex justify-between items-center ${idx === selectedIdx ? 'bg-yellow-500/10 border border-yellow-500' : 'bg-gray-900 border border-gray-800 hover:border-gray-700'}`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <span>{zone.label || '(sin nombre)'}</span>
                  <span className="text-gray-500 text-xs">
                    {Math.round(zone.x)},{Math.round(zone.y)}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-400 font-bold ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      const newData = { ...data };
                      newData[currentView]?.splice(idx, 1);
                      if (selectedIdx === idx) setSelectedIdx(-1);
                      onDataChange(newData);
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Exportar */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h3 className="text-purple-400 font-medium text-sm mb-3">📤 Exportar</h3>
            <button
              id="copyBtn"
              className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 font-medium text-sm mb-3"
              onClick={handleCopyJSON}
            >
              📋 Copiar JSON
            </button>
            <div className="max-h-48 overflow-auto">
              <pre className="text-xs bg-gray-900 p-3 rounded-lg whitespace-pre-wrap break-all text-gray-400">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}