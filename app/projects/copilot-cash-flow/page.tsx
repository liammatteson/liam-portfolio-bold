"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function CashFlowPage() {
  return (
    <ProjectTemplate
      title="Copilot Cash Flow"
      year="2024"
      href="/projects/copilot-cash-flow"
      imagePath="/images/CashFlow.jpg"
      description="A comprehensive financial management platform that helps users maintain healthy cash flow through real-time monitoring, predictive analytics, and intelligent recommendations."
      features={[
        "Real-time cash flow monitoring and forecasting",
        "Automated transaction categorization",
        "Customizable financial reports and dashboards",
        "AI-powered cash flow optimization recommendations",
        "Integration with major financial institutions"
      ]}
      technologies={[
        "Next.js for the frontend application",
        "TypeScript for type-safe development",
        "Tailwind CSS for styling",
        "Framer Motion for animations",
        "OpenAI API for intelligent insights"
      ]}
    />
  );
}