'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring, useTransform as useFramerTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendar } from 'react-icons/fa'
import { useRef, useState, useEffect } from 'react'
// 3D Experience Card
const ExperienceCard = ({ exp, index, inView, isActive }: any) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useFramerTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useFramerTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col md:flex-row gap-8 items-center group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline dot with pulse */}
      <motion.div
        className="hidden md:block absolute w-4 h-4 rounded-full border-4 border-dark-900 z-10"
        style={{
          left: 'calc(50% - 6px)', // Move dot left by 6px from center
          transform: 'translateY(-50%)', // Center vertically
          background: isActive ? 'linear-gradient(90deg, #0ea5e9, #a855f7, #ec4899)' : 'linear-gradient(90deg, #334155, #64748b)',
          boxShadow: isActive ? '0 0 24px 8px #a855f7, 0 0 40px 10px #0ea5e9' : 'none',
        }}
        animate={isActive ? { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] } : {}}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      {/* Content */}
      <div className="w-full md:w-5/12">
        <motion.div
          whileHover={{ scale: 1.03, y: -8 }}
          animate={isActive ? { scale: 1.04, y: -10 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`bg-dark-800 p-6 rounded-lg border transition-all duration-300 shadow-xl relative overflow-hidden ${
            isActive ? 'border-primary-500' : 'border-gray-700 group-hover:border-primary-500'
          }`}
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            animate={isActive || isHovered ? { x: ['-100%', '200%'] } : {}}
            transition={{ duration: 1.2, repeat: isActive || isHovered ? Infinity : 0, repeatDelay: 1 }}
          />
          {/* Floating particles */}
          {(isActive || isHovered) && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              animate={{
                x: [0, (i - 1) * 30],
                y: [0, (i - 1) * -40],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              style={{ left: `${20 + i * 30}%`, top: `${30 + i * 20}%` }}
            />
          ))}
          <div className="flex items-center gap-3 mb-4">
            {/* Animated logo */}
            <motion.div
              className="relative w-12 h-12 rounded-lg overflow-hidden bg-black flex items-center justify-center shadow-lg"
              animate={isActive || isHovered ? { y: [0, -8, 0], rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              style={{ filter: isActive ? 'drop-shadow(0 0 12px #a855f7)' : 'none', transform: 'translateZ(40px)' }}
            >
              <Image 
                src={exp.logo} 
                alt={`${exp.company} logo`}
                fill
                className="object-contain p-1"
              />
            </motion.div>
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
            {exp.achievements.map((achievement: string, i: number) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-gray-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + i * 0.1 }}
              >
                <motion.span
                  className="text-primary-400 mt-1"
                  animate={isActive || isHovered ? { x: [0, 3, 0] } : {}}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                >
                  ▹
                </motion.span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Time period on opposite side */}
      <div className="hidden md:flex w-5/12 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
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
}
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
    <section id="experience" ref={sectionRef} className="py-20 bg-dark-900">
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
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company}
                exp={exp}
                index={index}
                inView={inView}
                isActive={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
