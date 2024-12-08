"use client";

import { motion } from 'framer-motion';

interface ProjectTitleProps {
  title: string;
  year: string;
  isExpanded?: boolean;
}

export function ProjectTitle({ title, year, isExpanded = false }: ProjectTitleProps) {
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
    >
      <motion.h1 
        className={`${isExpanded ? 'text-[16px]' : 'text-[14px]'} leading-[24px] font-sans font-medium text-[#123727]`}
        layout="position"
        transition={springTransition}
      >
        {title}
      </motion.h1>
      <motion.span 
        className={`${isExpanded ? 'text-[16px]' : 'text-[14px]'} leading-[24px] font-sans font-medium text-[#6D7468]`}
        layout="position"
        transition={springTransition}
      >
        {year}
      </motion.span>
    </motion.div>
  );
}