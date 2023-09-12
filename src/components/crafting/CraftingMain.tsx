'use client'

import { CraftingCalcAtom, defaultCostObject } from '@/atoms/CraftingCalc'
import { InventoryAtom } from '@/atoms/Inventory'
import TableCostFragment from '@/components/crafting/TableCostFragment'
import CraftCost, { ItemCraftCost } from '@/data/CraftCost'
import SettingsFallback from '@/utils/SettingsFallback'
import { cn } from '@/utils/classNames'
import {
  ComplementaryItems,
  calculateCraftByItem,
  getItemImagePath,
  itemTierToQuantity,
} from '@/utils/index'
import { useAtom } from 'jotai'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import ItemFrame from './ItemFrame'
import MainItemFrame from './MainItemFrame'
import TotalCost from './TotalCost'

export default function CraftingMain() {
  const { data: session } = useSession()
  const settings = session?.user?.settings ?? SettingsFallback
  const [inventory] = useAtom(InventoryAtom)
  const [craftCost, setCraftCost] = useAtom(CraftingCalcAtom)

  const [category, setCategory] = useState<ItemCategory>('weapon')
  const [selectedTier, setTier] = useState<ItemTier>(1)
  const [weaponType, setWeaponType] = useState<'primary' | 'secondary'>(
    'primary'
  )
  const [itemRarity, setItemRarity] =
    useState<Exclude<RarityTypes, 'Common' | 'Uncommon'>>('Epic')

  const targetItem =
    category === 'weapon'
      ? ItemCraftCost[weaponType][itemRarity]
      : ItemCraftCost[category][itemRarity]

  useEffect(() => {
    setCraftCost(defaultCostObject)
    calculateCraftByItem({
      setAtom: setCraftCost,
      category,
      parentRarity: itemRarity,
      displayRarity: settings?.displayRarity,
      parentIsBase: true,
      weaponType,
      inventory,
      multiply: itemTierToQuantity[selectedTier],
    })
  }, [
    category,
    itemRarity,
    selectedTier,
    setCraftCost,
    settings?.displayRarity,
    weaponType,
    inventory,
  ])

  return (
    <div className="mx-auto flex w-full max-w-[120rem] flex-col gap-4 overflow-x-auto px-5 pb-14 pt-44 md:p-14 md:pt-24">
      <section className="mb-4 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-16">
        <div className="flex items-center gap-6">
          <MainItemFrame
            name={category}
            rarity={itemRarity}
            category={category}
            setCategory={setCategory}
            selectedTier={selectedTier}
            setTier={setTier}
            weaponType={weaponType}
            setWeaponType={setWeaponType}
            setItemRarity={setItemRarity}
          />

          {selectedTier > 1 && (
            <>
              <div
                className={cn(
                  'relative h-1 w-12 rounded-full bg-white',
                  'after:absolute after:-right-2 after:top-1/2 after:-translate-y-1/2 after:rotate-90 after:border-x-8 after:border-b-[16px] after:border-white after:border-x-transparent after:content-[""]'
                )}
              />

              <ItemFrame
                item={category as ItemTypes}
                rarity={itemRarity}
                tier={1}
                quantity={itemTierToQuantity[selectedTier]}
                size="lg"
                className="my-auto shrink-0"
                customPath={getItemImagePath({
                  item: category,
                  rarity: itemRarity,
                  weaponType,
                })}
              />
            </>
          )}
        </div>

        <table>
          <tbody
            id="recipeSubitems"
            className="flex w-full justify-center md:table-row-group md:gap-5"
          >
            {Object?.entries(targetItem)?.map(([name, item]) => {
              let inventoryCount = 0
              const itemHasRarity =
                typeof inventory[name as NonRarityItems] === 'object'

              if (itemHasRarity && !!item.rarity) {
                inventoryCount =
                  inventory[name as ItemWithRarity][item.rarity].traddable +
                  inventory[name as ItemWithRarity][item.rarity].nonTraddable
              } else {
                inventoryCount = inventory?.[name as NonRarityItems]
              }

              return (
                !ComplementaryItems.includes(name) && (
                  <tr
                    className="flex flex-col items-center gap-6 md:table-row md:gap-20"
                    key={name}
                  >
                    <TableCostFragment
                      key={name}
                      cost={
                        (item.cost -
                          (Number.isNaN(inventoryCount) ? 0 : inventoryCount)) *
                        itemTierToQuantity[selectedTier]
                      }
                      name={name as ItemTypes}
                      rarity={item?.rarity ? item?.rarity : 'Default'}
                      size="md"
                    />

                    {item?.rarity && (
                      <RecursiveCostFragment
                        name={name as ItemTypes}
                        rarity={
                          item?.rarity as Exclude<
                            RarityTypes,
                            'Uncommon' | 'Common'
                          >
                        }
                        multiplier={
                          item.cost * itemTierToQuantity[selectedTier]
                        }
                      />
                    )}
                  </tr>
                )
              )
            })}
          </tbody>
        </table>
      </section>

      <TotalCost craftCost={craftCost} targetRecipe={targetItem} />
    </div>
  )
}

function RecursiveCostFragment({
  name: parentName,
  rarity: parentRarity,
  multiplier,
}: {
  name: keyof typeof CraftCost
  rarity: Exclude<RarityTypes, 'Uncommon' | 'Common'> | null
  multiplier: number
}) {
  const { data: session } = useSession()
  const settings = session?.user?.settings ?? SettingsFallback

  if (!parentRarity) return <></>

  const craftable = CraftCost?.[parentName]?.[parentRarity]

  if (craftable == null) return <></>

  return (
    <>
      {Object.entries(craftable).map(
        ([name, recipe]) =>
          recipe.rarity &&
          !ComplementaryItems.includes(name) &&
          settings?.displayRarity.includes(recipe.rarity) && (
            <React.Fragment key={`${name} ${recipe.cost}`}>
              <TableCostFragment
                key={name}
                cost={recipe.cost * multiplier}
                name={name as ItemTypes}
                rarity={recipe.rarity ? recipe.rarity : 'Default'}
                size="md"
              />

              <RecursiveCostFragment
                name={name as keyof typeof CraftCost}
                rarity={
                  recipe.rarity as Exclude<RarityTypes, 'Uncommon' | 'Common'>
                }
                multiplier={recipe.cost * multiplier}
              />
            </React.Fragment>
          )
      )}
    </>
  )
}
