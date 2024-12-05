"use client";

import { PageLayout } from '@/components/PageLayout';
import { PageTransition } from '@/components/PageTransition';

export default function NowPage() {
  return (
    <PageLayout>
      <main className="mt-12">
        <PageTransition title="Now">
          <div className="space-y-6 text-[16px] leading-[28px] text-gray-600">
            <p>Currently working on:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Building a design system for a fintech startup</li>
              <li>Writing about design systems and component architecture</li>
              <li>Learning Rust and WebAssembly</li>
              <li>Reading "The Psychology of Money" by Morgan Housel</li>
            </ul>
            <p className="text-sm text-gray-500 mt-8">Last updated: April 2024</p>
          </div>
        </PageTransition>
      </main>
    </PageLayout>
  );
}