'use client';

import CraftingMain from '@/components/crafting/CraftingMain';
import Navbar from '@/components/global/Navbar';
import Sidebar from '@/components/global/Sidebar';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  if (router?.isFallback) {
    <h1>Data is loading</h1>;
  }

  return (
    <div className='flex min-h-screen w-full bg-primary-900 font-ubuntu'>
      <Image
        src={'/images/main-background.webp'}
        alt=''
        fill
        className='blur-lg fixed pointer-events-none overflow-hidden object-cover opacity-20'
        quality={10}
        priority
      />
      <main className='min-w-screen relative flex h-full w-full'>
        <Navbar />
        <Sidebar />
        <CraftingMain />
      </main>
    </div>
  );
}
