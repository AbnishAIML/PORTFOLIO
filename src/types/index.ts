export interface AcademicRecord {
  tenth: string;
  twelfth: string;
  sem1Sgpa: string;
  sem2Sgpa: string;
  currentYear: string;
}

export interface OwnerInfo {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  email: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
  education: {
    degree: string;
    specialization: string;
    institution: string;
    batch: string;
    currentYear: string;
  };
  academics: AcademicRecord;
  social: {
    github: string;
    linkedin: string;
    leetcode: string;
    email: string;
  };
}

export type SkillCategoryTitle =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Database & Media'
  | 'Tools & Deployment'
  | 'Core CS';

export interface SkillItem {
  name: string;
  category: SkillCategoryTitle;
  usedInVidSphere: boolean;
  contextLabel: string;
}

export interface SkillCategory {
  title: SkillCategoryTitle;
  description: string;
  skills: SkillItem[];
}

export interface FeaturedProject {
  title: string;
  tagline: string;
  category: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  demoStatus: 'coming_soon' | 'live';
  stack: string[];
  features: {
    title: string;
    description: string;
    highlight?: string;
  }[];
  architecture: {
    steps: {
      id: string;
      title: string;
      subtitle: string;
      tech: string;
      role: string;
      details: string;
    }[];
  };
}

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Active' | 'Deep Dive' | 'Beginner Phase';
  stageBadge?: string;
  description: string;
  progressPercent?: number;
  progressLabel?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  recipientName?: string;
  recipientCollege?: string;
  event: string;
  issuer: string;
  year: string;
  status: 'Verified' | 'Awaiting Issuance';
  imageUrl?: string;
  pdfUrl?: string;
  verificationUrl?: string;
  badge: string;
  description: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  institutionOrContext: string;
  description: string;
  badge: string;
  isPlaceholder?: boolean;
  certificate?: CertificateItem;
}

export interface TerminalFact {
  cmd: string;
  output: string | string[];
}

