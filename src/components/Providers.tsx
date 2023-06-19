'use client'
import { SettingsAtom } from '@/atoms/Settings'
import { useHydrateAtoms } from 'jotai/utils'
import Cookies from 'js-cookie'
import { SessionProvider } from 'next-auth/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../public/locales/client'

export default function Providers({ children }: { children: React.ReactNode }) {
  useHydrateAtoms([
    [
      SettingsAtom,
      JSON.parse(
        Cookies.get('Mir4Tools_Settings') ??
          "{displayRarity: ['Legendary', 'Epic', 'Rare'],showOwnedItems: false,language: 'en',}"
      ),
    ],
  ] as const)
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <SessionProvider>{children}</SessionProvider>
    </I18nextProvider>
  )
}
