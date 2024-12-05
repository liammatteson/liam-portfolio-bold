"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Nav } from './Nav';
import { Profile } from './Profile';

export function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <>
      <Nav />
      <div className="max-w-[528px] mx-auto px-6">
        {isHomePage && <Profile />}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}