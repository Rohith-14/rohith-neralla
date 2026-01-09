'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-dark-800">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg blur-xl opacity-20" />
              <div className="relative bg-dark-700 p-8 rounded-lg border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate <span className="text-primary-400 font-semibold">Software Engineer</span> with{' '}
                  <span className="text-primary-400 font-semibold">5+ years</span> of experience building modern web and mobile applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Currently at <span className="text-primary-400 font-semibold">Velmeni.ai</span>, I'm developing AI-powered healthcare solutions 
                  that help dentists diagnose pathologies using cutting-edge React and Next.js technologies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I specialize in creating <span className="text-primary-400 font-semibold">responsive</span>, 
                  {' '}<span className="text-primary-400 font-semibold">performant</span>, and{' '}
                  <span className="text-primary-400 font-semibold">user-friendly</span> applications that solve real-world problems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">Education</h3>
                  <p className="text-gray-400">Master of Computer Science</p>
                  <p className="text-gray-500 text-sm">University of Central Florida (GPA: 3.93)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">Experience</h3>
                  <p className="text-gray-400">5+ Years in Software Development</p>
                  <p className="text-gray-500 text-sm">Velmeni.ai, Deloitte, Augur Cyber X, Moody's</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">Focus</h3>
                  <p className="text-gray-400">React, Next.js & React Native</p>
                  <p className="text-gray-500 text-sm">Building scalable frontend architectures</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">Impact</h3>
                  <p className="text-gray-400">40-60% performance improvements</p>
                  <p className="text-gray-500 text-sm">Optimized load times, data processing, and deployment cycles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
