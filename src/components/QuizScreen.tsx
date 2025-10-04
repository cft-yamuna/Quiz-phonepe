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
          <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-4xl border-2 bg-[#B3E5FC] text-[#5F259D] border-dashed border-[#5F259D]">
            {optionLower}
          </div>
          <span className={`flex-1 text-3xl font-semibold ${!selectedAnswer ? 'text-[#5F259D]' : ''}`}>{text}</span>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg3.png)' }}>
      {/* Home Button */}
      {onBackToHome && (
        <button
          onClick={onBackToHome}
          className="absolute top-12 left-12 hover:scale-110 transition-transform z-50"
        >
          <img src="/home.png" alt="Home" className="w-16 h-16" />
        </button>
      )}

      <div className="absolute top-12 right-12 flex flex-col items-center">
        <div className="relative flex flex-col items-center w-32 ">
          <img src="/clock.png" alt="clock" className="absolute top-0 left-1/2 transform -translate-x-1/2 object-contain" style={{ zIndex: 0, width: '100%', height: 'auto' }} />
          <div className="text-6xl font-bold text-[#5F259D] font-mono relative mt-6" style={{ zIndex: 1 }}>
            {Math.floor(elapsedTime / 1000)}
          </div>
          <div className="text-3xl mt-[-12%] text-[#5F259D] relative" style={{ zIndex: 1 }}>sec</div>
        </div>
      </div>

      <div className="w-full max-w-8xl px-40 ">
        {/* Question Number Badge - Overlapping */}
        <div className="flex justify-center mb-[-40px] relative z-10">
          <div className="w-20 h-20 rounded-full bg-[#B3E5FC] border-2 border-dashed border-[#5F259D] flex items-center justify-center">
            <span className="text-4xl font-bold text-[#5F259D] ">{currentQuestionIndex + 1}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white px-12 pt-16 pb-10 mb-16" style={{ borderRadius: '200px', boxShadow: '0 0 25px rgba(95, 37, 157, 0.5)' }}>
          <h2 className="text-4xl font-bold text-[#5F259D] text-center leading-relaxed" style={{ fontFamily: 'extrabold' }} >
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="mb-16 ">
          <div className="grid grid-cols-2 gap-32 mb-10">
            {renderOption('A', currentQuestion.optionA)}
            {renderOption('B', currentQuestion.optionB)}
          </div>
          <div className="grid grid-cols-2 gap-32">
            {renderOption('C', currentQuestion.optionC)}
            {renderOption('D', currentQuestion.optionD)}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`px-12 py-4 text-3xl font-bold transition-all ${
              selectedAnswer
                ? 'bg-[#5F259D] text-white hover:bg-[#4a1d7a] hover:scale-105 cursor-pointer'
                : 'bg-white text-[#5F259D] cursor-not-allowed opacity-60'
            }`}
            style={{ borderRadius: '200px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}
