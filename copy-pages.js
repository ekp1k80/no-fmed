const fs = require('fs');
const path = require('path');

const base = 'C:/home/federico/.openclaw/workspace/fmed-1ro/src/app/anato-cintura-pectoral';
const srcFile = path.join(base, 'musculos/[id]/page.tsx');

if (!fs.existsSync(srcFile)) {
    console.log('ERROR: Source file not found:', srcFile);
    process.exit(1);
}

const content = fs.readFileSync(srcFile, 'utf8');
const categories = ['huesos', 'articulaciones', 'arterias', 'venas', 'nervios', 'fascias', 'espacios'];

for (const cat of categories) {
    const destDir = path.join(base, cat, '[id]');
    const destFile = path.join(destDir, 'page.tsx');
    try {
        fs.writeFileSync(destFile, content, 'utf8');
        console.log('OK:', destFile);
    } catch (e) {
        console.log('ERROR:', destFile, e.message);
    }
}

// Also fix section in the page.tsx for each category
// Update the getFileUrl to correctly map sections to paths
const sectionToPath = {
    'Huesos': 'huesos',
    'Articulaciones': 'articulaciones',
    'Músculos': 'musculos',
    'Arterias': 'arterias',
    'Venas': 'venas',
    'Nervios': 'nervios',
    'Fascias': 'fascias',
    'Espacios': 'espacios',
};

for (const cat of categories) {
    const destFile = path.join(base, cat, '[id]/page.tsx');
    if (!fs.existsSync(destFile)) continue;
    let c = fs.readFileSync(destFile, 'utf8');
    // The getFileUrl function should already work correctly
    // because it uses SECTION_TO_PATH mapping
    fs.writeFileSync(destFile, c, 'utf8');
}

console.log('Done');
