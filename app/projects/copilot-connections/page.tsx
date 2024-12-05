"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function ConnectionsPage() {
  return (
    <ProjectTemplate
      title="Copilot Connections"
      year="2024"
      href="/projects/copilot-connections"
      imagePath="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
      description="A robust account management system that securely connects and maintains relationships with various financial institutions and data providers."
      features={[
        "Secure bank connections",
        "Multi-factor authentication",
        "Automated reconnection handling",
        "Institution health monitoring",
        "Real-time sync status"
      ]}
      technologies={[
        "Plaid API integration",
        "OAuth 2.0 implementation",
        "WebSocket for real-time updates",
        "MongoDB for data storage",
        "Docker for containerization"
      ]}
    />
  );
}