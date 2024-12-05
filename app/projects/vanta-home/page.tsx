"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function VantaHomePage() {
  return (
    <ProjectTemplate
      title="Vanta Home"
      year="2022"
      href="/projects/vanta-home"
      imagePath="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80"
      description="A strategic redesign of Vanta's homepage to better communicate the company's value proposition and improve conversion rates."
      features={[
        "Responsive design",
        "Performance optimization",
        "A/B testing setup",
        "Analytics integration",
        "SEO optimization"
      ]}
      technologies={[
        "Next.js for SSG",
        "TailwindCSS for styling",
        "Segment for analytics",
        "Optimizely for testing",
        "Cloudflare for CDN"
      ]}
    />
  );
}