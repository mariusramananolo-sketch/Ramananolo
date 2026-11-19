import type { Language } from '../context/LanguageContext';

export const PORTRAIT_IMAGE_PATH = '/assets/aistudio/image_7a09e11f.png';

export interface NavItem {
  id: string;
  label: string;
}

export interface FloatingTechLogo {
  name: string;
  label: string;
  desktopStyle: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  tabletVisible: boolean;
  mobilePosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  floatY: number;
  floatX: number;
  rotateRange: [number, number];
  duration: number;
  delay: number;
  parallaxFactor: number;
}

// Organically dispersed composition around the portrait (never symmetrical circle or orbit)
export const HERO_FLOATING_LOGOS: FloatingTechLogo[] = [
  {
    name: 'React',
    label: 'React',
    desktopStyle: { top: '6%', left: '14%' },
    tabletVisible: true,
    mobilePosition: { top: '4%', left: '3%' },
    floatY: -10,
    floatX: 5,
    rotateRange: [-5, 4],
    duration: 5.4,
    delay: 0.45,
    parallaxFactor: 22,
  },
  {
    name: 'Cybersecurity',
    label: 'Cybersecurity',
    desktopStyle: { top: '8%', right: '13%' },
    tabletVisible: true,
    mobilePosition: { top: '5%', right: '3%' },
    floatY: -9,
    floatX: -4,
    rotateRange: [4, -4],
    duration: 6.1,
    delay: 0.55,
    parallaxFactor: 26,
  },
  {
    name: 'TypeScript',
    label: 'TypeScript',
    desktopStyle: { top: '23%', left: '6%' },
    tabletVisible: true,
    floatY: 9,
    floatX: 4,
    rotateRange: [-3, 5],
    duration: 5.8,
    delay: 0.62,
    parallaxFactor: 16,
  },
  {
    name: 'Spring Boot',
    label: 'Spring Boot',
    desktopStyle: { top: '21%', right: '5%' },
    tabletVisible: true,
    floatY: -11,
    floatX: -6,
    rotateRange: [-4, 3],
    duration: 6.5,
    delay: 0.68,
    parallaxFactor: 18,
  },
  {
    name: 'Next.js',
    label: 'Next.js',
    desktopStyle: { top: '39%', left: '15%' },
    tabletVisible: true,
    mobilePosition: { top: '42%', left: '2%' },
    floatY: -8,
    floatX: 3,
    rotateRange: [3, -3],
    duration: 5.1,
    delay: 0.74,
    parallaxFactor: 28,
  },
  {
    name: 'Java',
    label: 'Java',
    desktopStyle: { top: '37%', right: '16%' },
    tabletVisible: true,
    mobilePosition: { top: '40%', right: '2%' },
    floatY: 10,
    floatX: -4,
    rotateRange: [-5, 3],
    duration: 5.9,
    delay: 0.8,
    parallaxFactor: 24,
  },
  {
    name: 'Python',
    label: 'Python',
    desktopStyle: { top: '55%', left: '4%' },
    tabletVisible: false,
    floatY: 8,
    floatX: 6,
    rotateRange: [-4, 4],
    duration: 6.7,
    delay: 0.86,
    parallaxFactor: 14,
  },
  {
    name: 'PostgreSQL',
    label: 'PostgreSQL',
    desktopStyle: { top: '54%', right: '6%' },
    tabletVisible: true,
    floatY: -9,
    floatX: -5,
    rotateRange: [3, -5],
    duration: 6.2,
    delay: 0.92,
    parallaxFactor: 20,
  },
  {
    name: 'FastAPI',
    label: 'FastAPI',
    desktopStyle: { bottom: '24%', left: '14%' },
    tabletVisible: true,
    mobilePosition: { bottom: '16%', left: '4%' },
    floatY: -7,
    floatX: 5,
    rotateRange: [-3, 4],
    duration: 5.5,
    delay: 0.98,
    parallaxFactor: 25,
  },
  {
    name: 'JWT',
    label: 'JWT',
    desktopStyle: { bottom: '22%', right: '15%' },
    tabletVisible: true,
    mobilePosition: { bottom: '14%', right: '4%' },
    floatY: 9,
    floatX: -4,
    rotateRange: [4, -4],
    duration: 6.4,
    delay: 1.04,
    parallaxFactor: 22,
  },
  {
    name: 'Git',
    label: 'Git',
    desktopStyle: { bottom: '8%', left: '7%' },
    tabletVisible: false,
    floatY: 7,
    floatX: 4,
    rotateRange: [-5, 2],
    duration: 5.7,
    delay: 1.1,
    parallaxFactor: 16,
  },
  {
    name: 'Linux',
    label: 'Linux',
    desktopStyle: { bottom: '5%', left: '21%' },
    tabletVisible: false,
    floatY: -8,
    floatX: -3,
    rotateRange: [2, -4],
    duration: 6.8,
    delay: 1.15,
    parallaxFactor: 19,
  },
  {
    name: 'REST API',
    label: 'REST API',
    desktopStyle: { bottom: '7%', right: '21%' },
    tabletVisible: false,
    floatY: 8,
    floatX: 5,
    rotateRange: [-3, 5],
    duration: 5.9,
    delay: 1.2,
    parallaxFactor: 20,
  },
  {
    name: 'GitHub',
    label: 'GitHub',
    desktopStyle: { bottom: '6%', right: '7%' },
    tabletVisible: true,
    floatY: -9,
    floatX: -3,
    rotateRange: [3, -3],
    duration: 6.3,
    delay: 1.25,
    parallaxFactor: 15,
  },
];

