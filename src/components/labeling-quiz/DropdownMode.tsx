"use client";

import { useState, useRef, useEffect } from 'react';
import { Zone, ViewKey, VIEW_META } from './types';
import { fuzzyMatch, fuzzyScore } from './useLabelingQuiz';

interface DropdownModeProps {
  view: ViewKey;
  targets: Zone[];
  answers: Record<string, string>;
  addAnswer: (zoneId: string, answer: string) => boolean;
  difficulty: 'easy' | 'hard';
}

export default function DropdownMode({ view, targets, answers, addAnswer, difficulty }: DropdownModeProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allLabels = targets.map(z => z.label);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter options based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      if (difficulty === 'hard') {
        setFilteredOptions([]); // hard: no suggestions until typing
      } else {
        setFilteredOptions(allLabels.filter(label => !Object.values(answers).includes(label)));
      }
      return;
    }

    const filtered = allLabels.filter(label => {
      if (Object.values(answers).includes(label)) return false;
      
      if (difficulty === 'easy') {
        return fuzzyMatch(searchQuery, label);
      } else {
        return fuzzyScore(searchQuery, label) >= 0.7;
      }
    });
    
    setFilteredOptions(filtered);
  }, [searchQuery, allLabels, answers, difficulty]);

  const handleZoneClick = (zoneId: string) => {
    setOpenDropdown(openDropdown === zoneId ? null : zoneId);
    setSearchQuery('');
  };

  const handleOptionClick = (zoneId: string, option: string) => {
    const isCorrect = addAnswer(zoneId, option);
    
    if (!isCorrect) {
      // Shake animation for wrong answer
      const zoneEl = document.getElementById(`dd-zone-${zoneId}`);
      if (zoneEl) {
        zoneEl.classList.add('animate-shake');
        setTimeout(() => zoneEl.classList.remove('animate-shake'), 400);
      }
    }
    
    setOpenDropdown(null);
    setSearchQuery('');
  };

  const getArrowClass = (dir: string | null) => {
    if (!dir) return 'arr-none';
    return `arr-${dir}`;
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query || difficulty !== 'easy') return text;
    
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    let result = '';
    let qIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (qIndex < q.length && t[i] === q[qIndex]) {
        result += `<span class="match">${text[i]}</span>`;
        qIndex++;
      } else {
        result += text[i];
      }
    }
    
    return result;
  };

  return (
    <div className="relative bg-transparent rounded-2xl overflow-visible">
      <img
        src={VIEW_META[view].img}
        alt={VIEW_META[view].title}
        className="w-full max-w-lg h-auto rounded-2xl"
      />
      
      {/* Zones with dropdowns */}
      {targets.map((zone) => {
        const isAnswered = !!answers[zone.label];
        const isCorrect = isAnswered && answers[zone.label] === zone.label;
        const isOpen = openDropdown === zone.label;
        
        return (
          <div
            key={zone.label}
            id={`dd-zone-${zone.label}`}
            className={`absolute ${getArrowClass(zone.dir)}`}
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              textAlign: 'center',
            }}
            ref={isOpen ? dropdownRef : null}
          >
            {/* Zone label */}
            <div
              onClick={() => !isAnswered && handleZoneClick(zone.label)}
              className={`inline-block px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${isAnswered ? (isCorrect ? 'border-green-500 bg-green-500/20 text-white font-bold' : 'border-red-500 bg-red-500/20 text-white') : 'border-purple-400/60 bg-gray-900/85 text-gray-300 hover:border-purple-500 hover:text-white'}`}
              style={{
                fontSize: '0.55rem',
                minWidth: '80px',
                backdropFilter: 'blur(2px)',
                whiteSpace: 'nowrap',
              }}
            >
              {isAnswered ? answers[zone.label] : '?'}
            </div>
            
            {/* Dropdown */}
            {isOpen && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 border-2 border-gray-800 rounded-xl min-w-[220px] max-h-[200px] overflow-y-auto shadow-2xl z-20">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full px-4 py-3 border-b border-gray-700 bg-gray-800 text-white text-sm outline-none rounded-t-xl"
                  autoFocus
                />
                <div className="py-2">
                  {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleOptionClick(zone.label, option)}
                        className="px-4 py-3 cursor-pointer text-sm text-gray-300 hover:bg-purple-600 hover:text-white transition-colors"
                        dangerouslySetInnerHTML={{ __html: highlightMatch(option, searchQuery) }}
                      />
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm italic">
                      {searchQuery ? 'No hay coincidencias' : 'Todas las opciones usadas'}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake {
          animation: shake 0.4s;
        }
        
        .match {
          color: #4ade80;
          font-weight: 600;
        }
        
        /* Arrow positioning for dropdown mode */
        .arr-r { transform: translate(-50%, -50%); }
        .arr-l { transform: translate(-50%, -50%); }
        .arr-u { transform: translate(-50%, -50%); }
        .arr-d { transform: translate(-50%, -50%); }
        .arr-tr { transform: translate(-50%, -50%); }
        .arr-tl { transform: translate(-50%, -50%); }
        .arr-br { transform: translate(-50%, -50%); }
        .arr-bl { transform: translate(-50%, -50%); }
        .arr-none { transform: translate(-50%, -50%); }
      `}</style>
    </div>
  );
}