# Tarea para 2E: Editores de Zonas (Desktop + Mobile)

## Contexto
Hay dos editores HTML en `escapula-quiz/` que permiten crear y editar las zonas del labeling quiz. Fede quiere que los recree como componentes React/Next.js.

### Editor 1: `editor.html` (Editor de Zonas Desktop)
**Funcionalidades:**
- Canvas con imagen de fondo (selector de vista: posterior/anterior/postMusculatura/antMusculatura)
- **Doble clic** en canvas → agrega zona en esa posición
- **Arrastr** zona → mueve posición (X%, Y%)
- **Resize handle** (punto naranja abajo-derecha) → redimensiona zona (W px, H px)
- **Panel lateral:**
  - Propiedades: label, X%, Y%, W, H con botón "Aplicar"
  - Lista de zonas con click para seleccionar y botón ✕ para eliminar
  - Botón "Copiar JSON" + preview del JSON
- **Barra superior:** selector de vista, botón "+ Agregar zona", "Guardar JSON" (download), "Cargar JSON" (upload)
- **Auto-save** a localStorage
- Tecla Delete elimina zona seleccionada

### Editor 2: `editor-mobile.html` (Adaptador Desktop → Mobile)
**Funcionalidades:**
- Toma las zonas desktop y las adapta para mobile
- Canvas de 390px ancho (tamaño mobile preview)
- **Solo muestra 1 zona activa** a la vez
- **Navegador:** prev/next + dropdown con todas las zonas + counter "1/30"
- **Grid de flechas** (9 direcciones): ↖ ↑ ↗ ← ✕ → ↙ ↓ ↘ → asigna `dir` a la zona
- **Controles globales:**
  - "Mover Todas" con paso configurable (↑↓←→)
  - "Redimensionar Todas" (ancho, alto, scale %)
  - Presets: 100×24, 120×26, 130×28, 150×30, 180×32
- Mismo panel lateral (props, lista, export)
- Auto-save a localStorage

## Datos de zonas
El JSON tiene esta estructura:
```typescript
// Desktop (sin dir)
type ZoneDesktop = { label: string; x: number; y: number; w: number; h: number };

// Mobile (con dir)
type ZoneMobile = { label: string; x: number; y: number; w: number; h: number; dir: string };

// Data structure
type ZonesData = {
  desktop: { posterior: ZoneDesktop[]; anterior: ZoneDesktop[]; postMusculatura: ZoneDesktop[]; antMusculatura: ZoneDesktop[] };
  mobile: { posterior: ZoneMobile[]; anterior: ZoneMobile[]; postMusculatura: ZoneMobile[]; antMusculatura: ZoneMobile[] };
};
```

## Imágenes
```
VIEWS = {
  posterior:       "/miembro-superior/img/posterior.png",
  anterior:        "/miembro-superior/img/anterior.png",
  postMusculatura: "/miembro-superior/img/posterior_musculatura.png",
  antMusculatura:  "/miembro-superior/img/anterior_musculatura.png"
}
```

## Dónde poner los editores
Crear en `src/app/miembro-superior/editor/page.tsx` — una página con tabs para cambiar entre Editor Desktop y Editor Mobile.

## Importante
- Los editores leen/zones-simple.json para datos iniciales
- Auto-save a localStorage para persistencia entre sesiones
- Botón "Guardar JSON" descarga archivo .json
- Botón "Cargar JSON" permite subir un archivo .json
- El editor mobile puede importar zonas del editor desktop (o del JSON desktop guardado)
