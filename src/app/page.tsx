"use client";

import Link from "next/link";
import quizzes from "@/lib/quizzes-data.json";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">🧠 FMED 1ro</h1>
        <p className="text-gray-600">Cuestionarios de Anatomía por tema</p>
      </div>

      {/* Sección: Histología */}
      <Link href="/doc/histo/Tejido_muscular/00_Indice">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 mb-6 cursor-pointer hover:-translate-y-0.5 border border-green-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800">🔬 Tejido Muscular</h2>
              <p className="text-gray-500 text-xs">Notas e imágenes de Histología — Brusco & Belingeri</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Ver</span>
          </div>
        </div>
      </Link>

      {/* Sección: Histología — Tejido Conectivo */}
      <Link href="/doc/histo/Tejido_conectivo/00_Indice">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 mb-6 cursor-pointer hover:-translate-y-0.5 border border-orange-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800">🔬 Tejido Conectivo</h2>
              <p className="text-gray-500 text-xs">Notas e imágenes de Histología — Brusco & Belingeri</p>
            </div>
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">Ver</span>
          </div>
        </div>
      </Link>

      {/* Sección: Anatomía — Cintura Pectoral */}
      <Link href="/doc/anato/cintura-pectoral/huesos/Escapula">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 mb-6 cursor-pointer hover:-translate-y-0.5 border border-purple-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-800">🦴 Cintura Pectoral</h2>
              <p className="text-gray-500 text-xs">Notas de Anatomía — Ruvier-Anatomía Humana</p>
            </div>
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">Ver</span>
          </div>
        </div>
      </Link>

      {/* Lista de Materias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(quizzes).map(([key, materia]) => {
          // Miembro Superior usa su propio quiz (labeling)
          if (key === "miembro-superior") {
            return (
              <Link key={key} href="/miembro-superior" className="block">
                <div className="materia-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">{materia.titulo}</h2>
                      <p className="text-gray-500 text-sm">{materia.descripcion}</p>
                    </div>
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      Labeling
                    </span>
                  </div>
                </div>
              </Link>
            );
          }
          return (
          <div key={key} className="materia-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{materia.titulo}</h2>
                <p className="text-gray-500 text-sm">{materia.descripcion}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {materia.totalPreguntas} preg
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
              {materia.partes.map((parte) => (
                <Link
                  key={parte.id}
                  href={`/quiz?materia=${key}&parte=${parte.id}`}
                  className="text-left p-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 transition-all"
                >
                  <span className="parte-tag bg-blue-100 text-blue-700 mb-1">Parte {parte.id}</span>
                  <p className="text-xs text-gray-600 mt-1 truncate">{parte.nombre}</p>
                  <p className="text-xs text-gray-400">{parte.preguntas} preg</p>
                </Link>
              ))}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
