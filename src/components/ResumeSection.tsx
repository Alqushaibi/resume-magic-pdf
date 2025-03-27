
import React, { ReactNode } from 'react';

interface ResumeSectionProps {
  title: string;
  id: string;
  children: ReactNode;
  className?: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`mb-12 opacity-0 ${className}`}
      aria-labelledby={`section-${id}`}
    >
      <h2 
        id={`section-${id}`}
        className="text-2xl font-bold mb-6 text-gray-900 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-20 before:bg-resume-accent"
      >
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
};

export default ResumeSection;
