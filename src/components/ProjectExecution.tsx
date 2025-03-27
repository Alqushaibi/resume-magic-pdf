
import React, { useState } from 'react';

interface ProjectItem {
  title: string;
  institution: string;
  logo: string;
  startYear: string;
  endYear: string;
}

interface ProjectExecutionProps {
  projects: ProjectItem[];
}

const ProjectExecution: React.FC<ProjectExecutionProps> = ({ projects }) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (logoPath: string) => {
    setLoadedImages(prev => ({ ...prev, [logoPath]: true }));
  };

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="glass-panel rounded-lg p-5 project-item"
        >
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-white rounded-md">
              <img
                src={project.logo}
                alt={`${project.institution} logo`}
                className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                  loadedImages[project.logo] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(project.logo)}
                width="96"
                height="96"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between flex-wrap">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full font-medium">
                  {project.startYear} - {project.endYear}
                </span>
              </div>
              <h4 className="text-gray-600 mt-1">{project.institution}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectExecution;
