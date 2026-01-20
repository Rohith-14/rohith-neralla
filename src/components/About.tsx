'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '@/i18n/useTranslation'

const About = () => {
  const { t } = useTranslation()
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
                {t.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-gray-300 text-lg leading-relaxed ${index < t.about.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                    {paragraph.split(/(Software Engineer|3\+ years|Velmeni\.ai|responsive|performant|user-friendly)/).map((part, i) => {
                      const isHighlight = t.about.highlights.some(h => h.text === part)
                      return isHighlight ? (
                        <span key={i} className="text-primary-400 font-semibold">{part}</span>
                      ) : part
                    })}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              {t.about.cards.map((card, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">{card.title}</h3>
                    <p className="text-gray-400">{card.subtitle}</p>
                    <p className="text-gray-500 text-sm">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
