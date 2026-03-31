"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { Zone, ViewKey, VIEW_META } from './types';
import { shuffle, fuzzyMatch, fuzzyScore } from './useLabelingQuiz';

interface MobileQuizProps {
  zones: any;
  view: ViewKey;
  setView: (v: ViewKey) => void;
  answers: Record<string, string>;
  addAnswer: (zoneId: string, answer: string) => boolean;
  score: { correct: number; total: number };
  resetQuiz: () => void;
  difficulty: 'easy' | 'hard';
}

export default function MobileQuiz({ zones, view, setView, answers, addAnswer, score, resetQuiz, difficulty }: MobileQuizProps) {
  const [zoneOrder, setZoneOrder] = useState<Zone[]>([]);
  const [idx, setIdx] = useState(0);
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState<{ show: boolean; ok: boolean }>({ show: false, ok: false });
  const inputRef = useRef<HTMLInputElement>(null);

  const viewKeys: ViewKey[] = ['posterior', 'anterior', 'postMusculatura', 'antMusculatura'];
  const vi = viewKeys.indexOf(view);

  // Init zones
  useEffect(() => {
    const targets = zones.mobile[view] || [];
    setZoneOrder(shuffle([...targets]));
    setIdx(0);
    setCompleted(false);
    setQuery('');
    setOptions([]);
  }, [view, zones]);

  // Build all labels for filtering (deduplicated)
  const allLabels = useMemo(() => [...new Set(zoneOrder.map(z => z.label))], [zoneOrder]);
  const usedLabels = useMemo(() => Object.keys(answers), [answers]);

  // Filter options
  useEffect(() => {
    const available = allLabels.filter(l => !usedLabels.includes(l));
    if (!query.trim()) {
      if (difficulty === 'easy') {
        setOptions(available);
      } else {
        setOptions([]);
      }
    } else {
      const filtered = available.filter(l => {
        if (difficulty === 'easy') return fuzzyMatch(query, l);
        return fuzzyScore(query, l) >= 0.7;
      });
      setOptions(filtered);
    }
  }, [query, allLabels, usedLabels, difficulty]);

  const currentZone = zoneOrder[idx];

  const handlePick = (opt: string) => {
    if (!currentZone) return;
    const ok = addAnswer(currentZone.label, opt);
    setFeedback({ show: true, ok });
    setTimeout(() => {
      setFeedback({ show: false, ok: false });
      if (idx < zoneOrder.length - 1) {
        setIdx(i => i + 1);
      } else {
        setCompleted(true);
      }
      setQuery('');
    }, 700);
  };

  const handleSkip = () => {
    if (idx < zoneOrder.length - 1) {
      setIdx(i => i + 1);
    } else {
      setCompleted(true);
    }
    setQuery('');
  };

  const handleRestart = () => {
    resetQuiz();
    setIdx(0);
    setCompleted(false);
    setQuery('');
    setZoneOrder(shuffle([...(zones.mobile[view] || [])]));
  };

  // Completed screen
  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold text-green-400 mb-4">🎉 ¡Completado!</h2>
        <p className="text-gray-400 mb-6 text-center">
          Puntuación: <span className="text-green-400 font-bold">{score.correct}</span> / {score.total}
        </p>
        <button onClick={handleRestart}
          className="px-8 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700">
          Reiniciar
        </button>
      </div>
    );
  }

  if (!currentZone) return <div className="text-center text-gray-400 p-8">Cargando...</div>;

  const zoneW = Math.max(80, currentZone.w || 130);
  const zoneH = Math.max(20, currentZone.h || 28);
  const arrDir = currentZone.dir || 'none';

  return (
    <div className="flex flex-col items-center h-full">
      {/* IMAGE + SINGLE ZONE */}
      <div className="img-wrap flex items-center justify-center w-full" style={{ flex: '1 1 auto', minHeight: 0 }}>
        <div className="relative" style={{ width: '100%', maxWidth: 380, overflow: 'visible' }}>
          <img src={VIEW_META[view].img} alt={VIEW_META[view].title}
            style={{ display: 'block', width: '100%', background: '#fff', borderRadius: 12 }} />

          {/* Single zone */}
          <div className={`mq-zone arr-${arrDir}`}
            style={{
              position: 'absolute',
              left: `${currentZone.x}%`,
              top: `${currentZone.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              overflow: 'visible',
              width: `min(43%, ${zoneW}px)`,
              height: `min(9.3%, ${zoneH}px)`,
            }}>
            <div className="zone-box"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                fontSize: `${Math.max(0.45, Math.min(0.65, zoneW / currentZone.label.length * 0.55))}rem`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                borderRadius: 8,
                background: 'rgba(18, 18, 32, 0.9)',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 600,
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                cursor: 'grab',
                minWidth: 90,
                minHeight: 28,
              }}>
              ?
            </div>
          </div>

          {/* Feedback overlay */}
          {feedback.show && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`text-5xl font-bold ${feedback.ok ? 'text-green-400' : 'text-red-400'}`}>
                {feedback.ok ? '✓' : '✗'}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SCORE */}
      <div className="text-gray-400 text-xs py-1">
        ✅ <span className="text-green-400 font-bold">{score.correct}</span> / {zoneOrder.length}
      </div>

      {/* SEARCH INPUT */}
      <div className="w-full px-4 py-1">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Escribí para buscar..."
          className="w-full px-4 py-2 border-2 border-gray-700 bg-gray-900 text-white rounded-xl text-sm outline-none focus:border-purple-600"
          autoFocus
        />
      </div>

      {/* OPTIONS LIST */}
      <div className="w-full px-4 overflow-y-auto" style={{ maxHeight: '30vh' }}>
        {options.map((opt, i) => (
          <div key={`zone-${view}-${i}`} onClick={() => handlePick(opt)}
            className="px-4 py-2.5 text-gray-300 border-b border-gray-800 cursor-pointer hover:bg-purple-600 hover:text-white transition-colors text-sm">
            {opt}
          </div>
        ))}
        {query && options.length === 0 && (
          <div className="px-4 py-2 text-gray-500 text-sm italic text-center">No hay coincidencias</div>
        )}
      </div>

      {/* SKIP */}
      <button onClick={handleSkip}
        className="px-6 py-2 border border-gray-700 bg-transparent text-gray-400 rounded-lg text-sm hover:border-purple-600 hover:text-white transition-colors my-2">
        Skip ⏭️
      </button>

      {/* Arrow CSS — exacto del original */}
      <style jsx>{`
        .zone-box {
          position: relative;
          z-index: 12;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 90px;
          min-height: 28px;
          border: none;
          border-radius: 8px;
          background: rgba(18, 18, 32, 0.9);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.65rem;
          font-weight: 600;
          pointer-events: auto;
          white-space: normal;
          word-wrap: break-word;
          padding: 2px 6px;
          cursor: grab;
        }
        .zone-box::after {
          content: '';
          position: absolute;
          z-index: 12;
          width: 0;
          height: 0;
          border: 5px solid transparent;
        }
        /* arr-r */
        .arr-r .zone-box { left: 0; top: 50%; transform: translate(0, -50%); }
        .arr-r .zone-box::after { left: 100%; top: 50%; transform: translate(0, -50%); border-left: 8px solid rgba(18,18,32,0.9); }
        /* arr-l */
        .arr-l .zone-box { right: 0; top: 50%; transform: translate(0, -50%); }
        .arr-l .zone-box::after { right: 100%; top: 50%; transform: translate(0, -50%); border-right: 8px solid rgba(18,18,32,0.9); }
        /* arr-u */
        .arr-u .zone-box { left: 50%; bottom: 0; transform: translate(-50%, 0); }
        .arr-u .zone-box::after { left: 50%; bottom: 100%; transform: translateX(-50%); border-bottom: 8px solid rgba(18,18,32,0.9); }
        /* arr-d */
        .arr-d .zone-box { left: 50%; top: 0; transform: translate(-50%, 0); }
        .arr-d .zone-box::after { left: 50%; top: 100%; transform: translateX(-50%); border-top: 8px solid rgba(18,18,32,0.9); }
        /* arr-tr */
        .arr-tr .zone-box { right: 0; bottom: 0; }
        .arr-tr .zone-box::after { right: 100%; bottom: 100%; border-right: 8px solid rgba(18,18,32,0.9); border-top: 5px solid transparent; border-bottom: 5px solid transparent; }
        /* arr-tl */
        .arr-tl .zone-box { left: 0; bottom: 0; }
        .arr-tl .zone-box::after { left: 100%; bottom: 100%; border-left: 8px solid rgba(18,18,32,0.9); border-top: 5px solid transparent; border-bottom: 5px solid transparent; }
        /* arr-br */
        .arr-br .zone-box { right: 0; top: 0; }
        .arr-br .zone-box::after { right: 100%; top: 100%; border-right: 8px solid rgba(18,18,32,0.9); border-bottom: 5px solid transparent; border-top: 5px solid transparent; }
        /* arr-bl */
        .arr-bl .zone-box { left: 0; top: 0; }
        .arr-bl .zone-box::after { left: 100%; top: 100%; border-left: 8px solid rgba(18,18,32,0.9); border-bottom: 5px solid transparent; border-top: 5px solid transparent; }
        /* none */
        .arr-none .zone-box::after { display: none; }
      `}</style>
    </div>
  );
}
