
import React from 'react';

interface LanguageItem {
  name: string;
  flagCode: string;
  level: number;
}

interface LanguageProficiencyProps {
  languages: LanguageItem[];
}

const LanguageProficiency: React.FC<LanguageProficiencyProps> = ({ languages }) => {
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const getProficiencyLabel = (level: number): string => {
    switch (level) {
      case 1: return "Basic";
      case 2: return "Conversational";
      case 3: return "Good Working Knowledge";
      case 4: return "Fluent";
      case 5: return "Native / Bilingual";
      default: return "Unknown";
    }
  };

  return (
    <div className="space-y-4">
      {languages.map((language, index) => (
        <div key={index} className="glass-panel rounded-lg p-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl" role="img" aria-label={`${language.name} flag`}>
              {getFlagEmoji(language.flagCode)}
            </span>
            <h3 className="font-medium text-gray-800">{language.name}</h3>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-resume-accent h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${(language.level / 5) * 100}%` }}
              aria-label={`${language.name} proficiency level: ${getProficiencyLabel(language.level)}`}
            ></div>
          </div>
          <div className="mt-1 text-xs text-gray-500 text-right">
            {getProficiencyLabel(language.level)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageProficiency;
