'use client';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { EnvelopeSimple, Globe, GraduationCap, ShieldCheck } from 'phosphor-react';

export default function AboutPage() {
  return (
    <PageLayout
      title="About This Platform"
      description="Learn about the Cybersecurity Awareness Challenge."
    >
      <div className="px-4 py-3">
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Our Mission</h3>
          <p className="mb-4">
            The Cybersecurity Awareness Challenge is designed to educate high school students
            about essential cybersecurity concepts in an engaging, interactive format.
          </p>
          <p>
            Our goal is to equip the next generation with the knowledge and skills they need
            to protect themselves and others in an increasingly digital world.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Key Features</h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <GraduationCap size={24} weight="fill" className="text-[#ed1d26]" />
              </div>
              <div>
                <h4 className="font-medium">Interactive Learning</h4>
                <p className="text-sm text-muted">
                  Engaging modules that make cybersecurity education fun and accessible.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <ShieldCheck size={24} weight="fill" className="text-[#ed1d26]" />
              </div>
              <div>
                <h4 className="font-medium">Practical Simulations</h4>
                <p className="text-sm text-muted">
                  Real-world scenarios that teach you to identify and respond to threats.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Globe size={24} weight="fill" className="text-[#ed1d26]" />
              </div>
              <div>
                <h4 className="font-medium">Comprehensive Resources</h4>
                <p className="text-sm text-muted">
                  Curated videos, articles, and references to deepen your knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-100 rounded-xl p-4 mb-6">
          <h3 className="font-bold mb-2">Get in Touch</h3>
          <div className="flex items-center gap-2 mb-2">
            <EnvelopeSimple size={20} className="text-[#ed1d26]" />
            <a href="mailto:contact@cyberchallenge.edu" className="text-[#ed1d26] underline">
              contact@cyberchallenge.edu
            </a>
          </div>
          <p className="text-sm text-muted">
            Have questions or feedback? We would love to hear from you!
          </p>
        </div>
        
        <div className="text-center text-sm text-muted mb-6 pt-12">
          <p>© 2025 Cybersecurity Awareness Challenge</p>
          <p>All rights reserved.</p>
        </div>
        <div className='flex justify-center items-center w-full'>
        <Button href="/" className='w-full'>
          Back to Home
        </Button>
        </div>
        
      </div>
    </PageLayout>
  );
}