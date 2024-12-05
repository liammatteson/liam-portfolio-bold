"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function OnboardingPage() {
  return (
    <ProjectTemplate
      title="Copilot Onboarding"
      year="2023"
      href="/projects/copilot-onboarding"
      imagePath="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      description="A streamlined user onboarding experience that guides new users through account setup, financial connection, and personalization of their Copilot experience."
      features={[
        "Guided account setup flow",
        "Interactive tutorials",
        "Progress tracking",
        "Personalization options",
        "Contextual help system"
      ]}
      technologies={[
        "React for UI components",
        "Redux for state management",
        "Storybook for component library",
        "Jest for testing",
        "Firebase Analytics"
      ]}
    />
  );
}