'use client'

import { showInventoryAtom } from '@/atoms/Inventory'
import { WalkthroughAtom } from '@/atoms/Walkthrough'
import Inventory from '@/components/crafting/Inventory'
import Backpack from '@/icons/Backpack'
import Tutorial from '@/icons/Tutorial'
import * as Dialog from '@radix-ui/react-dialog'
import { useAtom, useSetAtom } from 'jotai'

export default function CraftingNavExtesion() {
  const [showInventory, setShowInventory] = useAtom(showInventoryAtom)
  const setWalk = useSetAtom(WalkthroughAtom)

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
      <button
        onClick={() => {
          setWalk({
            stage: 0,
            isActive: true,
            stages: [
              {
                id: '#mainItemFrame',
                title: 'Select your item recipe',
                content:
                  "That's the main item frame where you can control the selected item, after selecting it you'll see the recipe necessary for the craft of this item",
              },
              {
                id: '#recipeSubitems',
                title: 'Recipe cost',
                content:
                  "Here you can see the needed ammount of items for the item you've selected",
              },
              {
                id: '#recipeSubitems>*>*',
                title: 'Recipe item',
                content:
                  'You can show your owned ammount by customizing it through the manage settings panel by clicking on your profile',
              },
              {
                id: '#totalCostPanel',
                title: 'Total cost panel',
                content:
                  'Left is the items with rarity and on the right the additional items',
              },
            ],
          })
        }}
        className="w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors"
        aria-label="Inventory"
      >
        <Tutorial className="inline-block w-6 fill-white" />
      </button>
    </div>
  )
}
