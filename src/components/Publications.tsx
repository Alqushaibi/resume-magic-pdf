
import React from 'react';

interface JournalPublication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume: string;
  number: string;
  pages: string;
  publisher: string;
  url?: string;
  doi?: string;
  note?: string;
}

interface ConferencePublication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  note?: string;
}

interface BookChapter {
  title: string;
  authors: string;
  journal: string;
  year: string;
}

interface PublicationsProps {
  journals: JournalPublication[];
  conferences: ConferencePublication[];
  bookChapters: BookChapter[];
  reviewRecords: string[];
  googleScholarUrl?: string;
}

const Publications: React.FC<PublicationsProps> = ({
  journals,
  conferences,
  bookChapters,
  reviewRecords,
  googleScholarUrl
}) => {
  return (
    <div className="space-y-8">
      {journals.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
            <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-sm mr-2">
              Journals
            </span>
            Journal Articles
          </h3>
          <div className="space-y-4">
            {journals.map((pub, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 publication-item">
                <h4 className="font-medium text-gray-800 mb-1">{pub.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                <p className="text-sm">
                  <span className="italic">{pub.journal}</span>
                  {pub.volume && `, ${pub.volume}`}
                  {pub.number && `(${pub.number})`}
                  {pub.pages && `, pp. ${pub.pages}`}
                  {pub.publisher && `, ${pub.publisher}`}
                  {pub.year && `, ${pub.year}`}
                </p>
                {pub.note && (
                  <p className="text-xs text-resume-accent mt-2">{pub.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {conferences.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
            <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-sm mr-2">
              Conferences
            </span>
            Conference Papers
          </h3>
          <div className="space-y-4">
            {conferences.map((pub, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 publication-item">
                <h4 className="font-medium text-gray-800 mb-1">{pub.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                <p className="text-sm">
                  <span className="italic">{pub.conference}</span>
                  {pub.year && `, ${pub.year}`}
                </p>
                {pub.note && (
                  <p className="text-xs text-resume-accent mt-2">{pub.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {bookChapters.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
            <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-sm mr-2">
              Books
            </span>
            Book Chapters
          </h3>
          <div className="space-y-4">
            {bookChapters.map((pub, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 publication-item">
                <h4 className="font-medium text-gray-800 mb-1">{pub.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                <p className="text-sm">
                  <span className="italic">{pub.journal}</span>
                  {pub.year && `, ${pub.year}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {reviewRecords.length > 0 && (
        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
            <span className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-sm mr-2">
              Reviews
            </span>
            Verified Review Records
          </h3>
          <div className="glass-panel rounded-lg p-4">
            <div className="flex flex-wrap gap-2">
              {reviewRecords.map((record, index) => (
                <span 
                  key={index}
                  className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-sm"
                >
                  {record}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {googleScholarUrl && (
        <div className="mt-4 text-center">
          <a 
            href={googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-resume-accent text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 3a9 9 0 1 0 9 9"/>
              <path d="M12 3C5 3 1 9 1 9s4 6 11 6c2.4 0 4 0 6 6"/>
              <path d="M7 9h4"/>
              <path d="M7 13h3"/>
              <path d="M17 17l-3.5-3.5"/>
              <circle cx="18" cy="18" r="3"/>
            </svg>
            View Google Scholar Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Publications;
