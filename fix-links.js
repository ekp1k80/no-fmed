const fs = require('fs');
const path = require('path');

const base = 'C:/home/federico/.openclaw/workspace/fmed-1ro/src/app/anato-cintura-pectoral';
const cats = ['huesos', 'articulaciones', 'arterias', 'venas', 'nervios', 'fascias', 'espacios'];

const newFn = `function getFileUrl(id, section) {
  const p = SECTION_TO_PATH[section];
  return p ? "/anato-cintura-pectoral/" + p + "/" + id : "/anato-cintura-pectoral/huesos/" + id;
}`;

for (const cat of cats) {
    const file = path.join(base, cat + '/[id]/page.tsx');
    if (!fs.existsSync(file)) { console.log('MISSING:', file); continue; }
    let c = fs.readFileSync(file, 'utf8');
    // Replace the old getFileUrl function
    c = c.replace(
        /function getFileUrl\(id, section\) \{\s*const p = SECTION_TO_PATH\[section\];\s*return p \? "\/" \+ p \+ "\/" \+ id : "\/huesos\/" \+ id;\s*\}/,
        newFn
    );
    fs.writeFileSync(file, c, 'utf8');
    console.log('Fixed:', file);
}
console.log('Done');
