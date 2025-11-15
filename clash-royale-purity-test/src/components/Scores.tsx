import { useParams } from "react-router-dom";

export default function Scores() {
  const { score } = useParams<{ score: string }>();
  const numericScore = Number(score);

  const flavorText =
    numericScore >= 90
      ? "You're pure… like a level 1 account in Goblin Stadium."
      : numericScore >= 70
      ? "You've seen some things… but you're still mostly pure."
      : numericScore >= 50
      ? "You're mid… like an underleveled Hog Rider deck."
      : numericScore >= 30
      ? "You're deep in the Clash trenches."
      : "You are a certified Clash Royale degenerate.";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Your Clash Royale Purity Score
      </h1>

      {/* Score Card */}
      <div className="bg-slate-700 bg-opacity-60 shadow-lg rounded-xl p-8 text-center border border-slate-600">
        <div className="text-6xl font-bold text-blue-400 mb-4">
          {numericScore}
        </div>

        <div className="text-slate-200 text-lg font-medium mb-6">
          {flavorText}
        </div>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Retake Test
        </a>
      </div>
    </div>
  );
}
