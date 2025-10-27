import { useEffect, useState } from 'react';

// --- Mocked Types & Functions ---
// These are placeholders to make the component runnable,
// as the original import paths '../types/quiz' and '../utils/storage' are not available
// in this single-file environment.

/**
 * Mocked type based on '../types/quiz'
 */
interface QuizAttempt {
  name: string;
  score: number;
  timeTakenMs: number;
}

/**
 * Mocked function based on '../utils/storage'
 * Formats time in MM:SS:ms
 */
function formatTime(milliseconds: number): string {
  if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
    return '00:00:00';
  }
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // Get two digits for centiseconds (milliseconds / 10)
  const centiseconds = Math.floor((milliseconds % 1000) / 10);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;
}

/**
 * Mocked async function based on '../utils/storage'
 * Simulates fetching a user's rank.
 */
async function getRank(attemptId: string): Promise<number> {
  console.log(`Fetching rank for ${attemptId}...`);
  // Return a mock rank after a short delay to simulate an API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(42); // Return a sample rank (like in the example image)
    }, 500);
  });
}
// --- End of Mocked Types & Functions ---


interface ScoreScreenProps {
  attempt: QuizAttempt;
  attemptId: string;
  onViewLeaderboard: () => void;
  onRetakeQuiz: () => void; // This prop was in the original code, so I kept it.
  onBackToHome?: () => void;
}

// The scoring message logic from the original file
function getScoreMessage(score: number): { bold: string; normal: string; extra?: string } {
  if (score >= 8 && score <= 10) {
    return {
      bold: "you're a Solar Power Pro!",
      normal: "You've mastered the art of staying safe online. Your knowledge is a powerful tool. for 8-10 points",
    };
  } else if (score >= 5 && score <= 7) {
    return {
      bold: "So Close to Being a Pro!",
      normal: "You have a solid understanding of the topic. A little more practice and you'll be an expert!",
    };
  } else {
    return {
      bold: "Time to level up your skills!",
      normal: "Every expert starts somewhere. Keep exploring the topic to boost your knowledge.",
    };
  }
}

// The rank suffix logic from the original file
function getRankSuffix(rank: number): string {
  if (rank % 100 >= 11 && rank % 100 <= 13) {
    return 'th';
  }
  switch (rank % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export default function ScoreScreen({ attempt, attemptId, onViewLeaderboard, onRetakeQuiz, onBackToHome }: ScoreScreenProps) {
  const [rank, setRank] = useState<number>(0);

  if (!attempt) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg4.png)' }}>
        <p className="text-2xl text-white">Loading score...</p>
      </div>
    );
  }

  const scoreMessage = getScoreMessage(attempt.score);

  useEffect(() => {
    if (attemptId) {
      const fetchRank = async () => {
        const userRank = await getRank(attemptId);
        setRank(userRank);
      };
      fetchRank();
    }
  }, [attemptId]);

  return (
    // Reverted to original background image
    <div className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg4.png)' }}>
      {/* Home Button: Reverted to original img tag */}
      {onBackToHome && (
        <button
          onClick={onBackToHome}
          className="absolute top-12 left-12 hover:scale-110 transition-transform"
        >
          <img src="/home.png" alt="Home" className="w-16 h-16" />
        </button>
      )}

      <div className="w-full max-w-4xl text-center ">
        {/* Score */}
        <div className="mb-[2rem] mt-[-20rem] gap-20 flex flex-col items-center justify-center">
          {/* Reverted Score title and value styles */}
          <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#41B646] to-[#A8D61F] bg-clip-text text-transparent">
            Score
          </h1>
          <p className="text-[12rem] font-extrabold text-[#266FB5] ">
            {attempt.score}/10
          </p>
          <div className="w-full max-w-3xl flex flex-col items-center gap-4">
            <div className="w-full max-w-3xl h-1 bg-[linear-gradient(to_right,transparent,_#41B646_20%,_#A8D61F_80%,transparent)]"></div>
            <p className="text-7xl font-bold bg-gradient-to-r from-[#41B646] to-[#A8D61F] bg-clip-text text-transparent mt-8 mb-[-10rem]">
              Time : {formatTime(attempt.timeTakenMs)}
            </p></div>
        </div>

        {/* Time */}


        {/* Message and Rank: Reverted to original inline display, removed the green card */}
<div className="flex flex-col items-center justify-center text-center text-white leading-relaxed mt-[8rem] pt-10">

  {/* Greeting + Achievement */}
  <p className="mb-4 mt-[4rem] leading-[1.6]">
    
    <span className="block text-6xl font-semibold tracking-wide mt-16">
      Hi {attempt.name},
    </span>

    <span className="block text-6xl font-semibold mt-10">
      {scoreMessage.bold}
    </span>

    <span className="block text-5xl font-medium opacity-95 mt-16 leading-[1.6]">
      {scoreMessage.normal}
    </span>

    {scoreMessage.extra && (
      <span className="block text-3xl font-medium opacity-90 leading-[1.4] mt-10">
        {scoreMessage.extra}
      </span>
    )}

  </p>


          {/* Rank Display */}
          {attempt.score >= 8 && attempt.score <= 10 && (
            <p className="text-3xl mb-10">
              Your current rank is <span className="font-bold">{rank}{getRankSuffix(rank)}</span> among all participants!
            </p>
          )}

          {/* Leaderboard Button */}
          <button
            onClick={onViewLeaderboard}
            className="px-16 py-12 bg-[#266FB5] text-white text-5xl font-bold rounded-full shadow-lg hover:scale-105 transition mb-[-22rem] mt-40"
          >
            View Leader Board
          </button>

        </div>

      </div>
    </div>
  );
}

