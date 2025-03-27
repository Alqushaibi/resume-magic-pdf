
import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

interface ResumeHeaderProps {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  summary: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  name,
  title,
  location,
  phone,
  email,
  linkedin,
  linkedinUrl,
  summary
}) => {
  return (
    <header className="mb-10 animate-blur-in">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{name}</h1>
          <h2 className="text-xl font-medium text-resume-accent mt-1">{title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl">{summary}</p>
        </div>
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-resume-accent" />
            <span>{location}</span>
          </div>
          <a 
            href={`tel:${phone}`} 
            className="flex items-center gap-2 hover:text-resume-accent transition-colors"
            aria-label={`Call ${phone}`}
          >
            <Phone size={16} className="text-resume-accent" />
            <span>{phone}</span>
          </a>
          <a 
            href={`mailto:${email}`} 
            className="flex items-center gap-2 hover:text-resume-accent transition-colors"
            aria-label={`Email ${email}`}
          >
            <Mail size={16} className="text-resume-accent" />
            <span>{email}</span>
          </a>
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-resume-accent transition-colors"
            aria-label={`Visit LinkedIn profile: ${linkedin}`}
          >
            <Linkedin size={16} className="text-resume-accent" />
            <span>{linkedin}</span>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 pt-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-xs font-medium">
            Machine Learning
          </span>
          <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-xs font-medium">
            Deep Learning
          </span>
          <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-xs font-medium">
            GANs
          </span>
          <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-xs font-medium">
            Optimization
          </span>
          <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-xs font-medium">
            Computer Vision
          </span>
          <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-xs font-medium">
            Image Processing
          </span>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
