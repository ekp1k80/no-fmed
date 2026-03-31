"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import quizzes from "@/lib/quizzes-data.json";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function QuizContent() {
  const searchParams = useSearchParams();
  const materia = searchParams.get("materia") || "";
  const parteInicial = parseInt(searchParams.get("parte") || "1");

  const [parte, setParte] = useState(parteInicial);
  const [preguntas, setPreguntas] = useState<any[]>([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showRationale, setShowRationale] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Quitar prefijo "anato-" para buscar el archivo JSON
    const jsonKey = materia.replace("anato-", "");
    fetch(`/preguntas_${jsonKey}_p${parte}.json`)
      .then((r) => r.json())
      .then((raw) => {
        // Manejar estructura { value: [...] } o array directo
        const data = Array.isArray(raw) ? raw : raw.value || [];
        setPreguntas(shuffleArray(data));
      })
      .catch(() => setPreguntas([]));

    setIdx(0);
    setSelected(null);
    setShowRationale(false);
    setShowHint(false);
    setScore({ correct: 0, total: 0 });
    setShowResult(false);
  }, [materia, parte]);

  const quiz = quizzes[materia as keyof typeof quizzes];
  if (!quiz) {
    return <div className="text-center p-8 text-red-500">Materia no encontrada</div>;
  }

  const parteData = quiz.partes.find((p) => p.id === parte);

  if (preguntas.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
          <a href="/" className="text-blue-600 hover:underline text-sm mb-3 inline-block">← Volver</a>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{quiz.titulo}</h2>
          <div className="flex flex-wrap gap-2">
            {quiz.partes.map((p) => (
              <button
                key={p.id}
                onClick={() => setParte(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  p.id === parte
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {p.nombre}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const q = preguntas[idx];

  const handleAnswer = (optIdx: number) => {
    if (selected !== null) return;
    setSelected(optIdx);
    setShowRationale(true);
    setScore((s) => ({
      correct: s.correct + (q.options[optIdx].isCorrect ? 1 : 0),
      total: s.total + 1,
    }));
  };

  const next = () => {
    if (idx < preguntas.length - 1) {
      setIdx((i) => i + 1);
      setSelected(null);
      setShowRationale(false);
      setShowHint(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Resultado</h2>
          <p className="text-5xl font-bold text-blue-600 mb-2">
            {score.correct} / {score.total}
          </p>
          <p className="text-gray-500 mb-6">
            {((score.correct / score.total) * 100).toFixed(1)}% correcto
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setPreguntas(shuffleArray(preguntas));
                setIdx(0);
                setSelected(null);
                setShowRationale(false);
                setShowHint(false);
                setScore({ correct: 0, total: 0 });
                setShowResult(false);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Repetir
            </button>
            <a
              href="/"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Selector de parte */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← Volver
          </a>
          <h1 className="text-xl font-bold text-gray-800">{quiz.titulo}</h1>
          <span className="text-sm text-gray-500">
            {score.correct}/{score.total}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {quiz.partes.map((p) => (
            <button
              key={p.id}
              onClick={() => setParte(p.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                p.id === parte
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {p.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Progreso */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Pregunta {idx + 1} de {preguntas.length}</span>
          <span>{parteData?.nombre}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((idx + 1) / preguntas.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Pregunta */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-medium text-gray-800">{q.question}</p>
          {q.hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="ml-4 px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors flex-shrink-0"
            >
              💡 Pista
            </button>
          )}
        </div>

        {showHint && q.hint && !selected && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">{q.hint}</p>
          </div>
        )}

        <div className="space-y-3">
          {q.options.map((opt: any, i: number) => {
            let cls = "border-2 border-gray-200 hover:border-blue-400 bg-white";
            if (selected !== null) {
              if (opt.isCorrect) cls = "border-2 border-green-500 bg-green-50";
              else if (i === selected) cls = "border-2 border-red-500 bg-red-50";
              else cls = "border-2 border-gray-200 opacity-50";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
                className={`w-full text-left p-4 rounded-xl transition-all ${cls}`}
              >
                <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                {opt.text}
              </button>
            );
          })}
        </div>

        {showRationale && q.options[selected!]?.rationale && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
            <p className="text-sm text-gray-700">{q.options[selected!].rationale}</p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={next}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            {idx < preguntas.length - 1 ? "Siguiente →" : "Ver resultado"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-center p-8 text-gray-500">Cargando...</div>}>
      <QuizContent />
    </Suspense>
  );
}
