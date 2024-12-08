"use client";

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/projects';
import { ProjectSectionNav } from './ProjectSectionNav';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2
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
    <>
      <ProjectSectionNav />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-4">
          <motion.h2 
            variants={itemVariants}
            className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center"
          >
            <div id="copilot-title" className="flex items-center gap-3">
              <div 
                className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-cover bg-no-repeat bg-center shadow-[0px_10.286px_10.286px_-1.286px_rgba(14,63,126,0.04),0px_5.143px_5.143px_-1.286px_rgba(14,63,126,0.04),0px_0.857px_0.857px_-0.429px_rgba(14,63,126,0.04),0px_2.571px_2.571px_-1.286px_rgba(14,63,126,0.04),0px_0.429px_0.429px_-0.214px_rgba(14,63,126,0.04),0px_0px_0px_0.429px_rgba(14,63,126,0.08)]"
                style={{
                  backgroundImage: `url('/images/copilotIcon.PNG')`
                }}
              />
              <div className="pt-[4px]">Design lead at <span className="underline decoration-[#E8EAEE] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none] hover:bg-[#E8EAEE] transition-colors duration-150 rounded-sm">Copilot Money</span></div>
            </div>
            <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">2023-2024</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <div id="copilot" className="mt-[20px] mb-[24px] scroll-mt-[120px]">
              <ProjectCard {...projects[0]} />
            </div>
            <div id="antimetal" className="scroll-mt-[120px]">
              {projects.slice(1, 3).map((project) => (
                <div key={project.href} className="mb-[24px] last:mb-0">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            <div id="vanta" className="scroll-mt-[120px]">
              {projects.slice(3).map((project) => (
                <div key={project.href} className="mb-[24px] last:mb-0">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}