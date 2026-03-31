'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ZoneMobile, ImageView, EditorProps, DIRECTION_OPTIONS, PRESETS } from '../types';

type MobileEditorProps = EditorProps & {
  data: Record<string, ZoneMobile[]>;
  onDataChange: (data: Record<string, ZoneMobile[]>) => void;
};

export default function MobileEditor({ 
  images, 
  data, 
  onDataChange,
  storageKey = 'escapula_zones_mobile'
}: MobileEditorProps) {
  const [currentView, setCurrentView] = useState<string>(images[0]?.key || '');
  const [activeIdx, setActiveIdx] = useState<number>(0);
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
  
  const [moveStep, setMoveStep] = useState<number>(1);
  const [globalW, setGlobalW] = useState<number>(130);
  const [globalH, setGlobalH] = useState<number>(28);
  const [scalePercent, setScalePercent] = useState<number>(100);
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cargar desde localStorage al inicio
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
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
    setActiveIdx(0);
  };

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
      setActiveIdx(idx);
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

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') return;
      
      const zones = data[currentView] || [];
      if (zones.length === 0) return;
      
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          if (activeIdx > 0) {
            setActiveIdx(activeIdx - 1);
          }
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          if (activeIdx < zones.length - 1) {
            setActiveIdx(activeIdx + 1);
          }
          break;
        case 'Delete':
          handleDeleteZone();
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, currentView, data]);

  const handleAddZone = () => {
    const newZone: ZoneMobile = {
      label: '',
      x: 50,
      y: 50,
      w: 130,
      h: 28,
      dir: 'none'
    };
    
    const newData = { ...data };
    if (!newData[currentView]) newData[currentView] = [];
    newData[currentView].push(newZone);
    onDataChange(newData);
    setActiveIdx(newData[currentView].length - 1);
  };

  const handleDeleteZone = () => {
    const zones = data[currentView] || [];
    if (zones.length === 0) return;
    
    const newData = { ...data };
    newData[currentView]?.splice(activeIdx, 1);
    onDataChange(newData);
    
    if (activeIdx >= newData[currentView]?.length) {
      setActiveIdx(Math.max(0, newData[currentView]?.length - 1 || 0));
    }
  };

  const handleApplyProperties = () => {
    const zone = data[currentView]?.[activeIdx];
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

  const handleDirectionChange = (dir: string) => {
    const zone = data[currentView]?.[activeIdx];
    if (!zone) return;
    
    zone.dir = dir;
    const newData = { ...data };
    onDataChange(newData);
  };

  const handleMoveAll = (dx: number, dy: number) => {
    const zones = data[currentView] || [];
    const newData = { ...data };
    
    zones.forEach(zone => {
      zone.x = Math.round(Math.max(0, Math.min(100, zone.x + dx)) * 2) / 2;
      zone.y = Math.round(Math.max(0, Math.min(100, zone.y + dy)) * 2) / 2;
    });
    
    onDataChange(newData);
  };

  const handleApplyGlobalW = () => {
    const zones = data[currentView] || [];
    const newData = { ...data };
    
    zones.forEach(zone => {
      zone.w = globalW;
    });
    
    onDataChange(newData);
  };

  const handleApplyGlobalH = () => {
    const zones = data[currentView] || [];
    const newData = { ...data };
    
    zones.forEach(zone => {
      zone.h = globalH;
    });
    
    onDataChange(newData);
  };

  const handleApplyScale = () => {
    const zones = data[currentView] || [];
    const newData = { ...data };
    const pct = scalePercent / 100;
    
    zones.forEach(zone => {
      zone.w = Math.round(Math.max(40, zone.w * pct));
      zone.h = Math.round(Math.max(16, zone.h * pct));
    });
    
    onDataChange(newData);
  };

  const handlePreset = (w: number, h: number) => {
    const zones = data[currentView] || [];
    const newData = { ...data };
    
    zones.forEach(zone => {
      zone.w = w;
      zone.h = h;
    });
    
    setGlobalW(w);
    setGlobalH(h);
    onDataChange(newData);
  };

  const handleSaveJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zones_mobile.json';
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
        setActiveIdx(0);
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
  const activeZone = zones[activeIdx];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <h1 className="text-xl font-bold mb-2">🛠 Editor Mobile</h1>
      <p className="text-gray-400 text-sm mb-4">
        Vista previa mobile · Flecha de dirección + texto con wrap · Editá una a la vez
      </p>

      {/* Controles globales */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-4 flex flex-wrap gap-6">
        {/* Mover Todas */}
        <div className="flex flex-col gap-2">
          <h4 className="text-purple-400 text-xs uppercase tracking-wider">↕ Mover Todas</h4>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-400 min-w-[60px]">Paso %</label>
            <input
              type="number"
              className="w-16 px-2 py-1 rounded bg-gray-900 border border-gray-700 text-sm text-center"
              value={moveStep}
              min="0.5"
              max="10"
              step="0.5"
              onChange={(e) => setMoveStep(parseFloat(e.target.value) || 1)}
            />
          </div>
          <div className="flex gap-1">
            <button className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(0, -moveStep)}>↑</button>
            <button className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(0, moveStep)}>↓</button>
            <button className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(-moveStep, 0)}>←</button>
            <button className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(moveStep, 0)}>→</button>
          </div>
          <div className="flex gap-1">
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(0, -5)}>↑5%</button>
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(0, 5)}>↓5%</button>
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(-5, 0)}>←5%</button>
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => handleMoveAll(5, 0)}>→5%</button>
          </div>
        </div>

        {/* Redimensionar Todas */}
        <div className="flex flex-col gap-2">
          <h4 className="text-purple-400 text-xs uppercase tracking-wider">↔ Redimensionar Todas</h4>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-400 min-w-[60px]">Ancho</label>
            <input
              type="number"
              className="w-16 px-2 py-1 rounded bg-gray-900 border border-gray-700 text-sm text-center"
              value={globalW}
              min="40"
              max="300"
              step="5"
              onChange={(e) => setGlobalW(parseInt(e.target.value) || 130)}
            />
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={handleApplyGlobalW}>Aplicar</button>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-400 min-w-[60px]">Alto</label>
            <input
              type="number"
              className="w-16 px-2 py-1 rounded bg-gray-900 border border-gray-700 text-sm text-center"
              value={globalH}
              min="16"
              max="60"
              step="2"
              onChange={(e) => setGlobalH(parseInt(e.target.value) || 28)}
            />
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={handleApplyGlobalH}>Aplicar</button>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-gray-400 min-w-[60px]">Scale %</label>
            <input
              type="number"
              className="w-16 px-2 py-1 rounded bg-gray-900 border border-gray-700 text-sm text-center"
              value={scalePercent}
              min="50"
              max="200"
              step="5"
              onChange={(e) => setScalePercent(parseInt(e.target.value) || 100)}
            />
            <button className="px-2 py-1 text-xs rounded-lg bg-gray-700 hover:bg-gray-600" onClick={handleApplyScale}>×</button>
          </div>
        </div>

        {/* Presets */}
        <div className="flex flex-col gap-2">
          <h4 className="text-purple-400 text-xs uppercase tracking-wider">⚡ Presets</h4>
          <div className="flex flex-wrap gap-1">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                className="px-2 py-1 text-xs rounded-lg border border-gray-700 bg-gray-900 hover:bg-gray-800"
                onClick={() => handlePreset(preset.w, preset.h)}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navegador de zonas */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-3 mb-4 flex flex-wrap gap-3 items-center">
        <button className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => activeIdx > 0 && setActiveIdx(activeIdx - 1)}>◀</button>
        <span className="text-purple-400 font-semibold text-sm min-w-[50px] text-center">
          {zones.length > 0 ? `${activeIdx + 1} / ${zones.length}` : '0 / 0'}
        </span>
        <button className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600" onClick={() => activeIdx < zones.length - 1 && setActiveIdx(activeIdx + 1)}>▶</button>
        
        <select 
          className="flex-1 min-w-[200px] px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm"
          value={activeIdx}
          onChange={(e) => setActiveIdx(parseInt(e.target.value))}
        >
          {zones.map((zone, idx) => (
            <option key={idx} value={idx}>
              {idx + 1}. {zone.label || '(sin nombre)'}
            </option>
          ))}
        </select>
        
        <button className="px-3 py-2 rounded-lg bg-purple-700 hover:bg-purple-600" onClick={handleAddZone}>+ Nueva</button>
        <button className="px-3 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500/10" onClick={handleDeleteZone}>🗑</button>
      </div>

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
        {/* Canvas mobile (390px) */}
        <div 
          ref={canvasRef}
          className="w-full lg:w-[390px] flex-shrink-0 relative bg-white rounded-xl overflow-hidden"
        >
          {currentImage && (
            <img 
              src={currentImage.src} 
              alt={currentImage.title}
              className="w-full h-auto rounded-xl"
            />
          )}
          
          {/* Solo mostrar zona activa */}
          {activeZone && (
            <div
              className="absolute border-2 border-yellow-500 bg-yellow-500/35 rounded-md flex items-center justify-center text-xs font-semibold text-white cursor-move select-none text-center px-2 py-1 whitespace-normal word-wrap-break-word overflow-visible leading-tight"
              style={{
                left: `${activeZone.x}%`,
                top: `${activeZone.y}%`,
                width: `${activeZone.w}px`,
                height: `${activeZone.h}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
              }}
              onMouseDown={(e) => handleMouseDown(e, activeIdx)}
            >
              {activeZone.label || '?'}
              
              {/* Flecha de dirección */}
              {activeZone.dir !== 'none' && (
                <div className={`absolute arrow-${activeZone.dir}`} />
              )}
              
              {/* Handle de resize */}
              <div 
                className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-gray-900 cursor-nwse-resize"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleMouseDown(e, activeIdx, true);
                }}
              />
            </div>
          )}
        </div>

        {/* Panel lateral */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
          {/* Propiedades de la zona activa */}
          {activeZone && (
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <h3 className="text-purple-400 font-medium text-sm mb-3">⚙ Zona Activa</h3>
              
              <label className="block text-xs text-gray-400 mb-1">Nombre / Respuesta</label>
              <input
                id="pLabel"
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-sm mb-3"
                placeholder="Ej: Acromion"
                defaultValue={activeZone.label}
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
                    defaultValue={activeZone.x}
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
                    defaultValue={activeZone.y}
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
                    defaultValue={activeZone.w}
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
                    defaultValue={activeZone.h}
                  />
                </div>
              </div>
              
              <label className="block text-xs text-gray-400 mb-2">Flecha (dirección)</label>
              <div className="grid grid-cols-3 gap-1 mb-4 justify-center">
                {DIRECTION_OPTIONS.map((dir) => (
                  <button
                    key={dir.value}
                    className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm ${activeZone.dir === dir.value ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500' : 'border-gray-700 bg-gray-900 hover:border-gray-600'}`}
                    onClick={() => handleDirectionChange(dir.value)}
                  >
                    {dir.label}
                  </button>
                ))}
              </div>
              
              <button
                className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-700 font-medium text-sm"
                onClick={handleApplyProperties}
              >
                ✅ Aplicar
              </button>
            </div>
          )}

          {/* Lista mini de zonas */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
            <h3 className="text-purple-400 font-medium text-sm mb-3">
              📋 Zonas ({zones.length})
            </h3>
            <div className="max-h-48 overflow-y-auto flex flex-col gap-1">
              {zones.map((zone, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-2 rounded text-xs cursor-pointer flex justify-between items-center ${idx === activeIdx ? 'bg-yellow-500/10 border border-yellow-500' : 'bg-gray-900 border border-gray-800 hover:border-gray-700'}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span>{idx + 1}. {zone.label || '(?)'}</span>
                  <span className="text-gray-500 text-xs">
                    {Math.round(zone.x)},{Math.round(zone.y)}
                  </span>
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

      {/* Estilos para flechas */}
      <style jsx>{`
        .arrow-tl { top: -8px; left: -4px; border-right: 5px solid transparent; border-bottom: 8px solid rgba(245, 158, 11, 0.9); border-left: 5px solid transparent; }
        .arrow-u { top: -8px; left: 50%; transform: translateX(-50%); border-left: 5px solid transparent; border-right: 5px solid transparent; border-bottom: 8px solid rgba(245, 158, 11, 0.9); }
        .arrow-tr { top: -8px; right: -4px; border-left: 5px solid transparent; border-bottom: 8px solid rgba(245, 158, 11, 0.9); border-right: 5px solid transparent; }
        .arrow-l { left: -8px; top: 50%; transform: translateY(-50%); border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 8px solid rgba(245, 158, 11, 0.9); }
        .arrow-r { right: -8px; top: 50%; transform: translateY(-50%); border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 8px solid rgba(245, 158, 11, 0.9); }
        .arrow-bl { bottom: -8px; left: -4px; border-right: 5px solid transparent; border-top: 8px solid rgba(245, 158, 11, 0.9); border-left: 5px solid transparent; }
        .arrow-d { bottom: -8px; left: 50%; transform: translateX(-50%); border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 8px solid rgba(245, 158, 11, 0.9); }
        .arrow-br { bottom: -8px; right: -4px; border-left: 5px solid transparent; border-top: 8px solid rgba(245, 158, 11, 0.9); border-right: 5px solid transparent; }
        
        .arrow-tl, .arrow-u, .arrow-tr, .arrow-l, .arrow-r, .arrow-bl, .arrow-d, .arrow-br {
          position: absolute;
          width: 0;
          height: 0;
          z-index: 21;
        }
      `}</style>
    </div>
  );
}