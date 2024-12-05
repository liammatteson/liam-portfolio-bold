"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function BedrockOSPage() {
  return (
    <ProjectTemplate
      title="Bedrock OS"
      year="2023"
      href="/projects/bedrock-os"
      imagePath="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80"
      description="A modern operating system interface design that focuses on simplicity, efficiency, and user experience while maintaining robust functionality."
      features={[
        "System UI design",
        "Navigation patterns",
        "System preferences",
        "Notification system",
        "Application framework"
      ]}
      technologies={[
        "Electron for desktop app",
        "React Native for mobile",
        "TypeScript for type safety",
        "WebAssembly for performance",
        "Rust for system components"
      ]}
    />
  );
}