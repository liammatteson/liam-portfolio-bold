"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const links = ["Connect", "About", "Now"];

export function Navigation() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (link: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsLeaving(false);
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
      setIsLeaving(false);
    }, 250);
  };

  return (
    <motion.div 
      className="mb-20 flex justify-center relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 1.4,
        delay: 0.8,
      }}
    >
      <nav 
        className="flex gap-4"
        onMouseLeave={handleMouseLeave}
      >
        {links.map((link, index) => (
          <Link
            key={link}
            href={`/${link.toLowerCase()}`}
            className="h-8 flex items-center text-[16px] leading-6 text-[#6D7468] px-2 font-sans font-medium relative"
            onMouseEnter={() => handleMouseEnter(link)}
          >
            <motion.span 
              animate={{ 
                color: hoveredLink === link ? '#111827' : '#6D7468'
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="underline decoration-[#ECEDEC] decoration-[2px] underline-offset-[3px] [text-decoration-skip-ink:none]"
            >
              {link}
            </motion.span>
            <AnimatePresence>
              {hoveredLink === link && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-[rgba(20,27,20,0.08)] rounded-[4px] -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    opacity: {
                      duration: 0.2
                    }
                  }}
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}