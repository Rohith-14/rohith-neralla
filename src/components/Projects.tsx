'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiPostgresql, 
  SiPython, SiNodedotjs, SiAngular, SiSpringboot, SiDocker,
  SiAmazonaws, SiDjango
} from 'react-icons/si'
import { useTranslation } from '@/i18n/useTranslation'
import { projects } from '@/data/portfolio'
import { useState, useRef } from 'react'

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

// 3D Project Card with magnetic hover effect
const ProjectCard = ({ project, index, inView }: any) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])
  
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
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Glowing border effect */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{
          background: project.gradient.includes('blue') ? 'linear-gradient(to right, rgb(59, 130, 246), rgb(14, 165, 233))' :
                     project.gradient.includes('green') ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))' :
                     project.gradient.includes('orange') ? 'linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))' :
                     project.gradient.includes('purple') ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' :
                     'linear-gradient(to right, rgb(234, 179, 8), rgb(202, 138, 4))'
        }}
      />

      <div 
        className="relative bg-dark-800 rounded-lg border border-gray-700 hover:border-transparent transition-all duration-300 h-full flex flex-col overflow-hidden"
        style={{ transform: 'translateZ(20px)' }}
      >
        {/* Animated gradient header with floating icons */}
        <div 
          className="p-6 relative overflow-hidden"
          style={{
            backgroundImage: project.gradient.includes('blue') ? 'linear-gradient(135deg, rgb(59, 130, 246), rgb(14, 165, 233))' :
                             project.gradient.includes('green') ? 'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129))' :
                             project.gradient.includes('orange') ? 'linear-gradient(135deg, rgb(249, 115, 22), rgb(239, 68, 68))' :
                             project.gradient.includes('purple') ? 'linear-gradient(135deg, rgb(168, 85, 247), rgb(236, 72, 153))' :
                             'linear-gradient(135deg, rgb(234, 179, 8), rgb(202, 138, 4))'
          }}
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          
          {/* Floating tech icons */}
          <div className="relative flex items-center justify-between mb-3">
            <div className="flex gap-2">
              {project.icons.map((iconName: string, i: number) => {
                const IconComponent = iconMap[iconName]
                return (
                  <motion.div
                    key={i}
                    animate={isHovered ? {
                      y: [-2, -8, -2],
                      rotate: [0, 5, 0, -5, 0],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    style={{ transform: `translateZ(${30 + i * 10}px)` }}
                  >
                    <IconComponent className="text-white text-2xl drop-shadow-lg" />
                  </motion.div>
                )
              })}
            </div>
          </div>
          
          <motion.h3 
            className="text-xl font-bold text-white mb-1 relative"
            style={{ transform: 'translateZ(40px)' }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-white/90 text-sm font-medium"
            style={{ transform: 'translateZ(35px)' }}
          >
            {project.company}
          </motion.p>
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={isHovered ? {
              x: ['-100%', '200%'],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 1,
            }}
            style={{
              transform: 'translateZ(50px)',
            }}
          />
        </div>

        {/* Content with parallax effect */}
        <motion.div 
          className="p-6 flex-grow flex flex-col relative"
          style={{ transform: 'translateZ(25px)' }}
        >
          {/* Floating particles in background */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              animate={isHovered ? {
                x: [0, (i - 1) * 30],
                y: [0, (i - 1) * -40],
                opacity: [0, 1, 0],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
            />
          ))}
          
          <p className="text-gray-300 mb-4 text-sm leading-relaxed relative z-10">
            {project.description}
          </p>

          <div className="mb-4 relative z-10">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {project.achievements.map((achievement: string, i: number) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-2 text-gray-400 text-xs"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + i * 0.1 }}
                >
                  <motion.span 
                    className="text-primary-400 mt-0.5"
                    animate={isHovered ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  >
                    ▹
                  </motion.span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tags with hover effect */}
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            {project.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 bg-dark-700 text-primary-400 text-xs rounded-full border border-primary-500/20 hover:border-primary-500/50 hover:bg-dark-700/80 transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={inView ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #fff, #0ea5e9, #a855f7, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div 
            className="h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {t.projects.description}
          </motion.p>
        </motion.div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: '1000px' }}
        >
          {projects.items.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>

        {/* Call to action with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.p 
            className="text-gray-400 mb-6"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            {t.projects.cta.text}
          </motion.p>
          <motion.a
            href={t.projects.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-dark-700 to-dark-800 text-gray-200 font-semibold rounded-lg border border-gray-600 hover:border-primary-500 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <FaGithub size={24} />
            </motion.div>
            <span className="relative z-10">{t.projects.cta.buttonText}</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaExternalLinkAlt size={16} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
