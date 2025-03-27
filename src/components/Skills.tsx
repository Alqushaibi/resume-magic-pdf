
import React from 'react';

interface SkillItem {
  name: string;
  icon: string;
  level: number;
  maxLevel: number;
}

interface SkillsProps {
  skills: SkillItem[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="glass-panel rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl" role="img" aria-label={skill.name}>{skill.icon}</span>
            <h3 className="font-medium text-gray-800">{skill.name}</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-resume-accent h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={skill.maxLevel}
              role="progressbar"
              aria-label={`${skill.name} proficiency: ${skill.level} out of ${skill.maxLevel}`}
            ></div>
          </div>
          <div className="mt-1 text-xs text-gray-500 text-right">
            {skill.level}/{skill.maxLevel}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
