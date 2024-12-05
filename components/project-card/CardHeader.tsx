"use client";

interface CardHeaderProps {
  title: string;
  year?: string;
  variant?: 'default' | 'primary';
}

export function CardHeader({ title, year = "2024", variant = 'default' }: CardHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <h3 className={`text-[14px] leading-[24px] font-sans font-medium ${
        variant === 'primary' ? 'text-primary' : 'text-white'
      }`}>
        {title}
      </h3>
      <span className={`text-[14px] leading-[24px] font-sans ${
        variant === 'primary' ? 'text-primary/90' : 'text-white/90'
      }`}>
        {year}
      </span>
    </div>
  );
}