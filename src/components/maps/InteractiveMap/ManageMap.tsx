'use client'
import {
  MapsAtom,
  currentMapPointsAtom,
  rarityVisibilityAtom,
} from '@/atoms/Maps'
import Button from '@/components/maps/Button'
import { mapNodeTypes, nodeTypeToIcon } from '@/components/maps/InteractiveMap'
import RarityToggle from '@/components/maps/RarityToggle'

import Reset from '@/icons/Reset'
import { cn } from '@/utils/classNames'
import { toCamelCase } from '@/utils/index'
import { useAtom, useAtomValue } from 'jotai'

export default function ManageMap() {
  const mapsStack = useAtomValue(MapsAtom)
  const [rarityVisibility, setRarityVisibility] = useAtom(rarityVisibilityAtom)
  const [currentMapPoints, setCurrentMapPoints] = useAtom(currentMapPointsAtom)

  const lastMap = mapsStack.at(-1) as mapTypes

  return (
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
          const hasSomeRarity = Object.values(rarityVisibility[nodeType]).some(
            (val) => val
          )
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
          className="flex justify-center rounded bg-[#368D6E] p-3 text-xs font-extrabold text-white"
        >
          Export map as JSON
        </a>
      </footer>
    </div>
  )
}
