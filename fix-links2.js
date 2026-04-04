const fs = require('fs');
const path = require('path');
const base = 'C:/home/federico/.openclaw/workspace/fmed-1ro/src/app/anato-cintura-pectoral';
const cats = ['huesos','articulaciones','arterias','venas','nervios','fascias','espacios','musculos'];

const oldLine = "return path ? `/${path}/${id}` : `/anato-cintura-pectoral/${id}`;";
const newLine = "return path ? `/anato-cintura-pectoral/${path}/${id}` : `/anato-cintura-pectoral/huesos/${id}`;";

for (const cat of cats) {
  const file = path.join(base, cat + '/[id]/page.tsx');
  if (!fs.existsSync(file)) { console.log('MISS:', file); continue; }
  let c = fs.readFileSync(file, 'utf8');
  if (c.includes(oldLine)) {
    c = c.replace(oldLine, newLine);
    fs.writeFileSync(file, c, 'utf8');
    console.log('FIXED:', file);
  } else {
    console.log('SKIP (not found):', file);
    // Show what's actually there
    const lines = c.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('return path')) console.log('  Actual line ' + i + ':', lines[i].trim());
    }
  }
}
console.log('Done');
