"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectHeroProps {
  title: string;
  description: string;
  href: string;
  imagePath: string;
  year: string;
  buttonText: string;
}

export function ProjectHero({ title, description, href, imagePath, year, buttonText }: ProjectHeroProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <div className="max-w-[640px]">
        <h1 className="text-[32px] leading-[40px] font-[500] text-[#123727] mb-4">{title}</h1>
        <p className="text-[16px] leading-[24px] text-[#6B7467]">{description}</p>
      </div>
      <div className="mt-12">
        <Image
          src={imagePath}
          alt={`${title} preview`}
          width={1200}
          height={800}
          className="w-full rounded-[8px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]"
          priority
        />
      </div>
    </div>
  );
}
