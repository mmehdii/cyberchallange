import { protectionTools } from '@/data/protection';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { notFound } from 'next/navigation';

interface ToolPageProps {
  params: {
    tool: string;
  }
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = protectionTools.find(t => t.id === params.tool);
  
  if (!tool) {
    notFound();
  }
  
  return (
    <PageLayout
      heroImage={tool.imagePath}
      title={tool.title}
      description={tool.description}
    >
      <div className="px-4 py-3">
        <div className="prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: tool.content }} />
        </div>
        
        <div className='w-full flex justify-center items-center '>
                  <Button href="/resources" variant="secondary" className="mt-4">
                  Back to Resources
                </Button>
                </div>
      </div>
    </PageLayout>
  );
}

// Generate static paths for all protection tools
export async function generateStaticParams() {
  return protectionTools.map(tool => ({
    tool: tool.id
  }));
}