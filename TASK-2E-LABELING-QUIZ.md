# Tarea para 2E: Componente Labeling Quiz (Drag & Drop + Dropdown)

## Contexto
Fede tiene un quiz de labeling para la escápula (cintura pectoral) como HTML estático en `fmed-1ro/miembro-superior/index.html`. Lo quiere recrear como componentes React nativos en Next.js para poder reusar.

## Archivos existentes
- **Imágenes:** `fmed-next/public/miembro-superior/img/` (4 PNGs: posterior, anterior, posterior_musculatura, anterior_musculatura)
- **Zonas:** `fmed-next/public/miembro-superior/zones-simple.json` — JSON con todas las zonas (desktop + mobile, 4 vistas)
- **Página:** `fmed-next/src/app/miembro-superior/page.tsx` (existente, hay que reemplazar)

## Vista previa
El HTML original está en `fmed-1ro/miembro-superior/index.html` (727 líneas). Usarlo como referencia visual y funcional.

## Componentes a crear

### 1. `src/components/labeling-quiz/LabelingQuiz.tsx` (componente principal)
- Props: `zones` (objeto con vistas), `images` (objeto con rutas de imágenes), `title` (string)
- Gestiona estado global: vista seleccionada, modo, puntuación, respuestas fill
- Renderiza tabs de vistas, selector de modo, y el componente de quiz activo

### 2. `src/components/labeling-quiz/DragDropMode.tsx`
- Canvas con imagen de fondo + zonas superpuestas (position absolute)
- Word bank lateral con labels shuffled
- Drag & drop: al soltar correcto → verde, incorrecto → shake animation
- Zonas tienen flecha (clase `dir`) que determina posición de la caja respecto al punto

### 3. `src/components/labeling-quiz/DropdownMode.tsx`
- Zonas como labels clickeables que abren dropdown
- Input de búsqueda con fuzzy match
- **Fácil:** subsequence match (2+ chars, letras en orden)
- **Difícil:** fuzzyScore >= 0.7 (requiere 70% del nombre)

### 4. `src/components/labeling-quiz/MobileQuiz.tsx`
- Vista secuencial (1 zona a la vez, random order)
- View picker con flechas para cambiar de vista (Post. Hueso, Ant. Hueso, etc.)
- Input de búsqueda abajo, feedback visual (✓ verde / ✗ rojo)
- Skip button, score tracking, pantalla de completado

## Lógica compartida (puede ir en un hook `useLabelingQuiz.ts`)
- `fuzzyMatch(query, target)` — subsequence match
- `fuzzyScore(query, target)` — Levenshtein similarity 0-1
- `getTargets(viewKey, zones)` — retorna zonas de una vista
- `shuffle(array)` — Fisher-Yates

## Zonas (dirección de flecha)
Las zonas tienen `dir` que controla dónde se renderiza la caja:
- `r` (right): caja a la izquierda, flecha apunta derecha
- `l` (left): caja a la derecha, flecha apunta izquierda
- `u` (up): caja abajo, flecha apunta arriba
- `d` (down): caja arriba, flecha apunta abajo
- `tr`, `tl`, `br`, `bl`: esquinas
- `none` o null: sin flecha

## Datos de imágenes
```typescript
const VIEW_META = {
  posterior:       { img: "/miembro-superior/img/posterior.png",             title: "Post. Hueso" },
  anterior:        { img: "/miembro-superior/img/anterior.png",              title: "Ant. Hueso" },
  postMusculatura: { img: "/miembro-superior/img/posterior_musculatura.png", title: "Post. Músculos" },
  antMusculatura:  { img: "/miembro-superior/img/anterior_musculatura.png",  title: "Ant. Músculos" },
};
```

## Estilos
- Fondo oscuro `#121220`, texto claro `#e0e0e0`
- Púrpura como accent `#7b68ee`
- Verde correcto `#4ade80`, rojo incorrecto `#ef4444`
- Zonas con borde dashed púrpura, al hover se iluminan
- Responsive: mobile < 800px usa MobileQuiz automáticamente

## Integración
Reemplazar el contenido de `src/app/miembro-superior/page.tsx` para usar el nuevo componente:
```tsx
import zonesData from "@/public/miembro-superior/zones-simple.json";
import { LabelingQuiz } from "@/components/labeling-quiz/LabelingQuiz";

export default function MiembroSuperior() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#121220]">
      <header>...</header>
      <LabelingQuiz 
        zones={zonesData}
        title="🦴 Cintura Pectoral"
      />
    </div>
  );
}
```

## Verificar que funciona
- Desktop: drag & drop, dropdown fácil, dropdown difícil
- Mobile: quiz secuencial, view picker, skip
- Score counting
- Responsive: < 800px cambia a mobile automáticamente
