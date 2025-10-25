import { Trophy, Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  onViewLeaderboard: () => void;
}

export default function StartScreen({ onStart, onViewLeaderboard }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg1.png)' }}>
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-12 mt-[46rem]">
          <button
            onClick={onViewLeaderboard}
            className="group inline-flex items-center gap-3 px-28 py-8 bg-[#266FB5] text-white text-6xl font-semibold hover:bg-[#1e5a94] transition-all hover:scale-105"
            style={{ borderRadius: '60px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            Leaderboard
          </button>

          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 px-40 py-8 bg-[#266FB5] text-white text-6xl font-semibold hover:bg-[#1e5a94] transition-all hover:scale-105"
            style={{ borderRadius: '60px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
