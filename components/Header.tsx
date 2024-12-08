"use client";

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { Clock } from './Clock';

export function Header() {
  return (
    <div className="px-4 sm:px-6">
      <div className="max-w-[600px] mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[20px]"
        >
          <Logo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="location-pill mx-2 sm:mx-4 text-[12px] leading-[16px] flex-shrink-0"
        >
          <Clock />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-w-[90px] font-mono text-[12px] leading-[16px] text-gray-500 text-right"
        >
          Brooklyn, NY
        </motion.div>
      </div>
    </div>
  );
}