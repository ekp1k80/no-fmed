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
  clean = clean.replace(/\[\[([A-Za-z0-9_áéíóúñÁÉÍÓÚÑ%\s"'-]+)\]\]/g, (match, name) => {
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
    // Manejar clicks en links internos
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("internal-link")) {
        e.preventDefault();
        const id = target.getAttribute("data-id");
        if (id && FILE_IDS.has(id)) {
          setActive(id);
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [active, loadFile]);

  const sections = [...new Set(FILES.map((f) => f.section))];
  const filtered = FILES.filter((f) =>
    f.label.toLowerCase().includes(search.toLowerCase())
  );

  const currentFile = FILES.find((f) => f.id === active);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#121220]">
      {/* Top App Bar */}
      <header className="bg-blue-600 text-white px-3 py-2 flex items-center gap-3 flex-shrink-0">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1.5 hover:bg-blue-700 rounded-lg transition-colors lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="flex-1">
          <h1 className="text-base font-medium">🔬 Tejido Muscular</h1>
          <p className="text-blue-200 text-xs">{currentFile?.label}</p>
        </div>
        <Link href="/" className="p-1.5 hover:bg-blue-700 rounded-lg transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </Link>
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

          {/* File list */}
          <nav className="flex-1 overflow-y-auto p-2">
            {sections.map((sec) => {
              const sectionFiles = filtered.filter((f) => f.section === sec);
              if (sectionFiles.length === 0) return null;
              return (
                <div key={sec} className="mb-3">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                    {sec}
                  </h3>
                  {sectionFiles.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => {
                        setActive(file.id);
                        setSidebarOpen(false);
                      }}
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
            className="material-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </main>
      </div>

      <style jsx global>{`
        .material-content h1 {
          font-size: 1.5rem;
          font-weight: 500;
          color: #e2e8f0;
          border-bottom: 1px solid #2a2a4e;
          padding-bottom: 0.75rem;
          margin-bottom: 1rem;
          word-wrap: break-word;
        }
        .material-content h2 {
          font-size: 1.25rem;
          font-weight: 500;
          color: #cbd5e0;
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #2a2a4e;
          word-wrap: break-word;
        }
        .material-content h3 {
          font-size: 1.125rem;
          font-weight: 500;
          color: #a0aec0;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          word-wrap: break-word;
        }
        .material-content p {
          color: #cbd5e0;
          margin-bottom: 0.75rem;
          line-height: 1.75;
          word-wrap: break-word;
        }
        .material-content ul, .material-content ol {
          color: #cbd5e0;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
        }
        .material-content li {
          margin-bottom: 0.25rem;
          line-height: 1.75;
        }
        .material-content blockquote {
          border-left: 4px solid #3182ce;
          padding: 1rem;
          margin: 1rem 0;
          background: rgba(49, 130, 206, 0.1);
          border-radius: 0 0.5rem 0.5rem 0;
          color: #a0aec0;
          font-style: italic;
        }
        .material-content blockquote p {
          color: #a0aec0;
          margin-bottom: 0;
        }
        .material-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          overflow-x: auto;
          display: block;
        }
        .material-content th {
          background: #1a1a2e;
          color: #e2e8f0;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          border: 1px solid #2a2a4e;
        }
        .material-content td {
          color: #cbd5e0;
          padding: 0.75rem;
          border: 1px solid #2a2a4e;
        }
        .material-content strong {
          color: #e2e8f0;
          font-weight: 600;
        }
        .material-content a {
          color: #63b3ed;
          text-decoration: none;
          cursor: pointer;
        }
        .material-content a:hover {
          text-decoration: underline;
        }
        .material-content img {
          max-width: 100%;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        .material-content hr {
          border: none;
          border-top: 1px solid #2a2a4e;
          margin: 2rem 0;
        }
        .material-content code {
          background: #1a1a2e;
          color: #e2e8f0;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        .material-content pre {
          background: #1a1a2e;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .material-content a.internal-link {
          color: #63b3ed;
          text-decoration: none;
          cursor: pointer;
          border-bottom: 1px dashed #63b3ed;
        }
        .material-content a.internal-link:hover {
          text-decoration: none;
          color: #90cdf4;
        }
      `}</style>
    </div>
  );
}
< ! - -   f i x :   m a t e r i a l   c o n t e n t   s t y l e s   - - >  
 