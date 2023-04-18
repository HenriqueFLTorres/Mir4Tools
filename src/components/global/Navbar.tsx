'use client';

import { showInventoryAtom } from '@/atoms/Inventory';
import { SettingsAtom } from '@/atoms/Settings';
import Popover from '@/components/Popover';
import ToggleFilter from '@/components/ToggleFilter';
import Inventory from '@/components/crafting/Inventory';
import Backpack from '@/icons/Backpack';
import Settings from '@/icons/Settings';
import { useAtom } from 'jotai';

export default function Navbar() {
  const [settings, setSettings] = useAtom(SettingsAtom);
  const [showInventory, setShowInventory] = useAtom(showInventoryAtom);

  const handleFilterChange = (option: RarityTypes) => {
    if (settings.displayRarity.includes(option)) {
      return setSettings((prev) => ({
        ...prev,
        displayRarity: prev.displayRarity.filter((r) => r !== option),
      }));
    }

    setSettings((prev) => ({
      ...prev,
      displayRarity: [...prev.displayRarity, option],
    }));
  };

  return (
    <nav className='fixed flex h-max w-full flex-row items-center justify-end gap-4 p-4'>
      <button
        onClick={() => setShowInventory((prev) => !prev)}
        className='w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors'
      >
        <Backpack className='inline-block h-8 fill-white' />
      </button>

      {showInventory ? <Inventory /> : <></>}

      <Popover.Wrapper>
        <Popover.Trigger className='w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors'>
          <Settings className='h-8 fill-white' />
        </Popover.Trigger>
        <Popover.Content
          align='end'
          className='min-w-[15rem] rounded-lg bg-primary-800 p-2 shadow-md'
          sideOffset={8}
        >
          <h2 className='mx-2 mb-4'>Resources Filter</h2>

          <ul className='flex flex-col gap-2'>
            {filterOptions.map((option) => (
              <ToggleFilter
                key={option}
                className='w-full items-center justify-between rounded-md px-3 py-2 font-normal text-white data-[active=true]:bg-primary-700 motion-safe:transition-colors'
                value={settings.displayRarity.includes(option)}
                onClick={() => handleFilterChange(option)}
              >
                {option}
              </ToggleFilter>
            ))}
          </ul>

          <hr className='border-primary-400 border-2 rounded-full my-4' />

          <h2 className='mx-2 mb-4'>Advanced View</h2>

          <ToggleFilter
            className='w-full items-center justify-between rounded-md px-3 py-2 font-normal text-white data-[active=true]:bg-primary-700 motion-safe:transition-colors'
            value={settings.showOwnedItems}
            onClick={() =>
              setSettings((prev) => ({
                ...prev,
                showOwnedItems: !prev.showOwnedItems,
              }))
            }
          >
            Show Owned Items
          </ToggleFilter>
        </Popover.Content>
      </Popover.Wrapper>
    </nav>
  );
}

const filterOptions: RarityTypes[] = ['Epic', 'Rare', 'Uncommon', 'Common'];
