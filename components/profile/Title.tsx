"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star } from '../animations/Star';

export function Title() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.h1 
        className="text-[18px] leading-[24px] font-serif font-semibold text-[#123727]"
        initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.8,
        }}
      >
        Liam Matteson
      </motion.h1>
      
      <motion.div 
        className="relative inline-block"
        initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.8,
          delay: 0.1,
        }}
      >
        <motion.span 
          className="text-[14px] leading-[24px] font-sans text-[#6D7468] relative z-10"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <span className="relative inline-block">
            Software Designer
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Software Designer
            </motion.span>
            {isHovered && (
              <>
                <motion.div
                  className="absolute inset-0 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <Star key={i} delay={i * 0.2} />
                  ))}
                </motion.div>
                <motion.div
                  className="absolute inset-0 -z-20 blur-[2px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    scale: [0.8, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30" />
                </motion.div>
              </>
            )}
          </span>
        </motion.span>
      </motion.div>
    </>
  );
}