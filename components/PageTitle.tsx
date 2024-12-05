"use client";

interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-[16px] leading-[24px] font-sans font-medium mb-12">
      {children}
    </h1>
  );
}