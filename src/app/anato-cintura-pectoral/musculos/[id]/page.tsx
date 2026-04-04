"use client";

import { useState, useEffect } from "react";
import { marked } from "marked";
import Link from "next/link";
import { useParams } from "next/navigation";

const FILES: { id: string; label: string; section: string }[] = [
  { id: "00_Indice", label: "Índice", section: "General" },
  { id: "Escapula", label: "Escápula", section: "Huesos" },
  { id: "Clavicula", label: "Clavícula", section: "Huesos" },
  { id: "Humero", label: "Húmero", section: "Huesos" },
  { id: "Acromioclavicular", label: "Acromioclavicular", section: "Articulaciones" },
  { id: "Esternoclavicular", label: "Esternoclavicular", section: "Articulaciones" },
  { id: "Glenohumeral", label: "Glenohumeral", section: "Articulaciones" },
  { id: "Deltoides", label: "Deltoides", section: "Músculos" },
  { id: "Pectoral_Mayor", label: "Pectoral Mayor", section: "Músculos" },
  { id: "Pectoral_Menor", label: "Pectoral Menor", section: "Músculos" },
  { id: "Trapecio", label: "Trapecio", section: "Músculos" },
  { id: "Manguito_Rotador_Anterior", label: "Manguito Rotador Anterior", section: "Músculos" },
  { id: "Manguito_Rotador_Posterior", label: "Manguito Rotador Posterior", section: "Músculos" },
  { id: "Supraespinoso", label: "Supraespinoso", section: "Músculos" },
  { id: "Infraespinoso", label: "Infraespinoso", section: "Músculos" },
  { id: "Subescapular", label: "Subescapular", section: "Músculos" },
  { id: "Redondo_Mayor", label: "Redondo Mayor", section: "Músculos" },
  { id: "Redondo_Menor", label: "Redondo Menor", section: "Músculos" },
  { id: "Dorsal_Ancho", label: "Dorsal Ancho", section: "Músculos" },
  { id: "Serrato_anterior", label: "Serrato Anterior", section: "Músculos" },
  { id: "Elevador_de_la_escapula", label: "Elevador de la Escápula", section: "Músculos" },
  { id: "Romboides_Mayor", label: "Romboides Mayor", section: "Músculos" },
  { id: "Romboides_Menor", label: "Romboides Menor", section: "Músculos" },
  { id: "Biceps_braquial", label: "Bíceps Braquial", section: "Músculos" },
  { id: "Braquial", label: "Braquial", section: "Músculos" },
  { id: "Triceps_braquial", label: "Tríceps Braquial", section: "Músculos" },
  { id: "Anconeo", label: "Anconeo", section: "Músculos" },
  { id: "Coracobraquial", label: "Coracobraquial", section: "Músculos" },
  { id: "Subclavio", label: "Subclavio", section: "Músculos" },
  { id: "Omohioideo", label: "Omohioideo", section: "Músculos" },
  { id: "Arteria_subclavia", label: "Arteria Subclavia", section: "Arterias" },
  { id: "Vertebral", label: "Vertebral", section: "Arterias" },
  { id: "Toracica_interna", label: "Torácica Interna", section: "Arterias" },
  { id: "Cervical_profunda", label: "Cervical Profunda", section: "Arterias" },
  { id: "Supraescapular", label: "Supraescapular", section: "Arterias" },
  { id: "Dorsal_de_la_escapula", label: "Dorsal de la Escápula", section: "Arterias" },
  { id: "Arteria_axilar", label: "Arteria Axilar", section: "Arterias" },
  { id: "Toracica_superior", label: "Torácica Superior", section: "Arterias" },
  { id: "Toracoacromial", label: "Toracoacromial", section: "Arterias" },
  { id: "Toracica_lateral", label: "Torácica Lateral", section: "Arterias" },
  { id: "Subescapular", label: "Subescapular (arteria)", section: "Arterias" },
  { id: "Circunfleja_humeral_posterior", label: "Circunfleja Humeral Posterior", section: "Arterias" },
  { id: "Circunfleja_humeral_anterior", label: "Circunfleja Humeral Anterior", section: "Arterias" },
  { id: "Arteria_braquial", label: "Arteria Braquial", section: "Arterias" },
  { id: "Braquial_profunda", label: "Braquial Profunda", section: "Arterias" },
  { id: "Colateral_cubital_superior", label: "Colateral Cubital Superior", section: "Arterias" },
  { id: "Colateral_cubital_inferior", label: "Colateral Cubital Inferior", section: "Arterias" },
  { id: "Venas_subclavia", label: "Venas Subclavia", section: "Venas" },
  { id: "Vena_yugular_externa", label: "Vena Yugular Externa", section: "Venas" },
  { id: "Vena_vertebral", label: "Vena Vertebral", section: "Venas" },
  { id: "Vena_toracica_interna", label: "Vena Torácica Interna", section: "Venas" },
  { id: "Vena_supraescapular", label: "Vena Supraescapular", section: "Venas" },
  { id: "Vena_cervical_profunda", label: "Vena Cervical Profunda", section: "Venas" },
  { id: "Venas_axilares", label: "Venas Axilares", section: "Venas" },
  { id: "Vena_basibraquial", label: "Vena Basibraquial", section: "Venas" },
  { id: "Plexo braquial", label: "Plexo Braquial", section: "Nervios" },
  { id: "Nervio pectoral lateral", label: "Pectoral Lateral", section: "Nervios" },
  { id: "Nervio pectoral medial", label: "Pectoral Medial", section: "Nervios" },
  { id: "Nervio subclavio", label: "Subclavio (nervio)", section: "Nervios" },
  { id: "Nervio cutaneo medial del brazo", label: "Cutáneo Medial del Brazo", section: "Nervios" },
  { id: "Nervio cutaneo medial del antebrazo", label: "Cutáneo Medial del Antebrazo", section: "Nervios" },
  { id: "Nervio dorsal de la escapula", label: "Dorsal de la Escápula", section: "Nervios" },
  { id: "Nervio supraescapular", label: "Supraescapular (nervio)", section: "Nervios" },
  { id: "Nervio toracico largo", label: "Torácico Largo", section: "Nervios" },
  { id: "Nervio subescapular superior", label: "Subescapular Superior", section: "Nervios" },
  { id: "Nervio subescapular inferior", label: "Subescapular Inferior", section: "Nervios" },
  { id: "Nervio toracodorsal", label: "Toracodorsal", section: "Nervios" },
  { id: "Nervio musculocutaneo", label: "Musculocutáneo", section: "Nervios" },
  { id: "Nervio mediano", label: "Mediano", section: "Nervios" },
  { id: "Nervio cubital", label: "Cubital", section: "Nervios" },
  { id: "Nervio axilar", label: "Axilar", section: "Nervios" },
  { id: "Nervio radial", label: "Radial", section: "Nervios" },
  { id: "Fascia_pectoral", label: "Fascia Pectoral", section: "Fascias" },
  { id: "Fascia_clavipectoral", label: "Fascia Clavipectoral", section: "Fascias" },
  { id: "Fascia_axilar", label: "Fascia Axilar", section: "Fascias" },
  { id: "Fascia_deltoides", label: "Fascia Deltoidea", section: "Fascias" },
  { id: "Fascia_supraespinoso", label: "Fascia Supraespinoso", section: "Fascias" },
  { id: "Fascia_infraespinoso", label: "Fascia Infraespinoso/Redondos", section: "Fascias" },
  { id: "Fascia_dorsal_ancho", label: "Fascia Dorsal Ancho", section: "Fascias" },
  { id: "Fascia_subescapular", label: "Fascia Subescapular", section: "Fascias" },
  { id: "Fascia_serrato_anterior", label: "Fascia Serrato Anterior", section: "Fascias" },
  { id: "Fascia_del_brazo", label: "Fascia del Brazo", section: "Fascias" },
  { id: "Fascia_del_antebrazo", label: "Fascia del Antebrazo", section: "Fascias" },
  { id: "Fosa axilar", label: "Fosa Axilar", section: "Espacios" },
  { id: "Triangulo_deltopectoral", label: "Triángulo Deltopectoral", section: "Espacios" },
  { id: "Espacio_cuadrangular", label: "Espacio Cuadrangular", section: "Espacios" },
  { id: "Espacio_triangular", label: "Espacio Triangular", section: "Espacios" },
  { id: "Linfaticos_axilares", label: "Linfáticos Axilares", section: "Espacios" },
  { id: "Region_mamaria", label: "Región Mamaria", section: "Espacios" },
];

