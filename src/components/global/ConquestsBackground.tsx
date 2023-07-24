'use client'
import { cn } from '@/utils/classNames'
import Image from 'next/image'
import { useState } from 'react'

export default function ConquestsBackground() {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="pointer-events-none fixed bg-black h-screen w-screen select-none">
      <Image
        src={'/conquests/main.png'}
        alt=""
        fill
        className={cn(
          'pointer-events-none fixed left-0 top-0 overflow-hidden object-cover opacity-20 blur-md motion-safe:transition-[filter] motion-safe:duration-700 motion-safe:ease-in-out',
          { 'blur-2xl': isLoading }
        )}
        placeholder="blur"
        sizes="100vh"
        blurDataURL="main-blur.png"
        onLoadingComplete={() => {
          setLoading(false)
        }}
      />
      <div className="absolute bottom-0 right-0 block h-[35rem] w-[35rem] translate-x-1/4 translate-y-1/2 rounded-full bg-primary-radial" />
      <div className="absolute bottom-0 left-0 block h-[35rem] w-[35rem] -translate-x-1/4 -translate-y-[10%] rounded-full bg-secondary-radial" />
      <div className="absolute -top-1/4 left-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-primary-radial" />
      <div className="absolute right-0 top-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-secondary-radial" />
      <div className="absolute left-0 top-0 h-full w-full bg-primary-500/50" />
    </div>
  )
}
