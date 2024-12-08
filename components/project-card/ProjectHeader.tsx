"use client";

import { motion } from 'framer-motion';

interface ProjectHeaderProps {
  title: string;
  year: string;
  isExpanded?: boolean;
  variant?: 'default' | 'primary';
}

export function ProjectHeader({ title, year, isExpanded = false, variant = 'default' }: ProjectHeaderProps) {
  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 30,
    mass: 1,
    duration: 0.8
  };

  return (
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
        className={`${isExpanded ? 'text-[16px]' : 'text-[14px]'} leading-[24px] font-sans text-[#6B7467]`}
        layout="position"
        transition={springTransition}
      >
        {year}
      </motion.span>
    </motion.div>
  );
}