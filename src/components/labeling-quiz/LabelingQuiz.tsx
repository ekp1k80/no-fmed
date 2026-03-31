"use client";

import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ViewKey, Mode, VIEW_META } from './types';
import { useLabelingQuiz } from './useLabelingQuiz';
import MobileQuiz from './MobileQuiz';

interface LabelingQuizProps {
  zones: any;
  title?: string;
}

export default function LabelingQuiz({ zones, title = "🦴 Cintura Pectoral" }: LabelingQuizProps) {
  const [view, setView] = useState<ViewKey>('posterior');
  const [mode, setMode] = useState<Mode>('mobile-easy');
  const isMobile = useMediaQuery('(max-width:767px)');
  
  const {
    targets,
    labels,
    score,
    answers,
    addAnswer,
    resetQuiz,
  } = useLabelingQuiz(zones, isMobile, view);

  const viewKeys: ViewKey[] = ['posterior', 'anterior', 'postMusculatura', 'antMusculatura'];

  return (
    <div className="h-full bg-[#121220] text-[#e0e0e0] overflow-y-auto">
      {/* Header */}
      <div className="bg-[#121220] border-b border-gray-800 px-2 py-3">
        <div className="flex items-center justify-center gap-2 flex-wrap mb-2">
          <button onClick={() => window.location.href = '/'} className="text-white hover:text-purple-400 no-underline text-sm font-bold shrink-0 bg-transparent border-none cursor-pointer">{title}</button>
          <button onClick={() => setMode('mobile-easy')}
            className={`px-3 py-1 rounded-lg border-2 text-xs transition-all ${mode === 'mobile-easy' ? 'bg-purple-600 border-purple-600 text-white' : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-purple-600 hover:text-white'}`}>Fácil</button>
          <button onClick={() => setMode('mobile-hard')}
            className={`px-3 py-1 rounded-lg border-2 text-xs transition-all ${mode === 'mobile-hard' ? 'bg-purple-600 border-purple-600 text-white' : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-purple-600 hover:text-white'}`}>Difícil</button>
        </div>
        <div className="flex gap-1 justify-center py-2 flex-wrap">
          {viewKeys.map((key) => (
            <button key={key} onClick={() => setView(key)}
              className={`px-2 py-0.5 rounded border text-xs transition-all ${view === key ? 'bg-purple-600 border-purple-600 text-white' : 'border-gray-700 bg-transparent text-gray-400 hover:border-purple-600 hover:text-white'}`}>
              {VIEW_META[key].title}
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="w-full px-2 max-w-4xl mx-auto">
        <MobileQuiz
          zones={zones}
          view={view}
          setView={setView}
          answers={answers}
          addAnswer={addAnswer}
          score={score}
          resetQuiz={resetQuiz}
          difficulty={mode === 'mobile-easy' ? 'easy' : 'hard'}
        />
      </div>
    </div>
  );
}
