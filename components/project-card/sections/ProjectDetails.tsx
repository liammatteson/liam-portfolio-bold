"use client";

import { ProjectContent } from '../ProjectContent';

interface ProjectDetailsSectionProps {
  title: string;
  features: string[];
  technologies: string[];
}

export function ProjectDetailsSection({ 
  title, 
  features, 
  technologies 
}: ProjectDetailsSectionProps) {
  return (
    <ProjectContent 
      title={title}
      features={features}
      technologies={technologies}
    />
  );
}