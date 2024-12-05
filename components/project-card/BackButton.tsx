"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="px-6 mt-6 mb-8"
    >
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-[#6D7468] hover:text-[#123727] group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-[14px]">Back to projects</span>
      </Link>
    </motion.div>
  );
}