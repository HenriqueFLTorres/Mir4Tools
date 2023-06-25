'use client'

import SupportTag from '@/components/global/Navbar/SupportTag'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Link from 'next/link'
import { useTranslation } from '../../../../public/locales/client'
import ProfileSection from './ProfileSection'
import SupportUs from './SupportUs'

export default function GlobalNavbar({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const { t } = useTranslation()

  return (
    <>
      <header className="relative z-[40] flex w-full items-center justify-between border-b border-white/10 bg-primary-400/5 px-3 py-2 drop-shadow-md backdrop-blur-xl">
        <ProfileSection />
        <nav className="absolute left-1/2 flex w-max shrink-0 -translate-x-1/2 gap-4">
          {links(t).map(({ href, label, Icon }) => (
            <Link
              href={href}
              key={label}
              className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white hover:bg-white/10 motion-safe:transition-colors"
            >
              <Icon className="h-6 w-6 fill-white" />
              {label}
            </Link>
          ))}
          <SupportUs />
        </nav>
        {children}
      </header>

      <SupportTag />
    </>
  )
}

const links = (t: (key: string) => string) => [
  {
    href: '/xp',
    label: t('Experience Calculator'),
    Icon: EXP,
  },
  {
    href: '/',
    label: t('Crafting Calculator'),
    Icon: Forge,
  },
]
