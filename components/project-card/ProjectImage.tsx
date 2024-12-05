"use client";

import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="w-full aspect-[448/272] relative overflow-hidden rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover scale-[1.02]"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
      />
    </div>
  );
}