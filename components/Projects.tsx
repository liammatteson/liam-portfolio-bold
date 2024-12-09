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

  const sectionVariants = {
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
  const [hoveredAntimetal, setHoveredAntimetal] = useState(false);
  const [hoveredVanta, setHoveredVanta] = useState(false);
  const [hoveredUpperstudy, setHoveredUpperstudy] = useState(false);
  const [hoveredHalftone, setHoveredHalftone] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const antimetalTimeoutRef = useRef<NodeJS.Timeout>();
  const vantaTimeoutRef = useRef<NodeJS.Timeout>();
  const upperstudyTimeoutRef = useRef<NodeJS.Timeout>();
  const halftoneTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (antimetalTimeoutRef.current) {
        clearTimeout(antimetalTimeoutRef.current);
      }
      if (vantaTimeoutRef.current) {
        clearTimeout(vantaTimeoutRef.current);
      }
      if (upperstudyTimeoutRef.current) {
        clearTimeout(upperstudyTimeoutRef.current);
      }
      if (halftoneTimeoutRef.current) {
        clearTimeout(halftoneTimeoutRef.current);
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
    }, 250);
  };

  const handleAntimetalMouseEnter = () => {
    if (antimetalTimeoutRef.current) {
      clearTimeout(antimetalTimeoutRef.current);
    }
    setHoveredAntimetal(true);
  };

  const handleAntimetalMouseLeave = () => {
    antimetalTimeoutRef.current = setTimeout(() => {
      setHoveredAntimetal(false);
    }, 250);
  };

  const handleVantaMouseEnter = () => {
    if (vantaTimeoutRef.current) {
      clearTimeout(vantaTimeoutRef.current);
    }
    setHoveredVanta(true);
  };

  const handleVantaMouseLeave = () => {
    vantaTimeoutRef.current = setTimeout(() => {
      setHoveredVanta(false);
    }, 250);
  };

  const handleUpperstudyMouseEnter = () => {
    if (upperstudyTimeoutRef.current) {
      clearTimeout(upperstudyTimeoutRef.current);
    }
    setHoveredUpperstudy(true);
  };

  const handleUpperstudyMouseLeave = () => {
    upperstudyTimeoutRef.current = setTimeout(() => {
      setHoveredUpperstudy(false);
    }, 250);
  };

  const handleHalftoneMouseEnter = () => {
    if (halftoneTimeoutRef.current) {
      clearTimeout(halftoneTimeoutRef.current);
    }
    setHoveredHalftone(true);
  };

  const handleHalftoneMouseLeave = () => {
    halftoneTimeoutRef.current = setTimeout(() => {
      setHoveredHalftone(false);
    }, 250);
  };

  return (
    <>
      <ProjectSectionNav />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-[64px]">
          {/* Copilot Section */}
          <div>
            <motion.h2 
              variants={itemVariants}
              className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center mb-4"
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
                    className="relative z-10 font-inter font-medium underline decoration-[#ECEDEC] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
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
                      backgroundColor: 'rgba(20, 27, 20, 0.08)'
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
            
            <motion.div variants={itemVariants}>
              <a 
                href="https://copilot.money/changelog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] leading-[20px] text-[#6B7467] hover:text-[#123727] underline decoration-[#E8EAEE] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none] mb-6"
              >
                <Link2 size={14} />
                Copilot changelog
              </a>
              
              <div id="copilot" className="scroll-mt-[120px] space-y-6">
                <ProjectCard {...projects[0]} />
                {projects.slice(1, 6).map((project) => (
                  <ProjectCard key={project.href} {...project} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Antimetal Section */}
          <div>
            <motion.h2 
              variants={itemVariants}
              className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center mb-4"
            >
              <div className="flex items-center gap-2 -ml-1.5 -my-1.5">
                <motion.a
                  href="/projects/antimetal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 p-1.5 pr-[8px]"
                  onMouseEnter={handleAntimetalMouseEnter}
                  onMouseLeave={handleAntimetalMouseLeave}
                >
                  <div 
                    className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-[50%] bg-cover bg-no-repeat shadow-[0px_10.286px_10.286px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_5.143px_5.143px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.857px_0.857px_-0.429px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_2.571px_2.571px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.429px_0.429px_-0.214px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0px_0px_0.429px_color(display-p3_0.1137_0.2431_0.4784/0.16)]"
                    style={{
                      backgroundImage: `url('/images/antimetal.jpg')`
                    }}
                  />
                  <motion.span
                    className="relative z-10 font-inter font-medium underline decoration-[#ECEDEC] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
                    animate={{ color: hoveredAntimetal ? '#1C2A23' : '#1C2A23' }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    Antimetal
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 rounded-[8px] -z-10"
                    animate={{ 
                      opacity: hoveredAntimetal ? 1 : 0,
                      backgroundColor: 'rgba(20, 27, 20, 0.08)'
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
              </div>
              <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">Design Consultant · 2023</span>
            </motion.h2>

            <motion.div variants={itemVariants}>
              <div id="antimetal" className="scroll-mt-[120px] space-y-6">
                <a 
                  href="https://www.producthunt.com/products/antimetal#antimetal-2-0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] leading-[20px] text-[#6B7467] hover:text-[#123727] underline decoration-[#E8EAEE] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
                >
                  <Link2 size={14} />
                  Antimetal Product Hunt
                </a>
                <ProjectCard {...projects[6]} links={projects[6].links} />
              </div>
            </motion.div>
          </div>

          {/* Vanta Section */}
          <div>
            <motion.h2 
              variants={itemVariants}
              className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center mb-6"
            >
              <div className="flex items-center gap-2 -ml-1.5 -my-1.5">
                <motion.a
                  href="https://www.vanta.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 p-1.5 pr-[8px]"
                  onMouseEnter={handleVantaMouseEnter}
                  onMouseLeave={handleVantaMouseLeave}
                >
                  <div 
                    className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-[50%] bg-cover bg-no-repeat shadow-[0px_10.286px_10.286px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_5.143px_5.143px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.857px_0.857px_-0.429px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_2.571px_2.571px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.429px_0.429px_-0.214px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0px_0px_0.429px_color(display-p3_0.1137_0.2431_0.4784/0.16)]"
                    style={{
                      backgroundImage: `url('/images/VantaIcon.jpg')`
                    }}
                  />
                  <motion.span
                    className="relative z-10 font-inter font-medium underline decoration-[#ECEDEC] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
                    animate={{ color: hoveredVanta ? '#1C2A23' : '#1C2A23' }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    Vanta
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 rounded-[8px] -z-10"
                    animate={{ 
                      opacity: hoveredVanta ? 1 : 0,
                      backgroundColor: 'rgba(20, 27, 20, 0.08)'
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.a>
              </div>
              <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">Product Designer · 2022-23</span>
            </motion.h2>

            <motion.div variants={itemVariants}>
              <div id="vanta" className="scroll-mt-[120px] space-y-6">
                <motion.div variants={itemVariants} className="space-y-6">
                  <ProjectCard {...projects.find(p => p.title === "Platform & System Design")!} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <ProjectCard {...projects.find(p => p.title === "Checklists")!} />
                    <ProjectCard {...projects.find(p => p.title === "Home")!} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Upperstudy & Halftone Digital Section */}
          <motion.div 
            variants={sectionVariants}
            id="upperstudy"
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Upperstudy */}
              <motion.h2 
                variants={itemVariants}
                className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center"
              >
                <div className="flex items-center gap-2 -ml-1.5 -my-1.5">
                  <motion.a
                    href="https://www.upperstudy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 p-1.5 pr-[8px]"
                    onMouseEnter={handleUpperstudyMouseEnter}
                    onMouseLeave={handleUpperstudyMouseLeave}
                  >
                    <div 
                      className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-[50%] bg-cover bg-no-repeat shadow-[0px_10.286px_10.286px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_5.143px_5.143px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.857px_0.857px_-0.429px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_2.571px_2.571px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.429px_0.429px_-0.214px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0px_0px_0.429px_color(display-p3_0.1137_0.2431_0.4784/0.16)]"
                      style={{
                        backgroundImage: `url('/images/Upperstudy.jpg')`
                      }}
                    />
                    <motion.span
                      className="relative z-10 font-inter font-medium underline decoration-[#ECEDEC] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
                      animate={{ color: hoveredUpperstudy ? '#1C2A23' : '#1C2A23' }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      Upperstudy
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 rounded-[8px] -z-10"
                      animate={{ 
                        opacity: hoveredUpperstudy ? 1 : 0,
                        backgroundColor: 'rgba(20, 27, 20, 0.08)'
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.a>
                </div>
                <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">Apprentice & Lead · 2020-2021, 23</span>
              </motion.h2>

              {/* Halftone Digital */}
              <motion.h2 
                variants={itemVariants}
                className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center"
              >
                <div className="flex items-center gap-2 -ml-1.5 -my-1.5">
                  <motion.a
                    href="https://halftone.digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 p-1.5 pr-[8px]"
                    onMouseEnter={handleHalftoneMouseEnter}
                    onMouseLeave={handleHalftoneMouseLeave}
                  >
                    <div 
                      className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-[50%] bg-cover bg-no-repeat shadow-[0px_10.286px_10.286px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_5.143px_5.143px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.857px_0.857px_-0.429px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_2.571px_2.571px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.429px_0.429px_-0.214px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0px_0px_0.429px_color(display-p3_0.1137_0.2431_0.4784/0.16)]"
                      style={{
                        backgroundImage: `url('/images/Halftone Digital Logo.jpeg')`
                      }}
                    />
                    <motion.span
                      className="relative z-10 font-inter font-medium underline decoration-[#ECEDEC] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
                      animate={{ color: hoveredHalftone ? '#1C2A23' : '#1C2A23' }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      Halftone Digital
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 rounded-[8px] -z-10"
                      animate={{ 
                        opacity: hoveredHalftone ? 1 : 0,
                        backgroundColor: 'rgba(20, 27, 20, 0.08)'
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.a>
                </div>
                <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">Product Designer · 2023</span>
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}