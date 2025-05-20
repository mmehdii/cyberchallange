'use client';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { PlayCircle, FileText, BookOpen, ArrowRight, Shield, Lock, Globe, SelectionBackground, ArrowBendDoubleUpRight } from 'phosphor-react';

export default function ResourcesPage() {
  return (
    <PageLayout
      title="Resource Hub"
      description="Explore additional cybersecurity resources."
    >
      <div className="px-4 py-3">
        <p className="mb-4">
          Deepen your cybersecurity knowledge with our curated collection of resources.
        </p>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <Link 
            href="/resources/videos"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <PlayCircle size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Videos</h3>
              <p className="text-sm text-muted">
                Watch instructional videos on cybersecurity topics
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link>
          
          <Link 
            href="/resources/articles"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <FileText size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Articles</h3>
              <p className="text-sm text-muted">
                Read in-depth articles about cybersecurity
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link>
          
          {/* <Link 
            href="/modules/protection/antivirusTool"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <Shield size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Antivirus Protection</h3>
              <p className="text-sm text-muted">
                Learn about protecting your devices with antivirus software
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link>
        

          <Link 
            href="/modules/protection/firewallTool"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <Globe size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Firewall Protection</h3>
              <p className="text-sm text-muted">
                Understanding how firewalls safeguard your network
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link>

          <Link 
            href="/modules/protection/privacyTool"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <Lock size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Privacy Protection</h3>
              <p className="text-sm text-muted">
                Learn about privacy best practices and scenarios
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link> */}

          <Link 
            href="/resources/glossary"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <BookOpen size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Glossary</h3>
              <p className="text-sm text-muted">
                Cybersecurity terms and definitions
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link>
          <Link 
            href="/modules/protection/tips"
            className="p-4 border rounded-xl flex items-center hover:border-[#ed1d26] hover:shadow-sm transition-all"
          >
            <div className="w-12 h-12 bg-[#ed1d26] bg-opacity-10 rounded-full flex items-center justify-center mr-4">
              <ArrowBendDoubleUpRight size={24} weight="fill" className="text-[#ed1d26]" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-1">Tips</h3>
              <p className="text-sm text-muted">
                Learn Additional Tips 
              </p>
            </div>
            <ArrowRight size={20} className="text-muted" />
          </Link>
        </div>
        
        <div className="p-4 bg-slate-100 rounded-xl mb-6">
          <h3 className="font-bold mb-2">Keep Learning</h3>
          <p className="text-sm">
            Cybersecurity is an evolving field. Stay informed about the latest threats, 
            techniques, and protection methods to keep yourself and your data safe.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}