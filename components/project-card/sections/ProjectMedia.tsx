"use client";

import { ProjectImage } from '../ProjectImage';

interface ProjectMediaSectionProps {
  title: string;
  imagePath: string;
  additionalImages?: string[];
  description?: string;
  sideByImages?: string[];
}

export function ProjectMediaSection({ 
  title, 
  imagePath, 
  additionalImages, 
  description,
  sideByImages 
}: ProjectMediaSectionProps) {
  return (
    <div className="space-y-8">
      <div className="px-4 md:px-0 -mx-2 md:-mx-6">
        <ProjectImage 
          src={imagePath}
          alt={`${title} preview`}
        />
      </div>

      {description && (
        <div className="px-6">
          <div className="max-w-2xl">
            <p className="text-[#123727] text-[16px] leading-[24px]">
              {description}
            </p>
          </div>
        </div>
      )}
      
      {additionalImages && additionalImages.map((image, index) => (
        <div key={image} className="px-4 md:px-0 -mx-2 md:-mx-6">
          <ProjectImage 
            src={image}
            alt={`${title} additional view ${index + 1}`}
          />
        </div>
      ))}

      {sideByImages && sideByImages.length === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0 -mx-2 md:-mx-6">
          {sideByImages.map((image, index) => (
            <div key={image}>
              <ProjectImage 
                src={image}
                alt={`${title} side by side view ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}