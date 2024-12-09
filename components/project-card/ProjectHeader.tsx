"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'react-feather';

interface ProjectLink {
  text: string;
  href: string;
  icon: string;
}

interface ProjectHeaderProps {
  title: string;
  year: string;
  isExpanded?: boolean;
  variant?: 'default' | 'primary';
  links?: ProjectLink[];
}

export function ProjectHeader({ title, year, isExpanded = false, variant = 'default', links }: ProjectHeaderProps) {
  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 30,
    mass: 1,
    duration: 0.8
  };

  return (
    <div>
      <motion.div 
        className="flex justify-between items-center"
        layout
        transition={springTransition}
        style={{ color: '#123727' }}
      >
        <motion.h1 
          className="text-[14px] leading-[24px] font-sans font-medium"
          layout="position"
          transition={springTransition}
        >
          {title}
        </motion.h1>
        <motion.span 
          className="text-[14px] leading-[24px] font-sans text-[#6B7467]"
          layout="position"
          transition={springTransition}
        >
          {year}
        </motion.span>
      </motion.div>
      {links && links.length > 0 && (
        <div className="mt-4 space-y-1">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[14px] leading-[24px] text-[#6B7467] hover:text-[#123727] transition-colors gap-1.5 group"
            >
              <ExternalLink size={14} className="flex-shrink-0" />
              <span className="underline underline-offset-4">{link.text}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}