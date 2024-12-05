"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function VantaChecklistsPage() {
  return (
    <ProjectTemplate
      title="Vanta Checklists"
      year="2022"
      href="/projects/vanta-checklists"
      imagePath="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80"
      description="A task management system designed to streamline compliance processes and team workflows through interactive checklists and progress tracking."
      features={[
        "Dynamic checklist creation",
        "Progress tracking",
        "Team assignments",
        "Due date management",
        "Automated reminders"
      ]}
      technologies={[
        "React for UI",
        "Redux for state",
        "Node.js backend",
        "MongoDB for data",
        "SendGrid for notifications"
      ]}
    />
  );
}