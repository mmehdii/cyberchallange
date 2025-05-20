'use client';
import { Resource } from '@/data/resources'; 
import { BookOpen, PlayCircle, FileText, CaretDown, CaretUp, SpinnerGap } from 'phosphor-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface ResourceCardProps {
  resource: Resource; 
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const searchParams = useSearchParams();
  const highlightedId = searchParams.get('highlight');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-expand if this resource is highlighted from search
  useEffect(() => {
    if (highlightedId === resource.id) {
      setIsExpanded(true);
      // Scroll to this element
      setTimeout(() => {
        const element = document.getElementById(resource.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add highlight effect
          element.classList.add('bg-yellow-50');
          setTimeout(() => {
            element.classList.remove('bg-yellow-50');
            element.classList.add('transition-colors', 'duration-1000');
          }, 2000);
        }
      }, 100);
    }
  }, [highlightedId, resource.id]);

  const getIcon = () => {
    switch (resource.type) {
      case 'video':
        return <PlayCircle size={24} weight="fill" className="text-[#ed1d26]" />;
      case 'article':
        return <FileText size={24} weight="fill" className="text-[#ed1d26]" />;
      case 'guide':
        return <BookOpen size={24} weight="fill" className="text-[#ed1d26]" />;
      default:
        return <BookOpen size={24} weight="fill" className="text-[#ed1d26]" />;
    }
  };

  const extractYouTubeID = (url: string) => {
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setIsLoading(true);
    }
  };

  return (
    <div id={resource.id} className="block p-4 md:p-6 border rounded-xl mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-4 md:gap-6">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{resource.title}</h3>
            <button 
              onClick={toggleExpand}
              className="flex items-center text-sm text-[#ed1d26] hover:text-[#ed1d26]/80 transition-colors"
            >
              {isExpanded ? (
                <>
                  <span className="mr-1">Close</span>
                  <CaretUp size={16} weight="bold" />
                </>
              ) : (
                <>
                  <span className="mr-1">{resource.type === 'video' ? 'Watch' : 'Read'}</span>
                  <CaretDown size={16} weight="bold" />
                </>
              )}
            </button>
          </div>
          <p className="text-sm md:text-base text-muted mb-3 md:mb-4">{resource.description}</p>
          <div className="flex justify-between items-center text-xs md:text-sm text-muted mb-4">
            <span>{resource.source}</span>
            <span>{resource.date}</span>
          </div>
          
          {/* Content section - shows when expanded */}
          {isExpanded && (
            <div className="mt-4">
              {/* Loading indicator */}
              {isLoading && (
                <div className="h-64 w-full bg-slate-100 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <SpinnerGap size={32} weight="bold" className="text-[#ed1d26] animate-spin" />
                    <p className="text-sm text-muted mt-2">Loading content...</p>
                  </div>
                </div>
              )}
              
              {/* Content iframe - works for both videos and articles */}
              <div className={`relative w-full ${isLoading ? 'hidden' : 'block'}`}>
                {resource.type === 'video' && extractYouTubeID(resource.link) ? (
                  // YouTube video iframe
                  <div className="relative aspect-[16/9] w-full">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${extractYouTubeID(resource.link)}`}
                      title={resource.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={handleIframeLoad}
                    ></iframe>
                  </div>
                ) : (
                  // Article/guide iframe
                  <div className="relative w-full h-[600px] border rounded-lg overflow-hidden">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={resource.link}
                      title={resource.title}
                      frameBorder="0"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      onLoad={handleIframeLoad}
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}