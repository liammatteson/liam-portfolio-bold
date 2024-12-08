"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps {
  buttonText?: 'Read essay' | 'View samples' | 'Get in touch';
  isHovered?: boolean;
}

export function Button({ buttonText = 'View samples', isHovered = false }: ButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-1 flex"
    >
      <motion.button
        animate={{ gap: isHovered ? '12px' : '8px' }}
        className={`h-[40px] px-4 rounded-[4px] inline-flex items-center justify-center gap-2 text-[14px] font-sans font-medium transition-colors ${isHovered ? 'text-[#123727]' : 'text-[#666666]'} w-full`}
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}