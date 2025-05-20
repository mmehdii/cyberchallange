'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { glossaryTerms } from '@/data/resources';
import Button from '@/components/Button';
import { MagnifyingGlass } from 'phosphor-react';

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTerms = glossaryTerms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <PageLayout
      title="Cybersecurity Glossary"
      description="Common terms and definitions in cybersecurity."
    >
      <div className="px-4 py-3">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlass size={20} className="text-muted" />
          </div>
          <input
            type="text"
            placeholder="Search terms or definitions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div className="space-y-4 mb-6">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted">No matching terms found.</p>
            </div>
          ) : (
            filteredTerms.map((term, index) => (
              <div 
                key={index} 
                className="p-4 border rounded-xl"
              >
                <h3 className="font-bold mb-1">{term.term}</h3>
                <p className="text-sm text-muted">{term.definition}</p>
              </div>
            ))
          )}
        </div>
        
        <div className="flex flex-col gap-3 md:max-w-md md:mx-auto">
          <Button href="/resources" variant="secondary">
            Back to Resources
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}