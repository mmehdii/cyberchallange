'use client';

import { modules } from '@/data/modules';
import ModuleCard from '@/components/ModuleCard';
import PageLayout from '@/components/PageLayout';
import { ShieldCheck, GraduationCap, BookOpen, Lock } from 'phosphor-react';
import Link from 'next/link';

export default function ModulesPage() {
  return (
    <PageLayout
      title="Cybersecurity Learning Hub"
      description="Master essential cybersecurity skills through our interactive modules."
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Why Learn Cybersecurity?</h2>
          <p className="text-lg text-muted mb-8">
            In todays digital world, cybersecurity knowledge is crucial for everyone. 
            Our interactive modules help you understand and protect against common cyber threats.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
                <h3 className="font-bold">Real-World Scenarios</h3>
              </div>
              <p className="text-muted">
                Learn through practical examples and interactive simulations based on actual cyber threats.
              </p>
            </div>
            
            <div className="p-6 bg-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={24} weight="fill" className="text-[#ed1d26]" />
                <h3 className="font-bold">Progressive Learning</h3>
              </div>
              <p className="text-muted">
                Start with the basics and gradually advance to more complex cybersecurity concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Recommended Learning Path</h2>
          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={module.id} className="relative group">
                {/* Module Card */}
                <div className="transform transition-transform group-hover:scale-[1.02]">
                  <ModuleCard module={module} />
                </div>
                
                {/* Learning Tips */}
                <div className="mt-6 p-6 bg-[#ed1d26]/5 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-4">What You will Learn:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted">
                    {getModuleLearningPoints(module.id)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 p-8 bg-[#ed1d26]/5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={24} weight="fill" className="text-[#ed1d26]" />
            <h3 className="text-xl font-bold">Additional Resources</h3>
          </div>
          <p className="text-muted mb-6">
            Want to learn more? Check out our comprehensive resources section for additional learning materials, 
            best practices, and cybersecurity tips.
          </p>
          <a href="/resources" className="text-[#ed1d26] hover:underline inline-flex items-center gap-2">
            Explore Resources
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
<br />
<br />

          <Link href="/modules/protection/tips" className="text-[#ed1d26] hover:underline inline-flex items-center gap-2">
          Additional Tips
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

function getModuleLearningPoints(moduleId: string) {
  switch (moduleId) {
    case 'phishing':
      return [
        'How to identify phishing emails and messages',
        'Common phishing tactics and red flags',
        'Best practices for email security',
        'How to report suspicious emails'
      ];
    case 'passwords':
      return [
        'Creating strong and memorable passwords',
        'Password management best practices',
        'Understanding password hashing',
        'Multi-factor authentication basics'
      ];
    case 'privacy':
      return [
        'Understanding online privacy risks',
        'Managing social media privacy settings',
        'Protecting personal information online',
        'Safe browsing practices'
      ];
    case 'quiz':
      return [
        'Common cyber threats and attacks',
        'Security best practices',
        'Incident response basics',
        'Cybersecurity terminology'
      ];
    default:
      return [];
  }
} 