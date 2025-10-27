import { useState, useEffect } from 'react';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { Question } from '../data/questions';
import { UserAnswer } from '../types/quiz';
import { formatTime } from '../utils/storage';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: UserAnswer[], timeTakenMs: number) => void;
  onBackToHome?: () => void;
}

export default function QuizScreen({ questions, onComplete, onBackToHome }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Determine current level based on question index
  // Level 1: questions 0-2 (3 questions)
  // Level 2: questions 3-6 (4 questions)
  // Level 3: questions 7-9 (3 questions)
  const getCurrentLevel = () => {
    if (currentQuestionIndex < 3) return 1;
    if (currentQuestionIndex < 7) return 2;
    return 3;
  };

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 1: return 'Beginner';
      case 2: return 'Intermediate';
      case 3: return 'Advanced';
      default: return '';
    }
  };

  const currentLevel = getCurrentLevel();

  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    setIsTimerRunning(false);

    const isCorrect = answer === currentQuestion.correctAnswer;
    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
    };

    setAnswers([...answers, userAnswer]);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      onComplete(answers, elapsedTime);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsTimerRunning(true);
    }
  };

  const getOptionClass = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!selectedAnswer) {
      return 'bg-white hover:bg-[#E8F5E9] border-2 border-transparent';
    }

    if (option === currentQuestion.correctAnswer) {
      return 'bg-[#3BAF49] border-2 border-[#3BAF49] text-white';
    }

    if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
      return 'bg-[#D0312C] border-2 border-[#D0312C] text-white';
    }

    return 'bg-white border-2 border-transparent opacity-60';
  };

  const renderOption = (option: 'A' | 'B' | 'C' | 'D', text: string) => {
    const optionLower = option.toLowerCase();

    return (
      <button
        onClick={() => handleAnswerSelect(option)}
        disabled={selectedAnswer !== null}
        className={`w-full text-left px-8 py-6 transition-all ${getOptionClass(
          option
        )} ${!selectedAnswer ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default'}`}
        style={{ borderRadius: '200px', boxShadow: '0 0 25px rgba(95, 37, 157, 0.5)' }}
      >
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center font-bold text-5xl bg-[#266FB5] text-white ">
            {optionLower}
          </div>
          <span className={`flex-1 text-3xl font-semibold ${!selectedAnswer ? 'text-[#373435]' : ''}`}>{text}</span>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen p-6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg3.png)' }}>
      {/* Home Button */}
      {onBackToHome && (
        <button
          onClick={onBackToHome}
          className="absolute top-16 left-12 hover:scale-110 transition-transform z-50"
        >
          <img src="/home.png" alt="Home" className="w-16 h-16" />
        </button>
      )}

      {/* Level Indicator */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-50">
        <div className="text-center">
          <div className="text-white text-2xl font-medium">LEVEL {currentLevel}</div>
          <div className="text-white text-6xl font-bold">{getLevelLabel(currentLevel)}</div>
        </div>
      </div>

      <div className="absolute top-12 right-12 flex flex-col items-center">
        <div className="relative flex flex-col items-center w-32 ">
          <img src="/clock.png" alt="clock" className="absolute top-0 left-1/2 transform -translate-x-1/2 object-contain" style={{ zIndex: 0, width: '100%', height: 'auto' }} />
          <div className="text-6xl font-bold text-[#266FB5] font-mono relative mt-6" style={{ zIndex: 1 }}>
            {Math.floor(elapsedTime / 1000)}
          </div>
          <div className="text-3xl mt-[-12%] text-[#266FB5] relative" style={{ zIndex: 1 }}>sec</div>
        </div>
      </div>

      <div className="w-full max-w-full px-20 pt-80">
        {/* Question Number Badge - Fixed Position */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-[#266FB5] border-[1px] border-dashed border-white flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
              <span className="text-7xl font-bold text-[#266FB5]">{currentQuestionIndex + 1}</span>
            </div>
          </div>
        </div>

        {/* Question Card - Fixed Height Container */}
        <div className="pb-10 mb-16 min-h-[120px] flex items-start justify-center">
          <h2 className="text-4xl font-extrabold text-white text-center leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options - Scrollable if needed */}
        <div className="mb-16">
          <div className="flex flex-col gap-8">
            {renderOption('A', currentQuestion.optionA)}
            {renderOption('B', currentQuestion.optionB)}
            {renderOption('C', currentQuestion.optionC)}
            {renderOption('D', currentQuestion.optionD)}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center pb-8">
          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`px-12 py-4 text-3xl font-bold transition-all border-2 ${
              selectedAnswer
                ? 'bg-transparent text-white border-white hover:scale-105 cursor-pointer'
                : 'bg-transparent text-white border-white cursor-not-allowed opacity-60'
            }`}
            style={{ borderRadius: '200px' }}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}
