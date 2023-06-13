import '@/styles/globals.css'
import { cn } from '@/utils/classNames'
import { PT_Serif, Ubuntu } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Providers from '../components/Providers'
import { RouteMetadata } from './DefaultMetadata'

const ubuntu = Ubuntu({
  style: 'normal',
  display: 'auto',
  subsets: ['latin'],
  variable: '--font-ubuntu',
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
    <html
      lang="en"
      className={cn(ubuntu.variable, ptSerif.variable, 'subpixel-antialiased')}
    >
      <head />
      <Providers>
        <body>
          {children}
          <Analytics />
        </body>
      </Providers>
    </html>
  )
}
