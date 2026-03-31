"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LabelingQuiz } from '@/components/labeling-quiz';

export default function MiembroSuperior() {
  const [zones, setZones] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        const response = await fetch('/miembro-superior/zones-simple.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setZones(data);
      } catch (err) {
        console.error('Error loading zones data:', err);
        setError('Error loading quiz data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchZones();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col bg-[#121220]">
        <header className="bg-blue-600 text-white px-4 py-3 flex items-center gap-4 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
            <span className="text-sm">Volver</span>
          </Link>
          <h1 className="text-lg font-medium">🦴 Cintura Pectoral — Labeling Quiz</h1>
        </header>
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p>Cargando quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex flex-col bg-[#121220]">
        <header className="bg-blue-600 text-white px-4 py-3 flex items-center gap-4 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 hover:bg-blue-700 p-2 rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6" />
            </svg>
            <span className="text-sm">Volver</span>
          </Link>
          <h1 className="text-lg font-medium">🦴 Cintura Pectoral — Labeling Quiz</h1>
        </header>
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <div className="text-center p-8">
            <div className="text-red-400 text-5xl mb-4">⚠️</div>
            <p className="text-xl mb-2">Error</p>
            <p className="text-gray-500">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-[#121220]">
      {/* Header */}
      <header className="bg-blue-600 text-white px-3 py-2 flex items-center gap-3 flex-shrink-0">
        <Link href="/" className="flex items-center gap-1 hover:bg-blue-700 p-1.5 rounded-lg transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </Link>
        <h1 className="text-base font-medium">🦴 Cintura Pectoral</h1>
      </header>

      {/* Quiz component */}
      <div className="flex-1 overflow-hidden">
        {zones && <LabelingQuiz zones={zones} />}
      </div>
    </div>
  );
}