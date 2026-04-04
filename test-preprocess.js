// Test script for preprocessMd function
const fs = require('fs');
const path = require('path');

const FILES = [
  { id: "Deltoides", label: "Deltoides", section: "Músculos" },
  { id: "Glenohumeral", label: "Glenohumeral", section: "Articulaciones" },
  { id: "Esternoclavicular", label: "Esternoclavicular", section: "Articulaciones" },
  { id: "Acromioclavicular", label: "Acromioclavicular", section: "Articulaciones" },
  { id: "Arteria_axilar", label: "Arteria Axilar", section: "Arterias" },
  { id: "Plexo_braquial", label: "Plexo Braquial", section: "Nervios" },
  { id: "Escapula", label: "Escápula", section: "Huesos" },
  { id: "Nervio_axilar", label: "Nervio Axilar", section: "Nervios" },
  { id: "Arteria_subclavia", label: "Arteria Subclavia", section: "Arterias" },
];

const FILE_IDS = new Set(FILES.map((f) => f.id));

function getFileUrl(id, section) {
  const SECTION_TO_PATH = {
    "Huesos": "huesos",
    "Articulaciones": "articulaciones",
    "Músculos": "musculos",
    "Arterias": "arterias",
    "Nervios": "nervios",
  };
  const p = SECTION_TO_PATH[section];
  return p ? `/anato-cintura-pectoral/${p}/${id}` : `/anato-cintura-pectoral/huesos/${id}`;
}

function preprocessMd(md) {
  let clean = md.replace(/^---[\s\S]*?---\n/, "");
  // Handle wiki-link images: ![[imgs/path]] or ![[imgs/path|alt]]
  clean = clean.replace(/!\[\[(imgs\/[^|\]]+?)(?:\|[^\]]+)?\]\]/g,
    '<img src="/md/anato-cintura-pectoral/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  // Handle standard markdown images: ![alt](imgs/path)
  clean = clean.replace(/!\[([^\]]*)\]\((imgs\/[^)]+)\)/g,
    '<img src="/md/anato-cintura-pectoral/$2" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  // Handle internal wiki-links: [[Page Name]]
  clean = clean.replace(/\[\[([^\]]+)\]\]/g, (match, name) => {
    const found = FILES.find((f) => {
      const fileId = f.id.toLowerCase().replace(/_/g, ' ');
      const searchName = name.toLowerCase().replace(/_/g, ' ');
      return fileId === searchName || f.label.toLowerCase() === searchName;
    });
    if (found) return `<a href="${getFileUrl(found.id, found.section)}" class="internal-link">${name}</a>`;
    return match;
  });
  return clean;
}

// === TESTS ===
let passed = 0;
let failed = 0;

function test(name, input, assertions) {
  const result = preprocessMd(input);
  let ok = true;
  for (const { check, desc } of assertions) {
    const matches = typeof check === 'string'
      ? result.includes(check)
      : check(result);
    if (!matches) {
      console.error(`FAIL: ${name} — ${desc}`);
      console.error(`  Expected to find: ${typeof check === 'string' ? check : check.toString()}`);
      console.error(`  Result: ${result.substring(0, 300)}`);
      ok = false;
    }
  }
  if (ok) {
    console.log(`PASS: ${name}`);
    passed++;
  } else {
    failed++;
  }
}

// Test 1: Markdown image ![alt](imgs/path)
test('Markdown image ![alt](imgs/path)',
  '![Vista anterior](imgs/musculos/Deltoides_anterior.png)',
  [{ check: '/md/anato-cintura-pectoral/imgs/musculos/Deltoides_anterior.png', desc: 'convierte markdown image a img tag' }]
);

// Test 2: Wiki-link image ![[imgs/path]]
test('Wiki-link image ![[imgs/path]]',
  '![[imgs/musculos/Deltoides_anterior.png]]',
  [{ check: '/md/anato-cintura-pectoral/imgs/musculos/Deltoides_anterior.png', desc: 'convierte wiki-link image a img tag' }]
);

