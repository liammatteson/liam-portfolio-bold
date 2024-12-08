"use client";

import { motion } from 'framer-motion';

export function ViewportBlur() {
  return (
    <motion.div 
      className="gradient-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ willChange: 'transform', position: 'sticky' }}
    >
      <div />
      <div />
    </motion.div>
  );
}