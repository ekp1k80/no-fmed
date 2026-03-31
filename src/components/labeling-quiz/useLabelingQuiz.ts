import { useState, useEffect, useCallback } from 'react';
import { Zone, ViewKey, Mode } from './types';

// Fisher-Yates shuffle
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Subsequence match (fácil): query debe aparecer en orden en target
export function fuzzyMatch(query: string, target: string): boolean {
  if (query.length < 2) return false;
  const q = query.toLowerCase().replace(/\s+/g, '');
  const t = target.toLowerCase().replace(/\s+/g, '');
  
  let qIndex = 0;
  for (let tIndex = 0; tIndex < t.length && qIndex < q.length; tIndex++) {
    if (t[tIndex] === q[qIndex]) {
      qIndex++;
    }
  }
  return qIndex === q.length;
}

// Fuzzy score (difícil): Levenshtein similarity 0-1
export function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  
  if (q === t) return 1;
  if (q.length === 0 || t.length === 0) return 0;
  
  // Implementación simple de distancia de Levenshtein
  const matrix = Array(q.length + 1).fill(null).map(() => Array(t.length + 1).fill(0));
  
  for (let i = 0; i <= q.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= t.length; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= q.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      const cost = q[i - 1] === t[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // eliminación
        matrix[i][j - 1] + 1, // inserción
        matrix[i - 1][j - 1] + cost // sustitución
      );
    }
  }
  
  const distance = matrix[q.length][t.length];
  const maxLength = Math.max(q.length, t.length);
  return 1 - distance / maxLength;
}

export function getTargets(viewKey: ViewKey, zones: any, isMobile: boolean = false): Zone[] {
  const source = isMobile ? zones.mobile : zones.desktop;
  return source[viewKey] || [];
}

export function useLabelingQuiz(zones: any, isMobile: boolean, initialView: ViewKey = 'posterior') {
  const [view, setView] = useState<ViewKey>(initialView);
  const [mode, setMode] = useState<Mode>('drag');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Sync internal view with external view
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  // Auto-switch to mobile mode on small screens
  useEffect(() => {
    if (isMobile) {
      setMode(prev => prev.startsWith('mobile') ? prev : 'mobile-easy');
    } else {
      setMode(prev => prev.startsWith('mobile') ? 'drag' : prev);
    }
  }, [isMobile]);

  const targets = getTargets(view, zones, isMobile);
  const labels = targets.map(z => z.label);

  const checkAnswer = useCallback((zoneId: string, answer: string): boolean => {
    const target = targets.find(z => z.label === zoneId);
    if (!target) return false;
    return target.label.toLowerCase() === answer.toLowerCase();
  }, [targets]);

  const addAnswer = useCallback((zoneId: string, answer: string) => {
    const isCorrect = checkAnswer(zoneId, answer);
    setAnswers(prev => ({ ...prev, [zoneId]: answer }));
    
    if (isCorrect && !answers[zoneId]) {
      setScore(prev => ({ correct: prev.correct + 1, total: prev.total + 1 }));
    } else if (!isCorrect && !answers[zoneId]) {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
    
    return isCorrect;
  }, [checkAnswer, answers]);

  const resetQuiz = useCallback(() => {
    setAnswers({});
    setScore({ correct: 0, total: 0 });
  }, []);

  return {
    view,
    setView,
    mode,
    setMode,
    targets,
    labels,
    score,
    answers,
    checkAnswer,
    addAnswer,
    resetQuiz,
  };
}