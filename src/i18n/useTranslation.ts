import { useLanguage } from './LanguageContext'
import * as en from '@/data/portfolio'
import { es } from './translations/es'
import { ja } from './translations/ja'
import { hi } from './translations/hi'
import { te } from './translations/te'
import { fr } from './translations/fr'

// Import technical data from English (these don't need translation)
import { experiences, skills as enSkills, projects as enProjects } from '@/data/portfolio'

// Merge translations with technical data from English
const esComplete = {
  ...es,
  experiences,
  skills: {
    ...es.skills,
    categories: enSkills.categories,
  },
  projects: {
    ...es.projects,
    items: enProjects.items,
  },
}

const jaComplete = {
  ...ja,
  experiences,
  skills: {
    ...ja.skills,
    categories: enSkills.categories,
  },
  projects: {
    ...ja.projects,
    items: enProjects.items,
  },
}

const hiComplete = {
  ...hi,
  experiences,
  skills: {
    ...hi.skills,
    categories: enSkills.categories,
  },
  projects: {
    ...hi.projects,
    items: enProjects.items,
  },
}

const teComplete = {
  ...te,
  experiences,
  skills: {
    ...te.skills,
    categories: enSkills.categories,
  },
  projects: {
    ...te.projects,
    items: enProjects.items,
  },
}

const frComplete = {
  ...fr,
  experiences,
  skills: {
    ...fr.skills,
    categories: enSkills.categories,
  },
  projects: {
    ...fr.projects,
    items: enProjects.items,
  },
}

const translations = {
  en,
  es: esComplete,
  ja: jaComplete,
  hi: hiComplete,
  te: teComplete,
  fr: frComplete,
}

export const useTranslation = () => {
  const { language } = useLanguage()
  
  const t = translations[language] || translations.en
  
  return { t, language }
}
