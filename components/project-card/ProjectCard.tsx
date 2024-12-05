"use client";

import { motion } from 'framer-motion';
import { CardImage } from './CardImage';
import { ProjectHeader } from './ProjectHeader';
import { Button } from './Button';
import { useProjectNavigation } from './hooks/useProjectNavigation';
import { SHADOWS } from './constants';
import type { ProjectCardProps } from './types';

export function ProjectCard({ 
  title, 
  description, 
  href, 
  imagePath, 
  year, 
  variant, 
  buttonText 
}: ProjectCardProps) {
  const { isClicked, handleClick } = useProjectNavigation(href);

  return (
    <motion.div
      onClick={handleClick}
      initial={{ boxShadow: SHADOWS.default }}
      whileHover={!isClicked ? { boxShadow: SHADOWS.hover } : {}}
      className="cursor-pointer rounded-[8px] bg-[color(display-p3_0.99_0.99_0.99)] p-1 transition-shadow duration-300"
      layoutId={`project-card-${href}`}
    >
      <motion.div 
        className="relative" 
        layoutId={`project-content-${href}`}
      >
        <CardImage href={href} imagePath={imagePath} variant={variant} />
        <motion.div 
          className="absolute top-0 left-0 right-0 pt-3 px-4"
          layoutId={`project-header-${href}`}
        >
          <ProjectHeader title={title} year={year} variant={variant} />
        </motion.div>
      </motion.div>
      <Button buttonText={buttonText} />
    </motion.div>
  );
}