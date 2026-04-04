"use client";

import { useState, useEffect, useCallback } from "react";
import { marked } from "marked";
import Link from "next/link";

const FILES = [
  // General
  { id: "00_Indice", label: "Índice", section: "General" },
  
  // Huesos
  { id: "Escapula", label: "Escápula", section: "Huesos" },
  { id: "Clavicula", label: "Clavícula", section: "Huesos" },
  { id: "Humero", label: "Húmero", section: "Huesos" },
  
  // Articulaciones
  { id: "Acromioclavicular", label: "Acromioclavicular", section: "Articulaciones" },
  { id: "Esternoclavicular", label: "Esternoclavicular", section: "Articulaciones" },
  { id: "Glenohumeral", label: "Glenohumeral", section: "Articulaciones" },
  
  // Músculos - Hombro
  { id: "Deltoides", label: "Deltoides", section: "Músculos" },
  { id: "Pectoral_Mayor", label: "Pectoral Mayor", section: "Músculos" },
  { id: "Pectoral_Menor", label: "Pectoral Menor", section: "Músculos" },
  { id: "Trapecio", label: "Trapecio", section: "Músculos" },
  { id: "Manguito_Rotador_Anterior", label: "Manguito Rotador Anterior", section: "Músculos" },
  { id: "Manguito_Rotador_Posterior", label: "Manguito Rotador Posterior", section: "Músculos" },
  
  // Músculos - Escapula
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
  
  // Músculos - Brazo
  { id: "Biceps_braquial", label: "Bíceps Braquial", section: "Músculos" },
  { id: "Braquial", label: "Braquial", section: "Músculos" },
  { id: "Triceps_braquial", label: "Tríceps Braquial", section: "Músculos" },
  { id: "Anconeo", label: "Anconeo", section: "Músculos" },
  { id: "Coracobraquial", label: "Coracobraquial", section: "Músculos" },
  { id: "Subclavio", label: "Subclavio", section: "Músculos" },
  { id: "Omohioideo", label: "Omohioideo", section: "Músculos" },
  
  // Arterias
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
  
  // Venas
  { id: "Venas_subclavia", label: "Venas Subclavia", section: "Venas" },
  { id: "Vena_yugular_externa", label: "Vena Yugular Externa", section: "Venas" },
  { id: "Vena_vertebral", label: "Vena Vertebral", section: "Venas" },
  { id: "Vena_Toracica_interna", label: "Vena Torácica Interna", section: "Venas" },
  { id: "Vena_supraescapular", label: "Vena Supraescapular", section: "Venas" },
  { id: "Vena_cervical_profunda", label: "Vena Cervical Profunda", section: "Venas" },
  { id: "Venas_axilares", label: "Venas Axilares", section: "Venas" },
  { id: "Vena_basibraquial", label: "Vena Basibraquial", section: "Venas" },
  
  // Nervios
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
  
  // Fascias
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
  
  // Espacios y otros
  { id: "Fosa axilar", label: "Fosa Axilar", section: "Espacios" },
  { id: "Triangulo_deltopectoral", label: "Triángulo Deltopectoral", section: "Espacios" },
  { id: "Espacio_cuadrangular", label: "Espacio Cuadrangular", section: "Espacios" },
  { id: "Espacio_triangular", label: "Espacio Triangular", section: "Espacios" },
  { id: "Linfaticos_axilares", label: "Linfáticos Axilares", section: "Espacios" },
  { id: "Region_mamaria", label: "Región Mamaria", section: "Espacios" },
];

const FILE_IDS = new Set(FILES.map((f) => f.id));

// Secciones únicas en orden
const SECTIONS = [...new Set(FILES.map((f) => f.section))];

function preprocessMd(md: string): string {
    let clean = md.replace(/^---[\s\S]*?---\n/, "");
    // Reemplazar ![[imgs/path]] o ![[imgs/path|400]] con img tag
    clean = clean.replace(/!\[\[(imgs\/[^\]|]+?)(?:\|[^\]]+)?\]\]/g, '<img src="/md/anato-cintura-pectoral/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
    // Reemplazar [[links]] con links internos
    clean = clean.replace(/\[\[([^\]]+)\]\]/g, (match, name) => {
      const found = FILES.find((f) => {
        const fileId = f.id.toLowerCase().replace(/_/g, ' ');
        const searchName = name.toLowerCase().replace(/_/g, ' ');
        return fileId === searchName || f.label.toLowerCase() === searchName;
      });
      if (found) {
        return `<a href="#" class="internal-link" data-id="${found.id}">${name}</a>`;
      }
      return match;
    });
    // Reemplazar ![[nombre]] sin imgs/ prefix
    clean = clean.replace(/!\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]/g, '<img src="/md/anato-cintura-pectoral/imgs/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
    return clean;
  }

