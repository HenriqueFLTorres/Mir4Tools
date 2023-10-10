'use client'
import {
  MapsAtom,
  currentMapPointsAtom,
  rarityVisibilityAtom,
} from '@/atoms/Maps'
import Button from '@/components/maps/Button'
import InteractiveMap, {
  mapNodeTypes,
  nodeTypeToIcon,
} from '@/components/maps/InteractiveMap'
import MapButton from '@/components/maps/MapButton'
import MapPoints, { navigationMaps } from '@/components/maps/MapPoints'
import RarityToggle from '@/components/maps/RarityToggle'

import Reset from '@/icons/Reset'
import { cn } from '@/utils/classNames'
import { toCamelCase } from '@/utils/index'
import { useAtom } from 'jotai'
import Image from 'next/image'
import React from 'react'

export default function Maps() {
  const [mapsStack, setMapsStack] = useAtom(MapsAtom)
  const [rarityVisibility, setRarityVisibility] = useAtom(rarityVisibilityAtom)
  const [currentMapPoints, setCurrentMapPoints] = useAtom(currentMapPointsAtom)

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

      {isNavigationMap ? (
        <></>
      ) : (
        <div className="flex h-full max-w-md flex-col gap-4 rounded-md border border-primary-500 bg-primary-600 p-4 pb-6 text-sm font-light text-white">
          <Button
            aria-label="Reset map nodes"
            onClick={() => setCurrentMapPoints({})}
            className="ml-auto"
          >
            <Reset />
          </Button>

          <h2 className="text-xl">Visibility Settings</h2>

          <ul className="flex flex-col gap-4">
            {mapNodeTypes.map((nodeType) => {
              const hasSomeRarity = Object.values(
                rarityVisibility[nodeType]
              ).some((val) => val)
              const NodeIcon = nodeTypeToIcon[nodeType]

              return (
                <li key={nodeType} className="flex flex-row items-center gap-4">
                  <Button
                    className={cn('mr-2 bg-white/5', {
                      'bg-white/10': hasSomeRarity,
                    })}
                    onClick={() =>
                      setRarityVisibility((prev) => ({
                        ...prev,
                        [nodeType]: hasSomeRarity
                          ? {
                              Legendary: false,
                              Epic: false,
                              Rare: false,
                              Uncommon: false,
                              Common: false,
                            }
                          : {
                              Legendary: true,
                              Epic: true,
                              Rare: true,
                              Uncommon: true,
                              Common: true,
                            },
                      }))
                    }
                  >
                    <NodeIcon />
                  </Button>
                  <RarityToggle
                    isActive={rarityVisibility[nodeType]}
                    action={(rarity) =>
                      setRarityVisibility((prev) => ({
                        ...prev,
                        [nodeType]: {
                          ...prev[nodeType],
                          [rarity]: !prev[nodeType][rarity],
                        },
                      }))
                    }
                  />
                </li>
              )
            })}
          </ul>

          <footer className="mt-auto flex flex-col gap-4">
            {/* <button
              className={
                'flex w-full cursor-pointer items-center justify-center rounded border-2 border-primary-400 bg-primary-500/50 p-3 font-medium leading-none transition-colors hover:bg-primary-500 focus:border-white focus:outline-none'
              }
            >
              Import map
            </button> */}

            <a
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(currentMapPoints, null, 2)
              )}`}
              download={`${toCamelCase(lastMap)}.json`}
              className="flex rounded bg-[#368D6E] justify-center p-3 text-xs font-extrabold text-white"
            >
              Export map as JSON
            </a>
          </footer>
        </div>
      )}
    </div>
  )
}
