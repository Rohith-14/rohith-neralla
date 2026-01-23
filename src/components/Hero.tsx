'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { useTranslation } from '@/i18n/useTranslation'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { t } = useTranslation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Interactive blob that follows mouse */}
        <motion.div
          animate={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 150,
            mass: 0.3,
          }}
          className="absolute w-[700px] h-[700px] bg-gradient-to-br from-primary-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left max-w-2xl relative">
            {/* Organic animated blob behind text */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
                borderRadius: ['60% 40% 30% 70%', '30% 60% 70% 40%', '60% 40% 30% 70%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-20 bg-gradient-to-br from-primary-500/10 via-cyan-500/10 to-purple-500/10 blur-2xl -z-10"
            />
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
                {t.personalInfo.title}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              {t.hero.greeting}{' '}
              <span className="gradient-text whitespace-nowrap">
                {t.hero.name}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6"
            >
              {t.hero.description.split(/React|Next\.js|Node\.js/).map((part, i, arr) => {
                if (i === arr.length - 1) return part
                const tech = i === 0 ? 'React' : i === 1 ? 'Next.js' : 'Node.js'
                return (
                  <span key={i}>
                    {part}
                    <span className="text-primary-400 font-semibold">{tech}</span>
                  </span>
                )
              })}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 mb-8"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href={t.hero.cta.primaryLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/50 transition-all duration-300 glow"
              >
                {t.hero.cta.primary}
              </motion.a>
              <motion.a
                href={t.hero.cta.secondaryLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-dark-700 text-gray-200 font-semibold rounded-lg border border-gray-600 hover:border-primary-500 transition-all duration-300"
              >
                {t.hero.cta.secondary}
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-6"
            >
              <motion.a
                href={t.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={32} />
              </motion.a>
              <motion.a
                href={t.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={32} />
              </motion.a>
              <motion.a
                href={`mailto:${t.personalInfo.email}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </motion.a>
              <motion.a
                href={`tel:${t.personalInfo.phone}`}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Phone"
              >
                <FaPhone size={32} />
              </motion.a>
            </motion.div>

            {/* Highlights
            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-3 justify-center lg:justify-start"
            >
              {t.skills.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="rounded-lg p-3 sm:p-4 text-center border flex-1 min-w-0"
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
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-1"
                    style={{
                      color: index === 0 ? 'rgb(96, 165, 250)' :
                            index === 1 ? 'rgb(74, 222, 128)' :
                            'rgb(192, 132, 252)'
                    }}
                  >
                    {highlight.value}
                  </div>
                  <div className="text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight">{highlight.label}</div>
                </motion.div>
              ))}
            </motion.div> */}
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full flex items-center justify-center lg:justify-end lg:pr-0"
            >
              <div className="relative w-full max-w-xl lg:max-w-none h-[600px] md:h-[600px] lg:h-[700px] lg:w-[700px]">
                <Image
                  src="/profile.png"
                  alt={`${t.personalInfo.name} - ${t.personalInfo.title}`}
                  fill
                  className="object-contain object-right"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div>
          {/* Highlights - Infinite Scroll Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 overflow-hidden relative"
            >
              {/* Gradient overlays for edge fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
              
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Render highlights twice for seamless loop */}
                {[...t.skills.highlights, ...t.skills.highlights].map((highlight, index) => {
                  const sectionId = (index % 3) === 0 ? '#experience' : (index % 3) === 1 ? '#projects' : '#skills'
                  // 3D Highlight Card
                  const [isHovered, setIsHovered] = useState(false)
                  const cardRef = useRef<HTMLAnchorElement>(null)
                  const x = useMotionValue(0)
                  const y = useMotionValue(0)
                  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
                  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })
                  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
                  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])
                  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
                    <motion.a
                      key={index}
                      ref={cardRef}
                      href={sectionId}
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(sectionId)
                        if (element) {
                          const offset = 150
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - offset
                          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                        }
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={handleMouseLeave}
                      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', backgroundImage: (index % 3) === 0 ? 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.15), rgba(79, 70, 229, 0.15))' : (index % 3) === 1 ? 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.15), rgba(5, 150, 105, 0.15))' : 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))', borderColor: (index % 3) === 0 ? 'rgba(59, 130, 246, 0.3)' : (index % 3) === 1 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(168, 85, 247, 0.3)' }}
                      className="rounded-lg p-6 text-center border flex-shrink-0 w-[350px] cursor-pointer block group relative"
                    >
                      {/* Glowing border */}
                      <motion.div
                        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                        style={{ background: (index % 3) === 0 ? 'linear-gradient(to right, rgb(59, 130, 246), rgb(14, 165, 233))' : (index % 3) === 1 ? 'linear-gradient(to right, rgb(34, 197, 94), rgb(16, 185, 129))' : 'linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))' }}
                      />
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                        animate={isHovered ? { x: ['-100%', '200%'] } : {}}
                        transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                      />
                      {/* Floating particles */}
                      {isHovered && [...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{ background: (index % 3) === 0 ? 'rgb(59, 130, 246)' : (index % 3) === 1 ? 'rgb(34, 197, 94)' : 'rgb(168, 85, 247)', left: `${20 + i * 30}%`, top: `${30 + i * 20}%` }}
                          animate={{ x: [0, (i - 1) * 30], y: [0, (i - 1) * -40], opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        />
                      ))}
                      <motion.div
                        className="text-5xl font-bold mb-2 relative"
                        style={{ color: (index % 3) === 0 ? 'rgb(96, 165, 250)' : (index % 3) === 1 ? 'rgb(74, 222, 128)' : 'rgb(192, 132, 252)', transform: 'translateZ(30px)' }}
                        animate={isHovered ? { scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] } : { scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {highlight.value}
                      </motion.div>
                      <motion.div
                        className="text-gray-300 text-base font-medium relative"
                        style={{ transform: 'translateZ(20px)' }}
                        animate={isHovered ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {highlight.label}
                      </motion.div>
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>
        </div>


        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              const element = document.querySelector('#about')
              if (element) {
                const offset = 80
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - offset
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              }
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-400"
          >
            <HiArrowDown size={32} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
