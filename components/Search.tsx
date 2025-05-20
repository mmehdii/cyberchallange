'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MagnifyingGlass, X } from 'phosphor-react';
import { resourcesData } from '@/data/resources';
import { glossaryTerms } from '@/data/resources';
import { modules } from '@/data/modules';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'module' | 'resource' | 'glossary';
  resourceType?: 'video' | 'article' | 'guide';
  link: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setSearchQuery('');
    setResults([]);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      closeSearch();
    }
  }, [closeSearch]);
  
  // Close search when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];

    // Search in modules
    modules.forEach(module => {
      if (
        module.title.toLowerCase().includes(query.toLowerCase()) ||
        module.description.toLowerCase().includes(query.toLowerCase())
      ) {
        searchResults.push({
          id: module.id,
          title: module.title,
          description: module.description,
          type: 'module',
          link: module.route
        });
      }
    });

    // Search in resources
    resourcesData.forEach(resource => {
      if (
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase())
      ) {
        // Determine correct path based on resource type
        const resourcePath = resource.type === 'video' 
          ? `/resources/videos?highlight=${resource.id}` 
          : `/resources/articles?highlight=${resource.id}`;
          
        searchResults.push({
          id: resource.id,
          title: resource.title,
          description: resource.description,
          type: 'resource',
          resourceType: resource.type,
          link: resourcePath
        });
      }
    });

    // Search in glossary
    glossaryTerms.forEach(term => {
      if (
        term.term.toLowerCase().includes(query.toLowerCase()) ||
        term.definition.toLowerCase().includes(query.toLowerCase())
      ) {
        searchResults.push({
          id: term.term,
          title: term.term,
          description: term.definition,
          type: 'glossary',
          link: '/resources/glossary?term=' + encodeURIComponent(term.term)
        });
      }
    });

    setResults(searchResults);
  };

  const getTypeIcon = (type: string, resourceType?: string) => {
    switch (type) {
      case 'module':
        return '📚';
      case 'resource':
        if (resourceType === 'video') return '🎬';
        if (resourceType === 'article') return '📄';
        if (resourceType === 'guide') return '📘';
        return '🔗';
      case 'glossary':
        return '📖';
      default:
        return '🔍';
    }
  };

  const handleResultClick = (result: SearchResult) => {
    router.push(result.link);
    closeSearch();
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
      >
        <MagnifyingGlass size={24} weight="regular" className="text-dark" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <MagnifyingGlass size={20} weight="regular" className="text-muted" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search modules, resources, and terms..."
                className="flex-1 outline-none text-sm"
              />
              <button
                onClick={closeSearch}
                className="text-muted hover:text-dark transition-colors"
              >
                <X size={20} weight="regular" />
              </button>
            </div>

            {results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg">{getTypeIcon(result.type, result.resourceType)}</span>
                      <div>
                        <h3 className="font-medium text-dark">{result.title}</h3>
                        <p className="text-sm text-muted line-clamp-2">{result.description}</p>
                        <span className="text-xs text-[#ed1d26] mt-1 block">
                          {result.type === 'resource' ? 
                            (result.resourceType === 'video' ? 'Video' : 'Article/Guide') : 
                            (result.type === 'module' ? 'Module' : 'Glossary Term')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchQuery ? (
              <p className="text-sm text-muted text-center py-4">
                No results found for "{searchQuery}"
              </p>
            ) : (
              <div className="text-sm text-muted">
                <p className="mb-2">Search for:</p>
                <ul className="space-y-1">
                  <li>• Cybersecurity modules</li>
                  <li>• Educational resources</li>
                  <li>• Glossary terms</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}