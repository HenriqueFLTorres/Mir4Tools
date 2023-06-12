'use client'

import { showInventoryAtom } from '@/atoms/Inventory'
import { SettingsAtom } from '@/atoms/Settings'
import Popover from '@/components/Popover'
import ToggleFilter from '@/components/ToggleFilter'
import Inventory from '@/components/crafting/Inventory'
import Backpack from '@/icons/Backpack'
import Settings from '@/icons/Settings'
import * as Dialog from '@radix-ui/react-dialog'
import { useAtom } from 'jotai'

export default function CraftingNavExtesion() {
  const [settings, setSettings] = useAtom(SettingsAtom)
  const [showInventory, setShowInventory] = useAtom(showInventoryAtom)

  const handleFilterChange = (option: RarityTypes) => {
    if (settings.displayRarity.includes(option)) {
      setSettings((prev) => ({
        ...prev,
        displayRarity: prev.displayRarity.filter((r) => r !== option),
      }))
      return
    }

    setSettings((prev) => ({
      ...prev,
      displayRarity: [...prev.displayRarity, option],
    }))
  }

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

      <Popover.Wrapper>
        <Popover.Trigger
          className="w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors"
          aria-label="Settings"
        >
          <Settings className="h-7 fill-white" />
        </Popover.Trigger>
        <Popover.Content
          align="end"
          className="min-w-[15rem] rounded-lg bg-primary-800 p-2 shadow-md data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow"
          sideOffset={24}
        >
          <h2 className="mx-2 mb-4">Resources Filter</h2>

          <ul className="flex flex-col gap-2">
            {filterOptions.map((option) => (
              <ToggleFilter
                key={option}
                className="w-full items-center justify-between rounded-md px-3 py-2 font-normal text-white disabled:opacity-60 data-[active=true]:bg-primary-700 motion-safe:transition-colors"
                value={settings.displayRarity.includes(option)}
                onClick={() => {
                  handleFilterChange(option)
                }}
                disabled={option === 'Uncommon' || option === 'Common'}
              >
                {option}
              </ToggleFilter>
            ))}
          </ul>

          <hr className="my-4 rounded-full border-2 border-primary-400" />

          <h2 className="mx-2 mb-4">Advanced View</h2>

          <ToggleFilter
            className="w-full items-center justify-between rounded-md px-3 py-2 font-normal text-white data-[active=true]:bg-primary-700 motion-safe:transition-colors"
            value={settings.showOwnedItems}
            onClick={() => {
              setSettings((prev) => ({
                ...prev,
                showOwnedItems: !prev.showOwnedItems,
              }))
            }}
          >
            Show Owned Items
          </ToggleFilter>
        </Popover.Content>
      </Popover.Wrapper>
    </div>
  )
}

const filterOptions: RarityTypes[] = ['Epic', 'Rare', 'Uncommon', 'Common']
