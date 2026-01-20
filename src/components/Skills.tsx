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
import { skills } from '@/data/portfolio'

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
            {skills.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-white dark:bg-dark-900 rounded-lg p-6 border border-gray-300 dark:border-gray-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="h-1 w-12 rounded-full"
                    style={{
                      backgroundImage: category.color.includes('blue') ? 'linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))' :
                                       category.color.includes('green') ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))' :
                                       category.color.includes('purple') ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' :
                                       'linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))'
                    }}
                  />
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
                            <div className="w-full mt-3 bg-gray-300 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : { width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                  backgroundImage: category.color.includes('blue') ? 'linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))' :
                                                   category.color.includes('green') ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))' :
                                                   category.color.includes('purple') ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' :
                                                   'linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))'
                                }}
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
          {skills.highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`rounded-lg p-6 text-center border`}
              style={{
                backgroundImage: index === 0 ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.15), rgba(79, 70, 229, 0.15))' :
                                index === 1 ? 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.15), rgba(5, 150, 105, 0.15))' :
                                'linear-gradient(to bottom right, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))',
                borderColor: index === 0 ? 'rgba(59, 130, 246, 0.3)' :
                            index === 1 ? 'rgba(34, 197, 94, 0.3)' :
                            'rgba(168, 85, 247, 0.3)'
              }}
            >
              <div 
                className="text-4xl font-bold mb-2"
                style={{
                  color: index === 0 ? 'rgb(96, 165, 250)' :
                        index === 1 ? 'rgb(74, 222, 128)' :
                        'rgb(192, 132, 252)'
                }}
              >
                {highlight.value}
              </div>
              <div className="text-gray-700 dark:text-gray-300">{highlight.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
