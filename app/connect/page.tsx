"use client";

import { PageLayout } from '@/components/PageLayout';
import { PageTransition } from '@/components/PageTransition';
import Image from 'next/image';

export default function ConnectPage() {
  return (
    <PageLayout>
      <main className="mt-12 mb-32">
        <PageTransition title="Connect">
          <div className="relative w-full aspect-[448/272] mb-8">
            <Image
              src="/images/optimized/Handwave.jpg"
              alt="Wave hello"
              fill
              className="object-cover object-[center_65%] rounded-[6px]"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 896px"
            />
          </div>
          <div className="space-y-4 text-[16px] leading-[28px] text-gray-600">
            <p>Feel free to reach out through any of these channels:</p>
            <div className="space-y-4">
              <a href="mailto:liamfmatteson@gmail.com" className="block text-[16px] leading-6 font-medium underline decoration-[#ECEDEC] decoration-[1.5px] underline-offset-[3px] [text-decoration-skip-ink:none] transition-colors duration-200 hover:text-black">Email</a>
              <a href="https://x.com/liamfmatteson" className="block text-[16px] leading-6 font-medium underline decoration-[#ECEDEC] decoration-[1.5px] underline-offset-[3px] [text-decoration-skip-ink:none] transition-colors duration-200 hover:text-black">Twitter</a>
              <a href="https://www.linkedin.com/in/liammatteson/" className="block text-[16px] leading-6 font-medium underline decoration-[#ECEDEC] decoration-[1.5px] underline-offset-[3px] [text-decoration-skip-ink:none] transition-colors duration-200 hover:text-black">LinkedIn</a>
            </div>
          </div>
        </PageTransition>
      </main>
    </PageLayout>
  );
}