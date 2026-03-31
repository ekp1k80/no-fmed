# Ejemplo de Uso Genérico

Este editor puede usarse para cualquier estructura anatómica, no solo miembro superior.

## Ejemplo: Crear Editor para Cráneo

### 1. Configurar imágenes

```typescript
// En tu página de editor para cráneo
const craneoImages: ImageView[] = [
  { key: 'lateral', src: '/craneo/img/lateral.png', title: 'Vista Lateral' },
  { key: 'frontal', src: '/craneo/img/frontal.png', title: 'Vista Frontal' },
  { key: 'inferior', src: '/craneo/img/inferior.png', title: 'Vista Inferior' },
  { key: 'superior', src: '/craneo/img/superior.png', title: 'Vista Superior' },
];
```

### 2. Crear página de editor

```tsx
// src/app/craneo/editor/page.tsx
'use client';

import React, { useState } from 'react';
import { DesktopEditor, MobileEditor } from '../../../miembro-superior/editor/components';
import { ImageView } from '../../../miembro-superior/editor/types';

const craneoImages: ImageView[] = [
  { key: 'lateral', src: '/craneo/img/lateral.png', title: 'Vista Lateral' },
  { key: 'frontal', src: '/craneo/img/frontal.png', title: 'Vista Frontal' },
  { key: 'inferior', src: '/craneo/img/inferior.png', title: 'Vista Inferior' },
  { key: 'superior', src: '/craneo/img/superior.png', title: 'Vista Superior' },
];

const emptyData = {
  desktop: {
    lateral: [],
    frontal: [],
    inferior: [],
    superior: [],
  },
  mobile: {
    lateral: [],
    frontal: [],
    inferior: [],
    superior: [],
  },
};

export default function CraneoEditorPage() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const [data, setData] = useState(emptyData);

  const handleDesktopDataChange = (desktopData: any) => {
    setData(prev => ({ ...prev, desktop: desktopData }));
  };

  const handleMobileDataChange = (mobileData: any) => {
    setData(prev => ({ ...prev, mobile: mobileData }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <h1 className="text-2xl font-bold">🛠 Editor de Zonas - Cráneo</h1>
        <div className="flex border-b border-gray-700 mt-4">
          <button onClick={() => setActiveTab('desktop')}>Desktop</button>
          <button onClick={() => setActiveTab('mobile')}>Mobile</button>
        </div>
      </div>
      
      <div className="p-4">
        {activeTab === 'desktop' ? (
          <DesktopEditor
            images={craneoImages}
            data={data.desktop}
            onDataChange={handleDesktopDataChange}
            storageKey="craneo_zones"
          />
        ) : (
          <MobileEditor
            images={craneoImages}
            data={data.mobile}
            onDataChange={handleMobileDataChange}
            storageKey="craneo_zones_mobile"
          />
        )}
      </div>
    </div>
  );
}
```

### 3. Usar componentes directamente en otro lugar

```tsx
// En cualquier componente que necesite solo el editor desktop
import { DesktopEditor } from '@/app/miembro-superior/editor/components';

function MiComponente() {
  const [zones, setZones] = useState({});
  
  const misImagenes = [
    { key: 'vista1', src: '/path/to/img1.png', title: 'Vista 1' },
    { key: 'vista2', src: '/path/to/img2.png', title: 'Vista 2' },
  ];
  
  return (
    <div>
      <h2>Editor de Zonas</h2>
      <DesktopEditor
        images={misImagenes}
        data={zones}
        onDataChange={setZones}
        storageKey="mi_proyecto_zones"
      />
    </div>
  );
}
```

## Ejemplo: Integrar con API

```tsx
// Editor con guardado en servidor
function EditorConAPI() {
  const [data, setData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = async (zonesData: any) => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/save-zones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(zonesData),
      });
      
      if (response.ok) {
        alert('Datos guardados en servidor');
      }
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setIsSaving(false);
    }
  };
  
  return (
    <DesktopEditor
      images={misImagenes}
      data={data}
      onDataChange={setData}
      onSave={handleSave} // Callback opcional
      storageKey="proyecto_con_api"
    />
  );
}
```

## Ejemplo: Cargar datos iniciales desde API

```tsx
// Cargar configuración existente
function EditorConDatosExistentes() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const response = await fetch('/api/get-zones/proyecto-id');
        if (response.ok) {
          const savedData = await response.json();
          setData(savedData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadInitialData();
  }, []);
  
  if (isLoading) return <div>Cargando...</div>;
  
  return (
    <DesktopEditor
      images={misImagenes}
      data={data}
      onDataChange={setData}
      storageKey="proyecto_con_datos"
    />
  );
}
```

## Estructura de Datos Personalizada

```typescript
// Puedes extender los tipos si necesitas campos adicionales
type ZoneCustom = {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  dir?: string;
  color?: string;      // Campo adicional
  difficulty?: number; // Campo adicional
  hints?: string[];    // Campo adicional
};

// Los componentes aceptan cualquier estructura que cumpla con los campos básicos
const customData = {
  desktop: {
    vista1: [
      { label: 'Zona 1', x: 50, y: 50, w: 130, h: 28, color: '#ff0000' },
      { label: 'Zona 2', x: 30, y: 70, w: 120, h: 26, difficulty: 3 },
    ],
  },
  mobile: {
    vista1: [
      { label: 'Zona 1', x: 50, y: 50, w: 130, h: 28, dir: 'r', hints: ['Pista 1', 'Pista 2'] },
    ],
  },
};
```

## Consejos para Uso Genérico

1. **Nombres de claves**: Usar nombres descriptivos para las vistas
2. **Rutas de imágenes**: Relativas a la carpeta `public`
3. **Storage keys**: Únicas por proyecto para evitar conflictos
4. **Datos iniciales**: Proporcionar estructura vacía si no hay datos previos
5. **Callback onSave**: Implementar si necesitas guardar en servidor
6. **Responsive**: Los componentes ya son responsive por defecto

## Migración de Datos Existentes

Si ya tienes datos en otro formato:

```javascript
// Convertir datos existentes al formato del editor
function convertLegacyData(legacyData) {
  return {
    desktop: {
      vista1: legacyData.zones.map(zone => ({
        label: zone.name,
        x: zone.positionX,
        y: zone.positionY,
        w: zone.width,
        h: zone.height,
        dir: zone.direction || null,
      })),
    },
    mobile: {
      vista1: legacyData.zones.map(zone => ({
        label: zone.name,
        x: zone.positionX,
        y: zone.positionY,
        w: zone.width * 0.8, // Ajustar para mobile
        h: zone.height * 0.8,
        dir: zone.mobileDirection || 'none',
      })),
    },
  };
}
```

El editor es completamente flexible y puede adaptarse a cualquier proyecto de labeling quiz que necesites crear.