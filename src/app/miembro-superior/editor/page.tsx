'use client';

import React, { useState, useEffect } from 'react';
import DesktopEditor from './components/DesktopEditor';
import MobileEditor from './components/MobileEditor';
import { ZonesData, ImageView } from './types';

// Datos iniciales para miembro superior
const initialImages: ImageView[] = [
  { key: 'posterior', src: '/miembro-superior/img/posterior.png', title: 'Post. Hueso' },
  { key: 'anterior', src: '/miembro-superior/img/anterior.png', title: 'Ant. Hueso' },
  { key: 'postMusculatura', src: '/miembro-superior/img/posterior_musculatura.png', title: 'Post. Músculos' },
  { key: 'antMusculatura', src: '/miembro-superior/img/anterior_musculatura.png', title: 'Ant. Músculos' },
];

// Datos iniciales vacíos
const emptyData: ZonesData = {
  desktop: {
    posterior: [],
    anterior: [],
    postMusculatura: [],
    antMusculatura: [],
  },
  mobile: {
    posterior: [],
    anterior: [],
    postMusculatura: [],
    antMusculatura: [],
  },
};

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const [data, setData] = useState<ZonesData>(emptyData);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar datos iniciales desde zones-simple.json
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const response = await fetch('/miembro-superior/zones-simple.json');
        if (response.ok) {
          const initialData = await response.json();
          setData(initialData);
        } else {
          // Si no existe, usar datos vacíos
          setData(emptyData);
        }
      } catch (error) {
        console.error('Error loading initial data:', error);
        setData(emptyData);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleDesktopDataChange = (desktopData: Record<string, any>) => {
    setData(prev => ({
      ...prev,
      desktop: desktopData,
    }));
  };

  const handleMobileDataChange = (mobileData: Record<string, any>) => {
    setData(prev => ({
      ...prev,
      mobile: mobileData,
    }));
  };

  const handleSaveAll = () => {
    // Aquí podrías implementar un callback para guardar en un servidor
    console.log('Guardando todos los datos:', data);
    alert('Datos guardados (consola)');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p>Cargando datos iniciales...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">🛠 Editor de Zonas Labeling Quiz</h1>
          <p className="text-gray-400 text-sm mb-4">
            Editor genérico para crear zonas de respuesta para cualquier estructura anatómica.
            Los datos se guardan automáticamente en localStorage.
          </p>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-4">
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'desktop' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('desktop')}
            >
              🖥 Editor Desktop
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'mobile' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('mobile')}
            >
              📱 Editor Mobile
            </button>
          </div>

          {/* Barra de acciones globales */}
          <div className="flex flex-wrap gap-3 items-center">
            <div className="text-sm text-gray-400">
              Editando: <span className="text-purple-400 font-medium">Miembro Superior</span>
            </div>
            <div className="flex-1"></div>
            <button
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-medium"
              onClick={handleSaveAll}
            >
              💾 Guardar Todo
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm"
              onClick={() => {
                if (confirm('¿Resetear todos los datos a los valores iniciales?')) {
                  setData(emptyData);
                  localStorage.removeItem('escapula_zones');
                  localStorage.removeItem('escapula_zones_mobile');
                }
              }}
            >
              🔄 Resetear
            </button>
          </div>
        </div>
      </div>

      {/* Contenido del tab activo */}
      <div className="p-4">
        {activeTab === 'desktop' ? (
          <DesktopEditor
            images={initialImages}
            data={data.desktop}
            onDataChange={handleDesktopDataChange}
            storageKey="escapula_zones"
          />
        ) : (
          <MobileEditor
            images={initialImages}
            data={data.mobile}
            onDataChange={handleMobileDataChange}
            storageKey="escapula_zones_mobile"
          />
        )}
      </div>

      {/* Footer con instrucciones */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-purple-400 font-medium mb-2">📖 Instrucciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <h4 className="font-medium text-gray-300 mb-1">🖥 Editor Desktop:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Doble clic en la imagen para agregar zona</li>
                <li>Arrastrar para mover zonas</li>
                <li>Arrastrar desde la esquina inferior derecha para redimensionar</li>
                <li>Tecla Delete para eliminar zona seleccionada</li>
                <li>Seleccionar zona para editar propiedades</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-300 mb-1">📱 Editor Mobile:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Solo muestra una zona a la vez (la activa)</li>
                <li>Flechas de dirección para navegar entre zonas</li>
                <li>Flechas del teclado para mover zona activa</li>
                <li>Selector de dirección para flechas de respuesta</li>
                <li>Controles globales para mover/redimensionar todas las zonas</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-500">
            <p>💡 Los datos se guardan automáticamente en localStorage del navegador.</p>
            <p>💡 Usá "Guardar JSON" para exportar y compartir la configuración.</p>
            <p>💡 Este editor es genérico y puede usarse para cualquier estructura anatómica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}