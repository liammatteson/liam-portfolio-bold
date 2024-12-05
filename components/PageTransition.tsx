"use client";

import { motion } from 'framer-motion';
import { BlurTransition } from './animations/BlurTransition';

interface PageTransitionProps {
  title: string;
  children: React.ReactNode;
}

export function PageTransition({ title, children }: PageTransitionProps) {
  return (
    <div className="mt-[48px]">
      <BlurTransition>
        <div className="space-y-12">
          <h1 className="text-[16px] leading-[24px] font-sans font-medium text-[#123727]">
            {title}
          </h1>
          <div className="font-sans">
            {children}
          </div>
        </div>
      </BlurTransition>
    </div>
  );
}