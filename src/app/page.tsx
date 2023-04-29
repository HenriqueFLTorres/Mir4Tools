'use client';

import CraftingMain from '@/components/crafting/CraftingMain';
import Navbar from '@/components/global/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  if (router?.isFallback) {
    <h1>Data is loading</h1>;
  }

  return (
    <body className='flex min-h-screen w-full bg-primary-900 font-ubuntu'>
      <div className='pointer-events-none fixed left-0 top-0 -z-10 flex h-screen w-full justify-center overflow-hidden'>
        <Image
          src={'/images/main-background.webp'}
          alt=''
          width={1946}
          height={829}
          className='pointer-events-none absolute top-0 min-w-[120rem] shrink-0 overflow-hidden object-contain opacity-20 blur-lg'
          quality={10}
          priority
        />
      </div>
      <main className='min-w-screen relative flex h-full w-full'>
        <Navbar />
        <CraftingMain />
      </main>
    </body>
  );
}
