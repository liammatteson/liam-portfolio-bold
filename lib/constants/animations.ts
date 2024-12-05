import type { Variants } from 'framer-motion';

export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8
    }
  }
} as const;

export const VARIANTS: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    }
  }
} as const;

export const TRANSITIONS = {
  spring: {
    type: "spring",
    stiffness: 150,
    damping: 30,
    mass: 1,
    duration: 0.8
  },
  smooth: {
    type: "tween",
    ease: "easeInOut",
    duration: 0.4
  }
} as const;