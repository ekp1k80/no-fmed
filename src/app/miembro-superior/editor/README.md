# Editor de Zonas Labeling Quiz

Editor genérico para crear zonas de respuesta para cualquier estructura anatómica en formato desktop y mobile.

## Características

### 🖥 Editor Desktop
- **Interfaz completa**: Todas las zonas visibles simultáneamente
- **Doble clic**: Agregar nuevas zonas en cualquier posición
- **Drag & Drop**: Mover zonas arrastrando
- **Resize**: Redimensionar desde la esquina inferior derecha
- **Propiedades**: Editar nombre, posición, tamaño
- **Teclado**: Delete para eliminar zona seleccionada
- **Auto-save**: Guardado automático en localStorage
- **Import/Export**: JSON completo

### 📱 Editor Mobile
- **Vista focalizada**: Solo una zona activa a la vez
- **Navegación**: Flechas para cambiar entre zonas
- **Flechas de dirección**: Selector para orientación de respuesta
- **Controles globales**: Mover/redimensionar todas las zonas juntas
- **Presets**: Tamaños predefinidos comunes
- **Escala**: Aplicar porcentaje de escala a todas las zonas
- **Auto-save**: Guardado automático en localStorage
- **Import/Export**: JSON completo

## Estructura de Datos

```typescript
type ZoneDesktop = {
  label: string;    // Nombre de la zona/respuesta
  x: number;        // Posición X en porcentaje (0-100)
  y: number;        // Posición Y en porcentaje (0-100)
  w: number;        // Ancho en píxeles
  h: number;        // Alto en píxeles
  dir?: string | null; // Dirección de flecha (desktop opcional)
};

type ZoneMobile = {
  label: string;    // Nombre de la zona/respuesta
  x: number;        // Posición X en porcentaje (0-100)
  y: number;        // Posición Y en porcentaje (0-100)
  w: number;        // Ancho en píxeles
  h: number;        // Alto en píxeles
  dir: string;      // Dirección de flecha (tl, u, tr, l, none, r, bl, d, br)
};

type ZonesData = {
  desktop: Record<string, ZoneDesktop[]>;  // Zonas por vista (desktop)
  mobile: Record<string, ZoneMobile[]>;    // Zonas por vista (mobile)
};
```

## Uso Genérico

Este editor está diseñado para ser reutilizable para cualquier estructura anatómica:

```tsx
import { DesktopEditor, MobileEditor } from './components';
import { ImageView } from './types';

// Configurar imágenes para el nuevo quiz
const myImages: ImageView[] = [
  { key: 'view1', src: '/path/to/image1.png', title: 'Vista 1' },
  { key: 'view2', src: '/path/to/image2.png', title: 'Vista 2' },
  // ...
];

// Datos iniciales (opcional)
const initialData = {
  desktop: {
    view1: [],
    view2: [],
    // ...
  },
  mobile: {
    view1: [],
    view2: [],
    // ...
  }
};

// Usar en tu componente
<DesktopEditor
  images={myImages}
  data={initialData.desktop}
  onDataChange={(data) => console.log('Datos desktop actualizados:', data)}
  storageKey="mi_quiz_zones"
/>
```

## Instrucciones de Uso

### Editor Desktop
1. **Seleccionar vista**: Usar el dropdown para cambiar entre imágenes
2. **Agregar zona**: Doble clic en la imagen o botón "+ Agregar zona"
3. **Mover zona**: Arrastrar la zona con el mouse
4. **Redimensionar**: Arrastrar desde la esquina inferior derecha
5. **Editar propiedades**: Seleccionar zona → editar en panel lateral → Aplicar
6. **Eliminar**: Seleccionar zona → botón Eliminar o tecla Delete
7. **Exportar**: Guardar JSON o copiar al portapapeles

### Editor Mobile
1. **Navegar zonas**: Flechas ◀ ▶ o dropdown
2. **Editar zona activa**: Propiedades en panel lateral
3. **Flecha de dirección**: Seleccionar orientación (↖ ↑ ↗ ← ✕ → ↙ ↓ ↘)
4. **Mover todas**: Controles globales con paso configurable
5. **Redimensionar todas**: Ancho/alto global o presets
6. **Escalar todas**: Aplicar porcentaje de escala
7. **Exportar**: Guardar JSON o copiar al portapapeles

## Flujo de Trabajo Recomendado

1. **Configurar imágenes**: Agregar rutas de imágenes en `initialImages`
2. **Crear zonas desktop**: Usar editor desktop para posicionar todas las zonas
3. **Ajustar mobile**: Usar editor mobile para ajustar tamaño y dirección
4. **Exportar datos**: Guardar JSON final
5. **Integrar en quiz**: Usar datos exportados en el componente LabelingQuiz

## Notas Técnicas

- **Auto-save**: Los datos se guardan automáticamente en localStorage
- **Persistencia**: Cada editor usa su propia clave de almacenamiento
- **Responsive**: Interfaz adaptada para desktop y mobile
- **Accesibilidad**: Navegación por teclado disponible
- **TypeScript**: Tipado completo para mejor desarrollo

## Ejemplo de Configuración para Miembro Superior

```typescript
const initialImages: ImageView[] = [
  { key: 'posterior', src: '/miembro-superior/img/posterior.png', title: 'Post. Hueso' },
  { key: 'anterior', src: '/miembro-superior/img/anterior.png', title: 'Ant. Hueso' },
  { key: 'postMusculatura', src: '/miembro-superior/img/posterior_musculatura.png', title: 'Post. Músculos' },
  { key: 'antMusculatura', src: '/miembro-superior/img/anterior_musculatura.png', title: 'Ant. Músculos' },
];
```

## Próximos Pasos

1. **Integración con API**: Guardar datos en servidor
2. **Colaboración**: Compartir edición en tiempo real
3. **Historial**: Versiones y cambios
4. **Plantillas**: Configuraciones predefinidas
5. **Validación**: Verificación de zonas superpuestas