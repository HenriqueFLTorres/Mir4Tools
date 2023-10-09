/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Popover from '@/components/Popover'
import { rarityVariantStyles } from '@/components/crafting/ItemFrame'
import ChestNode from '@/icons/ChestNode'
import EnergyNode from '@/icons/EnergyNode'
import GatherNode from '@/icons/GatherNode'
import MiningNode from '@/icons/MiningNode'
import { cn } from '@/utils/classNames'
import { toCamelCase } from '@/utils/index'
import Image from 'next/image'
import { useState } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import Button from '../Button'
import RarityToggle from '../RarityToggle'

const nodeSizeOffset = 10

export default function InteractiveMap({ mapsStack }: { mapsStack: string[] }) {
  const [currentMapPoints, setCurrentMapPoints] = useState<{
    [key in string]: {
      pos: [number, number]
      rarity: RarityTypes
      type: nodeTypes
    }
  }>({})
  const [zoom, setZoom] = useState(1)
  const nodeScale = 1.5 * Math.exp(-zoom / 5)

  const handleNodeDeletion = (key: string) => {
    setCurrentMapPoints((prev) => {
      const newObj = structuredClone(prev)
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete newObj[key]

      return newObj
    })
  }

  const handleNodeCreation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (e.currentTarget !== e.target) return

    const x =
      (e.nativeEvent.offsetX - nodeSizeOffset) / e.currentTarget.clientWidth
    const y =
      (e.nativeEvent.offsetY - nodeSizeOffset) / e.currentTarget.clientHeight

    const posX = x * 100
    const posY = y * 100
    const id = Math.random().toString(16).slice(2)

    setCurrentMapPoints((prev) => ({
      ...prev,
      [id]: {
        pos: [Number(posX), Number(posY)],
        rarity: 'Rare',
        type: 'energy',
      },
    }))
  }

  return (
    <TransformWrapper
      wheel={{ smoothStep: 0.005 }}
      smooth
      doubleClick={{ disabled: true }}
      onZoom={(e) => setZoom(e.state.scale)}
    >
      {/* <Controls /> */}
      <TransformComponent>
        <div
          onContextMenu={handleNodeCreation}
          className="flex items-center justify-center"
        >
          <Image
            src={`/maps/${toCamelCase(mapsStack.at(-1))}.webp`}
            alt=""
            width={600}
            height={600}
            className={'pointer-events-none select-none object-contain'}
            sizes="100%"
          />
          {Object.entries(currentMapPoints).map(
            ([key, { pos, type, rarity }]) => {
              const NodeIcon = nodeTypeToIcon[type]

              return (
                <Popover.Wrapper key={key}>
                  <Popover.Trigger
                    className={cn(
                      'absolute flex h-5 w-5 origin-center items-center justify-center rounded-full border-2 p-0.5 transition-[transform,colors]',
                      rarityVariantStyles[rarity]
                    )}
                    onContextMenu={(e) => {
                      e.preventDefault()
                      handleNodeDeletion(key)
                    }}
                    style={{
                      left: `${pos[0]}%`,
                      top: `${pos[1]}%`,
                      transform: `scale(${nodeScale})`,
                    }}
                  >
                    <NodeIcon className="h-full w-full shrink-0" />
                  </Popover.Trigger>
                  <Popover.Content
                    sideOffset={8}
                    alignOffset={8}
                    className="flex flex-col gap-2 rounded-md border border-primary-500 bg-primary-600 p-2"
                  >
                    <p className="text-center font-main text-xs text-white opacity-60">
                      Press ESC to exit
                    </p>

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
      </TransformComponent>
    </TransformWrapper>
  )
}

export const mapNodeTypes = ['energy', 'mining', 'chest', 'gather'] as const
export const nodeTypeToIcon: {
  [key in nodeTypes]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
} = {
  chest: ChestNode,
  energy: EnergyNode,
  gather: GatherNode,
  mining: MiningNode,
}
