"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function EthosPage() {
  return (
    <ProjectTemplate
      title="Ethos"
      year="2023"
      href="/projects/ethos"
      imagePath="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
      description="A comprehensive design system foundation that establishes consistent design patterns, components, and guidelines across all products."
      features={[
        "Component library",
        "Design tokens",
        "Documentation system",
        "Accessibility guidelines",
        "Version control workflow"
      ]}
      technologies={[
        "React for components",
        "Storybook for documentation",
        "Styled Components",
        "Chromatic for testing",
        "GitHub Actions for CI/CD"
      ]}
    />
  );
}