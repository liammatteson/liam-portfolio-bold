import { PageLayout } from '@/components/PageLayout';
import { Projects } from '@/components/Projects';
import { ViewportBlur } from '@/components/ViewportBlur';

export default function Home() {
  return (
    <PageLayout>
      <div className="pb-14 mb-32">
        <div className="mt-12">
          <Projects />
        </div>
      </div>
      <ViewportBlur />
    </PageLayout>
  );
}