export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EnvironmentCategory {
  category: string;
  items: string[];
}

export const site = {
  name: 'Umer Niazi',
  role: 'Software Engineer & AI Student',
  tagline:
    'I build software that starts with a real question, choosing the right tools for the problem instead of chasing trends.',
  email: 'umer.niazi@proton.me',
  github: 'https://github.com/umer-niazi',
  githubHandle: '@umer-niazi',
  linkedin: 'https://linkedin.com/in/umer-niazi',
  available: true,
  statusText: 'Open to Software Engineering and ML/AI internships',
  currentFocus: 'Machine learning, software engineering and developer tools',
  resumeUrl: '/resume.pdf',
  description:
    'Portfolio of Umer Niazi, a software engineer and AI student at UET Lahore, building thoughtful software with a focus on solving real problems.',

  socials: [
    { label: 'GitHub', url: 'https://github.com/umer-niazi', icon: 'tabler:brand-github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/umer-niazi', icon: 'tabler:brand-linkedin' },
  ] as SocialLink[],

  nav: [
    { label: 'home', href: '#home' },
    { label: 'projects', href: '#projects' },
    { label: 'about', href: '#about' },
  ] as NavLink[],

  hero: {
    focusLabel: 'Focus',
    statusLabel: 'Status',
    projectsCta: 'View projects',
    resumeCta: 'Resume',
  },

  projectsSection: {
    title: 'Projects',
    description: "A selection of things I've built, mostly for myself, all open source.",
    secondaryTitle: 'Also Built',
  },

  bio: {
    summary:
      "I'm studying Artificial Intelligence at UET Lahore and see myself as a software engineer first. My projects usually begin with curiosity or a problem I want to solve, then I choose the tools that fit. I enjoy machine learning, terminal applications, open source, and building software that feels complete.",
    about: [
      "I started programming with Python through small scripts, like one to calculate my grades. Even before coding, I was the person troubleshooting routers, printers, and electronics. I enjoy taking things apart, understanding how they work, and rebuilding them.",
      "Outside of programming, I care about wildlife and animal welfare, from cats and dogs to spiders and insects.",
    ],
  },

  education: {
    degree: 'BS Artificial Intelligence',
    school: 'University of Engineering and Technology (UET Lahore)',
    period: 'Expected 2029',
  },

  aboutSection: {
    title: 'About',
    emailCta: 'Email me \u2192',
    educationTitle: 'Education',
    skillsTitle: 'Skills',
    interestsTitle: 'Interests',
    setupTitle: 'Setup',
    setupSubtitle: 'What I actually build with, day to day.',
  },

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'C++', 'SQL', 'GDScript'],
    },
    {
      category: 'AI & Machine Learning',
      items: ['PyTorch', 'scikit-learn', 'Transformers', 'Computer Vision', 'NLP'],
    },
    {
      category: 'Software & Systems',
      items: ['Streamlit', 'SQLite', 'Linux', 'Git', 'Bash'],
    },
    {
      category: 'Game Dev',
      items: ['Godot', 'Unity'],
    },
  ] as SkillCategory[],

  interests: [
    'Game development',
    'Systems programming & CLI tools',
    'Open source software',
    'Electronics & hardware',
    'Wildlife conservation & animal welfare',
  ],

  environment: [
    {
      category: 'Linux distribution',
      items: ['Fedora Linux (current)', 'Previously Arch Linux', 'Started on Ubuntu'],
    },
    {
      category: 'Desktop environment',
      items: ['KDE Plasma'],
    },
  ] as EnvironmentCategory[],

  contactSection: {
    title: 'Contact',
  },

  notFound: {
    code: '404',
    title: 'Page not found',
    message: "There's nothing at this path.",
    cta: 'Go back home',
  },
};

export const skills = site.skills;
export const environment = site.environment;
