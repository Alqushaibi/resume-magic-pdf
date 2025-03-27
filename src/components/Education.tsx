
import React, { useState } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string[];
  thesis: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (logoPath: string) => {
    setLoadedImages(prev => ({ ...prev, [logoPath]: true }));
  };

  return (
    <div className="space-y-6">
      {education.map((item, index) => (
        <div 
          key={index} 
          className="glass-panel rounded-lg p-5 education-item"
        >
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <img
                src={item.logo}
                alt={`${item.institution} logo`}
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
                <h3 className="font-semibold text-lg text-gray-800">{item.degree}</h3>
                <span className="text-sm bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full font-medium">
                  {item.startDate} - {item.endDate}
                </span>
              </div>
              <h4 className="text-gray-600 mb-2">{item.institution}</h4>
              <div className="mt-2">
                <h5 className="font-medium text-gray-800 mb-1">Thesis:</h5>
                <p className="text-gray-700 italic mb-2">{item.thesis}</p>
              </div>
              {item.description.length > 0 && (
                <div className="mt-2">
                  <h5 className="font-medium text-gray-800 mb-1">Key Achievements:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {item.description.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-700 text-sm">{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
