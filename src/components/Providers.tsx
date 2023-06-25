'use client'

import { Provider } from 'jotai'
import { SessionProvider } from 'next-auth/react'
import { ClientProvider } from '../client/trpcClient'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientProvider>
      <Provider>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </ClientProvider>
  )
}

export default Providers