export const MARQUEE_TECHNOLOGIES = [
  'Java',
  'Spring Boot',
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'SQL',
  'Git',
  'REST APIs',
  'Spring Security',
  'JWT',
  'Linux',
];

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  code: string;
  title: string;
  filterKey: string;
  skills: { name: string; iconKey: string; hasIcon: boolean }[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectItem {
  number: string;
  id: string;
  title: string;
  projectType?: string;
  clientContext?: string;
  description: string;
  involvement?: string;
  technologies: string[];
  status?: string;
  externalUrl?: string;
  images: ProjectImage[];
  highlights: string[];
}

export interface EducationItem {
  stage: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  isCurrent: boolean;
}

export const REAL_CONTACT = {
  name: 'Marius RAMANANOLO',
  email: 'ramananolo44@gmail.com',
  phone: '+261380638399',
  location: 'Antananarivo, Madagascar',
  linkedinUrl: 'https://www.linkedin.com/in/ramananolo-marius-217039364/',
};

export interface PortfolioContent {
  nav: {
    items: NavItem[];
    letsTalk: string;
    currentLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    roleTitle: string;
    intro: string;
    ctaExplore: string;
    ctaContact: string;
    portraitAlt: string;
    cyberLogoLabel: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
    visualLabels: {
      securityLayer: string;
      backendLayer: string;
      backendStack: string;
      uiLayer: string;
      uiStack: string;
      badgeLeft: string;
      badgeRight: string;
      ariaLabel: string;
    };
  };
  experience: {
    kicker: string;
    title: string;
    technologiesLabel: string;
    responsibilitiesLabel: string;
    showDetails: string;
    hideDetails: string;
    items: ExperienceItem[];
  };
  skills: {
    kicker: string;
    title: string;
    filterAriaLabel: string;
    filters: { key: string; label: string }[];
    categories: SkillCategory[];
    languagesNoteLabel: string;
    languagesNoteValue: string;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    projectPrefix: string;
    involvementLabel: string;
    clientContextLabel: string;
    stackLabel: string;
    viewOverview: string;
    visitPrefix: string;
    placeholderTitle: string;
    placeholderNote: string;
    scopeTitle: string;
    technologiesTitle: string;
    closeModal: string;
    prevImageLabel: string;
    nextImageLabel: string;
    goToSlideLabel: string;
    items: ProjectItem[];
  };
  education: {
    kicker: string;
    title: string;
    items: EducationItem[];
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    directChannelsTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    linkedinTitle: string;
    linkedinAction: string;
    copyEmailAria: string;
    copiedEmailNotice: string;
    languagesTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      errorBanner: string;
      successBanner: string;
      errors: {
        name: string;
        email: string;
        subject: string;
        message: string;
      };
    };
  };
  footer: {
    roleSubtitle: string;
    bio: string;
    navigationTitle: string;
    connectTitle: string;
    linkedinLabel: string;
    backToTop: string;
    rights: string;
    paletteTagline: string;
  };
}

