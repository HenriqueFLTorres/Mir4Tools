'use client';

import CraftingMain from '@/components/crafting/CraftingMain';
import Navbar from '@/components/global/Navbar';

export default function Home() {
  return (
    <main className='flex relative min-w-screen h-full w-full'>
      <Navbar />
      <CraftingMain />
    </main>
  );
}
