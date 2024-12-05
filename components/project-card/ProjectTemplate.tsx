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
}

export function ProjectTemplate({
  title,
  year,
  href,
  imagePath,
  description,
  features,
  technologies
}: ProjectTemplateProps) {
  return (
    <ProjectLayout>
      <ProjectHeaderSection title={title} year={year} />
      <ProjectMediaSection title={title} imagePath={imagePath} />
      <ProjectDetailsSection
        title={title}
        description={description}
        features={features}
        technologies={technologies}
      />
    </ProjectLayout>
  );
}