'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useTranslation } from '@/i18n/useTranslation'

// Icon mapping
const iconMap: Record<string, any> = {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
}

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-dark-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">{t.footer.name}</h3>
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {t.footer.quickLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {t.footer.social.map((social, index) => {
              const IconComponent = iconMap[social.icon]
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            {t.footer.copyright} <FaHeart className="text-red-500" /> using {t.footer.techStack}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
