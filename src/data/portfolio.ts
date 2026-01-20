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

export const navigation = {
  logo: 'RN',
  items: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
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
    'Full-stack engineer crafting exceptional digital experiences with React, Next.js, and Node.js',
  tagline:
    'Currently building AI-powered healthcare solutions at Velmeni.ai. Passionate about creating intuitive, performant, and scalable applications.',
  cta: {
    primary: 'Get In Touch',
    primaryLink: '#contact',
    secondary: 'View My Work',
    secondaryLink: '#projects',
  },
}

export const about = {
  title: 'About Me',
  description:
    "I'm a Full-Stack Software Engineer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and React Native, creating seamless experiences across web and mobile platforms.",
  paragraphs: [
    "I'm a passionate Software Engineer with 3+ years of experience building modern web and mobile applications.",
    "Currently at Velmeni.ai, I'm developing AI-powered healthcare solutions that help dentists diagnose pathologies using cutting-edge React and Next.js technologies.",
    "I specialize in creating responsive, performant, and user-friendly applications that solve real-world problems."
  ],
  highlights: [
    { text: "Software Engineer", emphasis: true },
    { text: "3+ years", emphasis: true },
    { text: "Velmeni.ai", emphasis: true },
    { text: "responsive", emphasis: true },
    { text: "performant", emphasis: true },
    { text: "user-friendly", emphasis: true }
  ],
  cards: [
    {
      title: 'Education',
      subtitle: 'Master of Computer Science',
      description: 'University of Central Florida',
      detail: 'GPA: 3.93',
      icon: '🎓',
    },
    {
      title: 'Experience',
      subtitle: '3+ Years in Software Development',
      description: 'Velmeni.ai, Deloitte, Augur Cyber X, Moody\'s',
      detail: 'Full-Stack Engineering',
      icon: '💼',
    },
    {
      title: 'Certification',
      subtitle: 'Meta Certified Front-End Developer',
      description: 'Professional certification from Meta',
      detail: '2024',
      icon: '🏆',
    },
    {
      title: 'Focus',
      subtitle: 'React, Next.js & React Native',
      description: 'Building scalable frontend architectures',
      detail: 'Modern Stack Development',
      icon: '🚀',
    },
    {
      title: 'Impact',
      subtitle: '40-60% performance improvements',
      description: 'Optimized load times, data processing, and deployment cycles',
      detail: 'Measurable Results',
      icon: '⚡',
    },
  ],
}