export default function AnatoCinturaPectoral() {
  const [active, setActive] = useState("00_Indice");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const loadFile = useCallback((id: string) => {
    // Try both .md file formats (with and without path)
    const urls = [
      `/md/anato-cintura-pectoral/${id}.md`,
      `/md/anato-cintura-pectoral/${encodeURIComponent(id)}.md`
    ];
    
    const tryFetch = async (index: number): Promise<void> => {
      if (index >= urls.length) {
        console.error(`File not found: ${id}`);
        return;
      }
      try {
        const response = await fetch(urls[index]);
        if (!response.ok) {
          return tryFetch(index + 1);
        }
        const md = await response.text();
        const processed = preprocessMd(md);
        let html = marked.parse(processed) as string;
        // Estilos para tablas
        html = html.replace(/<table>/g, '<table style="width:100%;border-collapse:collapse;margin:1rem 0">');
        html = html.replace(/<th>/g, '<th style="border:1px solid #ddd;padding:8px;background:#1a1a2e;color:#fff;text-align:left">');
        html = html.replace(/<td>/g, '<td style="border:1px solid #ddd;padding:8px">');
        setContent(html);
      } catch (err) {
        console.error("Error loading file:", err);
      }
    };
    
    tryFetch(0);
    setActive(id);
    setSidebarOpen(false);
  }, []);

  useEffect(() => {
    loadFile("00_Indice");
  }, [loadFile]);

  // Manejar clicks en links internos
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("internal-link")) {
        e.preventDefault();
        const id = target.getAttribute("data-id");
        if (id && FILE_IDS.has(id)) {
          loadFile(id);
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [loadFile]);

  const filteredFiles = FILES.filter((f) => {
    const matchesSearch = !search || f.label.toLowerCase().includes(search.toLowerCase());
    const matchesSection = !selectedSection || f.section === selectedSection;
    return matchesSearch && matchesSection;
  });

  return (
    <div className="h-screen w-screen flex flex-col bg-[#121220]">
      {/* Header */}
      <header className="bg-blue-600 text-white px-3 py-2 flex items-center gap-3 flex-shrink-0">
        <Link href="/" className="flex items-center gap-1 hover:bg-blue-700 p-1.5 rounded-lg transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </Link>
        <h1 className="text-base font-medium">🦴 Cintura Pectoral — Anatomía</h1>
        <span className="text-xs opacity-70">Ruvier</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-auto p-1.5 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 w-72 bg-[#1a1a2e] border-r border-[#2a2a4e] flex flex-col transition-transform duration-300 lg:translate-x-0 lg:relative lg:flex-shrink-0`}>
          {/* Search */}
          <div className="p-3 border-b border-[#2a2a4e]">
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#121220] text-gray-200 px-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Section filter */}
          <div className="p-2 border-b border-[#2a2a4e] flex flex-wrap gap-1">
            <button
              onClick={() => setSelectedSection(null)}
              className={`px-2 py-0.5 rounded text-xs transition-colors ${!selectedSection ? "bg-blue-600 text-white" : "bg-[#2a2a4e] text-gray-400 hover:text-gray-200"}`}
            >
              Todos
            </button>
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSection(s === selectedSection ? null : s)}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${selectedSection === s ? "bg-blue-600 text-white" : "bg-[#2a2a4e] text-gray-400 hover:text-gray-200"}`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* File list */}
          <nav className="flex-1 overflow-y-auto p-2">
            {SECTIONS.filter(s => !selectedSection || s === selectedSection).map((section) => {
              const sectionFiles = filteredFiles.filter((f) => f.section === section);
              if (sectionFiles.length === 0) return null;
              return (
                <div key={section} className="mb-3">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                    {section}
                  </h3>
                  {sectionFiles.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => loadFile(file.id)}
                      className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
                        active === file.id
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-[#2a2a4e]"
                      }`}
                    >
                      {file.label}
                    </button>
                  ))}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div
            className="anato-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </main>
      </div>

      <style jsx global>{`
        .anato-content h1 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #e2e8f0;
          border-bottom: 1px solid #2a2a4e;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          word-wrap: break-word;
        }
        .anato-content h2 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #cbd5e0;
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #2a2a4e;
          word-wrap: break-word;
        }
        .anato-content h3 {
          font-size: 1.125rem;
          font-weight: 500;
          color: #a0aec0;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          word-wrap: break-word;
        }
        .anato-content p {
          color: #cbd5e0;
          margin-bottom: 0.75rem;
          line-height: 1.75;
          word-wrap: break-word;
        }
        .anato-content ul, .anato-content ol {
          color: #cbd5e0;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
        }
        .anato-content li {
          margin-bottom: 0.25rem;
          line-height: 1.75;
          color: #cbd5e0;
        }
        .anato-content blockquote {
          border-left: 4px solid #3182ce;
          padding: 1rem;
          margin: 1rem 0;
          background: rgba(49, 130, 206, 0.1);
          border-radius: 0 0.5rem 0.5rem 0;
          color: #a0aec0;
          font-style: italic;
        }
        .anato-content blockquote p {
          color: #a0aec0;
          margin-bottom: 0;
        }
        .anato-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          overflow-x: auto;
          display: block;
        }
        .anato-content th {
          background: #1a1a2e;
          color: #e2e8f0;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          border: 1px solid #2a2a4e;
        }
        .anato-content td {
          color: #cbd5e0;
          padding: 0.75rem;
          border: 1px solid #2a2a4e;
        }
        .anato-content strong {
          color: #e2e8f0;
          font-weight: 600;
        }
        .anato-content a {
          color: #63b3ed;
          text-decoration: none;
          cursor: pointer;
        }
        .anato-content a:hover {
          text-decoration: underline;
        }
        .anato-content img {
          max-width: 100%;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        .anato-content hr {
          border: none;
          border-top: 1px solid #2a2a4e;
          margin: 2rem 0;
        }
        .anato-content code {
          background: #1a1a2e;
          color: #e2e8f0;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        .anato-content a.internal-link {
          color: #63b3ed;
          text-decoration: none;
          cursor: pointer;
          border-bottom: 1px dashed #63b3ed;
        }
        .anato-content a.internal-link:hover {
          text-decoration: none;
          color: #90cdf4;
        }
      `}</style>
    </div>
  );
}


