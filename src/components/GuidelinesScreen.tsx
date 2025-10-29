import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface GuidelinesScreenProps {
  onNext: () => void;
}

export default function GuidelinesScreen({ onNext }: GuidelinesScreenProps) {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    // Start countdown from 5 seconds
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden">
      {/* Guidelines Image - Full Screen */}
      <img
        src="/guideline.png"
        alt="Quiz Guidelines"
        className="w-full h-screen object-cover"
      />

      {/* Next Button - Positioned on top left */}
      <button
        onClick={onNext}
        className="group absolute bottom-40 left-20 inline-flex items-center gap-3 px-20 py-8 bg-[#266FB5] text-white text-4xl font-bold  transition-all hover:scale-105 z-10"
        style={{ borderRadius: '50px' }}
      >
        Next
        <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
      </button>

      {/* Timer Display (optional) */}
      {timeLeft > 0 && (
        <div className="absolute top-8 right-10 text-white text-xl font-semibold opacity-70 z-10">
          Auto-advancing in {timeLeft}s...
        </div>
      )}
    </div>
  );
}
