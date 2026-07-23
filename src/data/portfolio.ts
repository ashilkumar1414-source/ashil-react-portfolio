import type {
  ArchitectureStep,
  ContactInfo,
  ExperienceItem,
  NavLink,
  ProcessStep,
  ProjectFilter,
  ProjectItem,
  SkillCategory,
  SocialLink,
  StatCard,
  WhyCard,
} from './types';

export const PROFILE = {
  name: 'Ashil Kumar',
  role: 'React Frontend Developer',
  experienceYears: '4+',
  headline: 'React Developer Building Modern & AI-Powered Digital Experiences',
  tagline:
    "I'm Ashil Kumar, a frontend developer with 4+ years of experience building scalable, responsive, and high-quality web applications using React, TypeScript, and modern frontend technologies.",
  about: [
    'With 4+ years of frontend development experience, I specialize in building modern web applications with React 19 and TypeScript.',
    'I design reusable component architectures, manage client and server state with Zustand and TanStack Query, integrate REST APIs, and craft responsive interfaces with a strong focus on performance.',
    'My work spans AI-powered products, SaaS platforms, dashboards, analytics interfaces, campaign systems, chatbots, and customer engagement applications — always production-ready.',
  ],
  resumePath: '/Ashil_Kumar_Resume.pdf',
  resumeFileName: 'Ashil_Kumar_Resume.pdf',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/ashilkumar1414-source', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ashil-kumar-b90643128/', icon: 'linkedin' },
];

export const CONTACT_INFO: ContactInfo = {
  email: 'ashilkumar1414@gmail.com',
  github: 'https://github.com/ashilkumar1414-source',
  linkedin: 'https://www.linkedin.com/in/ashil-kumar-b90643128/',
};

export const STATS: StatCard[] = [
  { value: '4+', label: 'Years Experience' },
  { value: 'React 19', label: 'Primary Framework' },
  { value: 'AI', label: 'Product Experience' },
  { value: 'End-to-End', label: 'Product Development' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React 19', highlighted: true },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SCSS' },
    ],
  },
  {
    title: 'React Ecosystem',
    skills: [
      { name: 'Zustand' },
      { name: 'TanStack Query' },
      { name: 'React Router' },
      { name: 'Vite' },
    ],
  },
  {
    title: 'UI & Styling',
    skills: [{ name: 'Tailwind CSS' }, { name: 'MUI' }, { name: 'Responsive Design' }],
  },
  {
    title: 'Data Visualization',
    skills: [{ name: 'Recharts' }, { name: 'D3.js' }],
  },
  {
    title: 'Backend & APIs',
    skills: [{ name: 'REST APIs' }, { name: 'Node.js' }],
  },
  {
    title: 'Tools',
    skills: [{ name: 'Git' }, { name: 'CI/CD' }],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'GalaxiQ.ai',
    role: 'React Frontend Developer',
    period: 'Present',
    description:
      'Working on AI-powered web applications and contributing to frontend product development from concept to production.',
    points: [
      'Built frontend applications using React 19',
      'Used Zustand for client-side state management',
      'Used TanStack Query for server-state management',
      'Built reusable React components and scalable UI patterns',
      'Integrated REST APIs across product surfaces',
      'Developed responsive interfaces for marketing and engagement products',
      'Built campaign creation workflows and social media management features',
      'Developed analytics, insights, chatbot, and audience segmentation experiences',
      'Contributed to production-ready frontend architecture',
    ],
  },
];

