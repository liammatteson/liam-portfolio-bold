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
      className="w-full aspect-[448/272] relative overflow-hidden rounded-[4px]"
      layoutId={`project-image-${href}`}
    >
      <Image
        src={imagePath}
        alt="Project preview"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
      />
    </motion.div>
  );
}