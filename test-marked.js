const fs = require('fs');
const { marked } = require('marked');

const md = fs.readFileSync('public/md/anato-cintura-pectoral/Deltoides.md', 'utf8');
// Solo la parte de imágenes
const lines = md.split('\n');
let imgSection = [];
let inImgSection = false;
for (const line of lines) {
  if (line.includes('Imágenes de Referencia')) inImgSection = true;
  if (inImgSection && line.startsWith('---')) break;
  if (inImgSection) imgSection.push(line);
}

const imgMd = imgSection.join('\n');
console.log('=== INPUT ===');
console.log(imgMd);
console.log('\n=== PROCESSED ===');

function preprocessMd(md) {
  let clean = md.replace(/^---[\s\S]*?---\n/, '');
  clean = clean.replace(/!\[\[(imgs\/[^|\]]+?)(?:\|[^\]]+)?\]\]/g,
    '<img src="/md/anato-cintura-pectoral/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  clean = clean.replace(/!\[([^\]]*)\]\((imgs\/[^)]+)\)/g,
    '<img src="/md/anato-cintura-pectoral/$2" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  return clean;
}

const processed = preprocessMd(imgMd);
const html = marked.parse(processed);
console.log(html);
