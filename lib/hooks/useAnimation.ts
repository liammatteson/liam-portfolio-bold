import { VARIANTS, TRANSITIONS } from '../constants/animations';
import type { AnimationProps } from 'framer-motion';

export const useAnimation = () => {
  const containerVariants = VARIANTS.container;
  const itemVariants = VARIANTS.item;
  const springTransition: AnimationProps["transition"] = TRANSITIONS.spring;

  return {
    containerVariants,
    itemVariants,
    springTransition
  };
};