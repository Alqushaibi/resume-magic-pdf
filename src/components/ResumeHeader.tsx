
import React from 'react';
import { Mail, MapPin,Phone, Linkedin } from 'lucide-react';

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
    <header className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{name}</h1>
          <h2 className="text-xl text-resume-accent font-serif mt-1">{title}</h2>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col space-y-1 text-sm text-gray-700">
          <a 
            href={`tel:${phone}`}
            className="flex items-center gap-2 hover:text-resume-accent transition-colors"
          >
            <Phone size={16} className="text-resume-accent" />
            {phone}
          </a>
          <a 
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-resume-accent transition-colors"
          >
            <Mail size={16} className="text-resume-accent" />
            {email}
          </a>
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-resume-accent transition-colors"
          >
            <Linkedin size={16} className="text-resume-accent" />
            {linkedin}
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-resume-accent" />
            {location}
          </div>
        </div>
      </div>
      <div className="glass-panel p-4 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-100">
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </div>
    </header>
  );
};

export default ResumeHeader;
