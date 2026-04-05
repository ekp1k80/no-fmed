const fs = require('fs');
const path = require('path');

const base = 'C:/home/federico/.openclaw/workspace/fmed-1ro/src/app/anato-cintura-pectoral';
const categories = ['huesos', 'articulaciones', 'arterias', 'venas', 'nervios', 'fascias', 'espacios'];

// Read existing page from musculos/[id]/page.tsx if it exists
const srcPath = path.join(base, 'musculos/[id]/page.tsx');
let pageContent;

if (fs.existsSync(srcPath)) {
    pageContent = fs.readFileSync(srcPath, 'utf8');
    console.log('Read from:', srcPath);
} else {
    console.log('ERROR: Source file not found:', srcPath);
    process.exit(1);
}

for (const cat of categories) {
    const dir = path.join(base, cat + '/[id]');
    const file = path.join(dir, 'page.tsx');
    try {
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(file, pageContent, 'utf8');
        console.log('OK:', file);
    } catch (e) {
        console.log('ERROR:', file, e.message);
    }
}

console.log('Done');
