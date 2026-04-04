const fs = require('fs');

const raw = fs.readFileSync('public/md/anato-cintura-pectoral/Deltoides.md', 'utf8');

// Current preprocessMd from page.tsx
function preprocessMd(md) {
  return md
    .replace(/!\[\[imgs\/([^\]|]+?)(?:\|[^\]]+)?\]\]/g, '<img src="/md/anato-cintura-pectoral/imgs/$1" />')
    .replace(/!\[([^\]]*)\]\((imgs\/[^)]+)\)/g, '<img src="/md/anato-cintura-pectoral/$2" />')
    .replace(/\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
      const slug = id.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      const display = label || id;
      return `<span class="md-link" data-id="${id.trim()}" data-slug="${slug}">${display}</span>`;
    });
}

const processed = preprocessMd(raw);
// Show just the Images section
const imgStart = processed.indexOf('## Imágenes');
const anatStart = processed.indexOf('## Anatomía');
const imgSection = processed.substring(imgStart, anatStart > 0 ? anatStart : imgStart + 500);
console.log('=== IMAGES SECTION ===');
console.log(imgSection);
console.log('\n=== RAW IMAGE LINE ===');
const line = raw.split('\n').find(l => l.includes('imgs/musculos/Deltoides_anterior'));
console.log('Input:', line);
console.log('Output:', processed.split('\n').find(l => l.includes('img src') && l.includes('Deltoides_anterior')));
