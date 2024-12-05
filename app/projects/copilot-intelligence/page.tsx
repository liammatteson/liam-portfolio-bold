"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function IntelligencePage() {
  return (
    <ProjectTemplate
      title="Copilot Intelligence"
      year="2023"
      href="/projects/copilot-intelligence"
      imagePath="https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80"
      description="An AI-powered financial insights system that provides personalized recommendations and analysis based on user spending patterns and financial goals."
      features={[
        "Predictive spending analysis",
        "Smart budget recommendations",
        "Investment opportunities",
        "Risk assessment",
        "Financial goal tracking"
      ]}
      technologies={[
        "TensorFlow.js for ML models",
        "Python for data processing",
        "FastAPI for backend",
        "Redis for caching",
        "Kubernetes for orchestration"
      ]}
    />
  );
}