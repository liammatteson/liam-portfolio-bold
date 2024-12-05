import { PageLayout } from '@/components/PageLayout';
import { PageTitle } from '@/components/PageTitle';

export default function AdminPage() {
  return (
    <PageLayout>
      <main className="mt-24">
        <PageTitle>Admin</PageTitle>
        <div className="space-y-8">
          <p className="text-[16px] leading-[28px] text-gray-600 max-w-[720px]">
            Admin dashboard content goes here.
          </p>
        </div>
      </main>
    </PageLayout>
  );
}