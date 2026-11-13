import {
  OwnerInfo,
  SkillCategory,
  FeaturedProject,
  CurrentlyBuildingItem,
  MilestoneItem,
  CertificateItem,
  TerminalFact,
} from '../types';

/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH: PORTFOLIO V2 CONTENT
 * ============================================================================
 */

export const OWNER: OwnerInfo = {
  name: 'Abnish Kumar',
  role: 'Full-Stack Developer & AI/ML Undergraduate',
  headline: '2nd Year B.Tech CSE (AI/ML) • Full-Stack MERN & Problem Solver',
  tagline:
    '2nd-year B.Tech CSE (AI/ML) student building production-minded MERN applications, real-time web systems, and clean interfaces with zero mock data.',
  email: 'sanyashiyuvraj@gmail.com',
  location: 'Knowledge Park III, Greater Noida, India',
  avatarUrl: '/abnish.png',
  resumeUrl: '/ABNISH%20KUMAR%20UPDATED%20RESUME.pdf',
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    specialization: 'Artificial Intelligence & Machine Learning (AI/ML)',
    institution: 'I.T.S Engineering College',
    batch: '2025–29 Batch',
    currentYear: '2nd Year',
  },
  academics: {
    tenth: '72.6%',
    twelfth: '73.6%',
    sem1Sgpa: '7.68',
    sem2Sgpa: '6.82',
    currentYear: '2nd Year',
  },
  social: {
    github: 'https://github.com/AbnishAIML',
    linkedin: 'https://www.linkedin.com/in/ABNISHAIML',
    leetcode: 'https://leetcode.com/u/ABNISHAIML',
    email: 'mailto:sanyashiyuvraj@gmail.com',
  },
};

export const ABOUT_CONTENT = {
  summary: [
    'I am a 2nd-year B.Tech Computer Science & Engineering student specializing in AI & ML at I.T.S Engineering College (2025–29 batch).',
    'My coding journey began from scratch in my 2nd semester when I learned C and core computational logic. Immediately after 2nd semester, I dove into full-stack web engineering — mastering JavaScript, React, Tailwind CSS, Redux, Axios, Node.js, Express.js, MongoDB, and MVC architecture.',
    'Building on that foundation, I engineered my flagship full-stack platform VidSphere (with Cloudinary video streaming, JWT security, and honest zero-mock data states) while sharpening Data Structures & Algorithms on LeetCode (@ABNISHAIML) and exploring Python & real-time WebSockets.',
  ],
  highlights: [
    {
      label: 'Academic Standing',
      value: '2nd Year B.Tech CSE (AI/ML) @ I.T.S',
      icon: 'GraduationCap',
    },
    {
      label: 'Primary Focus',
      value: 'Full-Stack MERN, REST APIs & DSA (@ABNISHAIML)',
      icon: 'Layers',
    },
    {
      label: 'Base Location',
      value: 'Knowledge Park III, Greater Noida, India',
      icon: 'MapPin',
    },
    {
      label: 'Engineering Ethos',
      value: 'Zero mock data. Truthful, verifiable engineering.',
      icon: 'ShieldCheck',
    },
  ],
};

