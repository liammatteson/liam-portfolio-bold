"use client";

import { PageLayout } from '@/components/PageLayout';
import { PageTransition } from '@/components/PageTransition';

export default function PeoplePage() {
  return (
    <PageLayout>
      <main className="mt-12">
        <PageTransition title="People">
          <div className="text-[16px] leading-[28px] text-gray-600">
            <p className="mb-8">
              A collection of remarkable individuals I've had the pleasure to work with and learn from.
            </p>
            <div className="space-y-8">
              {['Design', 'Engineering', 'Product'].map((category) => (
                <div key={category}>
                  <h2 className="text-[14px] leading-4 text-gray-500 mb-4">{category}</h2>
                  <div className="space-y-4">
                    <a href="#" className="block text-[16px] leading-6 text-gray-600 hover:text-gray-900">Sarah Chen</a>
                    <a href="#" className="block text-[16px] leading-6 text-gray-600 hover:text-gray-900">Michael Park</a>
                    <a href="#" className="block text-[16px] leading-6 text-gray-600 hover:text-gray-900">Emma Rodriguez</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageTransition>
      </main>
    </PageLayout>
  );
}