'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
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

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 border-4 border-dark-900" />

                {/* Content */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-dark-800 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center`}>
                        <FaBriefcase className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-200">{exp.company}</h3>
                        <p className="text-primary-400 font-medium">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
