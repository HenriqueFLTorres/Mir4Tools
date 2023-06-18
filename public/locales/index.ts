import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import ENUS from './en/en-us.json'
import PTBR from './pt/pt-br.json'

const resources = {
  'pt-BR': PTBR,
  'en-us': ENUS,
}

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