const FILE_IDS = new Set(FILES.map((f) => f.id));
const SECTIONS = [...new Set(FILES.map((f) => f.section))];

const SECTION_TO_PATH: Record<string, string> = {
  "Huesos": "huesos",
  "Articulaciones": "articulaciones",
  "Músculos": "musculos",
  "Arterias": "arterias",
  "Venas": "venas",
  "Nervios": "nervios",
  "Fascias": "fascias",
  "Espacios": "espacios",
};

function getFileUrl(id: string, section: string): string {
  const path = SECTION_TO_PATH[section];
  return path ? `/anato-cintura-pectoral/${path}/${id}` : `/anato-cintura-pectoral/huesos/${id}`;
}

function preprocessMd(md: string): string {
  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  let clean = md.replace(/^---[\s\S]*?---\n/, "");
  
  // 1. Handle wiki-link images (wiki-link syntax): ![[imgs/...]] → <img>
  clean = clean.replace(/!\[\[(imgs\/[^|\]]+?)(?:\|[^\]]+)?\]\]/g,
    '<img src="/md/anato-cintura-pectoral/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  
  // 2. Handle standard markdown images: ![alt](imgs/...) → <img>
  clean = clean.replace(/!\[([^\]]*)\]\((imgs\/[^)]+)\)/g,
    '<img src="/md/anato-cintura-pectoral/$2" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  
  // 3. Handle internal wiki-links: [[Page Name]] → <a> (must be LAST so it doesn't capture already-processed img tags)
  clean = clean.replace(/\[\[([^\]]+)\]\]/g, (match, name) => {
    const searchNorm = norm(name);
    const found = FILES.find((f) => norm(f.id) === searchNorm || norm(f.label) === searchNorm);
    if (found) return `<a href="${getFileUrl(found.id, found.section)}" class="internal-link">${name}</a>`;
    return match;
  });
  
  return clean;
}