export const experiences = [
  {
    company: 'Velmeni.ai',
    role: 'Software Engineer',
    period: 'November 2024 – Present',
    location: 'Remote',
    logo: '/velmeni_logo.jpeg',
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
    logo: '/deloitte_logo.jpg',
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
    logo: '/augurcyberx_logo.jpeg',
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
    logo: '/moodys_ratings_logo.jpeg',
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
  description: 'A comprehensive toolkit for building modern, scalable applications',
  categories: [
    {
      name: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, icon: 'SiReact', color: '#61DAFB' },
        { name: 'Next.js', level: 90, icon: 'SiNextdotjs', color: '#000000' },
        { name: 'TypeScript', level: 90, icon: 'SiTypescript', color: '#3178C6' },
        { name: 'React Native', level: 85, icon: 'SiReact', color: '#61DAFB' },
        { name: 'JavaScript', level: 95, icon: 'SiJavascript', color: '#F7DF1E' },
        { name: 'Redux', level: 85, icon: 'SiRedux', color: '#764ABC' },
        { name: 'Tailwind', level: 90, icon: 'SiTailwindcss', color: '#06B6D4' },
        { name: 'Angular', level: 75, icon: 'SiAngular', color: '#DD0031' },
      ],
    },
    {
      name: 'Backend & API',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90, icon: 'SiNodedotjs', color: '#339933' },
        { name: 'Express.js', level: 90, icon: 'SiExpress', color: '#000000' },
        { name: 'Python', level: 85, icon: 'SiPython', color: '#3776AB' },
        { name: 'Django', level: 85, icon: 'SiDjango', color: '#092E20' },
        { name: 'GraphQL', level: 85, icon: 'SiGraphql', color: '#E10098' },
        { name: 'Java', level: 80, icon: 'FaJava', color: '#007396' },
        { name: 'Spring Boot', level: 75, icon: 'SiSpringboot', color: '#6DB33F' },
      ],
    },
    {
      name: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 90, icon: 'SiPostgresql', color: '#4169E1' },
        { name: 'MongoDB', level: 85, icon: 'SiMongodb', color: '#47A248' },
        { name: 'MySQL', level: 80, icon: 'SiPostgresql', color: '#4479A1' },
      ],
    },
    {
      name: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 85, icon: 'SiAmazonaws', color: '#FF9900' },
        { name: 'Docker', level: 85, icon: 'SiDocker', color: '#2496ED' },
        { name: 'Kubernetes', level: 75, icon: 'SiKubernetes', color: '#326CE5' },
        { name: 'Jenkins', level: 80, icon: 'SiJenkins', color: '#D24939' },
        { name: 'Git', level: 95, icon: 'SiGit', color: '#F05032' },
        { name: 'Figma', level: 75, icon: 'SiFigma', color: '#F24E1E' },
      ],
    },
  ],
  highlights: [
    { value: '4', label: 'Years Experience', color: 'from-primary-500/10 to-primary-600/10', borderColor: 'border-primary-500/20', textColor: 'text-primary-400' },
    { value: '40-60%', label: 'Performance Improvements', color: 'from-green-500/10 to-emerald-600/10', borderColor: 'border-green-500/20', textColor: 'text-green-400' },
    { value: '15+', label: 'Technologies Mastered', color: 'from-purple-500/10 to-pink-600/10', borderColor: 'border-purple-500/20', textColor: 'text-purple-400' },
  ],
}

