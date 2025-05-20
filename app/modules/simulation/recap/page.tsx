'use client';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { Trophy, ShieldCheck, BookOpen } from 'phosphor-react';

export default function RecapPage() {
  return (
    <PageLayout
      title="Simulation Complete"
      description="Great job completing the phishing simulation!"
    >
      <div className="px-4 py-3">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center">
            <Trophy size={48} weight="fill" className="text-[#ed1d26]" />
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
          <p>
            You've successfully completed the phishing email simulation and learned
            valuable skills to protect yourself against phishing attacks.
          </p>
        </div>
        
        <div className="bg-slate-100 rounded-xl p-4 mb-6">
          <h3 className="font-bold mb-3">Key Takeaways:</h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
              </div>
              <div>
                <h4 className="font-medium text-base">Identify Red Flags</h4>
                <p className="text-sm text-muted">
                  Look for suspicious sender addresses, grammatical errors, urgent language, 
                  and requests for personal information.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <BookOpen size={24} weight="fill" className="text-[#ed1d26]" />
              </div>
              <div>
                <h4 className="font-medium text-base">Respond Appropriately</h4>
                <p className="text-sm text-muted">
                  Never click suspicious links, don't reply to suspected phishing emails, and
                  contact organizations through official channels.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
              </div>
              <div>
                <h4 className="font-medium text-base">Report Incidents</h4>
                <p className="text-sm text-muted">
                  Report phishing attempts to your email provider, IT department, or relevant authorities
                  to help protect others.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <Button href="/modules/awareness/quiz">
            Take the Cyber Threats Quiz
          </Button>
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}