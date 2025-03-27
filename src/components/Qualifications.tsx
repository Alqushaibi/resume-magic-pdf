
import React from 'react';

interface QualificationItem {
  name: string;
  yearOfStudy: string;
  institution: string;
  yearAwarded: string;
}

interface QualificationsProps {
  qualifications: QualificationItem[];
}

const Qualifications: React.FC<QualificationsProps> = ({ qualifications }) => {
  return (
    <div className="space-y-4">
      {qualifications.map((qualification, index) => (
        <div key={index} className="glass-panel rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-gray-800">{qualification.name}</h3>
            <span className="text-xs bg-resume-light-blue text-resume-accent px-2 py-1 rounded">
              {qualification.yearAwarded}
            </span>
          </div>
          <p className="text-sm text-gray-600">{qualification.institution}</p>
          <p className="text-xs text-gray-500 mt-1">Year of study: {qualification.yearOfStudy}</p>
        </div>
      ))}
    </div>
  );
};

export default Qualifications;
