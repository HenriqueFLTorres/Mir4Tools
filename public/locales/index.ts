import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cookies } from 'next/headers'
import { initReactI18next } from 'react-i18next/initReactI18next'
import ENUS from './en/en-us.json'
import PTBR from './pt/pt-br.json'
import { getOptions } from './settings'

const resources = {
  pt: PTBR,
  en: ENUS,
}

const initI18next = async (lng?: string, ns?: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        async (language: string, namespace: string) =>
          await import(`./${language}/${namespace}.json`)
      )
    )
    .init({ ...getOptions(lng, ns), resources })
  return i18nInstance
}

export const getLanguageFromCookie = () => {
  const nextCookie = cookies().get('Mir4Tools_Settings')
  if (!nextCookie?.value) return 'en'
  return JSON.parse(nextCookie?.value)?.language
}

export async function useTranslation() {
  const language = getLanguageFromCookie()
  const i18nextInstance = await initI18next(language)
  return {
    t: i18nextInstance.getFixedT(language),
    i18n: i18nextInstance,
  }
}
