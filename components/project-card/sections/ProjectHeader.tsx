"use client";

import { ProjectTitle } from '../ProjectTitle';

interface ProjectHeaderSectionProps {
  title: string;
  year: string;
}

export function ProjectHeaderSection({ title, year }: ProjectHeaderSectionProps) {
  return (
    <div className="px-6 mb-8 mt-6">
      <ProjectTitle 
        title={title}
        year={year}
        isExpanded={true}
      />
    </div>
  );
}