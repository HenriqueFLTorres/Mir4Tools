'use client';

import CraftingMain from '@/components/crafting/CraftingMain';
import Navbar from '@/components/global/Navbar';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  if (router?.isFallback) {
    <h1>Data is loading</h1>;
  }

  return (
    <main className='flex relative min-w-screen h-full w-full'>
      <Navbar />
      <CraftingMain />
    </main>
  );
}
