'use client'

import Exit from '@/icons/Exit'
import Hamburguer from '@/icons/Hamburguer'
import { cn } from '@/utils/classNames'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useTranslation } from '../../../../public/locales/client'
import Popover from '../../Popover'
import SettingsModal from './SettingsModal'

export default function ProfileSection() {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  const image = session?.user?.image

  return (
    <ProfileMenu>
      <button
        aria-label="Main navigation menu"
        className="flex shrink-0 items-center gap-3 rounded-full border-2 border-transparent bg-black/20 p-1.5 pr-3 transition-colors hover:border-white/10"
      >
        {image ? (
          <Image
            width={36}
            height={36}
            src={image}
            alt={'Profile image'}
            className="object-fit shrink-0 rounded-full"
          />
        ) : (
          <div
            className={cn(
              'object-fit h-9 w-9 shrink-0 rounded-full bg-black/30',
              { 'animate-pulse': isLoading }
            )}
          />
        )}

        <Hamburguer className="h-5 w-5 shrink-0 fill-white" />
      </button>
    </ProfileMenu>
  )
}

function ProfileMenu({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const { t } = useTranslation()

  const name = session?.user?.name ?? ''

  return (
    <Popover.Wrapper>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Content
        align="start"
        className="relative z-[60] rounded border border-white/10 bg-primary-400/5 p-2 backdrop-blur-lg data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow"
        sideOffset={24}
      >
        {name ? (
          <h2 className="mb-3 px-2 text-2xl font-bold">{name}</h2>
        ) : (
          <></>
        )}

        <SettingsModal />

        <button
          aria-label={
            status === 'unauthenticated'
              ? t('Log in with Google')
              : t('Log out')
          }
          onClick={async () => {
            if (status === 'unauthenticated') await signIn('google')
            else await signOut()
          }}
          className="flex w-full items-center justify-start gap-4 rounded-md px-3 py-2 font-medium text-white transition-colors hover:bg-black/20"
        >
          <Exit className="h-5 w-5 fill-white" />
          {status === 'unauthenticated'
            ? t('Log in with Google')
            : t('Log out')}
        </button>
      </Popover.Content>
    </Popover.Wrapper>
  )
}
