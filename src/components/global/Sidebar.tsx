'use client';

import Chevron from '@/icons/Chevron';
import EXP from '@/icons/EXP';
import Exit from '@/icons/Exit';
import Forge from '@/icons/Forge';
import Heart from '@/icons/Heart';
import Settings from '@/icons/Settings';
import { cn } from '@/utils/classNames';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-50 flex h-screen w-96 flex-col gap-4 bg-gradient-to-tl from-[#72578f85] to-[#ffffff1a] p-6 shadow-md backdrop-blur-xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:will-change-transform',
        { ['-translate-x-full']: !isOpen }
      )}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn('absolute -right-12 rounded-md bg-black/20 hover:bg-black/40 motion-safe:transition-colors p-2')}
      >
        <Chevron
          className={cn(
            'motion-safe:transition-transform motion-safe:duration-300 motion-safe:will-change-transform',
            { ['rotate-180']: !isOpen }
          )}
        />
      </button>

      <SidebarButton Icon={Forge} title='Crafting Calculator ' href='/' />
      <SidebarButton Icon={EXP} title='Experience Calculator' href='/xp' />

      <SidebarButton
        Icon={Heart}
        title='Support Us!'
        href='/'
        className='mt-auto'
      />
      <SidebarButton
        Icon={Settings}
        title='Manage Settings'
        href='/'
        className='mb-2'
      />

      <ProfileSection />
    </aside>
  );
}

function SidebarButton({
  Icon,
  title,
  href,
  className,
  ...props
}: {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  href: string;
  className?: string;
} & LinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'flex h-12 items-center gap-4 rounded-md bg-black/20 px-4 py-2 text-base font-medium text-white hover:bg-black/40 motion-safe:transition-colors',
        className
      )}
      {...props}
    >
      <Icon className='flex h-6 w-6 items-center justify-center' /> {title}
    </Link>
  );
}

function ProfileSection() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';

  if (status === 'unauthenticated') return <ProfileLogin />;

  const image = session?.user?.image;
  const name = session?.user?.name ?? '';

  return !!session || isLoading ? (
    <footer className='flex items-center gap-4'>
      {image ? (
        <Image
          width={48}
          height={48}
          src={image}
          alt={name}
          className='object-fit shrink-0 rounded-full'
        />
      ) : (
        <div
          className={cn(
            'object-fit h-12 w-12 shrink-0 rounded-full bg-black/40',
            { ['motion-safe:animate-pulse']: isLoading }
          )}
        />
      )}

      {isLoading ? (
        <div
          className={cn('h-6 w-full max-w-[10rem] rounded-full bg-black/40', {
            ['motion-safe:animate-pulse']: isLoading,
          })}
        />
      ) : (
        <h2 className='truncate text-2xl font-bold' title={name}>
          {name}
        </h2>
      )}

      <button
        onClick={() => signOut()}
        disabled={isLoading}
        className='ml-auto rounded-md bg-black/20 hover:bg-black/40 motion-safe:transition-colors p-2'
      >
        <Exit />
      </button>
    </footer>
  ) : (
    <></>
  );
}

function ProfileLogin() {
  return (
    <footer className='flex items-center gap-4'>
      <button
        onClick={() => signIn('google')}
        className='ml-auto w-full rounded-md bg-black/20 hover:bg-black/40 motion-safe:transition-colors p-2 font-medium text-white'
      >
        Log in with Google
      </button>
    </footer>
  );
}
