'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { phishingResponses } from '@/data/simulation';
import { CheckCircle, XCircle } from 'phosphor-react';
import { motion } from 'framer-motion';

export default function ResponsePage() {
  const router = useRouter();
  const [selectedResponse, setSelectedResponse] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleResponseSelect = (responseId: string) => {
    setSelectedResponse(responseId);
    setShowFeedback(true);
  };
  
  const handleContinue = () => {
    router.push('/modules/simulation/recap');
  };
  
  const selectedResponseDetails = selectedResponse 
    ? phishingResponses.find(r => r.id === selectedResponse) 
    : null;

  const isCorrectResponse = selectedResponseDetails?.isCorrect || false;
  
  return (
    <PageLayout
      title="How Will You Respond?"
      description="Choose the best way to respond to the suspicious email."
    >
      <div className="px-4 py-3">
        <p className="mb-4">
          Now that you've analyzed the email, choose the most appropriate response:
        </p>
        
        <div className="space-y-3 mb-6">
          {phishingResponses.map((response) => (
            <button
              key={response.id}
              onClick={() => handleResponseSelect(response.id)}
              disabled={showFeedback}
              className={`w-full p-4 rounded-xl border text-left transition-all ${
                selectedResponse === response.id 
                  ? response.isCorrect 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-red-500 bg-red-50' 
                  : 'border-slate-200 hover:border-[#ed1d26]'
              }`}
            >
              <div className="flex items-start gap-3">
                {showFeedback && selectedResponse === response.id && (
                  <div className="flex-shrink-0 mt-0.5">
                    {response.isCorrect ? (
                      <CheckCircle size={20} weight="fill" className="text-green-500" />
                    ) : (
                      <XCircle size={20} weight="fill" className="text-red-500" />
                    )}
                  </div>
                )}
                <div>
                  <h4 className="font-bold mb-1">{response.title}</h4>
                  <p className="text-sm text-muted">{response.description}</p>
                  
                  {showFeedback && selectedResponse === response.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 text-sm"
                    >
                      <p className={response.isCorrect ? 'text-green-700' : 'text-red-700'}>
                        {response.feedback}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {showFeedback && (
          <div className="mb-6">
            <h3 className="font-bold mb-2">Overall Response Strategy:</h3>
            <div className="p-3 bg-slate-100 rounded-xl text-sm">
              <p className="mb-2">
                When dealing with suspicious emails, remember these key principles:
              </p>
              <ul className="space-y-1">
                <li>• Never click links or download attachments from suspicious emails</li>
                <li>• Don't reply to suspected phishing emails</li>
                <li>• Contact organizations through their official channels</li>
                <li>• Report phishing attempts to appropriate parties</li>
              </ul>
            </div>
          </div>
        )}
        
        <div className="flex flex-col gap-3 md:max-w-md md:mx-auto">
          {isCorrectResponse && showFeedback && (
            <Button 
              onClick={handleContinue}
            >
              Continue to Recap
            </Button>
          )}
          
          {showFeedback && !isCorrectResponse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
            >
              <p className="text-sm text-yellow-800">
                Pleae Analyze the email again and choose the best response.
              </p>
            </motion.div>
          )}
          
          <Button href="/modules/simulation/phishing" variant="secondary">
            Back to Email Analysis
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}