export const PORTFOLIO_CONTENT: Record<Language, PortfolioContent> = {
  en: {
    nav: {
      items: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
      ],
      letsTalk: "Let's Talk",
      currentLabel: 'Current',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      roleTitle: 'SOFTWARE DEVELOPMENT · IT SYSTEMS & SECURITY',
      intro:
        'Building practical digital solutions with an interest in software engineering, modern technologies, IT infrastructure and application security.',
      ctaExplore: 'Explore My Work',
      ctaContact: 'Get In Touch',
      portraitAlt: 'Portrait photograph of Marius RAMANANOLO',
      cyberLogoLabel: 'Cybersecurity',
    },
    about: {
      kicker: 'About Me',
      title: 'Beyond The Code.',
      paragraphs: [
        'My name is Marius RAMANANOLO. I completed my Licence-level studies in Software Ecosystem at HEI Madagascar and I am currently pursuing a Master 1 in Cybersecurity at ESTI Madagascar.',
        'I have practical experience in web application development, including frontend and backend development, database management, REST API integration and application access control.',
        'I enjoy building useful digital solutions and understanding how software systems work, from user interfaces to backend architecture and server environments.',
        'My interests include software engineering, web technologies, database management, Linux server administration and application security.',
      ],
      facts: [
        { label: 'Current Focus', value: 'Software Development & Cybersecurity' },
        { label: 'Academic Background', value: 'Software Ecosystem' },
        { label: 'Professional Experience', value: 'Web Application Development' },
        {
          label: 'Main Interests',
          value: 'Software Engineering, IT Infrastructure & Application Security',
        },
      ],
      languagesTitle: 'Languages',
      languages: [
        { name: 'French', level: 'Intermediate' },
        { name: 'English', level: 'Intermediate' },
      ],
      visualLabels: {
        securityLayer: 'APPLICATION SECURITY LAYER',
        backendLayer: 'BACKEND ARCHITECTURE & APIs',
        backendStack: 'Java · Spring Boot · REST APIs · PostgreSQL',
        uiLayer: 'USER INTERFACE LAYER',
        uiStack: 'React · Next.js · TypeScript',
        badgeLeft: 'Software Development',
        badgeRight: 'Application Security',
        ariaLabel:
          'Technical architecture diagram showing User Interface Layer, Backend Architecture and APIs, and Application Security Layer',
      },
    },
    experience: {
      kicker: 'Experience',
      title: 'Experience & Professional Journey.',
      technologiesLabel: 'Technologies Used',
      responsibilitiesLabel: 'Key Responsibilities',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      items: [
        {
          id: 'nim-madagascar',
          company: 'NIM – Nouvelle Institution de Microfinance (NIM S.A.)',
          position: 'RH Application Developer Intern',
          period: 'August 2025 – February 2026',
          location: 'Antananarivo, Madagascar',
          employmentType: 'Internship',
          description:
            'Participated in the conception and development of a Human Resources Management System in collaboration with my manager. The application was developed to centralize HR operations, including employee management, recruitment, leave and absence management, payroll and user administration.',
          responsibilities: [
            'Participated in the initial project conception and requirements discussions with my manager.',
            'Developed frontend and backend application features.',
            'Developed and integrated HR modules, including employee management, recruitment, leave and absence management, payroll and user administration.',
            'Worked with PostgreSQL for database management.',
            'Implemented and maintained authentication and authorization using Spring Security and JWT.',
            'Implemented role-based access control (RBAC) to manage permissions and restrict access to application resources and data.',
            'Used Git and GitHub for source code management.',
          ],
          technologies: [
            'Java',
            'Spring Boot',
            'React',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Spring Security',
            'JWT',
            'REST APIs',
            'Git',
            'GitHub',
          ],
        },
        {
          id: 'ohmy-fr-exp',
          company: 'Ohmy.fr',
          position: 'Freelance Web Developer',
          period: 'May 2025',
          employmentType: 'Freelance – Client Project',
          description:
            'Developed an e-commerce website for a client specializing in wholesale food products.',
          responsibilities: [
            'Website development and user interface implementation.',
            'Design of a clear and user-friendly browsing experience.',
            'Web hosting and DNS configuration.',
            'Application deployment using Vercel and domain configuration through IONOS.',
          ],
          technologies: ['React', 'TypeScript', 'Vercel', 'IONOS', 'DNS'],
        },
        {
          id: 'pine-script-exp',
          company: 'Custom Trading Indicators',
          position: 'Freelance Pine Script Developer',
          period: 'August 2024 – October 2024',
          employmentType: 'Freelance – Client Project',
          description:
            'Developed customized trading indicators for a client using Pine Script and TradingView.',
          responsibilities: [
            'Development of an EMA 20/50 and Supertrend strategy.',
            'Implementation of delayed crossover logic.',
            'Integration of multiple validation levels for trading signals.',
            'Testing and refinement of the implemented logic.',
          ],
          technologies: ['Pine Script', 'TradingView'],
        },
      ],
    },
    skills: {
      kicker: 'Capabilities',
      title: 'My Technical Arsenal.',
      filterAriaLabel: 'Filter technical skills by category',
      filters: [
        { key: 'all', label: 'All Disciplines' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'databases', label: 'Databases' },
        { key: 'security', label: 'Cybersecurity' },
        { key: 'tools', label: 'Systems & Tools' },
      ],
      categories: [
        {
          id: 'frontend',
          code: 'Category A',
          title: 'Frontend Development',
          filterKey: 'frontend',
          skills: [
            { name: 'React', iconKey: 'React', hasIcon: true },
            { name: 'Next.js', iconKey: 'Next.js', hasIcon: true },
            { name: 'TypeScript', iconKey: 'TypeScript', hasIcon: true },
            { name: 'JavaScript', iconKey: 'JavaScript', hasIcon: true },
            { name: 'HTML5', iconKey: 'HTML5', hasIcon: true },
            { name: 'CSS3', iconKey: 'CSS3', hasIcon: true },
          ],
        },
        {
          id: 'backend',
          code: 'Category B',
          title: 'Backend Development',
          filterKey: 'backend',
          skills: [
            { name: 'Java', iconKey: 'Java', hasIcon: true },
            { name: 'Spring Boot', iconKey: 'Spring Boot', hasIcon: true },
            { name: 'Python', iconKey: 'Python', hasIcon: true },
            { name: 'FastAPI', iconKey: 'FastAPI', hasIcon: true },
            { name: 'REST APIs', iconKey: 'REST APIs', hasIcon: true },
            { name: 'Pine Script', iconKey: 'Pine Script', hasIcon: true },
          ],
        },
        {
          id: 'databases',
          code: 'Category C',
          title: 'Databases',
          filterKey: 'databases',
          skills: [
            { name: 'PostgreSQL', iconKey: 'PostgreSQL', hasIcon: true },
            { name: 'SQLite', iconKey: 'SQLite', hasIcon: true },
            { name: 'SQL', iconKey: 'SQL', hasIcon: true },
          ],
        },
        {
          id: 'cybersecurity',
          code: 'Category D',
          title: 'Cybersecurity & Access Control',
          filterKey: 'security',
          skills: [
            { name: 'Spring Security', iconKey: 'Spring Security', hasIcon: true },
            { name: 'JWT', iconKey: 'JWT', hasIcon: true },
            {
              name: 'Authentication and Authorization',
              iconKey: 'Cybersecurity',
              hasIcon: false,
            },
            {
              name: 'Role-Based Access Control (RBAC)',
              iconKey: 'Cybersecurity',
              hasIcon: false,
            },
            {
              name: 'Application Access Control',
              iconKey: 'Cybersecurity',
              hasIcon: false,
            },
          ],
        },
        {
          id: 'tools',
          code: 'Category E',
          title: 'Systems & Development Tools',
          filterKey: 'tools',
          skills: [
            {
              name: 'Linux / Ubuntu Server',
              iconKey: 'Linux / Ubuntu Server',
              hasIcon: true,
            },
            { name: 'DNS', iconKey: 'DNS', hasIcon: true },
            { name: 'Git', iconKey: 'Git', hasIcon: true },
            { name: 'GitHub', iconKey: 'GitHub', hasIcon: true },
            { name: 'GitHub Actions', iconKey: 'GitHub Actions', hasIcon: true },
            { name: 'IntelliJ IDEA', iconKey: 'IntelliJ IDEA', hasIcon: true },
            {
              name: 'Visual Studio Code',
              iconKey: 'Visual Studio Code',
              hasIcon: true,
            },
            { name: 'Jira', iconKey: 'Jira', hasIcon: true },
            { name: 'AWS (S3, EC2)', iconKey: 'AWS (S3, EC2)', hasIcon: true },
            {
              name: 'Google Workspace',
              iconKey: 'Google Workspace',
              hasIcon: true,
            },
          ],
        },
        {
          id: 'methods',
          code: 'Category F',
          title: 'Methods & Development Practices',
          filterKey: 'tools',
          skills: [
            { name: 'Agile Methodology', iconKey: 'Method', hasIcon: false },
            { name: 'API Integration', iconKey: 'Method', hasIcon: false },
            { name: 'Source Code Management', iconKey: 'Method', hasIcon: false },
          ],
        },
      ],
      languagesNoteLabel: 'Programming & Scripting Languages',
      languagesNoteValue: 'Java · TypeScript · JavaScript · Python · SQL · Pine Script',
    },
    projects: {
      kicker: 'Portfolio',
      title: 'Selected Works.',
      subtitle:
        'Practical applications, commissioned client work, architectural concepts, and server administration practice.',
      projectPrefix: 'Project',
      involvementLabel: 'My Involvement:',
      clientContextLabel: 'Client Context:',
      stackLabel: 'Technologies',
      viewOverview: 'View Overview',
      visitPrefix: 'Visit',
      placeholderTitle: 'Ubuntu Server Environment',
      placeholderNote: 'Personal practice environment — no terminal screenshot provided',
      scopeTitle: 'Scope & Architecture',
      technologiesTitle: 'Technologies',
      closeModal: 'Close project overview',
      prevImageLabel: 'Previous screenshot',
      nextImageLabel: 'Next screenshot',
      goToSlideLabel: 'View screenshot',
      items: [
        {
          number: '01',
          id: 'nim-hrms',
          title: 'NIM HR Management System',
          projectType: 'Internship Project',
          description:
            'A Human Resources Management System developed to centralize employee management, recruitment, leave and absence management, payroll and user administration.',
          involvement:
            'Participated in the project conception discussions with my manager and worked on the development of the application, including frontend, backend, database integration and access control.',
          technologies: [
            'Java',
            'Spring Boot',
            'React',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Spring Security',
            'JWT',
          ],
          images: [
            {
              src: '/assets/aistudio/image_27da6ad2.png',
              alt: 'NIM HR Management System — Dashboard overview and headcount trends',
              caption: 'Dashboard Overview',
            },
            {
              src: '/assets/aistudio/image_b5fae844.png',
              alt: 'NIM HR Management System — Employee distribution by department and agency',
              caption: 'Employees Analytics',
            },
            {
              src: '/assets/aistudio/image_9ce4ec4c.png',
              alt: 'NIM HR Management System — Recruitment pipeline and applicant metrics',
              caption: 'Recruitment Module',
            },
          ],
          highlights: [
            'Centralized employee records, recruitment, leave & absence, payroll and user administration',
            'Frontend and backend development using React, Next.js, TypeScript, Java and Spring Boot',
            'PostgreSQL database integration with Spring Security, JWT and role-based access control (RBAC)',
          ],
        },
        {
          number: '02',
          id: 'stock-manager',
          title: 'Stock Manager',
          projectType: 'Freelance Client Project',
          clientContext: 'Commissioned by a local client in Madagascar.',
          status: 'In Development',
          description:
            'A stock management application designed to manage inventory, stock movements, sales and seller stock assignments, with synchronization capabilities.',
          technologies: [
            'Next.js',
            'TypeScript',
            'Python',
            'FastAPI',
            'SQLite',
            'Google Drive API',
          ],
          images: [
            {
              src: '/assets/aistudio/image_f37fb68f.png',
              alt: 'Stock Manager — Product catalog and inventory management interface',
            },
          ],
          highlights: [
            'Inventory catalog, stock movements, sales tracking and seller stock assignments',
            'FastAPI and SQLite backend paired with a Next.js and TypeScript interface',
            'Synchronization integration via Google Drive API',
          ],
        },
        {
          number: '03',
          id: 'ohmy-fr',
          title: 'Ohmy.fr',
          projectType: 'Freelance Client Project',
          description:
            'An e-commerce website for wholesale food products, developed as a freelance client assignment.',
          technologies: [
            'React',
            'TypeScript',
            'Vercel',
            'IONOS',
            'DNS Configuration',
          ],
          externalUrl: 'https://ohmy.fr',
          images: [
            {
              src: '/assets/aistudio/image_3d792038.png',
              alt: 'Ohmy.fr — Wholesale food products e-commerce website',
            },
          ],
          highlights: [
            'Product showcase and user-friendly browsing interface built with React and TypeScript',
            'Production deployment on Vercel',
            'Custom domain and DNS configuration via IONOS',
          ],
        },
        {
          number: '04',
          id: 'stock-matcher',
          title: 'Stock Matcher',
          status: 'Concept / In Planning',
          description:
            'A stock market monitoring concept designed to scan financial markets and identify stocks according to selected market and valuation criteria.',
          technologies: [
            'JavaScript / TypeScript',
            'Twelve Data API',
            'WebSockets',
          ],
          images: [
            {
              src: '/assets/aistudio/image_00181083.png',
              alt: 'Stock Matcher — Market screener concept table',
              caption: 'Screener View',
            },
            {
              src: '/assets/aistudio/image_f7b21297.png',
              alt: 'Stock Matcher — Criteria configuration modal concept',
              caption: 'Criteria Settings',
            },
          ],
          highlights: [
            'Concept design for monitoring market drops and valuation criteria',
            'Planned WebSocket streaming integration using Twelve Data API',
            'Configurable screening rules for US and FR markets',
          ],
        },
        {
          number: '05',
          id: 'linux-server-lab',
          title: 'Linux Server Administration Laboratory',
          projectType: 'Personal Project',
          status: 'Personal Project',
          description:
            'A personal Ubuntu Server environment used to practice Linux administration, user and permission management, server access controls and basic security configuration.',
          technologies: ['Linux / Ubuntu Server'],
          images: [],
          highlights: [
            'User account creation, group permissions and file system access control',
            'Server access configuration and basic security hardening practice',
            'Hands-on command-line administration in a personal Ubuntu Server lab',
          ],
        },
      ],
    },
    education: {
      kicker: 'Education',
      title: 'Academic Background.',
      items: [
        {
          stage: 'Current Studies',
          degree: 'Master 1 in Cybersecurity',
          institution: 'ESTI Madagascar',
          period: '2026 – Present',
          description:
            'Currently pursuing a Master 1 in Cybersecurity, developing knowledge in information security, system protection, application security and related technical subjects.',
          isCurrent: true,
        },
        {
          stage: 'Previous Academic Background',
          degree: 'Licence in Software Ecosystem',
          institution: 'HEI Madagascar',
          period: 'January 2023 – 2025',
          description:
            'Completed Licence-level studies in Software Ecosystem, building academic foundations in software development, programming, databases, web technologies and software engineering.',
          isCurrent: false,
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's Build Something Together.",
      subtitle:
        "Have a project, an opportunity or an idea you'd like to discuss? I'd be happy to connect.",
      directChannelsTitle: 'Contact Details',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      linkedinTitle: 'LinkedIn',
      linkedinAction: 'View LinkedIn Profile',
      copyEmailAria: 'Copy email address',
      copiedEmailNotice: 'Email copied to clipboard',
      languagesTitle: 'Languages',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Project inquiry, internship or collaboration',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project or opportunity...',
        submitButton: 'Send Message',
        submittingButton: 'Sending...',
        errorBanner: 'Please review the highlighted fields before sending.',
        successBanner:
          'Thank you! Your message has been validated and prepared. You can also reach me directly at ramananolo44@gmail.com.',
        errors: {
          name: 'Please enter your name (at least 2 characters).',
          email: 'Please provide a valid email address.',
          subject: 'Please add a short subject.',
          message: 'Please write a message of at least 10 characters.',
        },
      },
    },
    footer: {
      roleSubtitle: 'Software Development · IT Systems & Security',
      bio: 'Interested in software development, modern technologies, IT infrastructure and application security.',
      navigationTitle: 'Navigation',
      connectTitle: 'Connect',
      linkedinLabel: 'LinkedIn',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
      paletteTagline: 'Editorial Tech — Cream, Anthracite, Electric Blue & Coral',
    },
  },
  fr: {
    nav: {
      items: [
        { id: 'home', label: 'Accueil' },
        { id: 'about', label: 'À propos' },
        { id: 'experience', label: 'Expérience' },
        { id: 'skills', label: 'Compétences' },
        { id: 'projects', label: 'Projets' },
        { id: 'education', label: 'Formation' },
        { id: 'contact', label: 'Contact' },
      ],
      letsTalk: 'Discutons',
      currentLabel: 'Actuel',
      openMenu: 'Ouvrir le menu de navigation',
      closeMenu: 'Fermer le menu de navigation',
    },
    hero: {
      roleTitle: 'DÉVELOPPEMENT LOGICIEL · SYSTÈMES IT & SÉCURITÉ',
      intro:
        'Concevoir des solutions numériques concrètes avec un intérêt pour l’ingénierie logicielle, les technologies modernes, l’infrastructure IT et la sécurité applicative.',
      ctaExplore: 'Découvrir mes projets',
      ctaContact: 'Me contacter',
      portraitAlt: 'Portrait photographique de Marius RAMANANOLO',
      cyberLogoLabel: 'Cybersécurité',
    },
    about: {
      kicker: 'À propos',
      title: 'Au-delà du code.',
      paragraphs: [
        'Je m’appelle Marius RAMANANOLO. J’ai effectué mon parcours de niveau Licence en Écosystème Logiciel à HEI Madagascar et je poursuis actuellement un Master 1 en Cybersécurité à ESTI Madagascar.',
        'Je dispose d’une expérience pratique en développement d’applications web, couvrant le développement frontend et backend, la gestion de bases de données, l’intégration d’API REST et le contrôle d’accès applicatif.',
        'J’aime concevoir des solutions numériques utiles et comprendre le fonctionnement des systèmes logiciels, des interfaces utilisateur jusqu’à l’architecture backend et aux environnements serveurs.',
        'Mes centres d’intérêt portent sur le génie logiciel, les technologies web, la gestion de bases de données, l’administration de serveurs Linux et la sécurité applicative.',
      ],
      facts: [
        {
          label: 'Orientation actuelle',
          value: 'Développement Logiciel & Cybersécurité',
        },
        { label: 'Parcours académique', value: 'Écosystème Logiciel' },
        {
          label: 'Expérience professionnelle',
          value: "Développement d'Applications Web",
        },
        {
          label: "Centres d'intérêt",
          value: 'Génie Logiciel, Infrastructure IT & Sécurité Applicative',
        },
      ],
      languagesTitle: 'Langues',
      languages: [
        { name: 'Français', level: 'Intermédiaire' },
        { name: 'Anglais', level: 'Intermédiaire' },
      ],
      visualLabels: {
        securityLayer: 'COUCHE SÉCURITÉ APPLICATIVE',
        backendLayer: 'ARCHITECTURE BACKEND & APIS',
        backendStack: 'Java · Spring Boot · REST APIs · PostgreSQL',
        uiLayer: 'COUCHE INTERFACE UTILISATEUR',
        uiStack: 'React · Next.js · TypeScript',
        badgeLeft: 'Développement Logiciel',
        badgeRight: 'Sécurité Applicative',
        ariaLabel:
          "Schéma d'architecture technique illustrant la couche interface utilisateur, l'architecture backend et APIs, et la couche sécurité applicative",
      },
    },
    experience: {
      kicker: 'Expérience',
      title: 'Expérience & Parcours Professionnel.',
      technologiesLabel: 'Technologies utilisées',
      responsibilitiesLabel: 'Responsabilités principales',
      showDetails: 'Afficher les détails',
      hideDetails: 'Masquer les détails',
      items: [
        {
          id: 'nim-madagascar',
          company: 'NIM – Nouvelle Institution de Microfinance (NIM S.A.)',
          position: 'Stagiaire Développeur Application RH',
          period: 'Août 2025 – Février 2026',
          location: 'Antananarivo, Madagascar',
          employmentType: 'Stage',
          description:
            'Participation à la conception et au développement d’un Système de Gestion des Ressources Humaines en collaboration avec mon responsable. L’application a été développée pour centraliser les opérations RH, incluant la gestion des employés, le recrutement, la gestion des congés et absences, la paie et l’administration des utilisateurs.',
          responsibilities: [
            'Participation à la conception initiale du projet et aux échanges sur les besoins avec mon responsable.',
            'Développement des fonctionnalités frontend et backend de l’application.',
            'Développement et intégration des modules RH : gestion des employés, recrutement, congés et absences, paie et administration des utilisateurs.',
            'Utilisation de PostgreSQL pour la gestion de la base de données.',
            'Implémentation et maintenance de l’authentification et de l’autorisation avec Spring Security et JWT.',
            'Mise en place du contrôle d’accès basé sur les rôles (RBAC) pour gérer les permissions et restreindre l’accès aux ressources et données.',
            'Utilisation de Git et GitHub pour la gestion du code source.',
          ],
          technologies: [
            'Java',
            'Spring Boot',
            'React',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Spring Security',
            'JWT',
            'REST APIs',
            'Git',
            'GitHub',
          ],
        },
        {
          id: 'ohmy-fr-exp',
          company: 'Ohmy.fr',
          position: 'Développeur Web Freelance',
          period: 'Mai 2025',
          employmentType: 'Freelance – Projet Client',
          description:
            'Développement d’un site e-commerce pour un client spécialisé dans les produits alimentaires en gros.',
          responsibilities: [
            'Développement du site web et implémentation de l’interface utilisateur.',
            'Conception d’une expérience de navigation claire et fluide.',
            'Configuration de l’hébergement web et des enregistrements DNS.',
            'Déploiement de l’application sur Vercel et configuration du domaine via IONOS.',
          ],
          technologies: ['React', 'TypeScript', 'Vercel', 'IONOS', 'DNS'],
        },
        {
          id: 'pine-script-exp',
          company: 'Indicateurs de Trading Personnalisés',
          position: 'Développeur Pine Script Freelance',
          period: 'Août 2024 – Octobre 2024',
          employmentType: 'Freelance – Projet Client',
          description:
            'Développement d’indicateurs de trading sur mesure pour un client avec Pine Script et TradingView.',
          responsibilities: [
            'Développement d’une stratégie combinant EMA 20/50 et Supertrend.',
            'Implémentation d’une logique de croisement différé.',
            'Intégration de plusieurs niveaux de validation pour les signaux de trading.',
            'Tests et ajustements de la logique implémentée.',
          ],
          technologies: ['Pine Script', 'TradingView'],
        },
      ],
    },
    skills: {
      kicker: 'Savoir-faire',
      title: 'Mon Arsenal Technique.',
      filterAriaLabel: 'Filtrer les compétences techniques par catégorie',
      filters: [
        { key: 'all', label: 'Toutes les disciplines' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'databases', label: 'Bases de données' },
        { key: 'security', label: 'Cybersécurité' },
        { key: 'tools', label: 'Systèmes & Outils' },
      ],
      categories: [
        {
          id: 'frontend',
          code: 'Catégorie A',
          title: 'Développement Frontend',
          filterKey: 'frontend',
          skills: [
            { name: 'React', iconKey: 'React', hasIcon: true },
            { name: 'Next.js', iconKey: 'Next.js', hasIcon: true },
            { name: 'TypeScript', iconKey: 'TypeScript', hasIcon: true },
            { name: 'JavaScript', iconKey: 'JavaScript', hasIcon: true },
            { name: 'HTML5', iconKey: 'HTML5', hasIcon: true },
            { name: 'CSS3', iconKey: 'CSS3', hasIcon: true },
          ],
        },
        {
          id: 'backend',
          code: 'Catégorie B',
          title: 'Développement Backend',
          filterKey: 'backend',
          skills: [
            { name: 'Java', iconKey: 'Java', hasIcon: true },
            { name: 'Spring Boot', iconKey: 'Spring Boot', hasIcon: true },
            { name: 'Python', iconKey: 'Python', hasIcon: true },
            { name: 'FastAPI', iconKey: 'FastAPI', hasIcon: true },
            { name: 'REST APIs', iconKey: 'REST APIs', hasIcon: true },
            { name: 'Pine Script', iconKey: 'Pine Script', hasIcon: true },
          ],
        },
        {
          id: 'databases',
          code: 'Catégorie C',
          title: 'Bases de données',
          filterKey: 'databases',
          skills: [
            { name: 'PostgreSQL', iconKey: 'PostgreSQL', hasIcon: true },
            { name: 'SQLite', iconKey: 'SQLite', hasIcon: true },
            { name: 'SQL', iconKey: 'SQL', hasIcon: true },
          ],
        },
        {
          id: 'cybersecurity',
          code: 'Catégorie D',
          title: 'Cybersécurité & Contrôle d’Accès',
          filterKey: 'security',
          skills: [
            { name: 'Spring Security', iconKey: 'Spring Security', hasIcon: true },
            { name: 'JWT', iconKey: 'JWT', hasIcon: true },
            {
              name: 'Authentification et autorisation',
              iconKey: 'Cybersecurity',
              hasIcon: false,
            },
            {
              name: "Contrôle d'accès basé sur les rôles (RBAC)",
              iconKey: 'Cybersecurity',
              hasIcon: false,
            },
            {
              name: "Contrôle d'accès applicatif",
              iconKey: 'Cybersecurity',
              hasIcon: false,
            },
          ],
        },
        {
          id: 'tools',
          code: 'Catégorie E',
          title: 'Systèmes & Outils de Développement',
          filterKey: 'tools',
          skills: [
            {
              name: 'Linux / Ubuntu Server',
              iconKey: 'Linux / Ubuntu Server',
              hasIcon: true,
            },
            { name: 'DNS', iconKey: 'DNS', hasIcon: true },
            { name: 'Git', iconKey: 'Git', hasIcon: true },
            { name: 'GitHub', iconKey: 'GitHub', hasIcon: true },
            { name: 'GitHub Actions', iconKey: 'GitHub Actions', hasIcon: true },
            { name: 'IntelliJ IDEA', iconKey: 'IntelliJ IDEA', hasIcon: true },
            {
              name: 'Visual Studio Code',
              iconKey: 'Visual Studio Code',
              hasIcon: true,
            },
            { name: 'Jira', iconKey: 'Jira', hasIcon: true },
            { name: 'AWS (S3, EC2)', iconKey: 'AWS (S3, EC2)', hasIcon: true },
            {
              name: 'Google Workspace',
              iconKey: 'Google Workspace',
              hasIcon: true,
            },
          ],
        },
        {
          id: 'methods',
          code: 'Catégorie F',
          title: 'Méthodes & Pratiques de Développement',
          filterKey: 'tools',
          skills: [
            { name: 'Méthodologie Agile', iconKey: 'Method', hasIcon: false },
            { name: "Intégration d'API", iconKey: 'Method', hasIcon: false },
            { name: 'Gestion de code source', iconKey: 'Method', hasIcon: false },
          ],
        },
      ],
      languagesNoteLabel: 'Langages de programmation & script',
      languagesNoteValue: 'Java · TypeScript · JavaScript · Python · SQL · Pine Script',
    },
    projects: {
      kicker: 'Réalisations',
      title: 'Projets Sélectionnés.',
      subtitle:
        'Applications concrètes, missions clients freelance, concepts d’architecture et laboratoire d’administration serveur.',
      projectPrefix: 'Projet',
      involvementLabel: 'Mon implication :',
      clientContextLabel: 'Contexte client :',
      stackLabel: 'Technologies',
      viewOverview: "Voir l'aperçu",
      visitPrefix: 'Visiter',
      placeholderTitle: 'Environnement Ubuntu Server',
      placeholderNote: 'Environnement de pratique personnel — aucune capture terminal fournie',
      scopeTitle: 'Périmètre & Architecture',
      technologiesTitle: 'Technologies',
      closeModal: "Fermer l'aperçu du projet",
      prevImageLabel: 'Capture précédente',
      nextImageLabel: 'Capture suivante',
      goToSlideLabel: 'Afficher la capture',
      items: [
        {
          number: '01',
          id: 'nim-hrms',
          title: 'NIM HR Management System',
          projectType: 'Projet de stage',
          description:
            'Un Système de Gestion des Ressources Humaines développé pour centraliser la gestion des employés, le recrutement, les congés et absences, la paie et l’administration des utilisateurs.',
          involvement:
            'Participation aux discussions de conception du projet avec mon responsable et travail sur le développement de l’application, incluant le frontend, le backend, l’intégration de la base de données et le contrôle d’accès.',
          technologies: [
            'Java',
            'Spring Boot',
            'React',
            'Next.js',
            'TypeScript',
            'PostgreSQL',
            'Spring Security',
            'JWT',
          ],
          images: [
            {
              src: '/assets/aistudio/image_27da6ad2.png',
              alt: 'NIM HR Management System — Vue d’ensemble du tableau de bord RH',
              caption: "Vue d'ensemble",
            },
            {
              src: '/assets/aistudio/image_b5fae844.png',
              alt: 'NIM HR Management System — Répartition des employés par département et agence',
              caption: 'Statistiques Employés',
            },
            {
              src: '/assets/aistudio/image_9ce4ec4c.png',
              alt: 'NIM HR Management System — Suivi des recrutements et candidatures',
              caption: 'Module Recrutement',
            },
          ],
          highlights: [
            'Centralisation des dossiers employés, recrutement, congés et absences, paie et administration',
            'Développement frontend et backend avec React, Next.js, TypeScript, Java et Spring Boot',
            'Intégration PostgreSQL avec Spring Security, JWT et contrôle d’accès basé sur les rôles (RBAC)',
          ],
        },
        {
          number: '02',
          id: 'stock-manager',
          title: 'Stock Manager',
          projectType: 'Projet Client Freelance',
          clientContext: 'Commandé par un client local à Madagascar.',
          status: 'En cours de développement',
          description:
            'Une application de gestion de stock conçue pour gérer les inventaires, les mouvements de stock, les ventes et les attributions de stock aux vendeurs, avec synchronisation.',
          technologies: [
            'Next.js',
            'TypeScript',
            'Python',
            'FastAPI',
            'SQLite',
            'Google Drive API',
          ],
          images: [
            {
              src: '/assets/aistudio/image_f37fb68f.png',
              alt: 'Stock Manager — Interface de gestion du catalogue et des articles en stock',
            },
          ],
          highlights: [
            'Gestion du catalogue, mouvements de stock, suivi des ventes et attribution aux vendeurs',
            'Backend FastAPI et SQLite couplé à une interface Next.js et TypeScript',
            'Capacités de synchronisation via Google Drive API',
          ],
        },
        {
          number: '03',
          id: 'ohmy-fr',
          title: 'Ohmy.fr',
          projectType: 'Projet Client Freelance',
          description:
            'Un site e-commerce de produits alimentaires en gros, développé dans le cadre d’une mission freelance pour un client.',
          technologies: [
            'React',
            'TypeScript',
            'Vercel',
            'IONOS',
            'Configuration DNS',
          ],
          externalUrl: 'https://ohmy.fr',
          images: [
            {
              src: '/assets/aistudio/image_3d792038.png',
              alt: 'Ohmy.fr — Site e-commerce de produits alimentaires en gros',
            },
          ],
          highlights: [
            'Vitrine e-commerce et navigation claire réalisées avec React et TypeScript',
            'Déploiement en production sur Vercel',
            'Configuration du domaine personnalisé et des enregistrements DNS via IONOS',
          ],
        },
        {
          number: '04',
          id: 'stock-matcher',
          title: 'Stock Matcher',
          status: 'Concept / En planification',
          description:
            'Un concept de surveillance des marchés boursiers pensé pour analyser les marchés financiers et identifier des actions selon des critères de marché et de valorisation.',
          technologies: [
            'JavaScript / TypeScript',
            'Twelve Data API',
            'WebSockets',
          ],
          images: [
            {
              src: '/assets/aistudio/image_00181083.png',
              alt: 'Stock Matcher — Maquette du tableau de filtrage boursier',
              caption: 'Tableau de filtrage',
            },
            {
              src: '/assets/aistudio/image_f7b21297.png',
              alt: 'Stock Matcher — Maquette de configuration des critères',
              caption: 'Paramètres des critères',
            },
          ],
          highlights: [
            'Concept architectural pour suivre les variations de marché et ratios de valorisation',
            'Flux temps réel envisagé via WebSockets et Twelve Data API',
            'Paramétrage de critères personnalisés pour les marchés US et FR',
          ],
        },
        {
          number: '05',
          id: 'linux-server-lab',
          title: 'Laboratoire d’Administration Serveur Linux',
          projectType: 'Projet Personnel',
          status: 'Projet Personnel',
          description:
            'Un environnement personnel sous Ubuntu Server utilisé pour pratiquer l’administration Linux, la gestion des utilisateurs et des permissions, les contrôles d’accès serveur et la configuration de base de la sécurité.',
          technologies: ['Linux / Ubuntu Server'],
          images: [],
          highlights: [
            'Création de comptes utilisateurs, gestion des groupes et permissions système',
            'Configuration des accès serveur et bases du durcissement de sécurité',
            'Administration en ligne de commande dans un laboratoire personnel Ubuntu Server',
          ],
        },
      ],
    },
    education: {
      kicker: 'Formation',
      title: 'Parcours Académique.',
      items: [
        {
          stage: 'Études actuelles',
          degree: 'Master 1 en Cybersécurité',
          institution: 'ESTI Madagascar',
          period: '2026 – Présent',
          description:
            'Actuellement en Master 1 en Cybersécurité, approfondissant les connaissances en sécurité de l’information, protection des systèmes, sécurité applicative et disciplines techniques associées.',
          isCurrent: true,
        },
        {
          stage: 'Parcours académique précédent',
          degree: 'Licence en Écosystème Logiciel',
          institution: 'HEI Madagascar',
          period: 'Janvier 2023 – 2025',
          description:
            'Études de niveau Licence suivies en Écosystème Logiciel, posant les bases académiques en développement logiciel, programmation, bases de données, technologies web et génie logiciel.',
          isCurrent: false,
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Construisons Quelque Chose Ensemble.',
      subtitle:
        'Vous avez un projet, une opportunité ou une idée à discuter ? Je serais ravi d’échanger avec vous.',
      directChannelsTitle: 'Coordonnées',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      locationLabel: 'Localisation',
      linkedinTitle: 'LinkedIn',
      linkedinAction: 'Voir le profil LinkedIn',
      copyEmailAria: "Copier l'adresse e-mail",
      copiedEmailNotice: 'Adresse e-mail copiée dans le presse-papiers',
      languagesTitle: 'Langues',
      form: {
        nameLabel: 'Nom',
        namePlaceholder: 'Votre nom',
        emailLabel: 'E-mail',
        emailPlaceholder: 'vous@exemple.com',
        subjectLabel: 'Sujet',
        subjectPlaceholder: 'Projet, stage ou collaboration',
        messageLabel: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet ou opportunité...',
        submitButton: 'Envoyer le message',
        submittingButton: 'Envoi...',
        errorBanner:
          'Veuillez vérifier les champs signalés avant d’envoyer votre message.',
        successBanner:
          'Merci ! Votre message a bien été validé et préparé. Vous pouvez également me joindre directement à ramananolo44@gmail.com.',
        errors: {
          name: 'Veuillez saisir votre nom (au moins 2 caractères).',
          email: 'Veuillez saisir une adresse e-mail valide.',
          subject: 'Veuillez indiquer un sujet court.',
          message: 'Veuillez rédiger un message d’au moins 10 caractères.',
        },
      },
    },
    footer: {
      roleSubtitle: 'Développement Logiciel · Systèmes IT & Sécurité',
      bio: 'Intéressé par le développement logiciel, les technologies modernes, l’infrastructure IT et la sécurité applicative.',
      navigationTitle: 'Navigation',
      connectTitle: 'Réseaux',
      linkedinLabel: 'LinkedIn',
      backToTop: 'Haut de page',
      rights: 'Tous droits réservés.',
      paletteTagline: 'Editorial Tech — Crème, Anthracite, Bleu Électrique & Corail',
    },
  },
};
