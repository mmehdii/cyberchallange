'use client';

import PageLayout from '@/components/PageLayout';
import { Suspense } from 'react';
import { resourcesData } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';
import Button from '@/components/Button';

export default function ArticlesPage() {
  // Filter only article resources
  const articleResources = resourcesData.filter(resource => 
    resource.type === 'article' || resource.type === 'guide'
  );

  return (
    <PageLayout
      title="Articles & Guides"
      description="In-depth articles and guides on cybersecurity topics."
    >
      <div className="px-4 py-3">
        <p className="mb-4">
          Read these articles and guides to deepen your understanding of cybersecurity concepts and best practices.
        </p>
        
        {articleResources.map(resource => (
          <Suspense key={resource.id} fallback={<div>Loading...</div>}>
            <ResourceCard resource={resource} />
          </Suspense>
        ))}
        
        <div className='w-full flex justify-center items-center '>
          <Button href="/resources" variant="secondary" className="mt-4">
          Back to Resources
        </Button>
        </div>
        
      </div>
    </PageLayout>
  );
}