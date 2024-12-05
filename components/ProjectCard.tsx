"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CardImage } from './project-card/CardImage';
import { ProjectHeader } from './project-card/ProjectHeader';
import { Button } from './project-card/Button';
import type { Project } from '@/lib/projects';

interface ProjectCardProps extends Project {}

export function ProjectCard({ title, description, href, imagePath, year, variant, buttonText }: ProjectCardProps) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  const handleClick = () => {
    setIsClicked(true);
    router.push(href);
  };

  const defaultShadow = '0px 0px 0px 1px rgba(0,0,0,0.12), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.04), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)';
  const hoverShadow = '0px 0px 0px 1px rgba(0,0,0,0.12), 0px 0px 0px 5px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.04), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)';

  return (
    <motion.div
      onClick={handleClick}
      initial={{ boxShadow: defaultShadow }}
      whileHover={!isClicked ? { boxShadow: hoverShadow } : {}}
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
          <ProjectHeader title={title} year={year} />
        </motion.div>
      </motion.div>
      <Button buttonText={buttonText} />
    </motion.div>
  );
}