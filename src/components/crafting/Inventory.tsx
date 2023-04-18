import { InventoryAtom, showInventoryAtom } from '@/atoms/Inventory';
import Close from '@/icons/Close';
import BasicItemFrame from '@/components/Inventory/BasicItemComponent';
import ItemComponent from '@/components/Inventory/ItemComponent';
import { useAtom } from 'jotai';

export default function Inventory() {
  const [inventory] = useAtom(InventoryAtom);
  const [, setShowInventory] = useAtom(showInventoryAtom);

  return (
      <section className='custom-scroll fixed left-0 top-0 z-50 flex h-screen w-screen flex-col overflow-y-auto bg-inventory-gradient p-14 backdrop-blur-xl'>
        <header className='flex items-center justify-between'>
          <h2 className='text-3xl text-primary-200'>Inventory</h2>

          <button
            onClick={() => setShowInventory((prev) => !prev)}
            className='h-12 w-12 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors'
          >
            <Close className='fill-white' />
          </button>
        </header>

        <section className='mt-8 flex flex-col gap-8 p-4'>
          {Object.entries(inventory).map(([name, rarities]) => (
            <ul key={name} className='flex flex-row gap-2'>
              {Object.keys(rarities).map((rarity) => (
                <ItemComponent
                  key={rarity}
                  item={name as ItemWithRarity}
                  rarity={rarity as RarityTypes}
                />
              ))}
            </ul>
          ))}
        </section>

        <section className='my-4 flex flex-col gap-8 p-4'>
          <ul className='flex flex-row gap-2'>
            {Object.entries(inventory)
              .filter(([, value]) => typeof value === 'number')
              ?.map(([name]) => (
                <BasicItemFrame
                  key={name}
                  item={name as ItemWithRarity}
                  rarity={'Default'}
                />
              ))}
          </ul>
        </section>
      </section>
  );
}