// Test 3: Wiki-link para archivo existente
test('Wiki-link [[Deltoides]] existente',
  'El [[Deltoides]] es un músculo',
  [{ check: 'href="/anato-cintura-pectoral/musculos/Deltoides"', desc: 'convierte a link interno' }]
);

// Test 4: Wiki-link para archivo inexistente (no debe tocar)
test('Wiki-link [[texto inexistente]] no debe cambiar',
  'El [[Nervio_facual]] no existe',
  [{ check: '[[Nervio_facual]]', desc: 'deja el link sin modificar si no existe' }]
);

// Test 5: Archivo real Deltoides.md
const deltoidesPath = path.join(__dirname, 'public', 'md', 'anato-cintura-pectoral', 'Deltoides.md');
if (fs.existsSync(deltoidesPath)) {
  const content = fs.readFileSync(deltoidesPath, 'utf8');
  const processed = preprocessMd(content);
  test('Deltoides.md — imagenes markdown se transforman',
    content,
    [
      { check: '/md/anato-cintura-pectoral/imgs/musculos/Deltoides_anterior.png', desc: 'Deltoides_anterior.png presente' },
      { check: '/md/anato-cintura-pectoral/imgs/musculos/Deltoides_lateral.png', desc: 'Deltoides_lateral.png presente' },
      { check: (r) => !r.includes('imgs/Deltoides/'), desc: 'NO debe tener imgs/Deltoides/' }
    ]
  );
} else {
  console.error('SKIP: Deltoides.md no encontrado');
}

// Test 6: Archivo real Glenohumeral.md
const glenopath = path.join(__dirname, 'public', 'md', 'anato-cintura-pectoral', 'Glenohumeral.md');
if (fs.existsSync(glenopath)) {
  const content = fs.readFileSync(glenopath, 'utf8');
  test('Glenohumeral.md — no debe tener imgs/GlenoHumeral/',
    content,
    [{ check: (r) => !r.includes('imgs/GlenoHumeral/'), desc: 'GlenoHumeral folder no debe aparecer' }]
  );
}

// Test 7: Verificar que todos los .md de musculos tengan paths válidos
const musculosDir = path.join(__dirname, 'public', 'md', 'anato-cintura-pectoral');
fs.readdirSync(musculosDir)
  .filter(f => f.endsWith('.md'))
  .forEach(file => {
    const content = fs.readFileSync(path.join(musculosDir, file), 'utf8');
    // Extraer todos los paths de imgs/
    const imgMatches = [...content.matchAll(/!\[.*?\]\((imgs\/[^)]+)\)/g)].map(m => m[1]);
    const wikiImgMatches = [...content.matchAll(/!\[\[(imgs\/[^|\]]+?)(?:\|[^\]]+)?\]\]/g)].map(m => m[1]);
    const allPaths = [...imgMatches, ...wikiImgMatches];
    
    allPaths.forEach(imgPath => {
      // Quitar el prefijo "imgs/"
      const relativePath = imgPath.replace(/^imgs\//, '');
      const parts = relativePath.split('/');
      const folder = parts[0];
      
      // Carpetas válidas
      const validFolders = ['musculos', 'arterias', 'articulaciones', 'huesos', 'nervios', 'espacios', 'fascias', 'otros'];
      if (!validFolders.includes(folder)) {
        console.error(`FAIL: ${file} — carpeta inválida en path: ${imgPath}`);
        failed++;
      } else {
        // Verificar que el archivo exista
        const fullPath = path.join(__dirname, 'public', 'md', 'anato-cintura-pectoral', 'imgs', relativePath);
        if (!fs.existsSync(fullPath)) {
          console.error(`FAIL: ${file} — imagen no existe: ${imgPath}`);
          failed++;
        }
      }
    });
  });

console.log(`\n=== RESULTS: ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
