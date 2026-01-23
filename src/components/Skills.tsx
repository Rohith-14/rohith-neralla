'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, 
  SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazonaws,
  SiTailwindcss, SiRedux, SiGraphql, SiGit, SiJenkins,
  SiAngular, SiSpringboot, SiDjango, SiKubernetes, SiExpress, SiFigma
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { skills } from '@/data/portfolio'
import { useState, useRef } from 'react'

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

// 3D Skill Card Component
const SkillCard = ({ skill, categoryColor, index, inView, categoryIndex }: any) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])
  
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

  const IconComponent = iconMap[skill.icon]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      {/* Glowing effect */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{
          background: categoryColor,
        }}
      />

      <div 
        className="relative bg-dark-800 rounded-lg p-4 border border-gray-700 group-hover:border-transparent transition-all duration-300"
        style={{ transform: 'translateZ(20px)' }}
      >
        <div className="flex flex-col items-center">
          {/* Animated icon */}
          <motion.div
            animate={isHovered ? {
              y: [-2, -8, -2],
              rotate: [0, 360],
            } : {}}
            transition={{
              y: { duration: 1.5, repeat: Infinity },
              rotate: { duration: 0.6 },
            }}
            style={{ transform: 'translateZ(30px)' }}
          >
            <IconComponent 
              className="text-4xl mb-2 transition-all duration-300" 
              style={{ 
                color: skill.color,
                filter: isHovered ? 'drop-shadow(0 0 10px currentColor)' : 'none'
              }}
            />
          </motion.div>

          {/* Name with parallax */}
          <motion.span 
            className="text-gray-300 text-sm font-medium text-center"
            style={{ transform: 'translateZ(25px)' }}
          >
            {skill.name}
          </motion.span>
          
          {/* Animated skill level bar */}
          <div 
            className="w-full mt-3 bg-gray-700 rounded-full h-2 overflow-hidden relative"
            style={{ transform: 'translateZ(20px)' }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: (categoryIndex * 0.1) + (index * 0.05) + 0.3 }}
              className="h-full rounded-full relative"
              style={{
                backgroundImage: categoryColor,
              }}
            >
              {/* Shimmer effect on progress bar */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={isHovered ? {
                  x: ['-100%', '200%'],
                } : {}}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>
            
            {/* Percentage tooltip on hover */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isHovered ? { opacity: 1, y: -25 } : { opacity: 0, y: -10 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-900 text-primary-400 text-xs px-2 py-1 rounded whitespace-nowrap"
              style={{ transform: 'translateZ(40px) translateX(-50%)' }}
            >
              {skill.level}%
            </motion.div>
          </div>

          {/* Floating particles */}
          {isHovered && [...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                background: skill.color,
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [(i - 1) * 10, (i - 1) * 30],
                y: [(i - 1) * 10, (i - 1) * -30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// 3D Category Card Component
const CategoryCard = ({ category, categoryIndex, inView }: any) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])
  
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

  const categoryColor = category.color.includes('blue') ? 'linear-gradient(to right, rgb(59, 130, 246), rgb(6, 182, 212))' :
                        category.color.includes('green') ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))' :
                        category.color.includes('purple') ? 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' :
                        'linear-gradient(to right, rgb(249, 115, 22), rgb(239, 68, 68))'

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: categoryIndex * 0.15 }}
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
      {/* Outer glow */}
      <motion.div
        className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
        style={{
          backgroundImage: categoryColor,
        }}
      />

      <div 
        className="relative bg-dark-900 rounded-lg p-6 border border-gray-700 group-hover:border-transparent transition-all duration-300 h-full"
        style={{ transform: 'translateZ(30px)' }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 rounded-lg overflow-hidden"
          animate={{
            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Header */}
        <motion.div 
          className="flex items-center gap-3 mb-6 relative"
          style={{ transform: 'translateZ(40px)' }}
        >
          <motion.div 
            className="h-1 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.15 + 0.3 }}
            style={{
              backgroundImage: categoryColor,
              boxShadow: isHovered ? `0 0 20px ${category.color.includes('blue') ? 'rgb(59, 130, 246)' : 
                                                  category.color.includes('green') ? 'rgb(34, 197, 94)' :
                                                  category.color.includes('purple') ? 'rgb(168, 85, 247)' :
                                                  'rgb(249, 115, 22)'}` : 'none',
            }}
          />
          <motion.h3 
            className="text-2xl font-bold text-gray-200"
            animate={isHovered ? {
              x: [0, 5, 0],
            } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {category.name}
          </motion.h3>
        </motion.div>

        {/* Skills grid */}
        <div 
          className="grid grid-cols-2 gap-4 relative"
          style={{ 
            perspective: '1000px',
            transform: 'translateZ(20px)' 
          }}
        >
          {category.skills.map((skill: any, skillIndex: number) => (
            <SkillCard 
              key={skill.name}
              skill={skill}
              categoryColor={categoryColor}
              index={skillIndex}
              inView={inView}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="skills" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-32 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
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
              backgroundImage: 'linear-gradient(90deg, #fff, #10b981, #a855f7, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Technical <span className="gradient-text">Skills</span>
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
            {skills.description}
          </motion.p>
        </motion.div>

        <div 
          className="grid md:grid-cols-2 gap-8"
          style={{ perspective: '2000px' }}
        >
          {skills.categories.map((category, categoryIndex) => (
            <CategoryCard 
              key={category.name}
              category={category}
              categoryIndex={categoryIndex}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
