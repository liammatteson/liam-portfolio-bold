"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function AntimetalPage() {
  return (
    <ProjectTemplate
      title="Antimetal Launch"
      year="2023"
      href="/projects/antimetal-launch"
      imagePath="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
      description="A comprehensive product launch campaign for Antimetal, including brand identity, marketing materials, and digital presence development."
      features={[
        "Brand identity system",
        "Marketing website",
        "Social media campaign",
        "Product documentation",
        "Launch event materials"
      ]}
      technologies={[
        "Next.js for website",
        "Figma for design",
        "Framer Motion for animations",
        "Contentful for CMS",
        "Vercel for deployment"
      ]}
    />
  );
}