"use client";

import { ProjectImage } from '../ProjectImage';

interface ProjectMediaSectionProps {
  title: string;
  imagePath: string;
}

export function ProjectMediaSection({ title, imagePath }: ProjectMediaSectionProps) {
  return (
    <div className="px-4 md:px-0 -mx-2 md:-mx-6 mb-8">
      <ProjectImage 
        src={imagePath}
        alt={`${title} preview`}
      />
    </div>
  );
}