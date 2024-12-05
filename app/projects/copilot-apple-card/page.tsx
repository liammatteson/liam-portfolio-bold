"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function AppleCardPage() {
  return (
    <ProjectTemplate
      title="Copilot Apple Card"
      year="2024"
      href="/projects/copilot-apple-card"
      imagePath="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
      description="A seamless integration with Apple Card that provides users with enhanced tracking, categorization, and insights for their Apple Card transactions."
      features={[
        "Real-time Apple Card transaction sync",
        "Daily Cash tracking and analytics",
        "Enhanced transaction details",
        "Spending insights and trends",
        "Custom categorization rules"
      ]}
      technologies={[
        "Swift for iOS integration",
        "Node.js for backend services",
        "GraphQL for API queries",
        "AWS Lambda for serverless functions",
        "DynamoDB for data storage"
      ]}
    />
  );
}