'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { phishingEmails } from '@/data/simulation';
import { CaretDown, WarningCircle, CheckCircle } from 'phosphor-react';
import { motion } from 'framer-motion';

export default function PhishingSimulationPage() {
  const router = useRouter();
  const [currentEmail] = useState(phishingEmails[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [identifiedFlags, setIdentifiedFlags] = useState<string[]>([]);
  
  const toggleFlag = (flagId: string) => {
    if (identifiedFlags.includes(flagId)) {
      setIdentifiedFlags(identifiedFlags.filter(id => id !== flagId));
    } else {
      setIdentifiedFlags([...identifiedFlags, flagId]);
    }
  };
  
  const handleContinue = () => {
    router.push('/modules/simulation/response');
  };
  
  return (
    <PageLayout
      title="Phishing Email Simulation"
      description="Analyze this email and identify signs of phishing."
    >
      <div className="px-4 py-3">
        <div className="border rounded-xl overflow-hidden mb-6">
          <div className="bg-slate-100 p-3 border-b">
            <div className="flex justify-between items-center mb-1">
              <div className="font-medium">{currentEmail.sender}</div>
              <div className="text-xs text-muted">{currentEmail.date}</div>
            </div>
            <div className="text-sm text-muted mb-1">
              From: {currentEmail.senderEmail}
            </div>
            <div className="text-sm font-medium">
              Subject: {currentEmail.subject}
            </div>
          </div>
          
          <div className="p-4 bg-white">
            <div 
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: currentEmail.body }}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-between w-full p-3 bg-secondary rounded-xl mb-2"
          >
            <span className="font-bold">Identify Red Flags</span>
            <CaretDown 
              size={20} 
              className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-3 border rounded-xl"
            >
              <p className="text-sm mb-3">
                Click on each red flag you can identify in this email:
              </p>
              
              <div className="space-y-2">
                {currentEmail.redFlags.map((flag) => (
                  <div 
                    key={flag.id}
                    onClick={() => toggleFlag(flag.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      identifiedFlags.includes(flag.id) 
                        ? 'border-[#ed1d26] bg-[#ed1d26] bg-opacity-5' 
                        : 'border-slate-200 hover:border-[#ed1d26]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {identifiedFlags.includes(flag.id) ? (
                        <CheckCircle size={20} weight="fill" className="text-[#ed1d26] flex-shrink-0 mt-0.5" />
                      ) : (
                        <WarningCircle size={20} className="text-slate-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{flag.description}</p>
                        {identifiedFlags.includes(flag.id) && (
                          <p className="text-xs text-muted mt-1">{flag.explanation}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 bg-slate-100 p-3 rounded-lg text-sm">
                <p>
                  You have identified <span className="font-bold">{identifiedFlags.length}</span> out of {currentEmail.redFlags.length} red flags.
                </p>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="flex flex-col gap-3 md:max-w-md md:mx-auto">
          <Button onClick={handleContinue}>
            Continue to Response Options
          </Button>
          <Button href="/modules/simulation" variant="secondary">
            Back to Simulation
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}