'use client';

import PageLayout from '@/components/PageLayout';
import { protectionTools } from '@/data/protection';
import Link from 'next/link';
import Button from '@/components/Button';
import Breadcrumb from '@/components/Breadcrumb';

export default function ProtectionPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Protection', href: '/modules/protection' }
  ];

  return (
    <PageLayout
      heroImage="/images/protection-hero.png"
      title="Protection Tools"
      description="Discover tools and techniques to protect your digital life."
    >
      <div className="px-4 py-3">
        <Breadcrumb items={breadcrumbItems} />
        
        <p className="mb-4">
          Protecting yourself online requires using the right tools and following best practices.
          Explore the various protection methods to enhance your cybersecurity.
        </p>
        
        <h3 className="text-lg font-bold mb-3">Protection Tools:</h3>
        
        <div className="space-y-4 mb-6">
          {protectionTools.map((tool) => (
            <Link 
              key={tool.id}
              href={`/modules/protection/${tool.id}`}
              className="block p-4 border rounded-xl hover:border-[#ed1d26] hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-lg bg-center bg-cover"
                  style={{ backgroundImage: `url(${tool.imagePath})` }}
                />
                <div>
                  <h4 className="font-bold">{tool.title}</h4>
                  <p className="text-sm text-muted">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <Button href="/modules/protection/tips">
            Protection Tips
          </Button>
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}