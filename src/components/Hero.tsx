'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
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
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Rohith Neralla
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Full-stack engineer crafting exceptional digital experiences with{' '}
            <span className="text-primary-400 font-semibold">React</span>,{' '}
            <span className="text-primary-400 font-semibold">Next.js</span>, and{' '}
            <span className="text-primary-400 font-semibold">React Native</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Currently building AI-powered healthcare solutions at Velmeni.ai. 
            Passionate about creating intuitive, performant, and scalable applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/50 transition-all duration-300 glow"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-700 text-gray-200 font-semibold rounded-lg border border-gray-600 hover:border-primary-500 transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://github.com/Rohith-14"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaGithub size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rohith-neralla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:rohithneralla99@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaEnvelope size={32} />
            </motion.a>
            <motion.a
              href="tel:+16892702419"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaPhone size={32} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary-400"
            >
              <HiArrowDown size={32} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
