'use client'
import { MapsAtom } from '@/atoms/Maps'
import { cn } from '@/utils/classNames'
import { useAtomValue } from 'jotai'
import Image from 'next/image'
import { useState } from 'react'

export default function MapsBackground() {
  const [isLoading, setLoading] = useState(true)
  const mapsStack = useAtomValue(MapsAtom)
  const currentMapPath = mapsStack.at(1)?.toLowerCase().replace(/\s/g, '_')

  return (
    <div className="pointer-events-none fixed h-screen w-screen select-none bg-primary-900/50">
      <Image
        src={`/maps/${currentMapPath ?? 'global_map'}.webp`}
        alt=""
        fill
        className={cn(
          'pointer-events-none fixed left-0 top-0 overflow-hidden object-cover opacity-20 blur-none transition-[filter] duration-700 ease-in-out',
          { 'blur-2xl': isLoading }
        )}
        sizes="100vh"
        placeholder="blur"
        blurDataURL="main-background-blur.png"
        onLoadingComplete={() => {
          setLoading(false)
        }}
      />
      <div className="absolute bottom-0 right-0 block h-[35rem] w-[35rem] translate-x-1/4 translate-y-1/2 rounded-full bg-primary-radial" />
      <div className="absolute bottom-0 left-0 block h-[35rem] w-[35rem] -translate-x-1/4 -translate-y-[10%] rounded-full bg-secondary-radial" />
      <div className="absolute -top-1/4 left-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-primary-radial" />
      <div className="absolute right-0 top-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-secondary-radial" />
      <div className="absolute left-0 top-0 h-full w-full bg-primary-700/30" />
    </div>
  )
}
