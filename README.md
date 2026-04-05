# 🧠 FMED 1ro — Notas & Quizzes de Medicina

Repositorio con documentación y cuestionarios interactivos para primer año de medicina.

## Stack
- **Next.js** (App Router)
- **marked.js** — renderizado de Markdown
- **styled-jsx** — estilos
- Tailwind como CDN (para componentes puntuales)

## Estructura del Proyecto

```
src/
  app/
    page.tsx                  ← Home (cards estáticas)
    doc/[...slug]/page.tsx    ← MD viewer genérico
    quiz/page.tsx             ← Quiz de Anatomía
    miembro-superior/page.tsx ← Labeling (Miembro Superior)
    globals.css               ← Estilos globales
  components/
    DocShell.tsx              ← Sidebar con árbol de archivos
    DocRenderer.tsx           ← Markdown → HTML + navegación entre docs
    DocSidebar.tsx            ← Sidebar individual (árbol)
  lib/
    doc-tree.ts               ← Construye árbol de archivos MD
    doc-parsers.ts            ← Parsers de metadata MD
    quizzes-data.json         ← Preguntas de quizzes
public/
  md/
    histo/                    ← Markdown de Histología
    imgs/                     ← Imágenes compartidas
    anato/cintura-pectoral/  ← Markdown de Anatomía (107+ archivos)
```

## 📄 MD Viewer (DocViewer)

Sistema genérico que lee archivos `.md` de `public/md/` y los renderiza como documentación navegable.

### Cómo funciona

1. **Catch-all route**: `doc/[...slug]/page.tsx` captura cualquier ruta bajo `/doc/*`
2. **Build tree**: `buildDocTree()` escanea `public/md/` recursivamente y construye un árbol de directorios
3. **Lee archivo**: Concatena el slug en una ruta de archivo real
4. **Renderiza**: `DocRenderer` convierte MD → HTML con marked.js + estilos internos
5. **Sidebar**: `DocShell` muestra el árbol como sidebar colapsable con navegación interna

### Routing

```
URL: /doc/anato/cintura-pectoral/huesos/Escapula
File: public/md/anato/cintura-pectoral/huesos/Escapula.md

URL: /doc/histo/Tejido_muscular/01_Musculo_Esqueletico
File: public/md/histo/Tejido_muscular/01_Musculo_Esqueletico.md
```

### DocRenderer Features

- **Markdown básico**: heading, negritas, lists, links, imágenes
- **Imagen local**: `<img src="imgs/archivo.png">` resuelve automáticamente a `public/md/imgs/`
- **Cross-links**: `[[Enlace]]` o `[[archivo|Texto]]` para navegar entre documentos
- **Navegación**: Links `[texto](/doc/histo/route)` entre secciones
- **Video**: `<video src="imgs/video.mp4">` embebido
- **Estilos**: inline dark theme (`#121220`), tipografía clara, imágenes responsive

### Cómo agregar nueva sección de documentos

1. Crear carpeta en `public/md/` con archivos `.md`
2. Agregar card en `src/app/page.tsx` con Link a `/doc/tu-seccion/Indice`:
   ```tsx
   <Link href="/doc/histo/Tu_Seccion/00_Indice">
     <div className="...">
       <h2>🔬 Tu Sección</h2>
     </div>
   </Link>
   ```
3. Los archivos se descubren automáticamente — no hay que registrarlos

## 📋 Quizzes

Sistema de cuestionarios por tema y parte.

### Estructura
- **Datos**: `src/lib/quizzes-data.json`
- **Page**: `src/app/quiz/page.tsx`
- **Formato**: `{ id, nombre, preguntas }` con `{ question, options: [{text, isCorrect}], rationale, hint }`

### Cómo agregar preguntas
1. Crear JSON: `preguntas_tema_p1.json`
2. Integrar en `quizzes-data.json`:
   ```json
   {
     "nombre-seccion": {
       "titulo": "Nombre",
       "descripcion": "desc",
       "partes": [
         { "id": 1, "nombre": "Parte 1", "preguntas": 50 }
       ]
     }
   }
   ```
3. Preguntas van a `src/app/quiz/preguntas/*.json`

## 🦴 Labeling (Miembro Superior)

Ejercicio interactivo de labeling anatómico.

- **Page**: `src/app/miembro-superior/page.tsx`
- **Editor**: `src/app/miembro-superior/editor/` (crea/modifica zonas de drop)
- Zonas de drop sobre imágenes anatómicas

## 🚀 Dev

```bash
cd fmed-1ro
npm run dev          # Desarrollo localhost:3000
npx next start -p 3000  # Producción
```

---

> Fuente Anatomía: Ruvier-Anatomía Humana
> Fuente Histología: Brusco & Belingeri (2da ed.)