export const PROJECT_FILTERS: ProjectFilter[] = [
  'All',
  'React',
  'AI',
  'SaaS',
  'Dashboard',
  'Angular',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'galaxiq',
    name: 'GalaxiQ.ai',
    description:
      'An AI-powered platform providing intelligent marketing, campaign management, analytics, customer engagement, and audience segmentation capabilities.',
    contribution:
      'Built core product UI with React 19, TypeScript, Zustand, and TanStack Query — from reusable component architecture to production feature delivery.',
    technologies: ['React 19', 'TypeScript', 'Zustand', 'TanStack Query', 'SCSS'],
    filters: ['All', 'React', 'AI', 'SaaS'],
    visual: 'galaxiq',
  },
  {
    id: 'ai-marketing',
    name: 'AI Marketing Platform',
    description:
      'A marketing platform that helps teams manage campaigns and leverage AI-assisted workflows for customer engagement.',
    contribution:
      'Implemented React feature flows, reusable SCSS component patterns, and server-state integrations for campaign and audience workflows.',
    technologies: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'SCSS'],
    filters: ['All', 'React', 'AI', 'SaaS'],
    visual: 'marketing',
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot & Customer Engagement',
    description:
      'Conversational and engagement interfaces that help brands interact with customers through AI-assisted experiences.',
    contribution:
      'Developed chat UI patterns, API-backed message flows, and responsive engagement surfaces with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'REST APIs', 'SCSS'],
    filters: ['All', 'React', 'AI', 'SaaS'],
    visual: 'chatbot',
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description:
      'An analytics interface for visualizing product and campaign performance with clear, actionable data views.',
    contribution:
      'Built dashboard layouts, chart integrations, and responsive data visualizations using Recharts and D3.js.',
    technologies: ['React', 'TypeScript', 'Recharts', 'D3.js'],
    filters: ['All', 'React', 'Dashboard'],
    visual: 'analytics',
  },
  {
    id: 'campaign-platform',
    name: 'Campaign Management Platform',
    description:
      'A business application for planning, executing, and monitoring marketing campaigns at scale.',
    contribution:
      'Developed scalable React UI flows, form-driven workflows, and API-backed campaign management screens.',
    technologies: ['React', 'TypeScript', 'API Integration', 'SCSS'],
    filters: ['All', 'React', 'SaaS', 'Dashboard'],
    visual: 'campaign',
  },
  {
    id: 'ai-farming',
    name: 'AI Farming Assistant',
    description:
      'An AI-powered farming assistant designed to help users access intelligent agricultural information through a modern progressive web experience.',
    contribution:
      'Architected Angular components with Signals, built the PWA shell, and crafted a responsive UI focused on clarity and performance.',
    technologies: ['Angular', 'TypeScript', 'Signals', 'PWA'],
    filters: ['All', 'Angular', 'AI', 'SaaS'],
    visual: 'farming',
  },
  {
    id: 'billing-saas',
    name: 'Billing SaaS',
    description:
      'An offline-first multi-tenant billing and POS platform for shops — invoicing, inventory, customers, sales dashboards, and sync when back online.',
    contribution:
      'Built the Angular 21 frontend end-to-end: POS and invoicing flows, Dexie offline sync, Supabase-backed auth/data, inventory and customer ledgers, reports, and Firebase Hosting deploy.',
    technologies: ['Angular 21', 'TypeScript', 'Supabase', 'Dexie', 'Firebase'],
    filters: ['All', 'Angular', 'SaaS', 'Dashboard'],
    visual: 'billing',
  },
  {
    id: 'restro-os',
    name: 'Restro OS',
    description:
      'A restaurant operating system with QR table ordering, a live kitchen queue, and an owner portal for menu, tables, staff, and orders.',
    contribution:
      'Built QR-based customer ordering, real-time kitchen queue UI, and a multi-tenant owner portal with Firebase Auth, Firestore, role guards, and notifications.',
    technologies: ['Angular 21', 'TypeScript', 'Firebase', 'Firestore', 'RxJS'],
    filters: ['All', 'Angular', 'SaaS'],
    visual: 'restro',
    liveUrl: 'https://restro-os.web.app',
  },
];

export const ARCHITECTURE_STEPS: ArchitectureStep[] = [
  {
    title: 'Component Architecture',
    description: 'Reusable, composable React components with clear boundaries.',
  },
  {
    title: 'State Management',
    description: 'Zustand for lightweight, predictable client-side state.',
  },
  {
    title: 'Server State',
    description: 'TanStack Query for caching, fetching, and syncing remote data.',
  },
  {
    title: 'API Integration',
    description: 'Typed REST integrations with resilient loading and error states.',
  },
  {
    title: 'UI Systems',
    description: 'Consistent design tokens, SCSS architecture, and responsive layouts.',
  },
  {
    title: 'Performance',
    description: 'Code splitting, memoization where needed, and render-conscious patterns.',
  },
  {
    title: 'Deployment',
    description: 'CI/CD-ready builds with production polish and maintainable structure.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Understand', description: 'Clarify goals, users, and constraints.' },
  { number: '02', title: 'Plan', description: 'Define structure, state, and feature boundaries.' },
  { number: '03', title: 'Design', description: 'Map UI flows and interaction details.' },
  { number: '04', title: 'Build', description: 'Ship clean, reusable React features.' },
  { number: '05', title: 'Integrate', description: 'Wire APIs, auth, and real data flows.' },
  { number: '06', title: 'Test', description: 'Validate flows, edge cases, and accessibility.' },
  { number: '07', title: 'Optimize', description: 'Tune performance, polish, and UX.' },
  { number: '08', title: 'Deploy', description: 'Ship production-ready releases with CI/CD.' },
];

export const WHY_CARDS: WhyCard[] = [
  {
    title: 'Modern React Development',
    description: 'Build scalable applications using modern React patterns.',
    icon: 'react',
  },
  {
    title: 'Pixel-Perfect UI',
    description: 'Convert designs into responsive and polished interfaces.',
    icon: 'pixel',
  },
  {
    title: 'AI Product Experience',
    description: 'Experience building frontend interfaces for AI-powered products.',
    icon: 'ai',
  },
  {
    title: 'Product Mindset',
    description: 'Focus on usability, performance, and real-world business requirements.',
    icon: 'product',
  },
];
