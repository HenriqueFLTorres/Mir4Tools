'use client'

import SupportTag from '@/components/global/Navbar/SupportTag'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Hamburguer from '@/icons/Hamburguer'
import { cn } from '@/utils/classNames'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '../../../../public/locales/client'
import ProfileSection from './ProfileSection'
import SupportUs from './SupportUs'

export default function GlobalNavbar({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const { t } = useTranslation()
  const [showMobile, setShowMobile] = useState(false)

  return (
    <>
      <header className="absolute z-[40] flex w-full flex-col border-b border-white/10 bg-primary-400/5 px-3 py-2 drop-shadow-md backdrop-blur-xl">
        <div className="relative flex w-full gap-4 items-center justify-end lg:justify-between">
          <ProfileSection />

          <nav className="absolute left-1/2 hidden w-max shrink-0 -translate-x-1/2 gap-4 lg:flex">
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

          <button
            aria-label="Navigation menu"
            onClick={() => setShowMobile((prev) => !prev)}
            className="flex lg:hidden items-center justify-items-end gap-3 rounded-md bg-black/20 p-3 motion-safe:transition-colors"
          >
            <Hamburguer className="h-5 w-5 shrink-0 fill-white" />
          </button>
        </div>

        <MobileNavbar showMobile={showMobile} />
      </header>

      <SupportTag />
    </>
  )
}

function MobileNavbar({ showMobile }: { showMobile: boolean }) {
  const { t } = useTranslation()

  return (
    <nav
      className={cn(
        'mt-0 flex max-h-0 flex-col gap-4 overflow-hidden motion-safe:transition-[max-height,_margin] motion-safe:duration-300 motion-safe:will-change-[max-height,_margin] lg:hidden',
        {
          'mt-5 max-h-[20rem]': showMobile,
        }
      )}
    >
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
