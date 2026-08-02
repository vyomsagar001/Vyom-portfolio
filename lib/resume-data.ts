export const profile = {
  name: 'Vyom Sagar',
  firstName: 'Vyom',
  role: 'AI/ML Engineer & Full Stack Developer',
  roles: ['AI/ML Engineer', 'Full Stack Developer', 'Community Leader', 'Problem Solver'],
  email: 'vyom.2427010383@muj.manipal.edu',
  phone: '7080810201',
  location: 'Lucknow, India',
  tagline:
    'AI & Full Stack Developer passionate about scalable web applications and AI-powered solutions, seeking software engineering and AI internship opportunities.',
  intro:
    'Third-year AI & ML engineering student at Manipal University Jaipur, building production-grade full-stack apps and AI solutions while leading one of the campus\u2019s largest technical communities.',
  availability: 'Open to internships & collaborations',
  resumeUrl: '#',
};

export const stats = [
  { label: 'CGPA', value: 8.8, suffix: '/10', decimals: 1 },
  { label: 'Certifications', value: 9, suffix: '', decimals: 0 },
  { label: 'Leadership Roles', value: 3, suffix: '', decimals: 0 },
  { label: 'Live Projects', value: 2, suffix: '', decimals: 0 },
];

export const about = {
  mission:
    'To bridge the gap between intelligent systems and real-world software \u2014 building applications that are scalable, user-centric, and genuinely useful, while growing the technical community around me.',
  unique: [
    'Leading a large technical community as Vice Chairperson while maintaining an 8.8 CGPA.',
    'Genuine range across the stack \u2014 from React/TypeScript frontends to Node/Express and Django backends, into ML and Generative AI.',
    'Production mindset: shipping deployed, split-frontend/backend apps with real lead-capture pipelines, not just demos.',
  ],
};

export type SkillTier = 'Advanced' | 'Proficient' | 'Familiar';

export interface SkillCategory {
  name: string;
  icon: string;
  tier: SkillTier;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: 'Code2',
    tier: 'Proficient',
    items: ['Python', 'JavaScript', 'SQL', 'C'],
  },
  {
    name: 'Backend Development',
    icon: 'Server',
    tier: 'Proficient',
    items: ['Node.js', 'Express.js', 'Django', 'REST APIs'],
  },
  {
    name: 'Frontend Development',
    icon: 'Layout',
    tier: 'Proficient',
    items: ['HTML5', 'CSS3', 'React.js', 'TypeScript', 'Vite'],
  },
  {
    name: 'Cloud & Databases',
    icon: 'Cloud',
    tier: 'Familiar',
    items: ['Supabase', 'Oracle Cloud Infrastructure (OCI)', 'Firebase'],
  },
  {
    name: 'Developer Tools',
    icon: 'Wrench',
    tier: 'Proficient',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    name: 'AI / ML',
    icon: 'BrainCircuit',
    tier: 'Familiar',
    items: ['MATLAB', 'Machine Learning', 'Generative AI'],
  },
];

export const softSkills = ['Communication', 'Collaboration', 'Problem-Solving'];

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Vice Chairperson',
    org: 'AIML Community MUJ',
    period: 'Jun 2026 \u2013 Present',
    location: 'Jaipur',
    description:
      'Lead strategic planning and execution of the community\u2019s technical initiatives and cross-functional operations.',
    highlights: [
      'Lead strategic planning and execution of technical events, workshops, hackathons, ideathons, and Kaggle competitions.',
      'Coordinate cross-functional teams across events, marketing, design, and operations.',
      'Drive community growth through industry collaborations and student engagement.',
    ],
    current: true,
  },
  {
    role: 'Events Core Committee Head',
    org: 'AIML Community MUJ',
    period: '2025 \u2013 Jun 2026',
    location: 'Jaipur',
    description:
      'Led planning and execution of large-scale technical events for the community.',
    highlights: [
      'Led planning and execution of large-scale technical events including hackathons, ideathons, and Kagglethons.',
      'Owned end-to-end event delivery from concept through execution.',
    ],
  },
  {
    role: 'Marketing Junior Working Team',
    org: 'ACM Manipal University Jaipur',
    period: '2024 \u2013 2025',
    location: 'Jaipur',
    description:
      'Collaborated with the core marketing team on event branding and visibility strategy.',
    highlights: [
      'Collaborated with the core marketing team on event branding and visibility strategy.',
      'Supported outreach that grew event attendance and community awareness.',
    ],
  },
];

