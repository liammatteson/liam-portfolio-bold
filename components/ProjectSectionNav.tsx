import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'copilot', label: 'Copilot' },
  { id: 'antimetal', label: 'Antimetal' },
  { id: 'vanta', label: 'Vanta' }
];

export function ProjectSectionNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('copilot');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const determineActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    let closestSection = '';
    let closestDistance = Infinity;
    
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(elementMiddle - viewportHeight / 2);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      }
    }
    
    if (closestSection && closestSection !== activeSection) {
      setActiveSection(closestSection);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener('scroll', determineActiveSection, { passive: true });
    determineActiveSection(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', determineActiveSection);
    };
  }, [determineActiveSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <div 
      ref={navRef}
      className="hidden sm:block fixed left-2 top-1/2 -translate-y-1/2 z-10"
    >
      <div 
        className="cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-1.5 py-[8px] px-2 hover:bg-[rgba(20,27,20,0.08)] rounded transition-colors duration-200 ease-in-out">
          {sections.map((section, i) => (
            <div 
              key={i}
              className={`w-[12px] h-[1.5px] ${
                activeSection === section.id 
                  ? 'bg-[#A5AAA1]' 
                  : 'bg-[#D8DAE0]'
              }`}
            />
          ))}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 bg-[#f5f5f5] border border-[#E8EAEE] rounded-md p-2"
            >
              <div className="flex flex-col gap-0.5">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection(section.id);
                    }}
                    className={`text-[14px] leading-[16px] px-2 py-1 w-full text-left transition-all duration-200 ease-in-out ${
                      activeSection === section.id
                        ? 'text-[#123727] font-medium bg-[rgba(20,27,20,0.08)]'
                        : 'text-[#6B7467] hover:text-[#123727] hover:bg-[rgba(20,27,20,0.08)]'
                    } whitespace-nowrap rounded`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
