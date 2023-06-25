'use client'

import { Provider } from 'jotai'
import { SessionProvider } from 'next-auth/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../public/locales/client'
import { ClientProvider } from '../client/trpcClient'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <Provider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </Provider>
      </I18nextProvider>
    </ClientProvider>
  )
}

export default Providers
