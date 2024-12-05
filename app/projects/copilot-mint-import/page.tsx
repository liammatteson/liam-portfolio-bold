"use client";

import { ProjectTemplate } from '@/components/project-card/ProjectTemplate';

export default function MintImportPage() {
  return (
    <ProjectTemplate
      title="Copilot Mint Import"
      year="2024"
      href="/projects/copilot-mint-import"
      imagePath="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80"
      description="A sophisticated data migration platform that enables seamless transition of financial data from Mint to Copilot, preserving historical information and user preferences."
      features={[
        "Automated data migration",
        "Historical transaction import",
        "Category mapping",
        "Budget transfer",
        "Custom rule migration"
      ]}
      technologies={[
        "Python for data processing",
        "Pandas for data manipulation",
        "AWS S3 for storage",
        "Apache Airflow for workflows",
        "PostgreSQL for data storage"
      ]}
    />
  );
}