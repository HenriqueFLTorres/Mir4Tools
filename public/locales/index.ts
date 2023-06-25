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
  // const language = await getSSRSession().then(
  //   (data) => data?.user?.settings.language ?? 'en'
  // )

  const i18nextInstance = await initI18next()
  return {
    t: i18nextInstance.getFixedT('en'),
    i18n: i18nextInstance,
  }
}
