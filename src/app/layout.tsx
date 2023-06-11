import '@/styles/globals.css'
import { cn } from '@/utils/classNames'
import { Noto_Sans_KR, PT_Serif } from '@next/font/google'
import Providers from '../components/Providers'
import { RouteMetadata } from './DefaultMetadata'

const notoSansKR = Noto_Sans_KR({
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-notoSansKR',
  weight: ['100', '300', '400', '500', '700', '900'],
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
      className={cn(notoSansKR.variable, ptSerif.variable, 'antialiased')}
    >
      <head />
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
