"use client";

import { PageLayout } from '@/components/PageLayout';
import { PageTransition } from '@/components/PageTransition';

export default function ConnectPage() {
  return (
    <PageLayout>
      <main className="mt-12">
        <PageTransition title="Connect">
          <div className="space-y-4 text-[16px] leading-[28px] text-gray-600">
            <p>Feel free to reach out through any of these channels:</p>
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="block text-[16px] leading-6 text-gray-600 hover:text-gray-900">Email</a>
              <a href="https://twitter.com" className="block text-[16px] leading-6 text-gray-600 hover:text-gray-900">Twitter</a>
              <a href="https://linkedin.com" className="block text-[16px] leading-6 text-gray-600 hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </PageTransition>
      </main>
    </PageLayout>
  );
}