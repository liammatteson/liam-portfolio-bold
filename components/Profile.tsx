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
        className="[font-family:var(--font-serif)] text-[22px] leading-[36px] text-[#6B7467] tracking-[-0.22px]"
        text="Shipping quality software with clarity through creativity, conviction, craft, and relentless iteration."
      />
      <Navigation />
    </motion.div>
  );
}