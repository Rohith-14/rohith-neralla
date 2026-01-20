'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendar } from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { experiences } from '@/data/portfolio'
import { useTranslation } from '@/i18n/useTranslation'

const Experience = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  })

  const timelineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])
  
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const totalExperiences = experiences.length
      // Add threshold so first item activates after marker reaches it
      const adjustedProgress = Math.max(0, (latest - 0.1) / 0.8)
      const index = Math.floor(adjustedProgress * totalExperiences)
      const clampedIndex = Math.max(-1, Math.min(index, totalExperiences - 1))
      setActiveIndex(clampedIndex)
    })
  }, [scrollYProgress, experiences.length])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white dark:bg-dark-900">
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
          {/* Timeline background line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700/30" />
          
          {/* Animated timeline progress line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, #0ea5e9, #a855f7, #ec4899)',
              scaleY: timelineProgress,
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)',
            }}
          />

          {/* Glowing marker that moves along timeline */}
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
            style={{
              top: useTransform(timelineProgress, [0, 1], ['0%', '100%']),
            }}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
              animate={{
                boxShadow: [
                  '0 0 20px 5px rgba(14, 165, 233, 0.8), 0 0 40px 10px rgba(168, 85, 247, 0.6)',
                  '0 0 30px 8px rgba(14, 165, 233, 1), 0 0 60px 15px rgba(168, 85, 247, 0.8)',
                  '0 0 20px 5px rgba(14, 165, 233, 0.8), 0 0 40px 10px rgba(168, 85, 247, 0.6)',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isActive = activeIndex === index
              return (
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
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 border-4 border-dark-900 z-10" />

                {/* Content */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    animate={isActive ? { 
                      scale: 1.02,
                      y: -5
                    } : { scale: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-gray-100 dark:bg-dark-800 p-6 rounded-lg border transition-all duration-300 shadow-xl ${
                      isActive 
                        ? 'border-primary-500' 
                        : 'border-gray-300 dark:border-gray-700 hover:border-primary-500'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-black flex items-center justify-center">
                        <Image 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-200">{exp.company}</h3>
                        <p className="text-primary-400 font-medium">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                          <span className="text-primary-400 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Time period on opposite side */}
                <div className="hidden md:flex w-5/12 items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isActive ? { 
                      opacity: 1, 
                      scale: 1 
                    } : { 
                      opacity: 0, 
                      scale: 0.8 
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 backdrop-blur-sm border border-primary-500/30 rounded-lg px-6 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-400 text-sm" />
                      <span className="text-gray-200 font-medium text-sm">{exp.period}</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
