'use client'

// import CraftCost, { ItemCraftCost } from '@/data/CraftCost'
import { ItemSelectorAtom } from '@/atoms/CraftingCalc'
import { InventoryAtom } from '@/atoms/Inventory'
import ItemSelector from '@/components/crafting/ItemSelector'
import BaseResourceCost from '@/data/BaseResouceCost'
import EquipmentCost from '@/data/EquipmentCost'
import { cn } from '@/utils/classNames'
import {
  ComplementaryItems,
  extractItemRarity,
  getItemImagePath,
  itemTierToQuantity,
  rarityRegex,
} from '@/utils/index'
import { useAtomValue } from 'jotai'
import ItemFrame from './ItemFrame'
import TableCostFragment from './TableCostFragment'

export default function CraftingMain() {
  const { tier, category, rarity, weaponType } = useAtomValue(ItemSelectorAtom)
  const inventory = useAtomValue(InventoryAtom)

  const ItemRecipe =
    category === 'weapon'
      ? EquipmentCost[category][weaponType][rarity]
      : EquipmentCost[category][rarity]

  const ItemFullRecipe = getFullItemRecipe(ItemRecipe, {}, inventory)

  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-4 overflow-x-auto px-5 pb-14 pt-44 md:p-14 md:pt-24">
      <section className="mb-4 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16">
        <div className="flex items-center gap-6">
          <ItemSelector />

          {tier > 1 && (
            <>
              <div
                className={cn(
                  'relative h-1 w-12 rounded-full bg-white',
                  'after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:rotate-90 after:border-x-8 after:border-b-[16px] after:border-white after:border-x-transparent after:content-[""]'
                )}
              />

              <ItemFrame
                item={category}
                rarity={rarity}
                tier={1}
                quantity={itemTierToQuantity[tier]}
                size="lg"
                className="my-auto shrink-0"
                customPath={getItemImagePath({
                  category,
                  rarity,
                  weaponType,
                }).toLowerCase()}
              />
            </>
          )}
        </div>

        <table>
          <tbody
            id="recipeSubitems"
            className="flex w-full justify-center md:table-row-group md:gap-5"
          >
            {Object?.entries(ItemFullRecipe)?.map(([name, amount]) => {
              if (ComplementaryItems.includes(name)) return <></>

              const itemRarity = extractItemRarity(name)
              const inventoryItem =
                inventory[formatItemName(name) as any][itemRarity]
              const ownedAmount =
                inventoryItem.traddable + inventoryItem.nonTraddable

              return (
                <tr
                  className="flex flex-col items-center gap-6 md:table-row md:gap-20"
                  key={name}
                >
                  <TableCostFragment
                    key={name}
                    cost={amount - ownedAmount}
                    name={formatItemName(name) as ItemTypes}
                    rarity={itemRarity}
                    size="md"
                  />

                  {/* {itemRarity !== 'Default' ? (
                    <RecursiveCostFragment
                      name={name as ItemTypes}
                      rarity={itemRarity}
                      multiplier={amount * itemTierToQuantity[tier]}
                    />
                  ) : (
                    <></>
                  )} */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>

      {/* <TotalCost craftCost={ItemFullRecipe} targetRecipe={targetItem} /> */}
    </div>
  )
}

function formatItemName(name: string): ItemWithRarity {
  const nameWithoutRarity = name.replace(rarityRegex, '')

  return nameWithoutRarity
    .toLocaleLowerCase()
    .replace(/\s/g, '_') as ItemWithRarity
}

function getFullItemRecipe(
  itemRecipe: Record<string, number>,
  result: Record<string, number>,
  inventory: InventoryType
) {
  for (const [item, amount] of Object.entries(itemRecipe)) {
    const itemRarity = extractItemRarity(item)

    getItemRecipe(item, itemRarity, result, amount, inventory, 0)
    result[item] = (result[item] || 0) + amount
  }

  return result
}

function getItemRecipe(
  itemName: string,
  rarity: RarityTypes | 'Default',
  result: Record<string, number>,
  multiplier: number,
  inventory: InventoryType
) {
  if (rarity === 'Default') return

  const nameWithoutRarity = itemName.replace(rarityRegex, '')
  const itemRecipe =
    BaseResourceCost?.[nameWithoutRarity as keyof typeof BaseResourceCost]?.[
      rarity as Exclude<RarityTypes, 'Rare' | 'Uncommon' | 'Common'>
    ]

  if (!itemRecipe) return

  const ownedItem = inventory[formatItemName(nameWithoutRarity)][rarity]
  const parentAmount = ownedItem?.traddable + ownedItem?.nonTraddable

  for (const [item, amount] of Object.entries(itemRecipe)) {
    const itemRarity = extractItemRarity(item)

    const inventoryItem =
      itemRarity === 'Default'
        ? inventory[formatItemName(item) as NonRarityItems]
        : inventory[formatItemName(item)][itemRarity]

    let ownedAmount = 0
    if (inventoryItem) {
      ownedAmount =
        typeof inventoryItem === 'number'
          ? inventoryItem
          : inventoryItem?.traddable + inventoryItem?.nonTraddable
    }

    const totalAmount = ((result[item] || 0) + amount) * multiplier

    result[item] = totalAmount - ownedAmount - parentAmount * amount

    getItemRecipe(item, itemRarity, result, amount, inventory)
  }
}
