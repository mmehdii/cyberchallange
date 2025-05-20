'use client';

import { modules } from '@/data/modules';
import ModuleCard from '@/components/ModuleCard';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { ShieldCheck, GraduationCap, ChartLineUp, Lock } from 'phosphor-react';

export default function Home() {
  return (
    <PageLayout
      heroImage="/images/hero.png"
      title="Cybersecurity Awareness Challenge"
      description="Become a cyber-savvy expert in 5 minutes."
    >
      <div className="px-4 py-6">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-lg text-muted mb-6">
            In today's digital world, cybersecurity knowledge is essential. 
            Our interactive modules help you learn how to protect yourself 
            from common cyber threats in a fun and engaging way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-slate-100 rounded-xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
                <h3 className="font-bold center">Interactive Learning</h3>
              </div>
              <p className="text-sm text-center text-muted">
                Hands-on experience with real-world scenarios
              </p>
            </div>
            
            <div className="p-4 bg-slate-100 rounded-xl">
              <div className="flex items-center gap-3 mb-2 justify-center ">
                <GraduationCap size={24} weight="fill" className="text-[#ed1d26]" />
                <h3 className="font-bold">Quick & Effective</h3>
              </div>
              <p className="text-sm text-muted">
                Learn essential skills in just 5 minutes
              </p>
            </div>
          </div>
<div className='flex justify-center items-center w-full'>
<Button href="/modules">
            Start Your Cybersecurity Journey
          </Button>

</div>

        </div>

        <h3 className="text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Explore Our Modules
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#ed1d26]/5 rounded-xl text-center">
          <Lock size={32} weight="fill" className="text-[#ed1d26] mx-auto mb-4" />
          <h3 className="text-lg font-bold mb-2">Why Cybersecurity Matters</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Every day, cyber threats become more sophisticated. 
            By learning these essential skills, you&apos;re not just protecting yourself - 
            you&apos;re contributing to a safer digital world for everyone.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}