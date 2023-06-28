import WalkthroughWrapper from '@/components/WalkthroughWrapper'
import '@/styles/globals.css'
import { cn } from '@/utils/classNames'
import { PT_Serif, Rubik } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import Providers from '../components/Providers'
import { RouteMetadata } from './DefaultMetadata'

const main = Rubik({
  style: 'normal',
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-main',
  weight: ['300', '400', '500', '700'],
})

const ptSerif = PT_Serif({
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-ptSerif',
  weight: ['700'],
})

export const metadata = RouteMetadata.CraftingCalculator

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(main.variable, ptSerif.variable)}>
      <head />
      <Providers>
        <body>
          {children}
          <Analytics />
          <WalkthroughWrapper />
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              style: {
                border: '1px solid rgba(255, 255, 255, 0.10)',
                background: 'rgba(126, 115, 173, 0.05)',
                backdropFilter: 'blur(7.5px)',
                color: '#ffffff',
                fontWeight: 600,
              },
            }}
          />
        </body>
      </Providers>
    </html>
  )
}
