import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions.json";

interface Question {
  id: number;
  text: string;
}

export default function QuestionForm() {
  const navigate = useNavigate();

  // Store checkbox state: id → boolean
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  const handleToggle = (id: number) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const total = questions.length;
    const checkedCount = Object.values(answers).filter((v) => v).length;

    // Classic Rice Purity Calculation
    const purityScore = Math.round(100 - (checkedCount / total) * 100);

    navigate(`/score?score=${purityScore}`);
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Clash Royale Purity Test
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-slate-700 bg-opacity-60 shadow-lg rounded-xl p-6"
      >
      <div className="space-y-3 pr-2">
        {(questions as Question[]).map((q) => (
          <label
            key={q.id}
            className="flex items-start space-x-3 cursor-pointer"
          >
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-slate-400"
              checked={!!answers[q.id]}
              onChange={() => handleToggle(q.id)}
            />
            <span className="text-slate-100 leading-tight">{q.id + ". " + q.text}</span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </>
  );
}
