# Multi-Language Support

This portfolio now supports 6 languages:
- 🇺🇸 English (en) - Default
- 🇪🇸 Spanish (es) - ✅ Implemented
- 🇯🇵 Japanese (ja) - 🚧 To be added
- 🇮🇳 Hindi (hi) - 🚧 To be added
- 🇮🇳 Telugu (te) - 🚧 To be added
- 🇫🇷 French (fr) - 🚧 To be added

## How It Works

### Architecture
1. **LanguageContext** (`src/i18n/LanguageContext.tsx`): Manages the current language state and persists it to localStorage
2. **useTranslation Hook** (`src/i18n/useTranslation.ts`): Provides translated content based on current language
3. **LanguageSwitcher** (`src/i18n/LanguageSwitcher.tsx`): UI component in navbar to switch languages
4. **Translation Files** (`src/i18n/translations/`): Contains translations for each language

### Usage in Components

Instead of importing from `@/data/portfolio`, components now use:

```typescript
import { useTranslation } from '@/i18n/useTranslation'

const MyComponent = () => {
  const { t, language } = useTranslation()
  
  // Use t.personalInfo, t.hero, t.about, t.skills, etc.
  return <h1>{t.hero.name}</h1>
}
```

### Current Status

**✅ Completed:**
- Translation system setup
- Language context and provider
- Language switcher in navbar
- Spanish translation (es.ts)
- Navbar updated to use translations

**🚧 Next Steps:**
1. Update all remaining components to use `useTranslation()`:
   - Hero.tsx
   - About.tsx
   - Experience.tsx (note: experiences array already has data, just needs hook)
   - Skills.tsx
   - Projects.tsx
   - Contact.tsx
   - Footer.tsx

2. Create translation files for remaining languages:
   - `src/i18n/translations/ja.ts` (Japanese)
   - `src/i18n/translations/hi.ts` (Hindi)
   - `src/i18n/translations/te.ts` (Telugu)
   - `src/i18n/translations/fr.ts` (French)

3. Update `useTranslation.ts` to import and export all translation files

## Creating New Translations

To add a new language translation:

1. Create a file in `src/i18n/translations/[lang].ts`
2. Export the same structure as `es.ts` with translated content
3. Import it in `src/i18n/useTranslation.ts`:
   ```typescript
   import { ja } from './translations/ja'
   
   const translations = {
     en,
     es,
     ja,  // Add here
     // ...
   }
   ```

## Spanish Translation Notes

The Spanish translation in `es.ts` includes:
- Navigation menu items
- Hero section (greeting, roles, description)
- About section (paragraphs, cards)
- Form labels and placeholders
- Success/error messages
- Footer content

All technical company names, achievements, and project details remain in English as they are proper nouns and metrics.

## Testing

To test translations:
1. Click the globe icon (🌐) in the navbar
2. Select a language from the dropdown
3. The selected language is saved to localStorage
4. Page content updates immediately
5. Refresh the page - language preference persists

## Important Notes

- The experiences, projects arrays with detailed content are in English
- For proper translations, you'll need native speakers for ja, hi, te, fr
- Technical terms (React, Next.js, etc.) typically stay in English
- Company names and metrics remain unchanged
- Email addresses, phone numbers, and URLs are language-independent
