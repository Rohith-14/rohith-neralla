'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiPostgresql, 
  SiPython, SiNodedotjs, SiAngular, SiSpringboot, SiDocker,
  SiAmazonaws, SiDjango
} from 'react-icons/si'
import { useTranslation } from '@/i18n/useTranslation'
import { projects } from '@/data/portfolio'

// Icon mapping
const iconMap: Record<string, any> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiPython,
  SiNodedotjs,
  SiAngular,
  SiSpringboot,
  SiDocker,
  SiAmazonaws,
  SiDjango,
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-100 dark:bg-dark-800 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary-500 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                      {project.icons.map((iconName, i) => {
                        const IconComponent = iconMap[iconName]
                        return <IconComponent key={i} className="text-white text-2xl" />
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm font-medium">{project.company}</p>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-xs">
                          <span className="text-primary-400 mt-0.5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 dark:bg-dark-700 text-primary-400 text-xs rounded-full border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t.projects.cta.text}
          </p>
          <motion.a
            href={t.projects.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-50 dark:bg-dark-700 text-gray-200 font-semibold rounded-lg border border-gray-600 hover:border-primary-500 transition-all duration-300"
          >
            <FaGithub size={24} />
            {t.projects.cta.buttonText}
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
