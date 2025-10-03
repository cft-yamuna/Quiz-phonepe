import { Trophy, Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  onViewLeaderboard: () => void;
}

export default function StartScreen({ onStart, onViewLeaderboard }: StartScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg1.png)' }}>
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-center gap-6 mt-[44rem]">
          <button
            onClick={onViewLeaderboard}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#5F259D] text-white text-4xl font-semibold hover:bg-[#4a1d7a] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            style={{ borderRadius: '60px' }}
          >
            Leaderboard
          </button>

          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 px-28 py-4 bg-[#5F259D] text-white text-4xl font-semibold hover:bg-[#4a1d7a] transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            style={{ borderRadius: '60px' }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
