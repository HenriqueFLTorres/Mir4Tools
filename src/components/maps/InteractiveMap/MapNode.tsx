import { currentMapPointsAtom } from '@/atoms/Maps'
import Popover from '@/components/Popover'
import { rarityVariantStyles } from '@/components/crafting/ItemFrame'
import { cn } from '@/utils/classNames'
import { useSetAtom } from 'jotai'
import { mapNodeTypes, nodeTypeToIcon } from '.'
import Button from '../Button'
import RarityToggle from '../RarityToggle'
export default function MapNode({
  id,
  pos,
  type,
  rarity,
  nodeScale,
  handleNodeDeletion,
}: {
  id: string
  type: nodeTypes
  rarity: RarityTypes
  pos: [number, number]
  nodeScale: number
  handleNodeDeletion: () => void
}) {
  const setCurrentMapPoints = useSetAtom(currentMapPointsAtom)

  const NodeIcon = nodeTypeToIcon[type]

  return (
    <Popover.Wrapper>
      <Popover.Trigger
        className={cn(
          'absolute flex h-5 w-5 origin-center items-center justify-center rounded-full border-2 p-0.5 transition-[transform,colors]',
          rarityVariantStyles[rarity]
        )}
        onContextMenu={(e) => {
          e.preventDefault()
          handleNodeDeletion()
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
                    [id]: {
                      ...prev[id],
                      type: node,
                    },
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
                [id]: {
                  ...prev[id],
                  rarity,
                },
              }))
            }
          />
        </div>

        <button
          aria-label="Delete Node"
          onClick={handleNodeDeletion}
          className="flex rounded bg-csred-400 p-2 text-sm font-extrabold text-white opacity-80 transition-opacity hover:opacity-100"
        >
          Delete Node
        </button>
      </Popover.Content>
    </Popover.Wrapper>
  )
}