export interface Project {
  name: string;
  tagline: string;
  liveUrl: string;
  featured?: boolean;
  problem: string;
  solution: string;
  architecture: string;
  tech: string[];
  features: string[];
  challenges?: string;
  result: string;
}

export const projects: Project[] = [
  {
    name: 'MATRIX Gym',
    tagline: 'Full-stack fitness website with automated lead capture',
    liveUrl: 'https://matrix-gym-tech-learn.vercel.app/',
    featured: true,
    problem:
      'A premium fitness brand needed a fast, modern, conversion-focused web presence with a working lead-capture pipeline, without paying for a full backend or CRM setup.',
    solution:
      'A responsive marketing site with an automated lead-capture flow that routes inquiries straight into Google Sheets via Google Apps Script \u2014 no manual data entry, no separate CRM needed.',
    architecture:
      'Frontend deployed on Vercel, backend deployed on Render, connected via API. Split production deployment across separate platforms.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Google Apps Script', 'Vercel', 'Render'],
    features: [
      'Fully responsive UI across devices.',
      'Automated lead capture via Google Apps Script into Google Sheets.',
      'Split production deployment \u2014 frontend on Vercel, backend on Render, connected via API.',
    ],
    challenges:
      'Configuring CORS and environment variables to get the Vercel-hosted frontend talking cleanly to the Render-hosted backend in production.',
    result: 'Fully built and deployed to production, end to end.',
  },
  {
    name: 'CrisisConnect',
    tagline: 'Incident reporting & crisis-coordination platform',
    liveUrl: 'https://crisisconnect-seven.vercel.app/',
    problem:
      'Emergency reporting is fragmented \u2014 citizens have no fast, structured way to report incidents, and responders and admins lack a real-time, centralized view to coordinate response.',
    solution:
      'A two-sided platform: a citizen portal for structured incident submission, and an admin command-center dashboard for real-time monitoring and response coordination.',
    architecture:
      'Web app with a citizen-facing reporting portal and an admin command-center dashboard sharing a common data layer.',
    tech: ['React', 'Web App', 'Real-time Dashboard', 'Map View', 'Charts'],
    features: [
      'Incident reporting by type (fire, flood, medical, crime, infrastructure, war/attack) and severity (low/medium/high/critical).',
      'Live local alerts feed.',
      'AI-powered global threat intelligence panel.',
      'Admin dashboard with real-time stats: total incidents, active, pending review, resolved today.',
      'Incident map view.',
      '7-day incident trend chart.',
      'Exportable incident reports.',
    ],
    result: 'Built and deployed \u2014 live web app demonstrating real-time crisis coordination.',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export const certifications: Certification[] = [
  { name: 'OCI 2025 Certified Generative AI Professional', issuer: 'Oracle', year: '2025' },
  { name: 'OCI 2025 Certified AI Foundations Associate', issuer: 'Oracle', year: '2025' },
  { name: 'Data Structures and Algorithms Design', issuer: 'NPTEL' },
  { name: 'Design and Analysis of Algorithms', issuer: 'NPTEL' },
  { name: 'Database Programming with SQL', issuer: 'Oracle Academy' },
  { name: 'Database Foundations', issuer: 'Oracle Academy' },
  { name: 'Introduction to AI in Azure', issuer: 'Microsoft' },
  { name: 'Python Essentials', issuer: 'Cisco' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte' },
];

export interface EducationItem {
  degree: string;
  org: string;
  period: string;
  location: string;
  detail: string;
  coursework?: string[];
}

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Applications, AI & ML Specialization',
    org: 'Manipal University Jaipur',
    period: '2024 \u2013 2028',
    location: 'Jaipur',
    detail: 'Current CGPA: 8.8/10',
    coursework: ['DSA', 'DBMS', 'OS', 'ML', 'Python', 'Web Dev'],
  },
  {
    degree: 'Senior Secondary (Class XII)',
    org: 'Delhi Public School, Lucknow',
    period: '2023 \u2013 2024',
    location: 'Lucknow',
    detail: '89% aggregate',
  },
  {
    degree: 'High School (Class X)',
    org: 'Delhi Public School, Lucknow',
    period: '2021 \u2013 2022',
    location: 'Lucknow',
    detail: '95% aggregate',
  },
];

export const languages = ['English', 'Hindi'];

export const techMarquee = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'Django',
  'SQL',
  'C',
  'Supabase',
  'Oracle Cloud',
  'Firebase',
  'Git',
  'Postman',
  'MATLAB',
  'Machine Learning',
  'Generative AI',
  'Vite',
];

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
