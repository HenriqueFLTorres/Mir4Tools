import { InventoryAtom } from '@/atoms/Inventory'
import CostFragment from '@/components/crafting/CostFragment'
import {
  ComplementaryItems,
  extractItemRarity,
  formatItemName,
} from '@/utils/index'
import { useAtomValue } from 'jotai'
import { useTranslation } from '../../../public/locales/client'

export default function TotalCost({
  itemFullRecipe,
  formattedRecipe,
}: {
  itemFullRecipe: Record<string, number>
  formattedRecipe: Array<Array<[string, number]>>
}) {
  // const settings = useAtomValue(SettingsAtom)
  const inventory = useAtomValue(InventoryAtom)
  const { t } = useTranslation()

  // const isBaseRecipe = (name: string, rarity: string) => {
  //   const baseResources = Object.entries(targetRecipe)

  //   return baseResources.some(
  //     ([baseName, baseItem]) => baseName === name && baseItem?.rarity === rarity
  //   )
  // }

  // const hasOtherRaritiesThanBase = (rarity: RarityTypes) => {
  //   return !Array.from(Array(mappedRarity[rarity]).keys())
  //     .map((n) => settings.displayRarity.includes(rarities[n - 1]))
  //     .some((check) => !!check)
  // }
  console.log(itemFullRecipe)

  return (
    <section id="totalCostPanel" className="flex w-full flex-col gap-8">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        {t('Total')}
      </h2>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        <section id="totalCostWithRarity" className="flex flex-col w-full gap-6">
          {formattedRecipe.map((rarityColumn, index) => (
            <ul
              className="flex items-center gap-6"
              key={index}
            >
              {rarityColumn.map(([name, amount]) => {
                if (ComplementaryItems.includes(name) || amount <= 0) {
                  return <></>
                }

                const formattedName = formatItemName(name)
                const itemRarity = extractItemRarity(name)
                const inventoryItem =
                  inventory[formattedName][itemRarity as RarityTypes]
                const ownedAmount =
                  inventoryItem.traddable + inventoryItem.nonTraddable

                return (
                  <CostFragment
                    key={name}
                    name={formattedName}
                    cost={amount - ownedAmount}
                    rarity={itemRarity}
                    disabledMillify
                  />
                )
              })}
            </ul>
          ))}
        </section>

        <ul id="totalCostWithoutRarity" className="flex gap-5">
          <CostFragment
            name="darksteel"
            cost={itemFullRecipe.Darksteel - inventory.darksteel}
            rarity="Default"
          />

          <CostFragment
            name="copper"
            cost={itemFullRecipe.Copper - inventory.copper}
            rarity="Default"
          />

          <CostFragment
            name="glittering_powder"
            cost={
              itemFullRecipe['Glittering Powder'] - inventory.glittering_powder
            }
            rarity="Default"
          />
        </ul>
      </div>
    </section>
  )
}
