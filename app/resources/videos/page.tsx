'use client';

import PageLayout from '@/components/PageLayout';
import { Suspense } from 'react';
import { resourcesData } from '@/data/resources';
import ResourceCard from '@/components/ResourceCard';
import Button from '@/components/Button';

export default function VideosPage() {
  const videoResources = resourcesData.filter(resource => resource.type === 'video');

  return (
    <PageLayout
      title="Educational Videos"
      description="Video resources to help you understand cybersecurity concepts."
    >
      <div className="px-4 py-3">
        <p className="mb-4">
          Watch these educational videos to enhance your understanding of cybersecurity.
        </p>
        
        {videoResources.map(resource => (
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