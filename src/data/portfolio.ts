export const personalInfo = {
  name: 'Rohith Neralla',
  title: 'Software Engineer',
  tagline: 'Full-Stack Developer',
  description: 'Passionate about building scalable web applications with modern technologies',
  email: 'rohithneralla99@gmail.com',
  phone: '+1 (689) 270-2419',
  location: 'Orlando, FL',
  github: 'https://github.com/Rohith-14',
  linkedin: 'https://linkedin.com/in/rohith-neralla',
  resume: '#', // Add your resume link
}

export const hero = {
  greeting: "Hi, I'm",
  name: 'Rohith Neralla',
  roles: [
    'Full-Stack Developer',
    'React Specialist',
    'Mobile Developer',
    'Problem Solver',
  ],
  description:
    'I craft scalable web and mobile applications with modern technologies. Specialized in React, Next.js, and React Native with a passion for building exceptional user experiences.',
  cta: {
    primary: 'View My Work',
    secondary: 'Contact Me',
  },
}

export const about = {
  title: 'About Me',
  description:
    "I'm a Full-Stack Software Engineer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and React Native, creating seamless experiences across web and mobile platforms.",
  cards: [
    {
      title: 'Education',
      subtitle: 'Master of Science',
      description: 'Computer Science',
      detail: 'University of Central Florida',
      metric: 'GPA: 3.93',
      icon: 'education',
    },
    {
      title: 'Certification',
      subtitle: 'Meta Certified',
      description: 'Front-End Developer',
      detail: 'Professional Certificate',
      metric: '2024',
      icon: 'certification',
    },
    {
      title: 'Experience',
      subtitle: '3+ Years',
      description: 'Professional Development',
      detail: 'Full-Stack Engineering',
      metric: 'Multiple Companies',
      icon: 'experience',
    },
    {
      title: 'Focus',
      subtitle: 'Modern Stack',
      description: 'React & Next.js',
      detail: 'React Native',
      metric: 'TypeScript',
      icon: 'focus',
    },
  ],
}

export const experiences = [
  {
    company: 'Velmeni.ai',
    role: 'Software Engineer',
    period: 'November 2024 – Present',
    location: 'Remote',
    achievements: [
      'Engineered responsive React + Next.js UI for real-time AI dental X-ray visualization',
      'Implemented Redux for global state management across components',
      'Built WebSocket listener for real-time claim status rendering',
      'Developed React Native wireframes extending web diagnostics to mobile',
      'Optimized PostgreSQL queries boosting data retrieval speed by 40%',
      'Integrated FastAPI ML inference APIs for real-time pathology detection',
      'Automated ETL workflows with Apache Airflow, cutting release time by 60%',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Deloitte Consulting LLP',
    role: 'Software Engineer',
    period: 'January 2021 – August 2022',
    location: 'Remote',
    achievements: [
      'Built interactive React dashboards improving reporting efficiency by 40%',
      'Improved frontend load time by 35% with Webpack optimization',
      'Developed REST APIs with Node.js and PostgreSQL, boosting processing by 35%',
      'Created Express.js middleware for authentication and error handling',
      'Implemented OAuth 2.0 for secure authentication',
      'Configured CI/CD pipelines reducing deployment time by 60%',
      'Supported 1,000+ daily users with high-performance enterprise solutions',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    company: 'Augur Cyber X',
    role: 'Software Engineer',
    period: 'December 2019 – December 2020',
    location: 'Remote',
    achievements: [
      'Built full-stack e-learning app with React and TypeScript',
      'Developed REST APIs with Node.js (Express) and PostgreSQL',
      'Created mobile-first React Native app for seamless learning experience',
      'Maintained Agile-style sprints using Git for version control',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: "Moody's",
    role: 'Software Engineer (Intern)',
    period: 'April 2025 – June 2025',
    location: 'Remote',
    achievements: [
      'Implemented reusable UI components with Angular and TypeScript',
      'Developed backend REST APIs using Java and Spring Boot',
      'Designed backend modules in Spring MVC with PostgreSQL integration',
      'Created TypeScript E2E automation scripts reducing QA effort by 70%',
    ],
    color: 'from-orange-500 to-red-500',
  },
]

export const skills = {
  title: 'Technical Skills',
  categories: [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Redux', level: 85 },
      ],
    },
    {
      name: 'Backend & API',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 85 },
        { name: 'GraphQL', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      name: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Apache Airflow', level: 75 },
        { name: 'Webpack', level: 80 },
      ],
    },
  ],
}

export const projects = [
  {
    title: 'AI Dental Diagnostics Platform',
    description:
      'Real-time dental X-ray visualization platform with AI-powered pathology detection',
    technologies: ['React', 'Next.js', 'Redux', 'WebSocket', 'FastAPI', 'PostgreSQL'],
    highlights: [
      'Real-time WebSocket updates for claim status',
      'Integrated ML inference APIs',
      'Optimized database queries for 40% faster retrieval',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Enterprise React Dashboards',
    description: 'Interactive analytics dashboards for enterprise reporting and data visualization',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OAuth 2.0', 'Webpack'],
    highlights: [
      'Improved reporting efficiency by 40%',
      'Reduced frontend load time by 35%',
      'Supported 1,000+ daily users',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Mobile E-Learning Platform',
    description: 'Full-stack e-learning application with cross-platform mobile support',
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    highlights: [
      'Built mobile-first React Native app',
      'Developed REST APIs with Express',
      'Implemented Agile development practices',
    ],
    color: 'from-purple-500 to-pink-500',
  },
]

export const contact = {
  title: 'Get In Touch',
  description: "I'm always open to discussing new opportunities, projects, or partnerships.",
  form: {
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message',
    submitButton: 'Send Message',
    sendingButton: 'Sending...',
  },
  info: [
    {
      icon: 'email',
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    },
    {
      icon: 'location',
      label: 'Location',
      value: personalInfo.location,
      link: null,
    },
  ],
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  sections: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
  social: [
    {
      platform: 'GitHub',
      url: personalInfo.github,
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: 'linkedin',
    },
  ],
}
