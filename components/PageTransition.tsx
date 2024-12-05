"use client";

import { motion } from 'framer-motion';

interface PageTransitionProps {
  title: string;
  children: React.ReactNode;
}

export function PageTransition({ title, children }: PageTransitionProps) {
  const containerVariants = {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
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
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 30,
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="mt-[48px]"
    >
      <motion.h1 
        variants={titleVariants}
        className="text-[16px] leading-[24px] font-sans font-medium text-[#123727] mb-12"
      >
        {title}
      </motion.h1>
      <motion.div 
        variants={contentVariants}
        className="font-sans"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}