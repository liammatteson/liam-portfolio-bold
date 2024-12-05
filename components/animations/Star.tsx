"use client";

import { motion } from 'framer-motion';

interface StarProps {
  delay?: number;
}

export function Star({ delay = 0 }: StarProps) {
  return (
    <motion.div
      className="absolute w-[4px] h-[4px] bg-white rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    />
  );
}