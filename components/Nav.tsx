"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Clock } from './Clock';

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const date = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  const navAnimation = {
    initial: { opacity: 0, filter: "blur(12px)", y: 8 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8
    }
  };

  const Content = () => (
    <div className="max-w-[600px] mx-auto px-6">
      <div className="flex items-center justify-between h-[72px]">
        <div className="w-[90px] sm:w-[120px] flex items-center">
          <Logo />
        </div>

        <div className="flex-shrink-0 flex items-center">
          <div className="location-pill flex items-center whitespace-nowrap">
            <span className="hidden sm:inline mr-2">{date}</span>
            <Clock />
          </div>
        </div>

        <div className="w-[90px] sm:w-[120px] text-right">
          <span className="font-mono text-[12px] leading-[16px] text-gray-500 whitespace-nowrap">
            <span className="hidden sm:inline">Brooklyn, NY</span>
            <span className="sm:hidden">Brooklyn</span>
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white">
      {isHomePage ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div {...navAnimation}>
            <Content />
          </motion.div>
        </motion.div>
      ) : (
        <Content />
      )}
    </div>
  );
}