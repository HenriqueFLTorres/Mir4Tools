'use client';
import Sidebar from '@/components/global/Sidebar';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen w-full bg-black font-ubuntu'>
      <div className='fixed h-screen select-none pointer-events-none w-screen'>
        <Image
          src={'/images/main-background.webp'}
          alt=''
          fill
          className='pointer-events-none fixed left-0 top-0 overflow-hidden fill-pink-400 object-cover opacity-20'
          priority
        />
        <div className='absolute bottom-0 right-0 block h-[35rem] w-[35rem] translate-x-1/4 translate-y-1/2 rounded-full bg-primary-radial' />
        <div className='absolute bottom-0 left-0 block h-[35rem] w-[35rem] -translate-x-1/4 -translate-y-[10%] rounded-full bg-secondary-radial' />
        <div className='absolute -top-1/4 left-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-primary-radial' />
        <div className='absolute right-0 top-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-secondary-radial' />
        <div className='absolute left-0 top-0 h-full w-full bg-primary-700/50' />
      </div>
      <Sidebar />
      <div className='relative flex w-full selection:bg-primary-800 [&>div]:mx-auto [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:max-w-4xl [&>div]:flex-col [&>div]:items-center [&>div]:p-12'>
        {children}
      </div>
    </div>
  );
}