export const projects = {
  title: 'Featured Projects',
  description: "Real-world applications and systems I've built across various industries",
  items: [
    {
      title: 'AI-Powered Dental Diagnostics Platform',
      company: 'Velmeni.ai',
      description: 'Real-time AI dental X-ray analysis platform enabling dentists to interactively review pathologies with instant AI feedback. Features WebSocket integration for live claim status updates.',
      tags: ['React', 'Next.js', 'Redux', 'WebSocket', 'PostgreSQL', 'FastAPI'],
      icons: ['SiReact', 'SiNextdotjs', 'SiRedux', 'SiPostgresql', 'SiPython'],
      gradient: 'from-blue-500 to-cyan-500',
      achievements: [
        'Built responsive UI with real-time visualization',
        'Implemented global state management with Redux',
        'Optimized PostgreSQL queries by 40%',
        'Integrated ML inference APIs for pathology detection',
      ],
    },
    {
      title: 'React Native Mobile Diagnostics',
      company: 'Velmeni.ai',
      description: 'Mobile-first extension of web diagnostics platform, bringing AI-powered dental analysis to iOS and Android with intuitive wireframes and seamless UX.',
      tags: ['React Native', 'TypeScript', 'Redux', 'REST API'],
      icons: ['SiReact', 'SiTypescript', 'SiRedux'],
      gradient: 'from-purple-500 to-pink-500',
      achievements: [
        'Designed mobile wireframes extending web functionality',
        'Implemented cross-platform mobile interface',
        'Integrated with existing backend infrastructure',
      ],
    },
    {
      title: 'Enterprise Dashboard & Analytics',
      company: 'Deloitte',
      description: 'Interactive React dashboards for enterprise reporting with real-time data visualization. Reduced manual tracking time and improved load performance through Webpack optimization.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Webpack', 'AWS'],
      icons: ['SiReact', 'SiNodedotjs', 'SiPostgresql', 'SiAmazonaws'],
      gradient: 'from-green-500 to-emerald-500',
      achievements: [
        'Improved reporting efficiency by 40%',
        'Reduced frontend load time by 35%',
        'Built REST APIs improving processing by 35%',
        'Supported 1,000+ daily users',
      ],
    },
    {
      title: 'E-Learning Platform',
      company: 'Augur Cyber X',
      description: 'Full-stack e-learning application with real-time content updates, course management, quizzes, and analytics. Features both web and mobile-first React Native interface.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'React Native'],
      icons: ['SiReact', 'SiTypescript', 'SiNodedotjs', 'SiPostgresql'],
      gradient: 'from-orange-500 to-red-500',
      achievements: [
        'Built full-stack app with React and TypeScript',
        'Developed REST APIs with Express and PostgreSQL',
        'Created mobile-first React Native app',
        'Maintained Agile development workflow',
      ],
    },
    {
      title: 'Financial Dashboard Components',
      company: "Moody's",
      description: 'Reusable UI component library for financial dashboards with Angular and TypeScript. Integrated backend REST APIs and automated testing reducing QA effort by 70%.',
      tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
      icons: ['SiAngular', 'SiTypescript', 'SiSpringboot', 'SiPostgresql'],
      gradient: 'from-yellow-500 to-orange-500',
      achievements: [
        'Implemented reusable UI components',
        'Developed backend REST APIs with Spring Boot',
        'Created E2E automation reducing QA by 70%',
        'Integrated Spring MVC with PostgreSQL',
      ],
    },
    {
      title: 'CI/CD Pipeline & DevOps Automation',
      company: 'Velmeni.ai & Deloitte',
      description: 'Docker-based Jenkins CI/CD pipelines automating builds, tests, and deployments. Implemented on AWS infrastructure reducing release cycles by 60%.',
      tags: ['Docker', 'Jenkins', 'AWS', 'CI/CD', 'Automation'],
      icons: ['SiDocker', 'SiAmazonaws'],
      gradient: 'from-indigo-500 to-purple-500',
      achievements: [
        'Set up Docker-based CI/CD pipelines',
        'Automated builds and deployments',
        'Reduced release time by 60%',
        'Optimized AWS infrastructure',
      ],
    },
  ],
  cta: {
    text: "Want to see more? Check out my GitHub for additional projects and contributions.",
    buttonText: 'View GitHub Profile',
    link: personalInfo.github,
  },
}

export const contact = {
  title: 'Get In Touch',
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
  subtitle: "Feel free to reach out through any of these channels. I typically respond within 24 hours.",
  form: {
    labels: {
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Message',
    },
    placeholders: {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Project Opportunity',
      message: 'Tell me about your project...',
    },
    buttons: {
      submit: 'Send Message',
      sending: 'Sending...',
    },
    messages: {
      success: "Message sent successfully! I'll get back to you soon.",
      error: 'Failed to send message. Please try again or contact me directly via email.',
    },
  },
  info: [
    {
      icon: 'FaEnvelope',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'FaPhone',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\D/g, '')}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'FaLinkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/rohith-neralla',
      href: personalInfo.linkedin,
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: 'FaGithub',
      label: 'GitHub',
      value: 'github.com/Rohith-14',
      href: personalInfo.github,
      color: 'from-gray-700 to-gray-800',
    },
  ],
  opportunity: {
    title: 'Open to Opportunities',
    description: 'Currently exploring full-time roles and contract opportunities in frontend development, particularly with React, Next.js, and React Native.',
  },
}

export const footer = {
  name: personalInfo.name,
  tagline: 'Building the future, one line of code at a time',
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. Crafted with`,
  techStack: 'React & Next.js',
  quickLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { icon: 'FaGithub', href: personalInfo.github },
    { icon: 'FaLinkedin', href: personalInfo.linkedin },
    { icon: 'FaEnvelope', href: `mailto:${personalInfo.email}` },
  ],
}
