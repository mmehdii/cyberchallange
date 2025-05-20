'use client';

import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import { Lock, CheckCircle, XCircle, WarningCircle, Eye, EyeSlash, Info } from 'phosphor-react';

interface PasswordFeedback {
  text: string;
  passed: boolean;
  importance: 'high' | 'medium' | 'low';
}

export default function PasswordGamePage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<PasswordFeedback[]>([]);
  const [showTips, setShowTips] = useState(false);
  const [timeToCrack, setTimeToCrack] = useState<string>('');

  const checkPasswordStrength = (pass: string) => {
    const feedbackList: PasswordFeedback[] = [];
    let newScore = 0;

    // Length check
    if (pass.length >= 12) {
      newScore += 3;
      feedbackList.push({
        text: 'Password is at least 12 characters long',
        passed: true,
        importance: 'high'
      });
    } else {
      feedbackList.push({
        text: 'Password should be at least 12 characters long',
        passed: false,
        importance: 'high'
      });
    }

    const hasUppercase = /[A-Z]/.test(pass);
    const hasLowercase = /[a-z]/.test(pass);
    const hasNumbers = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

    if (hasUppercase && hasLowercase) {
      newScore += 2;
      feedbackList.push({
        text: 'Contains both uppercase and lowercase letters',
        passed: true,
        importance: 'high'
      });
    } else {
      feedbackList.push({
        text: 'Should include both uppercase and lowercase letters',
        passed: false,
        importance: 'high'
      });
    }

    if (hasNumbers) {
      newScore += 1;
      feedbackList.push({
        text: 'Contains numbers',
        passed: true,
        importance: 'medium'
      });
    } else {
      feedbackList.push({
        text: 'Should include numbers',
        passed: false,
        importance: 'medium'
      });
    }

    if (hasSpecial) {
      newScore += 2;
      feedbackList.push({
        text: 'Contains special characters',
        passed: true,
        importance: 'high'
      });
    } else {
      feedbackList.push({
        text: 'Should include special characters',
        passed: false,
        importance: 'high'
      });
    }

    if (!/(.)\1{2,}/.test(pass)) {
      newScore += 1;
      feedbackList.push({
        text: 'No repeated characters',
        passed: true,
        importance: 'medium'
      });
    } else {
      feedbackList.push({
        text: 'Avoid repeated characters',
        passed: false,
        importance: 'medium'
      });
    }

    if (!/password|123456|qwerty|admin/i.test(pass)) {
      newScore += 2;
      feedbackList.push({
        text: 'No common words or patterns',
        passed: true,
        importance: 'high'
      });
    } else {
      feedbackList.push({
        text: 'Avoid common words and patterns',
        passed: false,
        importance: 'high'
      });
    }

    // Entropy calculation
    const entropy = calculateEntropy(pass);
    if (entropy >= 80) {
      newScore += 2;
      feedbackList.push({
        text: 'High entropy (good randomness)',
        passed: true,
        importance: 'high'
      });
    } else {
      feedbackList.push({
        text: 'Could use more randomness',
        passed: false,
        importance: 'medium'
      });
    }

    setScore(newScore);
    setFeedback(feedbackList);
    setTimeToCrack(estimateTimeToCrack(entropy));
  };

  const calculateEntropy = (pass: string): number => {
    let charsetSize = 0;
    if (/[a-z]/.test(pass)) charsetSize += 26;
    if (/[A-Z]/.test(pass)) charsetSize += 26;
    if (/[0-9]/.test(pass)) charsetSize += 10;
    if (/[^a-zA-Z0-9]/.test(pass)) charsetSize += 32;
    return Math.log2(charsetSize) * pass.length;
  };

  const estimateTimeToCrack = (entropy: number): string => {
    const guessesPerSecond = 1e12;
    const secondsToCrack = Math.pow(2, entropy) / guessesPerSecond;

    if (secondsToCrack < 60) return 'less than a minute';
    if (secondsToCrack < 3600) return `${Math.ceil(secondsToCrack / 60)} minutes`;
    if (secondsToCrack < 86400) return `${Math.ceil(secondsToCrack / 3600)} hours`;
    if (secondsToCrack < 31536000) return `${Math.ceil(secondsToCrack / 86400)} days`;
    if (secondsToCrack < 3153600000) return `${Math.ceil(secondsToCrack / 31536000)} years`;
    return 'centuries';
  };

  useEffect(() => {
    if (password) {
      checkPasswordStrength(password);
    } else {
      setScore(0);
      setFeedback([]);
      setTimeToCrack('');
    }
  }, [password]);

  const getStrengthColor = () => {
    if (score >= 10) return 'text-green-500';
    if (score >= 7) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStrengthText = () => {
    if (score >= 10) return 'Strong';
    if (score >= 7) return 'Medium';
    return 'Weak';
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Password Game', href: '/modules/protection/password' }
  ];

  return (
    <PageLayout
      title="Password Strength Game"
      description="Test and improve your password creation skills."
    >
      <div className="px-4 py-3">
        <Breadcrumb items={breadcrumbItems} />
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock size={24} weight="fill" className="text-[#ed1d26]" />
              <h3 className="font-bold">Test Your Password</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password to test"
                  className="w-full p-3 border rounded-xl focus:outline-none focus:border-[#ed1d26] pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#ed1d26]"
                >
                  {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {password && (
                <div className="p-4 border rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold">Password Strength:</span>
                    <span className={`font-bold ${getStrengthColor()}`}>
                      {getStrengthText()}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          score >= 10 ? 'bg-green-500' : 
                          score >= 7 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}
                        style={{ width: `${(score / 13) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {feedback.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        {item.passed ? (
                          <CheckCircle size={16} weight="fill" className="text-green-500" />
                        ) : (
                          <XCircle size={16} weight="fill" className={getImportanceColor(item.importance)} />
                        )}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {timeToCrack && (
                    <div className="mt-4 p-3 bg-slate-100 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Info size={16} weight="fill" className="text-[#ed1d26]" />
                        <span className="font-medium">Estimated time to crack:</span>
                      </div>
                      <p className="text-sm mt-1">{timeToCrack}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-slate-100 p-4 rounded-xl mb-6">
            <div className="flex items-center gap-3 mb-3">
              <WarningCircle size={24} weight="fill" className="text-[#ed1d26]" />
              <h3 className="font-bold">Password Tips</h3>
            </div>
            
            <div className="space-y-2 text-sm">
              <p>• Use a mix of uppercase and lowercase letters</p>
              <p>• Include numbers and special characters</p>
              <p>• Make it at least 12 characters long</p>
              <p>• Avoid common words and patterns</p>
              <p>• Don not use personal information</p>
              <p>• Use a unique password for each account</p>
              <p>• Consider using a password manager</p>
              <p>• Enable two-factor authentication when available</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 md:max-w-md md:mx-auto">
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 