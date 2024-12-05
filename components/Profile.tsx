"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Navigation } from './Navigation';
import { AnimatedText } from './animations/AnimatedText';
import { Title } from './profile/Title';

export function Profile() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <motion.div 
      className="text-center pt-[48px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Title />
      <AnimatedText 
        className="font-serif" 
        text="Transforming ambiguity into clarity, shipping quality software fast through creativity, craft, and systems." 
      />
      <Navigation />
    </motion.div>
  );
}