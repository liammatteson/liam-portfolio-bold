"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function VantaPlatformPage() {
  return (
    <ProjectTemplate
      title="Vanta Platform"
      year="2022"
      href="/projects/vanta-platform"
      imagePath="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80"
      description="A complete redesign of the Vanta security and compliance platform, focusing on improved user experience and workflow efficiency."
      features={[
        "Dashboard redesign",
        "Compliance workflows",
        "Security monitoring",
        "Team collaboration",
        "Audit preparation"
      ]}
      technologies={[
        "React for frontend",
        "GraphQL for API",
        "PostgreSQL for data",
        "Docker for deployment",
        "AWS infrastructure"
      ]}
    />
  );
}