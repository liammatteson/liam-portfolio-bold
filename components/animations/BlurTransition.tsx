"use client";

import { motion } from 'framer-motion';

interface BlurTransitionProps {
  children: React.ReactNode;
}

export function BlurTransition({ children }: BlurTransitionProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        filter: "blur(20px)", 
        y: 20 
      }}
      animate={{ 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0 
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for smoother motion
        filter: {
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      {children}
    </motion.div>
  );
}