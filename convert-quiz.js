// Convertir formato tegumento (PowerShell hashtable string) a formato estándar del quiz
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

function parseOption(str) {
  if (typeof str !== 'string') return str;
  // Parse "@{text=...; isCorrect=True; rationale=...}"
  const cleaned = str.replace(/^@\{/, '').replace(/\}$/, '');
  let text = '', isCorrect = false, rationale = '';
  
  // Split by semicolon but handle the format properly
  const regex = /(?:^|;\s*)(text|isCorrect|rationale)=/g;
  let match;
  let lastIndex = 0;
  const keys = [];
  
  while ((match = regex.exec(cleaned)) !== null) {
    keys.push({ key: match[1], start: match.index + match[0].length - match[0].length });
  }
  
  // Simpler approach: split by "; " and parse each part
  const parts = cleaned.split('; ');
  for (const part of parts) {
    if (part.startsWith('text=')) {
      text = part.substring(5).trim();
    } else if (part.startsWith('isCorrect=')) {
      isCorrect = part.substring(10).trim() === 'True';
    } else if (part.startsWith('rationale=')) {
      rationale = part.substring(10).trim();
    }
  }
  
  return { text, isCorrect, rationale };
}

function convertFile(filepath) {
  const raw = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  let questions;
  
  if (Array.isArray(raw)) {
    questions = raw;
  } else if (raw.value && Array.isArray(raw.value)) {
    questions = raw.value;
  } else {
    return false;
  }
  
  const converted = questions.map(q => ({
    question: q.question,
    options: q.options.map(opt => parseOption(opt)),
    hint: q.hint || ''
  }));
  
  // Write as { value: [...] } format
  fs.writeFileSync(filepath, JSON.stringify({ value: converted }, null, 2));
  return true;
}

const files = fs.readdirSync(publicDir)
  .filter(f => f.startsWith('preguntas_tegumento_') && f.endsWith('.json'));

let converted = 0;
for (const file of files) {
  const filepath = path.join(publicDir, file);
  try {
    if (convertFile(filepath)) {
      console.log(`✓ ${file}`);
      converted++;
    } else {
      console.log(`✗ ${file} - formato no reconocido`);
    }
  } catch (err) {
    console.log(`✗ ${file} - ${err.message}`);
  }
}

console.log(`\nConvertidos: ${converted}/${files.length}`);
