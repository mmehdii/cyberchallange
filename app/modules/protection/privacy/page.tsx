'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import { Shield, CheckCircle, XCircle, WarningCircle } from 'phosphor-react';

interface Scenario {
  question: string;
  options: {
    text: string;
    correct: boolean;
    explanation: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    question: "You receive an email from your bank asking you to verify your account details. What should you do?",
    options: [
      {
        text: "Click the link and enter your details",
        correct: false,
        explanation: "Never click links in unsolicited emails. Banks never ask for sensitive information via email."
      },
      {
        text: "Call your bank using the number on their official website",
        correct: true,
        explanation: "Always verify requests by contacting the organization directly using official contact information."
      },
      {
        text: "Forward the email to your bank's customer service",
        correct: false,
        explanation: "Forwarding suspicious emails can spread malware. Report phishing attempts through official channels."
      }
    ]
  },
  {
    question: "A social media app requests access to your contacts. What's the best approach?",
    options: [
      {
        text: "Allow access to all contacts",
        correct: false,
        explanation: "Sharing all contacts unnecessarily exposes your contacts' information."
      },
      {
        text: "Deny access and use alternative sharing methods",
        correct: true,
        explanation: "Only share what's necessary. Use direct sharing features instead of granting broad access."
      },
      {
        text: "Allow access but only for specific contacts",
        correct: false,
        explanation: "Even selective access can expose more information than necessary."
      }
    ]
  },
  {
    question: "You're using a public Wi-Fi network. What security measures should you take?",
    options: [
      {
        text: "Use a VPN and avoid sensitive transactions",
        correct: true,
        explanation: "A VPN encrypts your connection, and avoiding sensitive activities adds an extra layer of security."
      },
      {
        text: "Use the network normally, it's probably safe",
        correct: false,
        explanation: "Public Wi-Fi networks are often unsecured and can be monitored by attackers."
      },
      {
        text: "Only use websites with HTTPS",
        correct: false,
        explanation: "While HTTPS helps, it's not enough protection on public networks."
      }
    ]
  }
];

export default function PrivacyGamePage() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setShowExplanation(true);
    if (scenarios[currentScenario].options[index].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setCurrentScenario(currentScenario + 1);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
  };

  const currentQuestion = scenarios[currentScenario];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Privacy Game', href: '/modules/protection/privacy' }
  ];

  return (
    <PageLayout
      title="Privacy Scenario Game"
      description="Test your knowledge of privacy best practices."
    >
      <div className="px-4 py-3">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} weight="fill" className="text-[#ed1d26]" />
              <h3 className="font-bold">Scenario {currentScenario + 1} of {scenarios.length}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 border rounded-xl">
                <p className="font-medium mb-4">{currentQuestion.question}</p>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      disabled={showExplanation}
                      className={`w-full p-3 text-left border rounded-xl transition-colors
                        ${selectedOption === index 
                          ? option.correct 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-red-500 bg-red-50'
                          : 'hover:border-[#ed1d26]'
                        }
                        ${showExplanation ? 'cursor-default' : 'cursor-pointer'}
                      `}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
                
                {showExplanation && (
                  <div className="mt-4 p-3 bg-slate-100 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      {currentQuestion.options[selectedOption!].correct ? (
                        <CheckCircle size={20} weight="fill" className="text-green-500" />
                      ) : (
                        <XCircle size={20} weight="fill" className="text-red-500" />
                      )}
                      <span className="font-medium">
                        {currentQuestion.options[selectedOption!].correct ? 'Correct!' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-sm">
                      {currentQuestion.options[selectedOption!].explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 p-4 rounded-xl mb-6">
            <div className="flex items-center gap-3 mb-3">
              <WarningCircle size={24} weight="fill" className="text-[#ed1d26]" />
              <h3 className="font-bold">Privacy Tips</h3>
            </div>
            
            <div className="space-y-2 text-sm">
              <p>• Always verify requests for personal information</p>
              <p>• Be cautious with app permissions</p>
              <p>• Use strong, unique passwords</p>
              <p>• Enable two-factor authentication</p>
              <p>• Regularly review privacy settings</p>
              <p>• Be mindful of what you share online</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 md:max-w-md md:mx-auto">
            {currentScenario < scenarios.length - 1 ? (
              <Button 
                onClick={handleNext}
                disabled={!showExplanation}
              >
                Next Scenario
              </Button>
            ) : (
              <Button onClick={handleRestart}>
                Play Again
              </Button>
            )}
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 