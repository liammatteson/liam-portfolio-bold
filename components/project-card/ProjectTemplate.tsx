"use client";

import { ProjectLayout } from './layout/ProjectLayout';
import { ProjectHeaderSection } from './sections/ProjectHeader';
import { ProjectMediaSection } from './sections/ProjectMedia';
import { ProjectDetailsSection } from './sections/ProjectDetails';

interface ProjectTemplateProps {
  title: string;
  year: string;
  href: string;
  imagePath: string;
  description: string;
  features: string[];
  technologies: string[];
  additionalImages?: string[];
  sideByImages?: string[];
}

export function ProjectTemplate({
  title,
  year,
  href,
  imagePath,
  description,
  features,
  technologies,
  additionalImages,
  sideByImages
}: ProjectTemplateProps) {
  const showDetails = features.length > 0 || technologies.length > 0;

  return (
    <ProjectLayout>
      <ProjectHeaderSection title={title} year={year} />
      <ProjectMediaSection 
        title={title} 
        imagePath={imagePath} 
        additionalImages={additionalImages}
        description={description}
        sideByImages={sideByImages}
      />
      {showDetails && (
        <ProjectDetailsSection
          title={title}
          features={features}
          technologies={technologies}
        />
      )}
    </ProjectLayout>
  );
}