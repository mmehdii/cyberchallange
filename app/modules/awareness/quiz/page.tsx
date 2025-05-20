'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Quiz from '@/components/Quiz';
import { quizQuestions } from '@/data/awareness';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function QuizPage() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    setQuizCompleted(true);
  };
  
  return (
    <PageLayout
      title="Cyber Threats Quiz"
      description="Test your knowledge about cybersecurity."
    >
      {!quizCompleted ? (
        <Quiz questions={quizQuestions} onComplete={handleQuizComplete} />
      ) : (
        <motion.div 
          className="p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-slate-100 rounded-xl p-6 text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Quiz Completed!</h3>
            <p className="text-lg mb-4">
              Your score: <span className="font-bold text-[#ed1d26]">{score}/{quizQuestions.length}</span>
            </p>
            
            <div className="mb-4">
              {score === quizQuestions.length ? (
                <p>Perfect score! You are a cybersecurity expert!</p>
              ) : score >= quizQuestions.length * 0.7 ? (
                <p>Good job! You have a solid understanding of cybersecurity basics.</p>
              ) : (
                <p>You are on your way to becoming cyber-savvy. Keep learning!</p>
              )}
            </div>
            
            <div className="w-full max-w-sm mx-auto h-4 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#ed1d26]"
                style={{ width: `${(score / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 md:max-w-md md:mx-auto">
            <Button onClick={() => setQuizCompleted(false)}>
              Retry Quiz
            </Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </motion.div>
      )}
    </PageLayout>
  );
}