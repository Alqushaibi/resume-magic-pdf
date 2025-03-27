
import React, { useState } from 'react';

interface ExperienceItem {
  position: string;
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  academicExperiences: ExperienceItem[];
  professionalExperiences: ExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ 
  academicExperiences, 
  professionalExperiences 
}) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (logoPath: string) => {
    setLoadedImages(prev => ({ ...prev, [logoPath]: true }));
  };

  const renderExperienceItem = (item: ExperienceItem, index: number) => (
    <div 
      key={index} 
      className="glass-panel rounded-lg p-5 work-experience-item mb-6"
    >
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-md">
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
              loadedImages[item.logo] ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => handleImageLoad(item.logo)}
            width="96"
            height="96"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between flex-wrap">
            <h3 className="font-semibold text-lg text-gray-800">{item.position}</h3>
            <span className="text-sm bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full font-medium">
              {item.startDate} - {item.endDate}
            </span>
          </div>
          <h4 className="text-gray-600 mb-3">{item.company}</h4>
          
          <h5 className="font-medium text-gray-800 mb-1">Responsibilities:</h5>
          <ul className="list-disc list-inside space-y-1">
            {item.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex} className="text-gray-700 text-sm">{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {academicExperiences.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Academic Experience</h3>
          {academicExperiences.map(renderExperienceItem)}
        </div>
      )}
      
      {professionalExperiences.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">Professional Experience</h3>
          {professionalExperiences.map(renderExperienceItem)}
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
