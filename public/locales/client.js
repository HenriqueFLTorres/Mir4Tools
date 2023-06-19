import { SettingsAtom } from '@/atoms/Settings'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { useAtom } from 'jotai'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import ENUS from './en/en-us.json'
import PTBR from './pt/pt-br.json'
import { languages } from './settings'

const resources = {
  pt: PTBR,
  en: ENUS,
}

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
    lng: JSON.parse(Cookies.get('Mir4Tools_Settings'))?.language, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  })

export default i18next

export function useTranslation(ns, options) {
  const ret = useTranslationOrg(ns, options)
  const [{ language }] = useAtom(SettingsAtom)

  const { i18n } = ret

  if (runsOnServerSide && i18n.resolvedLanguage !== language) {
    useEffect(() => i18n.changeLanguage(language), [])
  } else {
    useEffect(() => {
      if (i18n.resolvedLanguage === language) return
      i18n.changeLanguage(language)
    }, [language, i18n])
  }
  return ret
}
