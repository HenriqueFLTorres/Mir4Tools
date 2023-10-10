'use client'
import { MapsAtom } from '@/atoms/Maps'
import InteractiveMap from '@/components/maps/InteractiveMap'
import ManageMap from '@/components/maps/InteractiveMap/ManageMap'
import MapButton from '@/components/maps/MapButton'
import MapPoints, { navigationMaps } from '@/components/maps/MapPoints'

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

  const lastMap = mapsStack.at(-1) as mapTypes
  const isNavigationMap = navigationMaps.includes(lastMap ?? '')

  return (
    <div className="relative mx-auto flex w-full max-w-[90rem] justify-center gap-4 px-6 pt-32 selection:bg-primary-800">
      <div
        className={cn(
          'relative flex min-h-[45rem] w-auto max-w-5xl flex-col gap-4 rounded-md border-2 border-white/10 p-4 backdrop-blur-md',
          { 'w-full': isNavigationMap }
        )}
      >
        <header className="relative mb-auto mr-auto flex flex-row items-center gap-4 text-xl font-bold text-white">
          {mapsStack.map((map, index) => (
            <React.Fragment key={index}>
              <MapButton onClick={() => handleMapChange(map)}>{map}</MapButton>
              {index < mapsStack.length - 1 ? <p>{'>'}</p> : <></>}
            </React.Fragment>
          ))}
        </header>

        {isNavigationMap ? (
          <Image
            src={`/maps/${toCamelCase(lastMap)}.webp`}
            alt=""
            fill
            className={'absolute -z-10 rounded-md object-cover'}
            sizes="100%"
          />
        ) : (
          <InteractiveMap mapsStack={mapsStack} />
        )}

        <MapPoints
          lastMap={lastMap}
          onPointClick={(label) => setMapsStack((prev) => [...prev, label])}
        />
      </div>

      {isNavigationMap ? <></> : <ManageMap />}
    </div>
  )
}
