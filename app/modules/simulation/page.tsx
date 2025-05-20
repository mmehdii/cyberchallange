'use client';

import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';
import { ShieldCheck, GraduationCap, ChartLineUp, Warning, CheckCircle, ArrowRight, Play } from 'phosphor-react';

export default function SimulationPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Email Simulation', href: '/modules/simulation' }
  ];

  return (
    <PageLayout
      heroImage="/images/simulation-hero.png"
      title="Email Simulation"
      description="Practice identifying phishing emails in a safe environment."
    >
      <div className="px-4 py-3">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Learn About Phishing?</h2>
            <p className="text-lg text-muted mb-6">
              Phishing attacks are one of the most common and dangerous cyber threats. 
              This simulation helps you develop the skills to identify and avoid phishing attempts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
                  <h3 className="font-bold">Real Scenarios</h3>
                </div>
                <p className="text-sm text-muted">
                  Based on actual phishing attempts and common tactics used by attackers
                </p>
              </div>
              
              <div className="p-4 bg-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap size={24} weight="fill" className="text-[#ed1d26]" />
                  <h3 className="font-bold">Interactive Learning</h3>
                </div>
                <p className="text-sm text-muted">
                  Hands-on experience with immediate feedback and explanations
                </p>
              </div>
              
              <div className="p-4 bg-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <ChartLineUp size={24} weight="fill" className="text-[#ed1d26]" />
                  <h3 className="font-bold">Progress Tracking</h3>
                </div>
                <p className="text-sm text-muted">
                  Track your improvement and identify areas for growth
                </p>
              </div>
            </div>
          </div>

          {/* Educational Content */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">What to Look For</h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Warning size={24} weight="fill" className="text-red-500" />
                  <h4 className="font-bold">Common Red Flags</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li>Urgent or threatening language</li>
                  <li>Requests for personal information</li>
                  <li>Suspicious sender email addresses</li>
                  <li>Poor grammar and spelling</li>
                  <li>Unexpected attachments or links</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle size={24} weight="fill" className="text-green-500" />
                  <h4 className="font-bold">Safe Practices</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted">
                  <li>Verify sender email addresses</li>
                  <li>Hover over links before clicking</li>
                  <li>Never share sensitive information via email</li>
                  <li>Report suspicious emails to your IT department</li>
                  <li>Use multi-factor authentication</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <Button href="/modules/simulation/phishing" className='w-full group'>
              <div className="flex items-center justify-center gap-2">
                <span>Start Simulation</span>
                <Play size={20} weight="fill" className="transform group-hover:scale-110 transition-transform" />
              </div>
            </Button>
            <Button href="/" variant="secondary" className='w-full group'>
              <div className="flex items-center justify-center gap-2">
                <span>Back to Home</span>
                <ArrowRight size={20} weight="bold" className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}