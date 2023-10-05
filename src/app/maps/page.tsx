'use client'
import {
  MapsAtom,
  rarityVisibilityAtom,
  type rarityVibilityObject,
} from '@/atoms/Maps'
import Popover from '@/components/Popover'
import { rarityVariantStyles } from '@/components/crafting/ItemFrame'
import ChestNode from '@/icons/ChestNode'
import EnergyNode from '@/icons/EnergyNode'
import GatherNode from '@/icons/GatherNode'
import MiningNode from '@/icons/MiningNode'
import Reset from '@/icons/Reset'
import { cn } from '@/utils/classNames'
import { toCamelCase } from '@/utils/index'
import { useAtom } from 'jotai'
import Image from 'next/image'
import React, { useState, type HTMLAttributes } from 'react'

export const navigationMaps = ['Global Map', 'Snake Pit Area']

export default function Maps() {
  const [mapsStack, setMapsStack] = useAtom(MapsAtom)
  const [rarityVisibility, setRarityVisibility] = useAtom(rarityVisibilityAtom)
  const [currentMapPoints, setCurrentMapPoints] = useState<{
    [key in string]: {
      pos: [number, number]
      rarity: RarityTypes
      type: nodeTypes
    }
  }>({})

  console.log(currentMapPoints)

  const handleMapChange = (selected: string) => {
    const results = [...mapsStack]

    // remove maps until the selected
    for (let mapIndex = mapsStack.length - 1; mapIndex >= 0; mapIndex--) {
      if (results.at(mapIndex) !== selected) results.pop()
      else break
    }

    setMapsStack(results)
  }

  const handleNodeDeletion = (key: string) => {
    setCurrentMapPoints((prev) => {
      const newObj = structuredClone(prev)
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete newObj[key]

      return newObj
    })
  }

  const isNavigationMap = navigationMaps.includes(mapsStack.at(-1) ?? '')

  return (
    <div className="relative mx-auto flex w-full max-w-[90rem] justify-center gap-4 px-6 pt-32 selection:bg-primary-800">
      <div
        className={cn(
          'relative flex w-auto max-w-5xl min-h-[45rem] flex-col gap-4 rounded-md border-2 border-white/10 p-4 backdrop-blur-md',
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
            src={`/maps/${toCamelCase(mapsStack.at(-1))}.webp`}
            alt=""
            fill
            className={'absolute -z-10 rounded-md object-cover'}
            sizes="100%"
          />
        ) : (
          <div
            className="relative flex items-center justify-center"
            onClick={(e) => {
              if (e.currentTarget !== e.target) return

              const x = e.nativeEvent.layerX / e.currentTarget.clientWidth
              const y = e.nativeEvent.layerY / e.currentTarget.clientHeight

              const posX = (x * 100).toFixed(2)
              const posY = (y * 100).toFixed(2)
              const id = Math.random().toString(16).slice(2)
              console.log(posX, posY)
              console.dir(e)

              setCurrentMapPoints((prev) => ({
                ...prev,
                [id]: { pos: [posX, posY], rarity: 'Rare', type: 'energy' },
              }))
            }}
          >
            <Image
              src={`/maps/${toCamelCase(mapsStack.at(-1))}.webp`}
              alt=""
              width={600}
              height={600}
              className={'pointer-events-none object-contain'}
              sizes="100%"
            />
            {Object.entries(currentMapPoints).map(
              ([key, { pos, type, rarity }]) => {
                const NodeIcon = nodeTypeToIcon[type]

                return (
                  <Popover.Wrapper key={key}>
                    <Popover.Trigger
                      className={cn(
                        'absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-[transform,colors] hover:scale-150',
                        rarityVariantStyles[rarity]
                      )}
                      style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
                    >
                      <NodeIcon className="h-3 w-3" />
                    </Popover.Trigger>
                    <Popover.Content className="flex flex-col gap-2 rounded-md border border-primary-500 bg-primary-600 p-2">
                      <div className="flex flex-row gap-2">
                        {mapNodeTypes.map((node) => {
                          const TypeIcon = nodeTypeToIcon[node]

                          return (
                            <Button
                              key={node}
                              onClick={() =>
                                setCurrentMapPoints((prev) => ({
                                  ...prev,
                                  [key]: { ...prev[key], type: node },
                                }))
                              }
                              className="h-12 w-12 p-1"
                            >
                              <TypeIcon />
                            </Button>
                          )
                        })}
                      </div>

                      <div className="flex justify-between gap-2 [&>button]:h-9 [&>button]:w-9">
                        <RarityToggle
                          action={(rarity) =>
                            setCurrentMapPoints((prev) => ({
                              ...prev,
                              [key]: { ...prev[key], rarity },
                            }))
                          }
                        />
                      </div>

                      <button
                        aria-label="Delete Node"
                        onClick={() => handleNodeDeletion(key)}
                        className="flex rounded bg-csred-400 p-2 text-sm font-extrabold text-white opacity-80 transition-opacity hover:opacity-100"
                      >
                        Delete Node
                      </button>
                    </Popover.Content>
                  </Popover.Wrapper>
                )
              }
            )}
          </div>
        )}

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

      {isNavigationMap ? (
        <></>
      ) : (
        <div className="flex h-full max-w-md flex-col gap-4 rounded-md border border-primary-500 bg-primary-600 p-4 pb-6 text-sm font-light text-white">
          <Button className="ml-auto">
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
            <button
              className={
                'flex w-full cursor-pointer items-center justify-center rounded border-2 border-primary-400 bg-primary-500/50 p-3 font-medium leading-none transition-colors hover:bg-primary-500 focus:border-white focus:outline-none'
              }
            >
              Import map
            </button>

            <button className="flex rounded bg-[#368D6E] p-3 text-xs font-extrabold text-white">
              Export map as JSON
            </button>
          </footer>
        </div>
      )}
    </div>
  )
}

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded bg-white/10 p-2 transition-colors hover:bg-white/20',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const RarityToggle = ({
  isActive = {
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  action,
}: {
  isActive?: rarityVibilityObject
  action: (rarity: RarityTypes) => void
}) => {
  return (
    <>
      {rarities.map((rarity) => (
        <button
          key={rarity}
          className={cn(
            'h-8 w-8 rounded border opacity-40 transition-opacity',
            rarityVariantStyles[rarity],
            { 'opacity-100': isActive[rarity] }
          )}
          onClick={() => action(rarity)}
        />
      ))}
    </>
  )
}

function MapButton({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLButtonElement>) {
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

const rarities: RarityTypes[] = [
  'Legendary',
  'Epic',
  'Rare',
  'Uncommon',
  'Common',
]
const mapNodeTypes = ['energy', 'mining', 'chest', 'gather'] as const
type nodeTypes = (typeof mapNodeTypes)[number]
const nodeTypeToIcon: {
  [key in nodeTypes]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
} = {
  chest: ChestNode,
  energy: EnergyNode,
  gather: GatherNode,
  mining: MiningNode,
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
    label: "Sinner's Shrine",
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
