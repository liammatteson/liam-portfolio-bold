"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function TagsPage() {
  return (
    <ProjectTemplate
      title="Copilot Tags"
      year="2024"
      href="/projects/copilot-tags"
      imagePath="https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?auto=format&fit=crop&q=80"
      description="An intelligent transaction categorization system that automatically organizes financial data using machine learning and user behavior patterns."
      features={[
        "Automated transaction categorization",
        "Custom tag creation and management",
        "Machine learning-based suggestions",
        "Bulk tagging operations",
        "Tag analytics and insights"
      ]}
      technologies={[
        "React for UI components",
        "Python for ML processing",
        "TensorFlow for model training",
        "PostgreSQL for data storage",
        "Redis for caching"
      ]}
    />
  );
}