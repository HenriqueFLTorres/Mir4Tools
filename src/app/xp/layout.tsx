'use client';
import Sidebar from '@/components/global/Sidebar';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen w-full bg-black font-ubuntu'>
      <Image
        src={'/images/main-background.webp'}
        alt=''
        fill
        className='pointer-events-none fixed left-0 top-0 overflow-hidden object-cover opacity-40 blur-sm'
        priority
      />
      <Sidebar />
      <div className='relative flex w-full selection:bg-neutral-600 [&>div]:mx-auto [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:max-w-4xl [&>div]:flex-col [&>div]:items-center [&>div]:p-12'>
        {children}
      </div>
    </div>
  );
}
