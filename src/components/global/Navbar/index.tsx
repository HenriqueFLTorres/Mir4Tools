'use client'

import Chevron from '@/icons/Chevron'
import Conquest from '@/icons/Conquest'
import Constitution from '@/icons/Constitution'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Heart from '@/icons/Heart'
import InnerForce from '@/icons/InnerForce'
import Misc from '@/icons/Misc'
import Monument from '@/icons/Monument'
// eslint-disable-next-line import/no-named-default
import { default as PatchNotesIcon } from '@/icons/PatchNotes'
import { cn } from '@/utils/classNames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from '../../../../public/locales/client'
import ChangeLanguage from './ChangeLanguage'
import DiscordGroup from './DiscordGroup'
import ManageSettings from './ManageSettings'
import PatchNotes from './PatchNotes'
import SupportUs from './SupportUs'

export default function GlobalNavbar({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  const { t } = useTranslation()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <>
      <header className="absolute z-[41] flex w-full flex-col border-b border-white/10 bg-primary-400/5 px-3 py-2 drop-shadow-md backdrop-blur-xl">
        <div className="relative flex w-full items-center justify-end gap-4 3xl:justify-between">
          <div className="mr-auto flex gap-4 3xl:mr-0">
            <ManageSettings />

            <ChangeLanguage />
          </div>

          {children}
        </div>
      </header>

      <aside
        className={cn(
          'absolute z-[40] flex w-full flex-row items-center gap-6 overflow-x-hidden border-b border-white/10 bg-pink-400 bg-primary-400/5 pt-[4.3rem] drop-shadow-md backdrop-blur-xl transition-[width,_max-width] duration-500 will-change-[width,_max-width] md:fixed md:h-screen md:w-16 md:max-w-[3.75rem] md:flex-col md:border-b-0 md:border-r md:pt-[5.25rem]',
          { 'md:w-96 md:max-w-[24rem]': isSidebarExpanded }
        )}
      >
        <button
          aria-label={isSidebarExpanded ? 'shrink sidebar' : 'expand sidebar'}
          onClick={() => setIsSidebarExpanded((prev) => !prev)}
          className={cn(
            'relative z-[2] mx-3 hidden h-10 w-full max-w-[2.5rem] shrink-0 items-center justify-center rounded-md bg-black/20 p-2 outline-none transition-[color,_max-width] duration-500 hover:bg-black/40 md:flex',
            { 'max-w-[22.5rem]': isSidebarExpanded }
          )}
        >
          <Chevron
            className={cn('transition-transform', {
              'rotate-180': !isSidebarExpanded,
            })}
          />
        </button>

        <div className="custom-scroll flex w-full flex-row gap-4 overflow-auto p-3 md:h-full md:flex-col md:gap-6 md:overflow-y-auto md:overflow-x-hidden md:p-0 md:pb-6">
          <NavGroup
            isSidebarExpanded={isSidebarExpanded}
            list={getCalculatorsLinks(t)}
            title="Calculators"
          />

          <hr className="flex h-10 w-[1px] border-r-[1px] border-t-0 border-white/10 md:block md:h-[1px] md:w-full md:border-r-0 md:border-t-[1px]" />

          <NavGroup
            isSidebarExpanded={isSidebarExpanded}
            list={getOthersLinks(t)}
            title="Additional Tools"
          />

          <hr className="flex h-10 w-[1px] border-r-[1px] border-t-0 border-white/10 md:block md:h-[1px] md:w-full md:border-r-0 md:border-t-[1px]" />

          <nav
            className={cn(
              'relative flex flex-row gap-4 transition-[padding] duration-500 md:w-full md:flex-col md:px-2.5',
              {
                'pt-12': isSidebarExpanded,
              }
            )}
          >
            <h2
              className={cn(
                'pointer-events-none absolute z-[0] w-full -translate-x-80 -translate-y-12 whitespace-nowrap px-3 text-2xl opacity-0 transition-[opacity,_transform] duration-500',
                { 'translate-x-0 opacity-100': isSidebarExpanded }
              )}
            >
              Others
            </h2>

            <PatchNotes
              className={cn(
                'flex h-10 w-full max-w-[2.5rem] shrink-0 items-center gap-4 overflow-hidden rounded p-2 transition-[color,_max-width] duration-500 hover:bg-white/10',
                { 'max-w-[22.5rem]': isSidebarExpanded }
              )}
            >
              <PatchNotesIcon className="h-6 w-6 shrink-0 fill-white" />
              <p
                className={cn(
                  'overflow-hidden whitespace-nowrap text-base font-medium text-white',
                  {
                    'text-white': isSidebarExpanded,
                  }
                )}
              >
                {t('Patch Notes')}
              </p>
            </PatchNotes>

            <DiscordGroup isSidebarExpanded={isSidebarExpanded} />

            <SupportUs
              className={cn(
                'flex h-10 w-full max-w-[2.5rem] shrink-0 items-center gap-4 overflow-hidden rounded p-2 transition-[color,_max-width] duration-500 hover:bg-white/10',
                { 'max-w-[22.5rem]': isSidebarExpanded }
              )}
            >
              <Heart className="h-6 w-6 shrink-0 fill-white" />
              <p
                className={cn(
                  'overflow-hidden whitespace-nowrap text-base font-medium text-white',
                  {
                    'text-white': isSidebarExpanded,
                  }
                )}
              >
                {t('Support Us')}
              </p>
            </SupportUs>
          </nav>
        </div>
      </aside>
    </>
  )
}