/**
 * EXACT 6-CATEGORY SKILL MATRIX (27 SKILLS)
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages for web systems, scripting, and DSA',
    skills: [
      { name: 'JavaScript', category: 'Languages', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Python', category: 'Languages', usedInVidSphere: false, contextLabel: 'AI/ML & Scripting' },
      { name: 'C', category: 'Languages', usedInVidSphere: false, contextLabel: 'Foundational CS' },
      { name: 'C++', category: 'Languages', usedInVidSphere: false, contextLabel: 'DSA • LeetCode' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Component architecture, state management, HTTP clients, and responsive UI',
    skills: [
      { name: 'React', category: 'Frontend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'HTML5', category: 'Frontend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'CSS3', category: 'Frontend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Tailwind CSS', category: 'Frontend', usedInVidSphere: false, contextLabel: 'UI Engineering' },
      { name: 'Redux', category: 'Frontend', usedInVidSphere: false, contextLabel: 'State Management' },
      { name: 'Axios', category: 'Frontend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Vite', category: 'Frontend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Web Design', category: 'Frontend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
    ],
  },
  {
    title: 'Backend',
    description: 'RESTful services, stateless auth, real-time sockets, and MVC design',
    skills: [
      { name: 'Node.js', category: 'Backend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Express.js', category: 'Backend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'REST API', category: 'Backend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'JWT', category: 'Backend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'WebSockets', category: 'Backend', usedInVidSphere: false, contextLabel: 'Real-Time Systems' },
      { name: 'MVC', category: 'Backend', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
    ],
  },
  {
    title: 'Database & Media',
    description: 'NoSQL schema modeling and cloud media delivery pipelines',
    skills: [
      { name: 'MongoDB', category: 'Database & Media', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Cloudinary', category: 'Database & Media', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
    ],
  },
  {
    title: 'Tools & Deployment',
    description: 'Version control, cloud hosting workflows, and AI-accelerated iteration',
    skills: [
      { name: 'Git', category: 'Tools & Deployment', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'GitHub', category: 'Tools & Deployment', usedInVidSphere: true, contextLabel: 'Used in: VidSphere' },
      { name: 'Vercel', category: 'Tools & Deployment', usedInVidSphere: false, contextLabel: 'Cloud Hosting' },
      { name: 'Netlify', category: 'Tools & Deployment', usedInVidSphere: false, contextLabel: 'Static Deploy' },
      { name: 'Vibe Coding', category: 'Tools & Deployment', usedInVidSphere: false, contextLabel: 'AI-Assisted Workflow' },
    ],
  },
  {
    title: 'Core CS',
    description: 'Algorithmic thinking, complexity analysis, and problem solving',
    skills: [
      { name: 'Data Structures', category: 'Core CS', usedInVidSphere: false, contextLabel: 'DSA • LeetCode' },
      { name: 'Algorithms', category: 'Core CS', usedInVidSphere: false, contextLabel: 'DSA • LeetCode' },
    ],
  },
];

export const FEATURED_PROJECT: FeaturedProject = {
  title: 'VidSphere',
  tagline: 'Sovereign Free-Speech Video Streaming & Creator Platform',
  category: 'Full-Stack Web Platform',
  description:
    'A sovereign video streaming platform engineered from first principles around genuine creator ownership and transparent, anti-shadowban architecture. Built following strict MVC separation, VidSphere eliminates opaque algorithmic de-amplification with verifiable ownership guards, Cloudinary media streaming, and zero synthetic mock data.',
  repoUrl: 'https://github.com/AbnishAIML/VIDSPHERE',
  demoStatus: 'coming_soon',
  stack: [
    'React',
    'Vite',
    'Axios',
    'Node.js',
    'Express 5',
    'MVC',
    'MongoDB Atlas',
    'Mongoose',
    'Cloudinary',
    'JWT',
    'CSS3',
  ],
  features: [
    {
      title: 'Cloudinary Video Pipeline',
      description:
        'Direct chunked video upload pipeline with real-time Axios upload progress events and automatic media metadata & duration extraction upon ingest.',
      highlight: 'Live upload tracking & duration parsing',
    },
    {
      title: 'Cryptographic JWT Auth',
      description:
        'Stateless security layer leveraging JSON Web Tokens stored with secure HTTP-only cookie patterns and custom Express authorization middleware.',
      highlight: 'Tamper-proof session validation',
    },
    {
      title: 'Dual-Layer Ownership Guard (MVC)',
      description:
        'Strict creator verification enforced at both client route guards and MVC backend controllers—preventing unauthorized video mutations.',
      highlight: 'Zero-bypass frontend + backend verification',
    },
    {
      title: 'Honest Zero-Mock Data States',
      description:
        'Architected without fake numbers or synthetic placeholder feeds: users experience transparent state transitions reflecting real database truth.',
      highlight: 'True database integrity',
    },
  ],
  architecture: {
    steps: [
      {
        id: 'client',
        title: 'Client Layer',
        subtitle: 'React + Vite + Axios',
        tech: 'Single Page App',
        role: 'Optimistic UI, upload progress stream, route protection',
        details:
          'Handles chunked media selection, duration extraction via HTML5 Video element, Axios interceptors, and client auth guards.',
      },
      {
        id: 'gateway',
        title: 'API Gateway',
        subtitle: 'Express 5 REST API',
        tech: 'Node.js Server',
        role: 'Rate limiting, payload validation & CORS enforcement',
        details:
          'Modern Express 5 routing handles incoming multi-part video uploads and dispatches cleanly to MVC routes.',
      },
      {
        id: 'middleware',
        title: 'Auth Middleware',
        subtitle: 'JWT Verification',
        tech: 'Cryptographic Guard',
        role: 'Verifies tokens & attaches authenticated user payload',
        details:
          'Intercepts protected endpoints, validates token signatures from HTTP-only cookies/headers, and blocks unverified requests.',
      },
      {
        id: 'controllers',
        title: 'MVC Controllers',
        subtitle: 'Domain Services',
        tech: 'Business Logic',
        role: 'Ownership assertion, cloud dispatch & DB mutations',
        details:
          'Enforces user-resource parity check (video.owner === req.user._id) before committing any state update.',
      },
      {
        id: 'storage',
        title: 'Storage & DB',
        subtitle: 'MongoDB Atlas + Cloudinary',
        tech: 'Distributed Cloud',
        role: 'Adaptive video CDN + Document metadata persistence',
        details:
          'Cloudinary stores optimized adaptive video streams while MongoDB Atlas indexes video metadata and creator schemas.',
      },
    ],
  },
};

export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    id: 'mern-vidsphere',
    title: 'Deploying VidSphere to Production',
    category: 'Full-Stack Production',
    status: 'Active',
    stageBadge: 'Finalizing Cloud Hosting (Vercel + Atlas)',
    description:
      'Preparing VidSphere for live production release with Cloudinary adaptive video delivery, JWT auth middleware, MongoDB Atlas clustering, and frontend/backend deployment.',
    progressPercent: 95,
    progressLabel: 'Codebase Complete • Finalizing Deployment',
  },
  {
    id: 'dsa-leetcode',
    title: 'Data Structures & Algorithms (@ABNISHAIML)',
    category: 'Core CS & Problem Solving',
    status: 'Beginner Phase',
    stageBadge: 'Daily Practice • C++ & JavaScript',
    description:
      'Building strong problem-solving fundamentals in Data Structures and Algorithms on LeetCode (@ABNISHAIML) — covering arrays, strings, recursion, complexity analysis, and core patterns.',
  },
];

export const GITHUB_CONFIG = {
  username: 'AbnishAIML',
  profileUrl: 'https://github.com/AbnishAIML',
  featuredRepo: {
    name: 'VIDSPHERE',
    fullName: 'AbnishAIML/VIDSPHERE',
    url: 'https://github.com/AbnishAIML/VIDSPHERE',
    description: 'Sovereign free-speech video streaming and creator platform built with MERN stack, MVC & Cloudinary.',
    language: 'JavaScript',
  },
  fallbackStats: {
    publicRepos: 1,
    followers: 1,
    following: 2,
    bio: '2nd Year B.Tech CSE (AI/ML) @ I.T.S | Full-Stack MERN & DSA @ABNISHAIML',
  },
};

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'techtrix-hackathon',
    title: 'Techtrix Hackathon Certificate',
    recipientName: 'Abnish Kumar',
    recipientCollege: 'I.T.S. Engineering College',
    event: 'Techtrix Hackathon',
    issuer: 'Techtrix Hackathon • TruScholar Verified',
    year: '2026',
    status: 'Verified',
    imageUrl: '/techtrixHackathon.webp',
    pdfUrl: '/techtrixHackathon.pdf',
    verificationUrl: 'https://app.truscholar.io/profile?credId=6ae1a4efb82a22a9ef1ec267',
    badge: 'Verified Credential',
    description:
      'Official verified credential for participating and building technical prototypes in the Techtrix Hackathon. Backed by tamper-proof digital certification on TruScholar.',
  },
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon (SIH 2026)',
    recipientName: 'Abnish Kumar',
    recipientCollege: 'I.T.S. Engineering College',
    event: 'Smart India Hackathon 2026',
    issuer: 'Ministry of Education & AICTE, Govt. of India',
    year: '2026',
    status: 'Awaiting Issuance',
    badge: 'Certificate Awaited',
    description:
      'Competed in Smart India Hackathon (SIH 2026), developing innovative technical solutions for national-level problem statements. Official certificate currently awaiting release by the organizing committee.',
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    year: '1st Semester (2025)',
    title: 'Commenced B.Tech CSE (AI/ML) — Sem 1: 7.68 SGPA',
    institutionOrContext: 'I.T.S Engineering College (Session 2025–29)',
    description:
      'Started engineering studies with zero prior coding background. Built strong foundations in mathematics, engineering science, and academic discipline, securing 7.68 SGPA.',
    badge: '1st Sem • 7.68 SGPA',
    isPlaceholder: false,
  },
  {
    year: '2nd Semester (2026)',
    title: 'First Line of Code: C Programming — Sem 2: 6.82 SGPA',
    institutionOrContext: 'Foundations of Computation & Procedural Logic',
    description:
      'Wrote my very first code in 2nd semester through C. Mastered pointers, memory layout, structures, and foundational logic while completing Semester 2 with 6.82 SGPA.',
    badge: '2nd Sem • Learned C',
    isPlaceholder: false,
  },
  {
    year: 'Post-2nd Sem (Mid 2026)',
    title: 'Transitioned to Full-Stack Web Engineering (MERN)',
    institutionOrContext: 'Self-Driven Summer Deep Dive',
    description:
      'Channeled C fundamentals into modern full-stack development — mastering JavaScript, React, Tailwind CSS, Redux, Axios, Node.js, Express.js, REST APIs, and MongoDB.',
    badge: 'Full-Stack Pivot',
    isPlaceholder: false,
  },
  {
    year: '2nd Year (Present)',
    title: 'Engineered VidSphere & Started DSA + Python',
    institutionOrContext: '2nd Year Flagship Engineering',
    description:
      'Architected VidSphere (React, Vite, Axios, Express 5, MVC, JWT, MongoDB Atlas, Cloudinary) while expanding into WebSockets, Python, and Data Structures & Algorithms on LeetCode (@ABNISHAIML).',
    badge: '2nd Year • VidSphere & DSA',
    isPlaceholder: false,
  },
  {
    year: 'Hackathon (2026)',
    title: 'Techtrix Hackathon — Verified Certificate',
    institutionOrContext: 'Techtrix Hackathon • TruScholar Verified Credential',
    description:
      'Competed in the Techtrix Hackathon, shipping technical prototypes under time constraints. Earned an official digital credential verified on TruScholar.',
    badge: 'Techtrix • Verified',
    isPlaceholder: false,
    certificate: CERTIFICATES[0],
  },
  {
    year: 'National Hackathon (2026)',
    title: 'Smart India Hackathon (SIH 2026) — Certificate Awaited',
    institutionOrContext: 'Ministry of Education & AICTE, Govt. of India',
    description:
      'Competed in Smart India Hackathon 2026 on national problem statements. Official certificate currently awaiting release by the organizing committee.',
    badge: 'SIH 2026 • Awaited',
    isPlaceholder: false,
    certificate: CERTIFICATES[1],
  },
  {
    year: 'Upcoming',
    title: '[Reserved] Live Deployments, Open Source & Hackathons',
    institutionOrContext: 'Future Milestones',
    description:
      'Reserved for live VidSphere deployment, upcoming hackathon milestones, and verified engineering credentials as my 2nd and 3rd year progression continues.',
    badge: 'Planned',
    isPlaceholder: true,
  },
];

export const HERO_TERMINAL_FACTS: TerminalFact[] = [
  {
    cmd: 'whoami',
    output:
      'abnish-kumar --year="2nd Year" --branch="CSE (AI/ML)" --college="I.T.S Engineering College" --leetcode="@ABNISHAIML"',
  },
  {
    cmd: 'cat stack.json',
    output: JSON.stringify(
      {
        languages: ['JavaScript', 'Python', 'C', 'C++'],
        frontend: ['React', 'Tailwind CSS', 'Redux', 'Axios', 'Vite'],
        backend: ['Node.js', 'Express.js', 'REST API', 'JWT', 'WebSockets', 'MVC'],
        data_media: ['MongoDB', 'Cloudinary'],
        deploy_tools: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Vibe Coding'],
        core_cs: ['Data Structures', 'Algorithms'],
      },
      null,
      2
    ),
  },
  {
    cmd: 'cat journey.json',
    output: JSON.stringify(
      {
        sem_1: 'Core academics (7.68 SGPA, zero prior coding)',
        sem_2: 'Learned C programming (6.82 SGPA)',
        summer: 'Full-stack MERN + Tailwind + Redux + Axios',
        current: 'Built VidSphere & practicing DSA (@ABNISHAIML)',
      },
      null,
      2
    ),
  },
  {
    cmd: 'git status',
    output: [
      'On branch main',
      'Flagship:   VidSphere (MERN + MVC + Cloudinary + JWT)',
      'Practicing: Data Structures & Algorithms (C++ / JS)',
      'Deploy:     Vercel / Netlify / MongoDB Atlas ready',
    ],
  },
];

