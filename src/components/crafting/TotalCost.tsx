import { InventoryAtom } from '@/atoms/Inventory'
import CostFragment from '@/components/crafting/CostFragment'
import SettingsFallback from '@/utils/SettingsFallback'
import { useAtom } from 'jotai'
import { useSession } from 'next-auth/react'
import { useTranslation } from '../../../public/locales/client'

const rarities: RarityTypes[] = [
  'Common',
  'Uncommon',
  'Rare',
  'Epic',
  'Legendary',
]

export default function TotalCost({
  craftCost,
  targetRecipe,
}: {
  craftCost: CraftingCalcObject
  targetRecipe: Partial<{
    [key in ItemTypes]: { rarity: RarityTypes | null; cost: number }
  }>
}) {
  const { data: session } = useSession()
  const settings = session?.user?.settings ?? SettingsFallback

  const [inventory] = useAtom(InventoryAtom)
  const { t } = useTranslation()

  const isBaseRecipe = (name: string, rarity: string) => {
    const baseResources = Object.entries(targetRecipe)

    return baseResources.some(
      ([baseName, baseItem]) => baseName === name && baseItem?.rarity === rarity
    )
  }

  const hasOtherRaritiesThanBase = (rarity: RarityTypes) => {
    return !Array.from(Array(mappedRarity[rarity]).keys())
      .map((n) => settings.displayRarity.includes(rarities[n - 1]))
      .some((check) => !!check)
  }

  return (
    <section id="totalCostPanel" className="flex w-full flex-col gap-8">
      <h2 className="text-2xl font-bold text-primary-200 md:text-3xl">
        {t('Total')}
      </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        <ul id="totalCostWithRarity" className="flex w-full gap-5">
          {Object.entries(craftCost).map(
            ([name, item]) =>
              typeof item !== 'number' &&
              Object.entries(item).map(([rarity, value]) => {
                const showItemRarity = settings?.displayRarity.includes(
                  rarity as RarityTypes
                )
                const isNotBaseRecipe = !isBaseRecipe(name, rarity)

                const showItem = value > 0 && isNotBaseRecipe && showItemRarity

                return (
                  (showItem ||
                    (isBaseRecipe(name, rarity) &&
                      hasOtherRaritiesThanBase(rarity as RarityTypes))) && (
                    <CostFragment
                      key={`${name} ${rarity}`}
                      name={name as ItemTypes}
                      cost={value}
                      rarity={rarity as RarityTypes}
                    />
                  )
                )
              })
          )}
        </ul>

        <ul id="totalCostWithoutRarity" className="flex gap-5">
          <CostFragment
            name="darksteel"
            cost={craftCost.darksteel - inventory.darksteel}
            rarity="Default"
          />

          <CostFragment
            name="copper"
            cost={craftCost.copper - inventory.copper}
            rarity="Default"
          />

          <CostFragment
            name="glittering_powder"
            cost={craftCost.glittering_powder - inventory.glittering_powder}
            rarity="Default"
          />
        </ul>
      </div>
    </section>
  )
}

const mappedRarity = {
  Legendary: 5,
  Epic: 4,
  Rare: 3,
  Uncommon: 2,
  Common: 1,
}
