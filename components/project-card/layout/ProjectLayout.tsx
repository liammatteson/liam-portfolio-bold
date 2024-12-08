"use client";

import { Nav } from '@/components/Nav';
import { ViewportBlur } from '@/components/ViewportBlur';
import { BlurTransition } from '@/components/animations/BlurTransition';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="max-w-[600px] mx-auto">
        <BlurTransition>
          {children}
        </BlurTransition>
      </div>
      <ViewportBlur />
    </div>
  );
}