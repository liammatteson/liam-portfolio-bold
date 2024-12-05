"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const links = ["Connect", "About", "People", "Now"];

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
    }, 2000);
  };

  return (
    <motion.div 
      className="mb-12 flex justify-center relative"
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
            className="h-8 flex items-center text-[16px] leading-6 text-[#6D7468] hover:text-gray-900 transition-colors px-2 font-sans font-medium relative"
            onMouseEnter={() => handleMouseEnter(link)}
          >
            <span className="decoration-[#f5f5f5] decoration-2 underline underline-offset-[3px]">{link}</span>
            <AnimatePresence>
              {hoveredLink === link && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-[#f5f5f5] rounded-[2px] -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: isLeaving ? 0 : 1 }}
                  transition={{ 
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                    opacity: {
                      duration: isLeaving ? 0.3 : 0.15,
                      ease: "easeInOut"
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