"use client";

import { ProjectContent } from '../ProjectContent';

interface ProjectDetailsSectionProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

export function ProjectDetailsSection({ 
  title, 
  description, 
  features, 
  technologies 
}: ProjectDetailsSectionProps) {
  return (
    <ProjectContent 
      title={title}
      description={description}
      features={features}
      technologies={technologies}
    />
  );
}