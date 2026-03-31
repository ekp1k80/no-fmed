"use client";

import { useState, useRef, useEffect } from 'react';
import { Zone, ViewKey, VIEW_META } from './types';
import { shuffle } from './useLabelingQuiz';

interface DragDropModeProps {
  view: ViewKey;
  targets: Zone[];
  labels: string[];
  answers: Record<string, string>;
  addAnswer: (zoneId: string, answer: string) => boolean;
  isMobile: boolean;
}

export default function DragDropMode({ view, targets, labels, answers, addAnswer, isMobile }: DragDropModeProps) {
  const [dragging, setDragging] = useState<string | null>(null);
  const [draggingOver, setDraggingOver] = useState<string | null>(null);
  const [wordBank, setWordBank] = useState<string[]>([]);
  const [usedWords, setUsedWords] = useState<Set<string>>(new Set());
  const canvasRef = useRef<HTMLDivElement>(null);

  // Initialize word bank
  useEffect(() => {
    setWordBank(shuffle(labels));
    setUsedWords(new Set());
  }, [view, labels]);

  const handleDragStart = (e: React.DragEvent, word: string) => {
    setDragging(word);
    e.dataTransfer.setData('text/plain', word);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, zoneId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDraggingOver(zoneId);
  };

  const handleDragLeave = () => {
    setDraggingOver(null);
  };

  const handleDrop = (e: React.DragEvent, zone: Zone) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    
    if (word && !answers[zone.label]) {
      const isCorrect = addAnswer(zone.label, word);
      
      if (isCorrect) {
        setUsedWords(prev => new Set([...prev, word]));
      } else {
        // Shake animation for wrong answer
        const zoneEl = document.getElementById(`zone-${zone.label}`);
        if (zoneEl) {
          zoneEl.classList.add('animate-shake');
          setTimeout(() => zoneEl.classList.remove('animate-shake'), 400);
        }
      }
    }
    
    setDragging(null);
    setDraggingOver(null);
  };

  const getArrowClass = (dir: string | null) => {
    if (!dir) return 'mq-zone arr-none';
    return `mq-zone arr-${dir}`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '16px' : '24px', maxWidth: 1200, margin: '0 auto', alignItems: isMobile ? 'stretch' : 'stretch' }}>
      {/* Canvas */}
      <div 
        ref={canvasRef} 
        style={{ 
          position: 'relative', 
          flex: 1, 
          minWidth: 0, 
          borderRadius: 14, 
          boxShadow: '0 4px 24px rgba(0,0,0,.5)', 
          background: '#fff', 
          overflow: 'visible' 
        }}
      >
        <img
          src={VIEW_META[view].img}
          alt={VIEW_META[view].title}
          style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 14 }}
        />
        
        {/* Contador debajo de la imagen */}
        <div style={{
          padding: '10px',
          textAlign: 'center',
          color: '#121220',
          fontSize: '0.9rem',
          fontWeight: 600,
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '0 0 14px 14px',
          marginTop: '-4px'
        }}>
          ✅ {Object.keys(answers).length}/{targets.length}
        </div>
        
        {/* Zones */}
        {targets.map((zone) => {
          const isAnswered = !!answers[zone.label];
          const isCorrect = isAnswered && answers[zone.label] === zone.label;
          const isOver = draggingOver === zone.label;
          
          return (
            <div
              key={zone.label}
              id={`zone-${zone.label}`}
              className={`absolute ${getArrowClass(zone.dir)}`}
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: '200px',
                height: '200px',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
              onDragOver={(e) => handleDragOver(e, zone.label)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, zone)}
            >
              <div
                className={`zone-box ${isAnswered ? (isCorrect ? 'correct' : 'wrong') : ''} ${isOver ? 'over' : ''}`}
                style={{
                  width: 'max-content',
                  minWidth: '90px',
                  maxWidth: '180px',
                  minHeight: '28px',
                  pointerEvents: 'auto',
                  cursor: isAnswered ? 'default' : 'grab',
                }}
              >
                {isAnswered ? answers[zone.label] : ' '}
              </div>
            </div>
          );
        })}
      </div>

      {/* Word bank */}
      {/* Sidebar - same as original sidebar */}
      {/* Sidebar */}
      {!isMobile && (
        <div style={{ width: 240, flexShrink: 0, maxHeight: '600px', overflowY: 'auto', borderRadius: 14, boxShadow: '0 4px 24px rgba(0,0,0,.5)', background: 'rgba(18,18,32,0.9)', padding: '16px' }}>
          <h3 className="text-lg font-semibold text-purple-400 mb-4">🦴 Estructuras</h3>
          <div className="flex flex-col gap-3">
          {wordBank.map((word) => {
            const isUsed = usedWords.has(word);
            const isDragging = dragging === word;
            
            return (
              <div
                key={word}
                draggable={!isUsed}
                onDragStart={(e) => !isUsed && handleDragStart(e, word)}
                className={`p-4 bg-gray-900 border-2 rounded-xl cursor-grab transition-all ${isUsed ? 'opacity-20 pointer-events-none border-gray-800 line-through' : 'border-gray-700 hover:border-purple-600 hover:bg-gray-800'} ${isDragging ? 'opacity-40 scale-95' : ''}`}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* CSS for animations and arrows */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translate(-50%, -50%); }
          20% { transform: translate(calc(-50% + 6px), -50%); }
          40% { transform: translate(calc(-50% - 6px), -50%); }
          60% { transform: translate(calc(-50% + 4px), -50%); }
          80% { transform: translate(calc(-50% - 4px), -50%); }
        }
        .animate-shake {
          animation: shake 0.35s;
        }
        
        .zone-box {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(18, 18, 32, 0.9);
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.65rem;
          font-weight: 600;
          white-space: normal;
          word-wrap: break-word;
          padding: 2px 6px;
          backdrop-filter: blur(2px);
        }
        .zone-box::after {
          content: '';
          position: absolute;
          z-index: 12;
          width: 0;
          height: 0;
          border: 5px solid transparent;
        }
        .zone-box.correct {
          border: 2px solid #10b981;
          background: rgba(16, 185, 129, 0.2);
        }
        .zone-box.wrong {
          border: 2px solid #ef4444;
          background: rgba(239, 68, 68, 0.35);
        }
        .zone-box.over {
          border: 2px dashed #4ade80;
          background: rgba(74, 222, 128, 0.3);
        }
        
        /* Arrow positioning */
        .arr-r .zone-box {
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
        }
        .arr-r .zone-box::after {
          left: 100%;
          top: 50%;
          transform: translate(0, -50%);
          border-left: 8px solid rgba(18, 18, 32, 0.9);
        }
        
        .arr-l .zone-box {
          right: 0;
          top: 50%;
          transform: translate(0, -50%);
        }
        .arr-l .zone-box::after {
          right: 100%;
          top: 50%;
          transform: translate(0, -50%);
          border-right: 8px solid rgba(18, 18, 32, 0.9);
        }
        
        .arr-u .zone-box {
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 0);
        }
        .arr-u .zone-box::after {
          left: 50%;
          bottom: 100%;
          transform: translateX(-50%);
          border-bottom: 8px solid rgba(18, 18, 32, 0.9);
        }
        
        .arr-d .zone-box {
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
        }
        .arr-d .zone-box::after {
          left: 50%;
          top: 100%;
          transform: translateX(-50%);
          border-top: 8px solid rgba(18, 18, 32, 0.9);
        }
        
        .arr-tr .zone-box {
          right: 0;
          bottom: 0;
        }
        .arr-tr .zone-box::after {
          right: 100%;
          bottom: 100%;
          border-right: 8px solid rgba(18, 18, 32, 0.9);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
        
        .arr-tl .zone-box {
          left: 0;
          bottom: 0;
        }
        .arr-tl .zone-box::after {
          left: 100%;
          bottom: 100%;
          border-left: 8px solid rgba(18, 18, 32, 0.9);
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
        
        .arr-br .zone-box {
          right: 0;
          top: 0;
        }
        .arr-br .zone-box::after {
          right: 100%;
          top: 100%;
          border-right: 8px solid rgba(18, 18, 32, 0.9);
          border-bottom: 5px solid transparent;
          border-top: 5px solid transparent;
        }
        
        .arr-bl .zone-box {
          left: 0;
          top: 0;
        }
        .arr-bl .zone-box::after {
          left: 100%;
          top: 100%;
          border-left: 8px solid rgba(18, 18, 32, 0.9);
          border-bottom: 5px solid transparent;
          border-top: 5px solid transparent;
        }
        
        .arr-none .zone-box::after {
          display: none;
        }
      `}</style>
    </div>
  );
}