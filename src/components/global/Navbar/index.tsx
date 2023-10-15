'use client'

import SupportTag from '@/components/global/Navbar/SupportTag'
import Conquest from '@/icons/Conquest'
import Constitution from '@/icons/Constitution'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Hamburguer from '@/icons/Hamburguer'
import Monument from '@/icons/Monument'
import { cn } from '@/utils/classNames'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '../../../../public/locales/client'
import ChangeLanguage from './ChangeLanguage'
import ManageSettings from './ManageSettings'
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
        <div className="relative flex w-full items-center justify-end gap-4 2xl:justify-between">
          <div className="mr-auto flex gap-4 2xl:mr-0">
            <ManageSettings />

            <ChangeLanguage />
          </div>

          <nav className="absolute left-1/2 hidden w-max shrink-0 -translate-x-1/2 gap-4 2xl:flex">
            {links(t).map(({ href, label, Icon }) => (
              <Link
                href={href}
                key={label}
                className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white transition-colors hover:bg-white/10"
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
            className="flex items-center justify-items-end gap-3 rounded-md bg-black/20 p-3 transition-colors 2xl:hidden"
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
        'mt-0 flex max-h-0 flex-col gap-4 overflow-hidden transition-[max-height,_margin] duration-300 will-change-[max-height,_margin] 2xl:hidden',
        {
          'mt-5 max-h-[20rem]': showMobile,
        }
      )}
    >
      {links(t).map(({ href, label, Icon }) => (
        <Link
          href={href}
          key={label}
          className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white transition-colors hover:bg-white/10"
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
    href: '/conquests',
    label: t('Conquests'),
    Icon: Conquest,
  },
  {
    href: '/constitution',
    label: t('Constitution'),
    Icon: Constitution,
  },
  {
    href: '/',
    label: t('Crafting Calculator'),
    Icon: Forge,
  },
  {
    href: '/maps',
    label: t('Maps'),
    Icon: Monument,
  },
]
