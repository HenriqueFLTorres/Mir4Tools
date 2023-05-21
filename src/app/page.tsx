'use client'

import CraftingMain from '@/components/crafting/CraftingMain'
import MainBackground from '@/components/global/MainBackground'
import Navbar from '@/components/global/Navbar'
import Sidebar from '@/components/global/Sidebar'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  if (router?.isFallback) {
    return <h1>Data is loading</h1>
  }

  return (
    <div className="flex min-h-screen w-full bg-primary-900 font-ubuntu">
      <MainBackground />
      <main className="min-w-screen relative flex h-full w-full">
        <Navbar />
        <Sidebar />
        <CraftingMain />
      </main>
    </div>
  )
}
