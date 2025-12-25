import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className={fullWidth ? "w-full" : "max-w-7xl mx-auto px-6 md:px-12"}>
        {children}
      </div>
    </section>
  );
};