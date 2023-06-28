'use client'

import { showInventoryAtom } from '@/atoms/Inventory'
import { WalkthroughAtom } from '@/atoms/Walkthrough'
import Inventory from '@/components/crafting/Inventory'
import { CraftingWalkthroughStages } from '@/data/WalkthroughStages'
import Backpack from '@/icons/Backpack'
import Tutorial from '@/icons/Tutorial'
import { cn } from '@/utils/classNames'
import * as Dialog from '@radix-ui/react-dialog'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useTranslation } from '../../../public/locales/client'
import { retrieveWalkthroughFromStorage } from '@/utils/index'

export default function CraftingNavExtesion() {
  const { t } = useTranslation()
  const [showInventory, setShowInventory] = useAtom(showInventoryAtom)
  const [walk, setWalk] = useAtom(WalkthroughAtom)

  let walkthroughData = retrieveWalkthroughFromStorage()

  useEffect(() => {
    walkthroughData = retrieveWalkthroughFromStorage()
  }, [walk.isActive])

  return (
    <div className="flex items-center gap-4">
      <Dialog.Root open={showInventory}>
        <Dialog.Trigger
          id="inventoryTrigger"
          onClick={() => {
            setShowInventory((prev) => !prev)
          }}
          className="w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors"
          aria-label="Inventory"
        >
          <Backpack className="inline-block h-7 fill-white" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content className="custom-scroll fixed left-0 top-0 z-50 flex h-screen w-screen flex-col overflow-y-auto overflow-x-hidden bg-primary-800/80 p-14 backdrop-blur data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow">
            <Inventory />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <button
        onClick={() => {
          setWalk({
            stage: 0,
            isActive: true,
            stages: CraftingWalkthroughStages(t),
            type: 'crafting',
          })
        }}
        className={cn(
          'relative w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors',
          {
            'before:absolute before:block before:h-8 before:w-8 before:animate-ping before:rounded-full before:bg-white/50 before:content-[""]':
              !walkthroughData.crafting,
          }
        )}
        aria-label="Walkthrough"
      >
        <div
          className={cn({
            'animate-vibrate': !walkthroughData.crafting,
          })}
        >
          <Tutorial className={'inline-block w-6 fill-white'} />
        </div>
      </button>
    </div>
  )
}
