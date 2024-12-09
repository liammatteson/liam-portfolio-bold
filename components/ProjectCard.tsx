"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { CardImage } from './project-card/CardImage';
import { ProjectHeader } from './project-card/ProjectHeader';
import type { Project } from '@/lib/projects';

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

interface ProjectCardProps extends Project {
  isHeader?: boolean;
  links?: any;
}

export function ProjectCard({ 
  title, 
  description, 
  href, 
  imagePath, 
  year, 
  variant, 
  buttonText, 
  isHeader,
  links 
}: ProjectCardProps) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    router.prefetch(href);
  }, [router, href]);

  const handleClick = () => {
    if (!isHeader) {
      setIsClicked(true);
      router.push(href);
    }
  };

  const defaultShadow = '0px 0px 0px 1px rgba(0,0,0,0.12), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.04), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)';
  const hoverShadow = '0px 0px 0px 1px rgba(0,0,0,0.12), 0px 0px 0px 5px rgba(0,0,0,0.06), 0px 1px 1px -0.5px rgba(0,0,0,0.06), 0px 3px 3px -1.5px rgba(0,0,0,0.06), 0px 6px 6px -3px rgba(0,0,0,0.04), 0px 12px 12px -6px rgba(0,0,0,0.06), 0px 24px 24px -12px rgba(0,0,0,0.06)';

  if (isHeader) {
    return (
      <motion.div
        variants={itemVariants}
        className="[font-family:var(--font-serif-medium)] text-[16px] leading-[24px] text-[#123727] flex justify-between items-center mt-12 mb-4"
      >
        <div className="flex items-center gap-2 -ml-1.5 -my-1.5">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 p-1.5 pr-[8px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="w-[24px] h-[24px] rounded-[5px] bg-[lightgray] bg-[50%] bg-cover bg-no-repeat shadow-[0px_10.286px_10.286px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_5.143px_5.143px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.857px_0.857px_-0.429px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_2.571px_2.571px_-1.286px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0.429px_0.429px_-0.214px_color(display-p3_0.1137_0.2431_0.4784/0.04),0px_0px_0px_0.429px_color(display-p3_0.1137_0.2431_0.4784/0.16)]"
              style={{
                backgroundImage: `url('${imagePath}')`
              }}
            />
            <motion.span
              className="relative z-10 font-inter font-medium underline decoration-[#E8EAEE] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
              animate={{ color: isHovered ? '#1C2A23' : '#1C2A23' }}
              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
            >
              {title}
            </motion.span>
            <motion.div
              className="absolute inset-0 rounded-[8px] -z-10"
              animate={{ 
                opacity: isHovered ? 1 : 0,
                backgroundColor: '#E8EAEE'
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
            />
          </motion.a>
        </div>
        <span className="font-inter text-[14px] leading-[16px] text-[#6B7467]">{description}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ boxShadow: defaultShadow }}
      whileHover={!isClicked ? { boxShadow: hoverShadow } : {}}
      className="cursor-pointer rounded-[8px] bg-white p-1 transition-shadow duration-200 overflow-hidden"
      layoutId={`project-card-${href}`}
    >
      <motion.div 
        className="relative flex flex-col" 
        layoutId={`project-content-${href}`}
      >
        <motion.div 
          className="px-[12px] pt-[6px] pb-[8px]"
          layoutId={`project-header-${href}`}
        >
          <ProjectHeader 
            title={title} 
            year={year} 
            isExpanded={isHovered} 
            variant={variant}
            links={links || []}
          />
        </motion.div>
        <CardImage href={href} imagePath={imagePath} variant={variant} />
        {!isHeader && (
          <motion.div
            className="mt-1"
            animate={{ 
              opacity: isHovered ? 1 : 0.7
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut"
            }}
          >
            <div 
              className="relative flex justify-center"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <motion.div 
                className="absolute inset-0 bg-[#F4F4F4] rounded-[4px]" 
                initial={{ opacity: 0 }}
                animate={{ opacity: isButtonHovered ? 1 : 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut"
                }}
              />
              <div className="relative py-2 flex items-center justify-center gap-1">
                <span className="text-[14px] leading-[20px] text-[#123727] font-medium">
                  {buttonText}
                </span>
                <motion.span 
                  className="text-[14px] leading-[20px] text-[#123727] font-[500]"
                  animate={{ 
                    x: isButtonHovered ? 4 : 0,
                    opacity: isHovered ? 1 : 0.7
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                >
                  ->
                </motion.span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}