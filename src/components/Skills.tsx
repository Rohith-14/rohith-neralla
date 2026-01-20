'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazonaws,
  SiTailwindcss, SiRedux, SiGraphql, SiGit, SiJenkins,
  SiAngular, SiSpringboot, SiDjango, SiKubernetes, SiExpress, SiFigma
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { useTranslation } from '@/i18n/useTranslation'

// Icon mapping
const iconMap: Record<string, any> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiGit,
  SiJenkins,
  SiAngular,
  SiSpringboot,
  SiDjango,
  SiKubernetes,
  SiExpress,
  SiFigma,
  FaJava,
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-white dark:bg-dark-900 rounded-lg p-6 border border-gray-300 dark:border-gray-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                  <h3 className="text-2xl font-bold text-gray-200">{category.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill.icon]
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group"
                      >
                        <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 border border-gray-300 dark:border-gray-700 group-hover:border-primary-500 transition-all duration-300">
                          <div className="flex flex-col items-center">
                            <IconComponent 
                              className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110" 
                              style={{ color: skill.color }}
                            />
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                            
                            {/* Skill level bar */}
                            <div className="w-full mt-3 bg-gray-50 dark:bg-dark-700 rounded-full h-1.5 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {t.skills.highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${highlight.color} border ${highlight.borderColor} rounded-lg p-6 text-center`}
            >
              <div className={`text-4xl font-bold ${highlight.textColor} mb-2`}>{highlight.value}</div>
              <div className="text-gray-700 dark:text-gray-300">{highlight.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
