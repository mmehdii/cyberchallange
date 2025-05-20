import PageLayout from '@/components/PageLayout';
import { awarenessTopic } from '@/data/awareness';
import Link from 'next/link';
import { ShieldCheck, GraduationCap, ChartLineUp } from 'phosphor-react';

export default function AwarenessPage() {
  return (
    <PageLayout
      heroImage="/images/awareness-hero.png"
      title="Cyber Awareness"
      description="Learn about common cyber threats and how to protect yourself."
    >
      <div className="px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-lg mb-4">
              Welcome to the Cyber Awareness module! This section covers various aspects of cybersecurity 
              to help you identify and protect against common threats.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-slate-100 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
                  <h3 className="font-bold">3 Key Topics</h3>
                </div>
                <p className="text-sm text-muted">
                  Covering essential cybersecurity concepts
                </p>
              </div>
              
              <div className="p-4 bg-slate-100 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap size={24} weight="fill" className="text-[#ed1d26]" />
                  <h3 className="font-bold">Interactive Learning</h3>
                </div>
                <p className="text-sm text-muted">
                  Engaging content with practical examples
                </p>
              </div>
              
              <div className="p-4 bg-slate-100 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <ChartLineUp size={24} weight="fill" className="text-[#ed1d26]" />
                  <h3 className="font-bold">Progress Tracking</h3>
                </div>
                <p className="text-sm text-muted">
                  Track your learning journey
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4">Select a Topic:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {awarenessTopic.map((topic) => (
              <Link 
                key={topic.id}
                href={`/modules/awareness/${topic.id}`}
                className="block p-4 border rounded-xl hover:border-[#ed1d26] hover:shadow-md transition-all bg-white"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-20 h-20 rounded-lg bg-center bg-cover flex-shrink-0"
                    style={{ backgroundImage: `url(${topic.imagePath})` }}
                  />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{topic.title}</h4>
                    <p className="text-sm text-muted mb-3">{topic.description}</p>
                    <span className="text-[#ed1d26] text-sm font-medium">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-slate-100 p-4 rounded-xl mb-6">
            <h3 className="font-bold mb-2">Ready to Test Your Knowledge?</h3>
            <p className="text-sm mb-4">
              Take our quiz to see how well you understand these cybersecurity concepts.
            </p>
            <Link 
              href="/modules/awareness/quiz" 
              className="block w-full bg-[#ed1d26] text-white text-center py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all"
            >
              Take the Cyber Threats Quiz
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}