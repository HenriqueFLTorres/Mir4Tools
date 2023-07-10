import { InventoryAtom, showInventoryAtom } from '@/atoms/Inventory'
import BasicItemFrame from '@/components/Inventory/BasicItemComponent'
import ItemComponent from '@/components/Inventory/ItemComponent'
import Close from '@/icons/Close'
import { useAtom } from 'jotai'
import { useTranslation } from '../../../public/locales/client'

export default function Inventory() {
  const [inventory] = useAtom(InventoryAtom)
  const [, setShowInventory] = useAtom(showInventoryAtom)
  const { t } = useTranslation()

  return (
    <div className="flex w-full max-w-[100rem] flex-col gap-8 self-center">
      <header className="flex items-center justify-between">
        <h2 className="text-3xl text-primary-200">{t('Inventory')}</h2>

        <button
          onClick={() => {
            setShowInventory((prev) => !prev)
          }}
          className="h-12 w-12 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors"
          aria-label="Close modal"
        >
          <Close className="fill-white" />
        </button>
      </header>

      <section className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] gap-8">
        {Object.entries(inventory).map(
          ([name, rarities]) =>
            typeof rarities !== 'number' && (
              <ItemComponent key={name} item={name as ItemWithRarity} />
            )
        )}
      </section>

      <section className="grid mt-8 grid-cols-[repeat(auto-fill,_minmax(136px,1fr))] gap-8">
          {Object.entries(inventory)
            .filter(([, value]) => typeof value === 'number')
            ?.map(([name]) => (
              <BasicItemFrame
                key={name}
                item={name as NonRarityItems}
                rarity={'Default'}
              />
            ))}
      </section>
    </div>
  )
}
