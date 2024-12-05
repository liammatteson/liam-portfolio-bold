"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/projects';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2 // Increased delay to wait for header animations
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="grid gap-6 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {projects.map((project) => (
        <motion.div
          key={`project-${project.href}`}
          variants={itemVariants}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}