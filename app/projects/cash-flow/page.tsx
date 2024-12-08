"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { ProjectContent } from '@/components/project-card/ProjectContent';
import { ProjectHeader } from '@/components/project-card/ProjectHeader';

export default function CashFlowPage() {
  const router = useRouter();

  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 30,
    mass: 1,
    duration: 0.8
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#6D7468] hover:text-[#123727] mt-6 mb-8 group px-6"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-[14px] leading-[24px] font-[450] font-inter">Back to projects</span>
          </Link>
        </motion.div>

        <motion.div
          layoutId="project-header-/projects/cash-flow"
          className="px-6 mb-4"
          transition={springTransition}
        >
          <ProjectHeader 
            title="Cash Flow"
            year="2024"
            isExpanded={true}
            className="text-[16px] leading-[24px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-6 mb-8"
        >
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/CashFlow.jpg"
              alt="Cash Flow Project Hero"
              width={1200}
              height={675}
              className="w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          layoutId="project-card-/projects/cash-flow"
          transition={springTransition}
          className="rounded-[8px] bg-[color(display-p3_0.99_0.99_0.99)] p-1"
        >
          <motion.div 
            className="relative"
            layoutId="project-content-/projects/cash-flow"
            transition={springTransition}
          >
            <motion.div 
              className="w-full aspect-[448/272] relative overflow-hidden rounded-[4px]"
              layoutId="project-image-/projects/cash-flow"
              transition={springTransition}
            >
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Financial dashboard showing transaction data and analytics"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"
                layoutId="project-gradient-/projects/cash-flow"
                transition={springTransition}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <ProjectContent 
            title="Cash Flow"
            description="Cash Flow is a comprehensive financial management platform that helps businesses maintain healthy cash flow through real-time monitoring, predictive analytics, and intelligent recommendations."
            features={[
              "Real-time cash flow monitoring and forecasting",
              "Automated invoice and payment tracking",
              "Customizable financial reports and dashboards",
              "AI-powered cash flow optimization recommendations",
              "Integration with popular accounting software"
            ]}
            technologies={[
              "Next.js for the frontend application",
              "TypeScript for type-safe development",
              "Tailwind CSS for styling",
              "Framer Motion for animations",
              "Vercel for deployment and hosting"
            ]}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}