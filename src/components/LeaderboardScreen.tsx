import { getTopLeaderboard, formatTime } from '../utils/storage';
import { useEffect, useState } from 'react';
import { QuizAttempt } from '../types/quiz';

interface LeaderboardScreenProps {
  onBack: () => void;
}

export default function LeaderboardScreen({ onBack }: LeaderboardScreenProps) {
  const [leaderboard, setLeaderboard] = useState<QuizAttempt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      const data = await getTopLeaderboard(10);
      console.log('Leaderboard data received:', data);
      console.log('Number of entries:', data.length);
      setLeaderboard(data);
      setLoading(false);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen p-6 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg5.png)' }}>
      <div className="max-w-7xl mx-auto mt-[28rem]">
        

        {/* Header Row */}
        <div className="grid grid-cols-[200px_1fr_240px]">
          <div className="text-4xl ml-4 font-bold text-white py-6 px-3 border-r-2 border-[#96989A]">Rank</div>
          <div className="text-4xl ml-4 font-bold text-white py-6 px-3 border-r-2 border-[#96989A]">Player Name</div>
          <div className="text-4xl ml-4 font-bold text-white py-6 px-3">Time <span className='font-normal text-[20px]'>(min.)</span> </div>
        </div>

        {/* Leaderboard Entries */}
        <div>
          {loading ? (
            <div className="text-center py-16">
              <p className="text-black text-2xl">Loading leaderboard...</p>
            </div>
          ) : (
            Array.from({ length: 10 }).map((_, index) => {
              const attempt = leaderboard[index];
              return (
                <div
                  key={index}
                  className="grid grid-cols-[200px_1fr_240px]"
                >
                  {/* Rank Column */}
                  <div className="flex items-center justify-center py-6 px-3 border-r-2 border-b-2 border-[#96989A]">
                    <div
                      className="w-36 h-14 flex items-center justify-center text-4xl font-bold text-[#96989A] relative z-10"
                      style={{ borderRadius: '200px' }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Name Column */}
                  <div className="flex items-center py-6 px-3 text-4xl  font-semibold text-[#96989A] border-r-2 border-b-2 border-[#96989A]">
                   <div className="ml-4"> {attempt?.name || ''} </div>
                  </div>

                  {/* Time Column */}
                  <div className="flex items-center justify-start py-6 px-3 border-b-2 border-[#96989A]">
                    <div
                      className="w-56 h-14 bg-white flex items-center text-left text-4xl font-bold text-[#96989A] relative z-10"
                      style={{ borderRadius: '200px' }}
                    >
                     <div className="ml-2"> {attempt ? formatTime(attempt.timeTakenMs) : ''}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Home Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={onBack}
            className="hover:scale-110 transition-transform"
          >
            <img src="/home.png" alt="Home" className="w-20 h-20 mt-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
