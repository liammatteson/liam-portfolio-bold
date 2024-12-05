"use client";

import { PageLayout } from '@/components/PageLayout';
import { PageTransition } from '@/components/PageTransition';

export default function AboutPage() {
  return (
    <PageLayout>
      <main className="mt-12">
        <PageTransition title="About me">
          <div className="space-y-8 text-[16px] leading-[28px] text-gray-600">
            <p>My focus is on distilling ambiguity into clarity.</p>
            <p>I have a deep-seated desire to solve complex problems.</p>
            <p>Creativity and craftsmanship, blended with systems thinking are top-of-mind for shipping quality experiences fast.</p>
            <p>I thrive in collaborative environments where camaraderie can be built – where uncertainty is comfort, and riffing on ideas is welcomed, with plenty of throw away work.</p>
            <p>I seek to gain context and approach problems pragmatically, whether that's establishing a design system, working on a product doc, doing a napkin sketch, or prototyping an idea.</p>
            <p>I strive to find informed simplicity through iteration.</p>
            <p>In my free time, I enjoy improving my cooking skills – recently bought Matty Matheson's new book and it's great! I also enjoy running, lifting, and an occasional weekend pickleball match.</p>
          </div>
        </PageTransition>
      </main>
    </PageLayout>
  );
}