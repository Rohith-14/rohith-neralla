'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiGlobeAlt, HiCheck } from 'react-icons/hi'
import { useLanguage, Language } from './LanguageContext'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 bg-dark-800 text-gray-300 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors"
      >
        <HiGlobeAlt size={20} />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-dark-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as Language)
                    setIsOpen(false)
                  }}
                  whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                  className="w-full px-4 py-3 flex items-center justify-between text-left text-gray-300 hover:text-primary-400 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <HiCheck className="text-primary-400" size={18} />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
