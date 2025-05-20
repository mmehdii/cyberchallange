import { awarenessTopic } from '@/data/awareness';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import { notFound } from 'next/navigation';

interface TopicPageProps {
  params: {
    topic: string;
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = awarenessTopic.find(t => t.id === params.topic);
  
  if (!topic) {
    notFound();
  }
  
  return (
    <PageLayout
      heroImage={topic.imagePath}
      title={topic.title}
      description={topic.description}
    >
      <div className="px-4 py-3">
        <div className="prose prose-sm max-w-none">
          <div dangerouslySetInnerHTML={{ __html: topic.content }} />
        </div>
        
        <div className="mt-6 flex flex-col gap-3 md:max-w-md md:mx-auto">
          <Button href="/modules/awareness">
            Back to Topics
          </Button>
          <Button href="/modules/awareness/quiz" variant="secondary">
            Take the Quiz
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}

export async function generateStaticParams() {
  return awarenessTopic.map(topic => ({
    topic: topic.id
  }));
}