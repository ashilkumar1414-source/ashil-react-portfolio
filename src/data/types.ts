export type ThemeMode = 'dark' | 'light';

export type NavLink = {
  label: string;
  href: string;
  id: string;
};

export type SocialLink = {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
};

export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
};

export type StatCard = {
  value: string;
  label: string;
};

export type Skill = {
  name: string;
  highlighted?: boolean;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
};

export type ProjectFilter = 'All' | 'React' | 'AI' | 'SaaS' | 'Dashboard' | 'Angular';

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  contribution: string;
  technologies: string[];
  filters: ProjectFilter[];
  visual:
    | 'galaxiq'
    | 'marketing'
    | 'chatbot'
    | 'analytics'
    | 'campaign'
    | 'farming'
    | 'billing'
    | 'restro';
  githubUrl?: string;
  liveUrl?: string;
};

export type ArchitectureStep = {
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type WhyCard = {
  title: string;
  description: string;
  icon: 'react' | 'pixel' | 'ai' | 'product';
};
