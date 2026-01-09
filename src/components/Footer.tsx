'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
            <h3 className="text-2xl font-bold gradient-text mb-2">Rohith Neralla</h3>
            <p className="text-gray-400 text-sm">Building the future, one line of code at a time</p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Experience
            </a>
            <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
              Contact
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/Rohith-14"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rohith-neralla"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:rohithneralla99@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary-400 transition-colors"
            >
              <FaEnvelope size={24} />
            </motion.a>
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
            © {currentYear} Rohith Neralla. Crafted with <FaHeart className="text-red-500" /> using React & Next.js
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
