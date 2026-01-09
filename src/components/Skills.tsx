'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazonaws,
  SiTailwindcss, SiRedux, SiGraphql, SiGit, SiJenkins,
  SiAngular, SiSpringboot, SiDjango, SiFigma, SiKubernetes
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: SiReact, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, level: 90, color: '#3178C6' },
        { name: 'React Native', icon: SiReact, level: 85, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
        { name: 'Redux', icon: SiRedux, level: 85, color: '#764ABC' },
        { name: 'Tailwind', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
        { name: 'Angular', icon: SiAngular, level: 75, color: '#DD0031' },
      ],
    },
    {
      title: 'Backend & API',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90, color: '#339933' },
        { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
        { name: 'Java', icon: FaJava, level: 80, color: '#007396' },
        { name: 'Spring Boot', icon: SiSpringboot, level: 75, color: '#6DB33F' },
        { name: 'Django', icon: SiDjango, level: 75, color: '#092E20' },
        { name: 'GraphQL', icon: SiGraphql, level: 80, color: '#E10098' },
      ],
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90, color: '#4169E1' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
        { name: 'MySQL', icon: SiPostgresql, level: 80, color: '#4479A1' },
      ],
    },
    {
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', icon: SiAmazonaws, level: 85, color: '#FF9900' },
        { name: 'Docker', icon: SiDocker, level: 85, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 75, color: '#326CE5' },
        { name: 'Jenkins', icon: SiJenkins, level: 80, color: '#D24939' },
        { name: 'Git', icon: SiGit, level: 95, color: '#F05032' },
        { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-dark-800">
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-dark-900 rounded-lg p-6 border border-gray-700 hover:border-primary-500 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                  <h3 className="text-2xl font-bold text-gray-200">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="bg-dark-800 rounded-lg p-4 border border-gray-700 group-hover:border-primary-500 transition-all duration-300">
                        <div className="flex flex-col items-center">
                          <skill.icon 
                            className="text-4xl mb-2 transition-all duration-300 group-hover:scale-110" 
                            style={{ color: skill.color }}
                          />
                          <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                          
                          {/* Skill level bar */}
                          <div className="w-full mt-3 bg-dark-700 rounded-full h-1.5 overflow-hidden">
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
                  ))}
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
          <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">40-60%</div>
            <div className="text-gray-300">Performance Improvements</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
