'use client'
import { MapsAtom } from '@/atoms/Maps'
import { cn } from '@/utils/classNames'
import { toCamelCase } from '@/utils/index'
import { useAtom } from 'jotai'
import Image from 'next/image'
import React from 'react'

export default function Maps() {
  const [mapsStack, setMapsStack] = useAtom(MapsAtom)

  const handleMapChange = (selected: string) => {
    const results = [...mapsStack]

    // remove maps until the selected
    for (let mapIndex = mapsStack.length - 1; mapIndex >= 0; mapIndex--) {
      if (results.at(mapIndex) !== selected) results.pop()
      else break
    }

    setMapsStack(results)
  }

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[90rem] flex-col items-center gap-8 px-6 pt-32 selection:bg-primary-800">
      <div className="relative flex min-h-[40rem] w-full max-w-5xl items-center justify-center gap-4 rounded-md border-2 border-white/10 backdrop-blur-md">
        <Image
          src={`/maps/${toCamelCase(mapsStack.at(-1))}.webp`}
          alt=""
          fill
          className={'absolute -z-10 rounded-md object-cover'}
          sizes="100%"
        />

        <header className="absolute top-4 left-4 flex flex-row items-center gap-4 text-xl font-bold text-white">
          {mapsStack.map((map, index) => (
            <React.Fragment key={index}>
              <MapButton onClick={() => handleMapChange(map)}>{map}</MapButton>
              {index < mapsStack.length - 1 ? <p>{'>'}</p> : <></>}
            </React.Fragment>
          ))}
        </header>

        {MapPoints[mapsStack.at(-1)]?.map(({ label, pos }, index) => (
          <label
            key={index}
            className="group absolute flex -translate-x-1/2 -translate-y-[calc(100%-1rem)] cursor-pointer flex-col items-center gap-2 p-2"
            style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
          >
            <p className="text-lg font-medium text-white drop-shadow-lg transition-transform group-hover:-translate-y-2">
              {label}
            </p>
            <button
              onClick={() => setMapsStack((prev) => [...prev, label])}
              className="h-5 w-5 rounded-full border-2 border-primary-400 bg-primary-700/40 transition-transform group-hover:scale-150"
            ></button>
          </label>
        ))}
      </div>
    </div>
  )
}

function MapButton({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'rounded px-4 py-3 text-xl font-bold text-white transition-colors hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const GlobalMapPoints: Array<{ label: string; pos: [number, number] }> = [
  {
    label: 'Bicheon Area',
    pos: [44, 72],
  },
  {
    label: 'Snake Pit Area',
    pos: [40, 46],
  },
  {
    label: 'Spiritual Center Area',
    pos: [22, 41.5],
  },
  {
    label: 'Sabuk Area',
    pos: [59, 40],
  },
  {
    label: 'Sabuk Area',
    pos: [69.2, 54],
  },
  {
    label: 'Snowfield Area',
    pos: [67, 25.5],
  },
]

const SnakePitMapPoints: Array<{ label: string; pos: [number, number] }> = [
  {
    label: 'Death George',
    pos: [14, 41],
  },
  {
    label: 'Snake Valley',
    pos: [25.5, 49],
  },
  {
    label: 'Snake Pit Labyrinth',
    pos: [27, 71],
  },
  {
    label: 'Abandoned Mine',
    pos: [38, 34],
  },
  {
    label: 'Abandoned Mine Labyrinth',
    pos: [59, 36],
  },
  {
    label: 'Snake Pit',
    pos: [51.5, 57],
  },
  {
    label: 'Sinner\'s Shrine',
    pos: [80.5, 35],
  },
  {
    label: 'Secret Mine',
    pos: [85, 52],
  },
  {
    label: 'Viberbeast Plain',
    pos: [70.5, 74],
  },
]

const MapPoints = {
  'Global Map': GlobalMapPoints,
  'Snake Pit Area': SnakePitMapPoints,
}
