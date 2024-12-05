"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Clock() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const hours = (time.getHours() % 12) * 30 + (time.getMinutes() / 60) * 30; // 30 degrees per hour + smooth transition
  const minutes = time.getMinutes() * 6 + (time.getSeconds() / 60) * 6; // 6 degrees per minute + smooth transition
  const seconds = time.getSeconds() * 6; // 6 degrees per second

  return (
    <div className="inline-flex items-center gap-2">
      <div className="relative w-[18px] h-[18px] clock">
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[7px] h-[1.5px] bg-current opacity-90 rounded-full hour-hand"
          style={{ 
            transformOrigin: '0% 50%',
            rotate: hours 
          }}
          animate={{ rotate: hours }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[8px] h-[1.5px] bg-current opacity-70 rounded-full minute-hand"
          style={{ 
            transformOrigin: '0% 50%',
            rotate: minutes 
          }}
          animate={{ rotate: minutes }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[9px] h-[1.5px] bg-[#FF3B30] rounded-full second-hand"
          style={{ 
            transformOrigin: '0% 50%',
            rotate: seconds 
          }}
          animate={{ rotate: seconds }}
          transition={{ type: "tween", duration: 0.1 }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-[2px] h-[2px] bg-black rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <span className="text-[12px] leading-[16px]">
        {time.toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })}
      </span>
    </div>
  );
}