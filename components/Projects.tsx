"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/projects';
import { ProjectSectionNav } from './ProjectSectionNav';
import { Link2 } from 'react-feather';

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

  const [hoveredCopilot, setHoveredCopilot] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredCopilot(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredCopilot(false);
    }, 1000);
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
            <div className="flex items-center gap-2 -ml-1.5 -my-1.5">
              <motion.a
                href="https://www.copilot.money"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 p-1.5 pr-[8px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-[50%] bg-cover bg-no-repeat shadow-[0px_10.286px_10.286px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_5.143px_5.143px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.857px_0.857px_-0.429px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_2.571px_2.571px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.429px_0.429px_-0.214px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0px_0px_0.429px_color(display-p3_0.1137_0.2431_0.4784/0.16)]"
                  style={{
                    backgroundImage: `url('/images/CopilotIcon.png')`
                  }}
                />
                <motion.span
                  className="relative z-10 font-inter font-medium underline decoration-[#E8EAEE] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
                  animate={{ color: hoveredCopilot ? '#1C2A23' : '#1C2A23' }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                >
                  Copilot Money
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-[8px] -z-10"
                  animate={{ 
                    opacity: hoveredCopilot ? 1 : 0,
                    backgroundColor: '#E8EAEE'
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </div>
            <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">Design Lead · 2023-24</span>
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <a 
              href="https://copilot.money/changelog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] leading-[20px] text-[#6B7467] hover:text-[#123727] underline decoration-[#E8EAEE] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
            >
              <Link2 size={14} />
              Copilot changelog
            </a>
            <div id="copilot" className="mt-[20px] mb-[64px] scroll-mt-[120px]">
              <div className="mb-[24px]">
                <ProjectCard {...projects[0]} />
              </div>
              {projects.slice(1, 7).map((project) => (
                <div key={project.href} className="mb-[24px] last:mb-0">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            <div className="mb-[64px]">
              <div id="antimetal" className="scroll-mt-[120px]">
                <ProjectCard {...projects[7]} />
              </div>
              <div className="mt-[24px]">
                <ProjectCard {...projects[8]} />
              </div>
            </div>
            <div className="mb-[64px]">
              <div id="vanta" className="scroll-mt-[120px]">
                <ProjectCard {...projects[9]} />
              </div>
              {projects.slice(10, 12).map((project) => (
                <div key={project.href} className="mb-[24px] last:mb-0">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
            <div>
              <div id="upperstudy" className="scroll-mt-[120px]">
                <ProjectCard {...projects[12]} />
              </div>
              {projects.slice(13).map((project) => (
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