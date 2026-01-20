import { useLanguage } from './LanguageContext'
import * as en from '@/data/portfolio'
import { es, experiences as esExperiences, skills as esSkills, projects as esProjects } from './translations/es'
import { ja, experiences as jaExperiences, skills as jaSkills, projects as jaProjects } from './translations/ja'
import { hi, experiences as hiExperiences, skills as hiSkills, projects as hiProjects } from './translations/hi'
import { te, experiences as teExperiences, skills as teSkills, projects as teProjects } from './translations/te'
import { fr, experiences as frExperiences, skills as frSkills, projects as frProjects } from './translations/fr'

// Merge translations with technical data from English
const esComplete = {
  ...es,
  experiences: esExperiences,
  skills: {
    ...es.skills,
    categories: esSkills.categories,
  },
  projects: {
    ...es.projects,
    items: esProjects.items,
  },
}

const jaComplete = {
  ...ja,
  experiences: jaExperiences,
  skills: {
    ...ja.skills,
    categories: jaSkills.categories,
  },
  projects: {
    ...ja.projects,
    items: jaProjects.items,
  },
}

const hiComplete = {
  ...hi,
  experiences: hiExperiences,
  skills: {
    ...hi.skills,
    categories: hiSkills.categories,
  },
  projects: {
    ...hi.projects,
    items: hiProjects.items,
  },
}

const teComplete = {
  ...te,
  experiences: teExperiences,
  skills: {
    ...te.skills,
    categories: teSkills.categories,
  },
  projects: {
    ...te.projects,
    items: teProjects.items,
  },
}

const frComplete = {
  ...fr,
  experiences: frExperiences,
  skills: {
    ...fr.skills,
    categories: frSkills.categories,
  },
  projects: {
    ...fr.projects,
    items: frProjects.items,
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
