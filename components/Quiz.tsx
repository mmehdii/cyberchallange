'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionSelect = (index: number) => {
    // First set the selected option
    setSelectedOption(index);
    
    // Check if answer is correct by comparing the selected index to the correct answer
    const correct = index === questions[currentQuestion].correctAnswer;
    
    // Update state based on correctness
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Don't update the score yet - we'll do that when moving to the next question
    // This prevents double-counting if a user selects multiple options
  };

  const handleNextQuestion = () => {
    // Only update score when moving to next question
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Check if this was the last question
    if (currentQuestion < questions.length - 1) {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      // Quiz is complete - pass final score to parent
      onComplete(score + (isCorrect ? 1 : 0));
    }
  };

  const currentQuizQuestion = questions[currentQuestion];

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      <div className="mb-6 md:mb-8 flex justify-between items-center">
        <p className="text-sm md:text-base text-muted">Question {currentQuestion + 1} of {questions.length}</p>
        <p className="text-sm md:text-base font-bold">Score: {score}</p>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">{currentQuizQuestion.question}</h2>
      
      <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
        {currentQuizQuestion.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={`w-full p-4 md:p-5 rounded-lg border text-left transition-colors ${
              selectedOption === index 
                ? showFeedback
                  ? isCorrect && selectedOption === index
                    ? 'border-green-500 bg-green-50'
                    : !isCorrect && selectedOption === index
                      ? 'border-red-500 bg-red-50'
                      : 'border-[#ed1d26] bg-[#ed1d26] bg-opacity-10'
                  : 'border-[#ed1d26] bg-[#ed1d26] bg-opacity-10'
                : 'border-secondary hover:border-[#ed1d26]'
            }`}
            whileTap={{ scale: 0.98 }}
            disabled={showFeedback}
          >
            <span className="text-base md:text-lg">{option}</span>
          </motion.button>
        ))}
      </div>
      
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 md:p-5 rounded-lg mb-6 md:mb-8 ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <p className="font-medium text-base md:text-lg">
            {isCorrect 
              ? '✓ Correct!' 
              : `✗ Incorrect. The correct answer is: ${
                  currentQuizQuestion.options[currentQuizQuestion.correctAnswer]
                }`
            }
          </p>
        </motion.div>
      )}
      
      <Button
        onClick={handleNextQuestion}
        disabled={selectedOption === null}
        className={`w-full md:max-w-md mx-auto ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </Button>
    </div>
  );
}