"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const links = ["Connect", "About", "People", "Now"];

export function Links() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center gap-16"
    >
      {links.map((item) => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className="h-8 flex items-center text-[16px] leading-6 text-gray-600 hover:text-gray-900 transition-colors border-b-2 border-[#D2D5D0]"
        >
          {item}
        </Link>
      ))}
    </motion.nav>
  );
}