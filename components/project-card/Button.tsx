"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps {
  buttonText?: 'Read essay' | 'View samples' | 'Get in touch';
}

export function Button({ buttonText = 'View samples' }: ButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-1 flex"
    >
      <motion.button
        whileHover={{ gap: '12px' }}
        className="h-[40px] px-4 bg-[#EBEBEB] rounded-[4px] inline-flex items-center justify-center gap-2 text-[14px] text-[#123727] font-sans font-medium transition-colors hover:bg-[#E2E2E2] w-full"
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}