"use client";

import { PageLayout } from '@/components/PageLayout';
import { PageTransition } from '@/components/PageTransition';
import Image from 'next/image';

export default function NowPage() {
  return (
    <PageLayout>
      <main className="mt-12 mb-32">
        <PageTransition title="Now">
          <div className="relative w-full aspect-[448/272] mb-8">
            <Image
              src="/images/optimized/Now.jpeg"
              alt="Now"
              fill
              className="object-cover object-[center_65%] rounded-[6px]"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 896px"
            />
          </div>
          <div className="space-y-6 text-[16px] leading-[28px] text-gray-600">
            <p>Currently working on:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Getting this site built. I've been having a lot of fun prompt engineering it.</li>
              <li>Reading <a href="https://vanlancker.substack.com/p/design-literacy" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Design Literacy</a></li>
              <li>Reading and listening on spotify <a href="https://www.amazon.com/Timeless-Way-Building-Christopher-Alexander/dp/0195024028" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Timeless way of building</a></li>
              <li>Reading <a href="https://www.amazon.com/Pattern-Breakers-Start-Ups-Change-Future/dp/1541704355?crid=24GR5YGBI48CX&dib=eyJ2IjoiMSJ9.Y6aSgBoeUIy3A7d2qvnzrw.ZDpjFIgRkWciEeF0Ys8YNtTgmRmGgR3Jssh8qZTPFi4&dib_tag=se&keywords=pattern+breakers+why+start-ups+change+the+future&qid=1733769963&sprefix=pattern+breakers,aps,148&sr=8-1" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Pattern Breakers</a></li>
              <li>Playing with <a href="https://windsurf.ai/" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Windsurf</a>, <a href="https://www.cursor.so/" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Cursor</a>, <a href="https://bolt.new/" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Bolt</a>, and <a href="https://v0.dev" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">v0</a></li>
              <li>Traveling between <span className="border-b-[1.5px] border-[#ECEDEC] font-medium">NYC and SF</span> exploring opportunities</li>
              <li>Listening to <a href="https://open.spotify.com/album/0hvT3yIEysuuvkK73vgdcW?si=Jk53yjB6QF6aX5RzsEmqYQ" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">GNX</a></li>
              <li>Inspired by this <a href="https://www.youtube.com/watch?v=sm1msysj5lw" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">video</a> from Steve Jobs – I think of it every day</li>
              <li>Motivated by this <a href="https://www.youtube.com/watch?v=OIAUfZBd_7w&t=541s" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">video</a> on Soleio on how Facebook came to be</li>
              <li>Flipping through <a href="https://www.map.cv/blog/redbook" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Facebook Redbook</a>, originally created by Ben Barry, reprinted and made publicly available by <a href="https://x.com/mprkhrst/status/1863673317661741056" className="border-b-[1.5px] border-[#ECEDEC] transition-colors duration-200 hover:text-black font-medium">Matt Parkhurst</a></li>
            </ul>
          </div>
        </PageTransition>
      </main>
    </PageLayout>
  );
}