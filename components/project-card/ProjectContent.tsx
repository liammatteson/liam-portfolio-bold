"use client";

import { motion } from 'framer-motion';

interface ProjectContentProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

export function ProjectContent({ title, description, technologies, features }: ProjectContentProps) {
  return (
    <div className="space-y-8 px-6">
      <div className="space-y-4">
        <p className="text-[16px] leading-[24px] text-[#6D7468] font-inter">
          {description}
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-[16px] leading-[24px] font-medium text-[#123727] font-inter">
          Key Features
        </h2>
        <ul className="space-y-2 text-[16px] leading-[24px] text-[#6D7468] font-inter">
          {features.map((feature, index) => (
            <li
              key={`feature-${title}-${index}`}
              className="flex items-start"
            >
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-[16px] leading-[24px] font-medium text-[#123727] font-inter">
          Technologies
        </h2>
        <ul className="space-y-2 text-[16px] leading-[24px] text-[#6D7468] font-inter">
          {technologies.map((tech, index) => (
            <li
              key={`tech-${title}-${index}`}
              className="flex items-start"
            >
              <span className="mr-2">•</span>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}