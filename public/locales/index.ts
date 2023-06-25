import { getSSRSession } from '@/utils/getSSRSession'
import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
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

export async function useTranslation() {
  const data = await getSSRSession()
  const language = data?.user?.settings?.language ?? 'en'

  const i18nextInstance = await initI18next(language)
  return {
    t: i18nextInstance.getFixedT(language),
    i18n: i18nextInstance,
  }
}
