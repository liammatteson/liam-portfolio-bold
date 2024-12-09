"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardImageProps {
  href: string;
  imagePath: string;
  variant?: 'default' | 'primary';
}

export function CardImage({ href, imagePath, variant = 'default' }: CardImageProps) {
  return (
    <motion.div 
      className="w-full aspect-[448/272] relative overflow-hidden rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]"
      layoutId={`project-image-${href}`}
    >
      <Image
        src={imagePath}
        alt="Project preview"
        fill
        className="object-cover"
        priority
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 896px"
        quality={100}
      />
    </motion.div>
  );
}