const FILES = [
  { id: "Deltoides", label: "Deltoides" },
  { id: "Plexo braquial", label: "Plexo Braquial" },
  { id: "Arteria_axilar", label: "Arteria Axilar" },
  { id: "Nervio axilar", label: "Axilar" },
  { id: "Serrato_anterior", label: "Serrato Anterior" },
];

const SECTION_TO_PATH = {
  "Músculos": "musculos", "Nervios": "nervios", "Arterias": "arterias"
};
function getFileUrl(id, section) {
  const path = SECTION_TO_PATH[section];
  return `/anato-cintura-pectoral/${path}/${id}`;
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

// Test wiki-links
const tests = [
  '[[Deltoides]]',
  '[[Plexo braquial]]',
  '[[Arteria_axilar]]',
  '[[Arteria axilar]]',
  '[[Serrato anterior]]',
  '[[Nervio axilar]]',
];

tests.forEach(name => {
  const searchNorm = norm(name.slice(2,-2));
  const found = FILES.find(f => norm(f.id) === searchNorm || norm(f.label) === searchNorm);
  console.log(`${name} → ${found ? getFileUrl(found.id, "Músculos") : "NOT MATCHED"}`);
});
