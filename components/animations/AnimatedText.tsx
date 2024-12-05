"use client";

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const words = text.split(" ");
  
  return (
    <motion.p className={`text-[#6D7468] max-w-[720px] mx-auto mt-12 mb-12 text-[20px] leading-[32px] flex flex-wrap justify-center gap-x-[0.25em] font-serif ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(16px)", y: 8 + 1 * (index + 2) }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            delay: 0.04 * (index + 12),
            type: "spring",
            bounce: 0,
            duration: 0.7 + 0.1 * (index + 4),
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}