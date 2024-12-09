"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function AntimetalPage() {
  return (
    <ProjectTemplate
      title="Antimetal Launch"
      year="2023"
      href="/projects/antimetal-launch"
      imagePath="/images/AM 1.png"
      description="I was responsible for the UI architecture, user experience, and interface design of Antimetal 1.0 and 2.0. Antimetal aims to cut AWS costs by monitoring and learning your usage patterns to uncover savings opportunities."
      features={[]}
      technologies={[]}
      additionalImages={[
        "/images/AM 2.png",
        "/images/AM 3.png",
        "/images/AM 4.png"
      ]}
      sideByImages={[
        "/images/AM 5.png",
        "/images/AM 6.png"
      ]}
    />
  );
}