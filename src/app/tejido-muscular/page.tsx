"use client";

import { useState, useEffect, useCallback } from "react";
import { marked } from "marked";
import Link from "next/link";

const FILES = [
  { id: "00_Indice", label: "Índice", section: "General" },
  { id: "01_Musculo_Esquelético", label: "01. Músculo Esquelético", section: "Tipo de Tejido" },
  { id: "02_Musculo_Cardiaco", label: "02. Músculo Cardíaco", section: "Tipo de Tejido" },
  { id: "03_Musculo_Liso", label: "03. Músculo Liso", section: "Tipo de Tejido" },
  { id: "04_Fibras_Tipo_I", label: "04. Fibras Tipo I", section: "Tipo de Fibra" },
  { id: "05_Fibras_Tipo_II", label: "05. Fibras Tipo II", section: "Tipo de Fibra" },
  { id: "06_Fibras_Tipo_III", label: "06. Fibras Tipo III", section: "Tipo de Fibra" },
  { id: "07_Sarcomero", label: "07. Sarcómero", section: "Temas Transversales" },
  { id: "08_Proteinas_Contractiles", label: "08. Proteínas Contractiles", section: "Temas Transversales" },
  { id: "09_Contraccion_Muscular", label: "09. Contracción Muscular", section: "Temas Transversales" },
  { id: "10_Neuromuscular", label: "10. Unión Neuromotora", section: "Temas Transversales" },
  { id: "11_Organizacion_Muscular", label: "11. Organización Muscular", section: "Temas Transversales" },
];

const FILE_IDS = new Set(FILES.map((f) => f.id));

function preprocessMd(md: string): string {
  let clean = md.replace(/^---[\s\S]*?---\n/, "");
  clean = clean.replace(/!\[\[(imgs\/[^\]]+)\]\]/g, '<img src="/md/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  clean = clean.replace(/\[\[([A-Za-z0-9_ÁÉÍÓÚáéíóúñÑ -]+)\]\]/g, (match, name) => {
    const id = FILES.find((f) => f.id === name || f.label.includes(name))?.id || name;
    return `<a href="#" class="internal-link" data-id="${id}">${name}</a>`;
  });
  clean = clean.replace(/!\[\[([^\]]+)\]\]/g, '<img src="/md/imgs/$1" style="max-width:100%;border-radius:8px;margin:1rem 0" />');
  return clean;
}

export default function TejidoMuscular() {
  const [active, setActive] = useState("00_Indice");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadFile = useCallback((id: string) => {
    const url = `/md/${id}.md`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((md) => {
        const processed = preprocessMd(md);
        let html = marked.parse(processed) as string;
        html = html.replace(/<img src="imgs\//g, '<img src="/md/imgs/');
        setContent(html);
        setTimeout(() => {
          document.querySelectorAll(".internal-link").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              const id = (e.target as HTMLElement).getAttribute("data-id");
              if (id && FILE_IDS.has(id)) {
                setActive(id);
                setSidebarOpen(false);
              }
            });
          });
        }, 100);
      })
      .catch((err) => {
        console.error("Error cargando", url, err);
        setContent(`<div style="padding:2rem;text-align:center;color:#e53e3e">
          <h2>Error cargando archivo</h2>
          <p style="color:#718096;margin-top:1rem">${url}</p>
          <p style="color:#a0aec0;font-size:0.875rem;margin-top:0.5rem">${err.message}</p>
        </div>`);
      });
  }, []);

  useEffect(() => {
    loadFile(active);
  }, [active, loadFile]);

  const sections = [...new Set(FILES.map((f) => f.section))];
  const filtered = FILES.filter((f) =>
    f.label.toLowerCase().includes(search.toLowerCase())
  );

  const currentFile = FILES.find((f) => f.id === active);

  return (
    <div className="min-h-screen bg-white">
      {/* Top App Bar */}
      <header className="bg-blue-600 text-white px-4 py-3 flex items-center gap-4 shadow-md sticky top-0 z-20">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-medium">🔬 Tejido Muscular</h1>
          <p className="text-blue-200 text-xs">{currentFile?.label}</p>
        </div>
        <Link href="/" className="flex items-center gap-1 p-2 hover:bg-blue-700 rounded-lg transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          <span className="text-sm">Inicio</span>
        </Link>
      </header>

      {/* Drawer Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">📂 Archivos</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-3 border-b border-gray-100">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-y-auto h-[calc(100%-130px)]">
          {sections.map((sec) => (
            <div key={sec}>
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                {sec}
              </div>
              {filtered
                .filter((f) => f.section === sec)
                .map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      setActive(f.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors border-l-4 ${
                      active === f.id
                        ? "bg-blue-50 text-blue-700 border-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50 border-transparent"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
            </div>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="p-4 md:p-8 max-w-4xl mx-auto">
        <div
          className="material-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>

      <style jsx global>{`
        .material-content h1 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #1a202c;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          word-wrap: break-word;
        }
        .material-content h2 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #2d3748;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #edf2f7;
          word-wrap: break-word;
        }
        .material-content h3 {
          font-size: 1.1rem;
          font-weight: 500;
          color: #4a5568;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          word-wrap: break-word;
        }
        .material-content p {
          color: #4a5568;
          line-height: 1.7;
          margin: 0.75rem 0;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        .material-content strong {
          color: #1a202c;
          font-weight: 600;
        }
        .material-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1rem 0;
          font-size: 0.85rem;
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .material-content th {
          background: #edf2f7;
          color: #2d3748;
          font-weight: 600;
          text-align: left;
          padding: 0.6rem 0.75rem;
          border-bottom: 2px solid #e2e8f0;
          white-space: nowrap;
        }
        .material-content td {
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid #edf2f7;
          color: #4a5568;
        }
        .material-content tr:hover td {
          background: #f7fafc;
        }
        .material-content blockquote {
          border-left: 4px solid #4299e1;
          padding: 0.75rem 1rem;
          background: #ebf8ff;
          border-radius: 0 8px 8px 0;
          margin: 1rem 0;
          color: #2c5282;
        }
        .material-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .material-content ul, .material-content ol {
          padding-left: 1.5rem;
          margin: 0.75rem 0;
          color: #4a5568;
        }
        .material-content li {
          margin: 0.25rem 0;
          line-height: 1.6;
          word-wrap: break-word;
        }
        .material-content a.internal-link {
          color: #3182ce;
          text-decoration: none;
          border-bottom: 1px dashed #3182ce;
        }
        .material-content a.internal-link:hover {
          color: #2b6cb0;
          border-bottom-style: solid;
        }
        .material-content hr {
          border: none;
          border-top: 1px solid #e2e8f0;
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  );
}