export default function AnatoPage() {
  const params = useParams();
  const active = (params?.id as string) || "00_Indice";
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch(`/md/anato-cintura-pectoral/${active}.md`)
      .then((r) => { if (!r.ok) throw new Error(); return r.text(); })
      .then((md) => {
        const processed = preprocessMd(md);
        let html = marked.parse(processed) as string;
        html = html.replace(/<table>/g, '<table style="width:100%;border-collapse:collapse;margin:1rem 0">');
        html = html.replace(/<th>/g, '<th style="border:1px solid #ddd;padding:8px;background:#1a1a2e;color:#fff;text-align:left">');
        html = html.replace(/<td>/g, '<td style="border:1px solid #ddd;padding:8px">');
        setContent(html);
      })
      .catch(() => setContent("<p>Error cargando archivo</p>"));
  }, [active]);

  const filtered = FILES.filter((f) => !search || f.label.toLowerCase().includes(search.toLowerCase()));
  const currentFile = FILES.find((f) => f.id === active);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#121220]">
      <header className="bg-blue-600 text-white px-3 py-2 flex items-center gap-3 flex-shrink-0">
        <button onClick={() => setSidebarOpen(true)} className="p-1.5 hover:bg-blue-700 rounded-lg lg:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-medium">🦴 Cintura Pectoral</h1>
          <p className="text-blue-200 text-xs">{currentFile?.label}</p>
        </div>
        <Link href="/" className="p-1.5 hover:bg-blue-700 rounded-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </Link>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 w-72 bg-[#1a1a2e] border-r border-[#2a2a4e] flex flex-col transition-transform duration-300 lg:translate-x-0 lg:relative lg:flex-shrink-0`}>
          <div className="p-3 border-b border-[#2a2a4e]">
            <input type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#121220] text-gray-200 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <nav className="flex-1 overflow-y-auto p-2">
            {SECTIONS.map((sec) => {
              const sectionFiles = filtered.filter((f) => f.section === sec);
              if (!sectionFiles.length) return null;
              return (
                <div key={sec} className="mb-3">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">{sec}</h3>
                  {sectionFiles.map((file) => (
                    <Link key={file.id} href={getFileUrl(file.id, file.section)}
                      onClick={() => setSidebarOpen(false)}
                      className={`block px-2 py-1.5 rounded text-sm transition-colors ${active === file.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-[#2a2a4e]"}`}>
                      {file.label}
                    </Link>
                  ))}
                </div>
              );
            })}
          </nav>
        </aside>

        {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="anato-content" dangerouslySetInnerHTML={{ __html: content }} />
        </main>
      </div>

      <style jsx global>{`
        .anato-content h1 { font-size:1.5rem; font-weight:500; color:#e2e8f0; border-bottom:1px solid #2a2a4e; padding-bottom:0.75rem; margin-bottom:1rem; word-wrap:break-word; }
        .anato-content h2 { font-size:1.25rem; font-weight:500; color:#cbd5e0; margin-top:2rem; margin-bottom:1rem; padding-bottom:0.5rem; border-bottom:1px solid #2a2a4e; word-wrap:break-word; }
        .anato-content h3 { font-size:1.125rem; font-weight:500; color:#a0aec0; margin-top:1.5rem; margin-bottom:0.75rem; word-wrap:break-word; }
        .anato-content p { color:#cbd5e0; margin-bottom:0.75rem; line-height:1.75; word-wrap:break-word; }
        .anato-content ul, .anato-content ol { color:#cbd5e0; margin-bottom:0.75rem; padding-left:1.5rem; }
        .anato-content li { margin-bottom:0.25rem; line-height:1.75; color:#cbd5e0; }
        .anato-content blockquote { border-left:4px solid #3182ce; padding:1rem; margin:1rem 0; background:rgba(49,130,206,0.1); border-radius:0 0.5rem 0.5rem 0; color:#a0aec0; font-style:italic; }
        .anato-content blockquote p { color:#a0aec0; margin-bottom:0; }
        .anato-content table { width:100%; border-collapse:collapse; margin:1.5rem 0; overflow-x:auto; display:block; }
        .anato-content th { background:#1a1a2e; color:#e2e8f0; padding:0.75rem; text-align:left; font-weight:600; border:1px solid #2a2a4e; }
        .anato-content td { color:#cbd5e0; padding:0.75rem; border:1px solid #2a2a4e; }
        .anato-content strong { color:#e2e8f0; font-weight:600; }
        .anato-content a { color:#63b3ed; text-decoration:none; cursor:pointer; }
        .anato-content a:hover { text-decoration:underline; }
        .anato-content img { max-width:100%; border-radius:0.5rem; margin:1rem 0; }
        .anato-content hr { border:none; border-top:1px solid #2a2a4e; margin:2rem 0; }
      `}</style>
    </div>
  );
}
