'use client'

import { showInventoryAtom } from '@/atoms/Inventory'
import Inventory from '@/components/crafting/Inventory'
import Backpack from '@/icons/Backpack'
import * as Dialog from '@radix-ui/react-dialog'
import { useAtom } from 'jotai'

export default function CraftingNavExtesion() {
  const [showInventory, setShowInventory] = useAtom(showInventoryAtom)

  return (
    <div className="flex items-center gap-4">
      <Dialog.Root open={showInventory}>
        <Dialog.Trigger
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
    </div>
  )
}
