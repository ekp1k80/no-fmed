# 🏗️ fmed-1ro — Notas Técnicas

Repo: `C:\home\federico\.openclaw\workspace\fmed-1ro\`
Stack: Next.js App Router + marked.js + styled-jsx

## Cómo funciona el MD Viewer

### Rutas

**Catch-all route**: `doc/[...slug]/page.tsx`
- Mapea `/doc/anato/cintura-pectoral/huesos/Escapula` → `public/md/anato/cintura-pectoral/huesos/Escapula.md`
- Si no hay archivo, muestra sidebar con "Seleccioná un archivo"

### Componentes

| Componente | Función |
|---|---|
| `DocShell` | Sidebar colapsable con árbol de archivos MD |
| `DocRenderer` | MD → HTML (marked.js) + estilos dark + cross-links `[[Link]]` |
| `img` local | `<img src="imgs/foo.png">` → resuelve `public/md/imgs/` automáticamente |

### Cómo agregar nueva sección

1. Carpeta de markdowns en `public/md/tu-seccion/`
2. Card en `src/app/page.tsx`:
   ```tsx
   <Link href="/doc/histo/TuSeccion/00_Indice">
     <div className="...">Sección</div>
   </Link>
   ```
3. Listo — el árbol se auto-descubre con `buildDocTree()`

### Convención de nombres
- `NN_Nombre.md` por orden (ej: `01_Musculo_Esqueletico.md`)
- `00_Indice.md` = índice de la sección
- Imágenes en `public/md/imgs/`

## 📋 Quizzes

- Data: `src/lib/quizzes-data.json`
- Page: `src/app/quiz/`
- JSONs de preguntas individuales en `src/app/quiz/preguntas/`
- Formato: `{ question, options: [{text, isCorrect}], rationale, hint }`

## 🦴 Miembro Superior Labeling

- Page: `src/app/miembro-superior/page.tsx`
- Editor de zonas: `src/app/miembro-superior/editor/`
- Zonas de drop sobre imágenes anatómicas

## Reglas importantes

1. **NO tocar lo que funciona** — si Anatomía/Histo anda, no romperlo
2. **Next.js es el camino** — no estáticos, páginas dinámicas
3. **Revertir rápido** cuando Fede dice basta
4. **Fede corre el servidor** — `npx next start -p 3000` desde su máquina, **no iniciar yo**
