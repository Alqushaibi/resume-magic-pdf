
import React, { useEffect, useRef, useState } from 'react';
import { toast } from "sonner";
import '@/styles/animations.css';
import '@/styles/resume-print.css';
import '@/styles/accessibility.css';
import '@/styles/pdf-export.css';
import ResumeHeader from '@/components/ResumeHeader';
import ResumeSection from '@/components/ResumeSection';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Publications from '@/components/Publications';
import LanguageProficiency from '@/components/LanguageProficiency';
import ProjectExecution from '@/components/ProjectExecution';
import Qualifications from '@/components/Qualifications';
import { BookOpen, Award, Briefcase, GraduationCap, Languages, FileCode, Users, Brain, FileCheck, UserCheck, BadgeCheck, BookOpenCheck, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Personal Information
  const personalInfo = {
    name: "Alawi Alqushaibi",
    title: "Doctor of Philosophy in Information Technology",
    location: "UTP, Malaysia",
    phone: "+601121226508",
    email: "alawi.alqushaibi@gmail.com",
    linkedin: "Alawi Alqushaibi",
    linkedinUrl: "https://www.linkedin.com/in/alawialqushaibi/",
    summary: "Working with the highest level of loyalty and sincerity in order to help the organization attains a high positive ranking among other competitors."
  };

  // Education with updated UTP logo
  const education = [
    {
      degree: "Ph.D. in IT, by Research",
      institution: "Universiti Teknologi PETRONAS, Malaysia",
      logo: "/utp.png",
      startDate: "Jan 2022",
      endDate: "current",
      description: [
        "Work on Image processing.",
        "Published papers in Q1 and Q2 Journals."
      ],
      thesis:"Generative Adversarial Networks Optimization for Non-convergence Problem based on Gradient Penalty Sine Cosine Algorithm"
    },
    {
      degree: "M.S. in IT, by Research",
      institution: "Universiti Teknologi PETRONAS, Malaysia",
      logo: "/utp.png",
      startDate: "Jul 2019",
      endDate: "Aug 2021",
      description: [
        "Work on Machine Learning.",
        "Data Science.",
        "Deep Learning Optimization.",
        "Graduate on Time, Published papers in Q1 and Q2 Journals."
      ],
      thesis: "Enhanced Weight Optimized Recurrent Neural Networks Based On Sine Cosine Optimization Algorithm"
    },
    {
      degree: "B.S. in Computer Science",
      institution: "Universiti Teknologi Malaysia",
      logo: "/utm.png",
      startDate: "Jan 2008",
      endDate: "Mar 2012",
      description: [
        "Computer Network and Security",
        "Graduate with CGPA 3.10/4, Second Upper-Class Honors"
      ],
      thesis: "Restaurants Ordering System Using SMS"
    }
  ];

  // Work Experience with updated logo
  const academicExperiences = [
    {
      position: "Graduate Research Assistant",
      company: "Universiti Teknologi PETRONAS",
      logo: "/utp.png",
      startDate: "Currently",
      endDate: "Present",
      responsibilities: [
        "Execution of one (5) research project",
        "Paper publications",
        "Undergraduate lab Tutorials: Advance Database (Mongodb, and Redis) | Database Administration | Structured Algorithm & Programming | FYP Coordination | introduction to Data Science."
      ]
    }
  ];

  const professionalExperiences = [
    {
      position: "System Administrator Assistant",
      company: "Sabafon Company, Yemen",
      logo: "/sabafon.png",
      startDate: "Jun 2013",
      endDate: "May 2018",
      responsibilities: [
        "Install, manage and upgrade Windows 2008/2012,2016 server operating system and apply recommended patches.",
        "Create new domain users and manage existing user's properties.",
        "Manage hardware installation and maintenance of all Intel servers. (Disk, CPU/Memory Boards, PCI network interfaces, HBA fiber host adapter, and SAS adapter)",
        "Manage and configure windows DNS/DHCP service.",
        "Physical installation of servers racks, KVM, switches and rack mount keyboards and monitors.",
        "(LAN, WAN, WLAN) Installation, Configuration, and troubleshooting.",
        "Prepare and update the documents of all company security systems and prepare new security procedures and form upon needed."
      ]
    },
    {
      position: "Customer Care Consultant",
      company: "Sabafon Company, Yemen",
      logo: "/sabafon.png",
      startDate: "Jul 2012",
      endDate: "Jun 2013",
      responsibilities: [
        "Provide user level technical support.",
        "Give suggestions that contribute to a high level of satisfaction.",
        "Solve customers' problems or send them to the concerned departments to be solved.",
        "Promote the company's products and services."
      ]
    },
    {
      position: "Practical Training",
      company: "Ecosensa Technologies Sdn. Bhd, Malaysia",
      logo: "/ecosensa.png",
      startDate: "Jul 2011",
      endDate: "Dec 2012",
      responsibilities: [
        "Installing RFID devices and configuring the routers, troubleshooting the problems in gantries.",
        "Requirements gathering, development planning, designing work, workshops, documentation, maintaining websites and MySQL databases, giving courses, and even customer service.",
        "Promote the company's products and services and convince customers to sign contracts with Ecosensa Company."
      ]
    }
  ];

  // Skills
  const skills = [
    { name: "Python", icon: "🐍", level: 4, maxLevel: 5 },
    { name: "MATLAB", icon: "📊", level: 4, maxLevel: 5 },
    { name: "MySQL", icon: "🛢️", level: 3, maxLevel: 5 },
    { name: "SQL", icon: "📝", level: 3, maxLevel: 5 }
  ];

  // Publications with additional fields
  const journals = [
    {
      title: "Enhanced Colon Cancer Segmentation and Image Synthesis through Advanced Generative Adversarial Networks based-Sine Cosine Algorithm",
      authors: "Alqushaibi, A., Hasan, M. H., Abdulkadir, S. J., Kamaluddeen, U. D. ,et al.",
      journal: "IEEE Access",
      year: "2024",
      volume: "",
      number: "",
      pages: "",
      publisher: "IEEE",
      url: "",
      doi: "",
      note: "[Q2, IF 3.4], [ISI, Scopus]"
    },
    {
      title: "Type 2 diabetes risk prediction using deep convolutional neural network based-bayesian optimization",
      authors: "Alqushaibi, Alawi and Hasan, Mohd Hilmi and Abdulkadir, Said Jadid and Muneer, Amgad and Gamal, Mohammed and Al-Tashi, Qasem and Taib, Shakirah Mohd and Alhussian, Hitham",
      journal: "Computers, Materials & Continua",
      volume: "75",
      number: "2",
      year: "2023",
      pages: "4547--4560",
      publisher: "Tech Science Press",
      url: "",
      doi: "",
      note: "[Q2, IF 3.860], [ISI, Scopus]",
    },
    {
      title: "Enhanced weight-optimized recurrent neural networks based on sine cosine algorithm for wave height prediction",
      authors: "Alqushaibi, Alawi and Abdulkadir, Said Jadid and Rais, Helmi Md and Al-Tashi, Qasem and Ragab, Mohammed G and Alhussian, Hitham",
      journal: "Journal of Marine Science and Engineering",
      year: "2021",
      volume: "9",
      number: "5",
      pages: "524 ",
      publisher: "MDPI",
      url: "",
      doi: "",
      note: "[Q2, IF 2.458], [ISI, Scopus]"
    }
  ];

  const conferences = [
    {
      title: "Gradient Penalty Sine Cosine Algorithm (GP-SCA)",
      authors: "Alqushaibi, A., Hasan, M. H., Abdulkadir, S. J., Kamaluddeen, U. D. ,et al.",
      conference: "World Engineering, Science, and Technology Congress ESTCON 2024",
      year: "2024",
      note: "([ISI, Scopus])"
    },
    {
      title: "Mosquito Optimizer: A Nature-inspired Meta-heuristic Algorithm",
      authors: "Alqushaibi, A., Hasan, M. H., Abdulkadir, S. J., Kamaluddeen, U. D. ,et al.",
      conference: "2024 8th International Conference on Computing, Communication, Control and Automation (ICCUBEA)",
      year: "2024",
      note: "([ISI, Scopus])"
    },
    {
      title: "A Comparative Analysis of Machine Learning Techniques for Heart Disease Prediction",
      authors: "Alqushaibi, A., Hasan, M. H., Abdulkadir, S. J. ,et al.",
      conference: "2023 IEEE 21st Student Conference on Research and Development (SCOReD)",
      year: "2023",
      note: "([ISI, Scopus])"
    },
    {
      title: "Towards Power Grid Stability Index and Line Losses for Optimal Placement using Moth-Flame Optimization",
      authors: "Alqushaibi, A., Hasan, M. H., Abdulkadir, S. J., Kamaluddeen, U. D. ,et al.",
      conference: "I2022 International Conference on Digital Transformation and Intelligence (ICDI)",
      year: "2022",
      note: "([ISI, Scopus])"
    }
  ];

  const bookChapters = [
    {
      title: "Moth-flame optimization algorithm for feature selection: A review and future trends",
      authors: "Al-Tashi, Qasem and Mirjalili, Seyedali and Wu, Jia and Abdulkadir, Said Jadid and Shami, Tareq M and Khodadadi, Nima and Alqushaibi, Alawi",
      journal: "Handbook of Moth-Flame Optimization Algorithm",
      year: "2022"
    }
  ];

  // We need to keep the grants array but we won't be passing it to the Publications component
  const grants = [
    "A novel weight optimized recurrent neural network for real time metocean predictive analytics."
  ];

  // Verified Review Records
  const reviewRecords = [
    "Computers, Materials and Continua",
    "IEEE Access",
    "Plos One",
    "Computer Systems Science and Engineering",
    "Franklin Open"
  ];

  // Research Interests
  const researchInterests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Optimizations"
  ];

  // Referees
  const referees = [
    {
      name: "AP. Dr. Mohd Hilmi Hasan",
      email: "mhilmi_hasan@utp.edu.my",
      institution: "Universiti Teknologi PETRONAS",
      address: "32610 Seri Iskandar, Perak, Malaysia"
    },
    {
      name: "AP. Dr. Said Jadid Abdulkadir",
      email: "saidjadid.a@utp.edu.my",
      institution: "Universiti Teknologi PETRONAS",
      address: "32610 Seri Iskandar, Perak, Malaysia"
    },
    {
      name: "Dr. Kamaluddeen Usman Danyaro",
      email: "kamaluddeen.usman@utp.edu.my",
      institution: "Universiti Teknologi PETRONAS",
      address: "32610 Seri Iskandar, Perak, Malaysia"
    },
    {
      name: "Eng. Abdulhadi Saeed Hasan Al-Zawari",
      email: "hadialzawari@gmail.com",
      institution: "Yemen Company for Mobile Telephone - Sabefon",
      address: "Headquarters, Al Mualla, Aden, Republic of Yemen. P.O. Box 4455"
    }
  ];

  // Memberships
  const memberships = [
    {
      title: "PROFESSIONAL TECHNOLOGIST",
      organization: "Malaysia Board of Technologists (MBOT)",
      logo: "/mbot.png"
    },
    {
      title: "GRADUATE TECHNOLOGIST",
      organization: "Malaysia Board of Technologists (MBOT)",
      logo: "/mbot.png"
    },
    {
      title: "Centre for Research in Data Science (CERDAS)",
      organization: "Universiti Teknologi PETRONAS",
      logo: "/cerdas.png"
    },
    {
      title: "AIESEC",
      organization: "Universiti Teknologi Malaysia, Johor Bahru, Malaysia",
      logo: "/aiesec.png"
    }
  ];

  // Projects with updated logos
  const projects = [
    {
      title: "A novel weight optimized recurrent neural network for real time metocean predictive analytics",
      institution: "Universiti Teknologi PETRONAS",
      logo: "/utp.png",
      startYear: "2019",
      endYear: "2020"
    },
    {
      title: "Investigation of Scalable and High-Performing Automated Data Preprocessing Framework for Very Big Data Stream in Oil Platform Equipment's Time to Failure Prediction Model.",
      institution: "Universiti Teknologi PETRONAS",
      logo: "/utp.png",
      startYear: "2022",
      endYear: "2023"
    },
    {
      title: "Fundamental study of supervised machine learning techniques for autonomous defect mapping of offshore structures",
      institution: "Universiti Teknologi PETRONAS",
      logo: "/utp.png",
      startYear: "2023",
      endYear: "2024"
    },
    {
      title: "Digital Twin Model for Structural Asset Monitoring Solution and Decision Making for Onshore Facilities",
      institution: "Universiti Teknologi PETRONAS",
      logo: "/utp.png",
      startYear: "2023",
      endYear: "2025"
    },
    {
      title: "Assessment of Structural Steel Riser-Guard Load Capacities on the Resultant Impact on Offshore Structures Loading",
      institution: "Universiti Teknologi PETRONAS",
      logo: "/utp.png",
      startYear: "2024",
      endYear: "2025"
    }
  ];

  // Languages
  const languages = [
    { name: "Arabic", flagCode: "SA", level: 5 },
    { name: "English", flagCode: "US", level: 5 },
    { name: "Malay", flagCode: "MY", level: 2 }
  ];

  // Qualifications
  const qualifications = [
    {
      name: "One day workshop on 'Student Centered Learning: Engaging Learners through Active Learning'",
      yearOfStudy: "2024",
      institution: "Universiti Teknologi PETRONAS",
      yearAwarded: "2024"
    },
    {
      name: "One day workshop on 'Computer Vision with MATLAB",
      yearOfStudy: "2022",
      institution: "Universiti Teknologi PETRONAS",
      yearAwarded: "2022"
    },
    {
      name: "One day workshop on 'Introduction To Artificial Intelligence'",
      yearOfStudy: "2020",
      institution: "Yemeni Student Union- Malaysia",
      yearAwarded: "2020"
    },
    {
      name: "One day workshop on 'How To Be A Data Scientist'",
      yearOfStudy: "2020",
      institution: "Yemeni Student Union- Malaysia",
      yearAwarded: "2020"
    },
    {
      name: "Three days workshop on 'AI-100T01- Designing and Implementing an Azure AI Solution",
      yearOfStudy: "2020",
      institution: "Universiti Teknologi PETRONAS",
      yearAwarded: "2020"
    },
    {
      name: "Diploma of Maintinance and Programming Mobile",
      yearOfStudy: "2018",
      institution: "Science and Life Institution",
      yearAwarded: "2018"
    },
    {
      name: "Professional Skills",
      yearOfStudy: "2012",
      institution: "Universiti Teknologi Malaysia",
      yearAwarded: "2012"
    },
    {
      name: "Seven days on International Student Leaders Conference 2010",
      yearOfStudy: "2010",
      institution: "Ministery of Higher Education Malaysia",
      yearAwarded: "2010"
    }
  ];

  // Print functionality
  const handlePrintResume = () => {
    if (!resumeRef.current) return;

    window.print();
    toast.success("Print dialog opened");
  };

  // Download PDF functionality
  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
  
    setIsGeneratingPdf(true);
    toast.info("Preparing PDF for download...");
  
    try {
      // Dynamically import html2pdf.js only when needed
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;
  
      const element = resumeRef.current;
      const filename = 'Alawi_Alqushaibi_Resume.pdf';
  
      const opt = {
        margin: [2, 2, 2, 2], // [top, right, bottom, left] in mm
        filename: filename,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          letterRendering: true,
          logging: false,
          removeContainer: true,
          dpi: 300
        },
        jsPDF: {
          unit: 'mm',
          format: 'letter',
          orientation: 'portrait',
          compress: false,
          precision: 16,
          putOnlyUsedFonts: true,
          hotfixes: ["px_scaling"]
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.force-page-break',
          avoid: '.avoid-page-break, .glass-panel, .education-item, .work-experience-item, .project-item, .publication-item'
        }
      };
  
      // Hide buttons before generating PDF
      const buttons = document.querySelectorAll('footer .flex button');
      buttons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = 'none';
        }
      });
  
      // Wait for all fonts to load
      await document.fonts.ready;
  
      // Generate and save the PDF
      const pdfResult = await html2pdf()
        .from(element)
        .set(opt)
        .toPdf()
        .get('pdf');
  
      // Add metadata
      pdfResult.setProperties({
        title: 'Alawi Alqushaibi Resume',
        author: 'Alawi Alqushaibi',
        creator: 'Resume Builder'
      });
  
      // Save the PDF file
      await pdfResult.save();
  
      // Show buttons after PDF generation
      buttons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.style.display = '';
        }
      });
  
      toast.success("Resume downloaded successfully");
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.error("Failed to download PDF. Please try again.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Share functionality
  const handleShareResume = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Alawi Alqushaibi Resume',
        text: 'Check out my professional resume',
        url: window.location.href,
      })
      .then(() => toast.success("Resume shared successfully"))
      .catch(err => {
        console.error('Share error:', err);
        toast.error("Failed to share resume");
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Resume URL copied to clipboard"))
        .catch(() => toast.error("Failed to copy URL"));
    }
  };

  // Animation effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-radial from-white to-gray-50 py-10 px-4">
      <div className="resume-container pdf-optimized" ref={resumeRef}>
        <ResumeHeader {...personalInfo} />

        <ResumeSection
          title="Education"
          id="education"
          className="animate-delay-100"
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Academic Background</span>
          </div>
          <Education education={education} />
        </ResumeSection>

        <ResumeSection
          title="Working Experience"
          id="experience"
          className="animate-delay-200"
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Professional History</span>
          </div>
          <WorkExperience
            academicExperiences={academicExperiences}
            professionalExperiences={professionalExperiences}
          />
        </ResumeSection>
        <ResumeSection
          title="Research Interests"
          id="research"
          className="animate-delay-250"
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Areas of Expertise</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest, index) => (
              <span
                key={index}
                className="bg-resume-light-blue text-resume-accent px-3 py-1 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection
          title="Publications"
          id="publications"
          className="animate-delay-300"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Academic Contributions</span>
          </div>
          <Publications
            journals={journals}
            conferences={conferences}
            bookChapters={bookChapters}
            reviewRecords={reviewRecords}
            googleScholarUrl="https://scholar.google.com/citations?hl=en&user=7B_-M3YAAAAJ"
          />
        </ResumeSection>
        
        <ResumeSection
          title="Project Execution"
          id="projects"
          className="animate-delay-400"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileCode size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Research & Development Projects</span>
          </div>
          <ProjectExecution projects={projects} />
        </ResumeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ResumeSection
            title="Skills"
            id="skills"
            className="animate-delay-500"
          >
            <div className="flex items-center gap-2 mb-4">
              <FileCode size={18} className="text-resume-accent" />
              <span className="text-sm text-gray-600">Technical Expertise</span>
            </div>
            <Skills skills={skills} />
          </ResumeSection>

          <ResumeSection
            title="Languages"
            id="languages"
            className="animate-delay-600"
          >
            <div className="flex items-center gap-2 mb-4">
              <Languages size={18} className="text-resume-accent" />
              <span className="text-sm text-gray-600">Language Proficiency</span>
            </div>
            <LanguageProficiency languages={languages} />
          </ResumeSection>
        </div>

        <ResumeSection
          title="Awards"
          id="awards"
          className="animate-delay-700"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Recognitions & Achievements</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel rounded-lg p-4 flex items-center gap-3">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <Award size={24} className="text-resume-accent" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm">Publication Achievement Recognition</h3>
                <p className="text-sm text-gray-600">Universiti Teknologi PETRONAS (UTP), 2024</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-4 flex items-center gap-3">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <Award size={24} className="text-resume-accent" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm">Graduate on Time (GOT) Award</h3>
                <p className="text-sm text-gray-600">Universiti Teknologi PETRONAS (UTP), 2022</p>
                <p className="text-xs text-gray-500 mt-1">For completion of M.S. in the stipulated time of 24 months.</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-4 flex items-center gap-3">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <Award size={24} className="text-resume-accent" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm">Yemen Scholarship for outstanding students</h3>
                <p className="text-sm text-gray-600">Ministry of Higher Education, Yemen, 2007</p>
                <p className="text-xs text-gray-500 mt-1">For bachelor's degree.</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-4 flex items-center gap-3">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <Award size={24} className="text-resume-accent" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm">International students leadership conference</h3>
                <p className="text-sm text-gray-600">Ministry of Higher Education, Malaysia, 2010</p>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-4 flex items-center gap-3">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <Award size={24} className="text-resume-accent" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-sm">Best paper award in International Conference</h3>
                <p className="text-sm text-gray-600">Pimpri Chinchwad College of Engineering  Pune, India, 2024</p>
              </div>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection
          title="Qualification In Related Technology and Technical"
          id="qualifications"
          className="animate-delay-350"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpenCheck size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Certifications & Technical Training</span>
          </div>
          <Qualifications qualifications={qualifications} />
        </ResumeSection>

        <ResumeSection
          title="Extra-Curricular Activities"
          id="activities"
          className="animate-delay-800"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Leadership & Community Involvement</span>
          </div>
          <div className="space-y-4">
            <div className="glass-panel rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-800">President of Association Of International Students Yemen Chapter</h3>
                <span className="text-xs bg-resume-light-blue text-resume-accent px-2 py-1 rounded">2023 - 2025</span>
              </div>
              <p className="text-sm text-gray-600">Universiti Teknologi PETRONAS, Malaysia</p>
            </div>
            <div className="glass-panel rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-800">Vice President of Yemeni Student Society in UTM</h3>
                <span className="text-xs bg-resume-light-blue text-resume-accent px-2 py-1 rounded">2009 - 2010</span>
              </div>
              <p className="text-sm text-gray-600">Universiti Teknologi Malaysia, Malaysia</p>
              <ul className="list-disc list-inside text-xs text-gray-600 mt-2 space-y-1">
                <li>We established the Yemeni Student Society at Universiti Teknologi Malaysia (UTM).</li>
                <li>Prepare for the election of the Society in UTM.</li>
                <li>Manage a regular meeting of the management members of the Society in UTM.</li>
                <li>Planned activities and trips for members of the society.</li>
                <li>Solve students' problems and follow them up with the concerned departments to be solved.</li>
                <li>Participate in the orientation week at the university.</li>
                <li>Participate in the convocation festival at the university.</li>
                <li>Prepare and manage the Yemeni cultural activities for the cultural week at the university.</li>
              </ul>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection
          title="Referees"
          id="referees"
          className="animate-delay-850"
        >
          <div className="flex items-center gap-2 mb-4">
            <UserCheck size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Professional References</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {referees.map((referee, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 flex items-center gap-3">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <UserCheck size={24} className="text-resume-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">{referee.name}</h3>
                  <a
                    href={`mailto:${referee.email}`}
                    className="flex items-center gap-1 hover:text-resume-accent transition-colors mb-1"
                  >
                    <Mail size={12} className="inline" />
                    {referee.email}
                  </a>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="inline" />
                    <div>
                      <div className="text-sm">{referee.institution}</div>
                      <div className="text-xs text-gray-500">{referee.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection
          title="Memberships"
          id="memberships"
          className="animate-delay-1000"
        >
          <div className="flex items-center gap-2 mb-4">
            <BadgeCheck size={18} className="text-resume-accent" />
            <span className="text-sm text-gray-600">Professional Affiliations</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memberships.map((membership, index) => (
              <div key={index} className="glass-panel rounded-lg p-4 flex items-center gap-3">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                  <img
                    src={membership.logo}
                    alt={membership.organization}
                    className="max-w-full max-h-full object-contain"
                    width="64"
                    height="64"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">{membership.title}</h3>
                  <p className="text-xs text-gray-600">{membership.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; 2025 Alawi Alqushaibi. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="outline"
              onClick={handlePrintResume}
              className="hover:text-resume-accent transition-colors"
              disabled={isGeneratingPdf}
            >
              Print Resume
            </Button>
            <Button
              variant="outline"
              onClick={handleDownloadPDF}
              className="hover:text-resume-accent transition-colors"
              disabled={isGeneratingPdf}
            >
              {isGeneratingPdf ? "Generating PDF..." : "Download PDF"}
            </Button>
            <Button
              variant="outline"
              onClick={handleShareResume}
              className="hover:text-resume-accent transition-colors"
              disabled={isGeneratingPdf}
            >
              Share
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