function NavGroup({
  list,
  isSidebarExpanded,
  title,
}: {
  list: linksList
  isSidebarExpanded: boolean
  title: string
}) {
  const pathName = usePathname()

  return (
    <nav
      className={cn(
        'relative flex flex-row gap-4 transition-[padding] duration-500 md:w-full md:flex-col md:px-2.5',
        {
          'pt-12': isSidebarExpanded,
        }
      )}
    >
      <h2
        className={cn(
          'pointer-events-none absolute z-[0] w-full -translate-x-80 -translate-y-12 whitespace-nowrap px-3 text-2xl opacity-0 transition-[opacity,_transform] duration-500',
          { 'translate-x-0 opacity-100': isSidebarExpanded }
        )}
      >
        {title}
      </h2>

      {list.map(({ href, label, Icon, isNew }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            'flex h-10 w-full relative max-w-[2.5rem] shrink-0 items-center gap-4 overflow-hidden rounded p-2 transition-[color,_max-width] duration-500 hover:bg-white/10',
            { 'max-w-[22.5rem]': isSidebarExpanded },
            { 'bg-white/10': pathName === href }
          )}
        >
          <Icon className="h-6 w-6 shrink-0 fill-white" />
          <p
            className={cn(
              'overflow-hidden whitespace-nowrap text-base font-medium text-white',
              {
                'text-white': isSidebarExpanded,
              }
            )}
          >
            {label}
          </p>
          {isNew ? (
              <span
                className={cn(
                  'ml-auto rounded bg-[#6B4E8B] px-2 py-1 text-base font-bold text-white opacity-0 transition-opacity duration-500',
                  { 'opacity-100': isSidebarExpanded }
                )}
              >
                NEW!
              </span>
          ) : null}
        </Link>
      ))}
    </nav>
  )
}

type linksList = Array<{
  href: string
  label: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  isNew: boolean
}>

const getCalculatorsLinks = (t: (key: string) => string): linksList => [
  {
    href: '/',
    label: t('Crafting Calculator'),
    Icon: Forge,
    isNew: false,
  },
  {
    href: '/xp',
    label: t('Experience Calculator'),
    Icon: EXP,
    isNew: false,
  },
  {
    href: '/constitution',
    label: t('Constitution'),
    Icon: Constitution,
    isNew: false,
  },
  {
    href: '/inner-force',
    label: t('Inner Force'),
    Icon: InnerForce,
    isNew: true,
  },
]

const getOthersLinks = (t: (key: string) => string): linksList => [
  {
    href: '/conquests',
    label: t('Conquests'),
    Icon: Conquest,
    isNew: false,
  },
  {
    href: '/maps',
    label: t('Maps'),
    Icon: Monument,
    isNew: false,
  },
  {
    href: '/magic-square-shop',
    label: t('Magic Square Shop'),
    Icon: Monument,
    isNew: false,
  },
  {
    href: '/misc',
    label: t('Miscellaneous'),
    Icon: Misc,
    isNew: false,
  },
]
