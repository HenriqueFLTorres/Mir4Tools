'use client'

import { CraftingCalcAtom, defaultCostObject } from '@/atoms/CraftingCalc'
import { InventoryAtom } from '@/atoms/Inventory'
import TableCostFragment from '@/components/crafting/TableCostFragment'
import CraftCost, { ItemCraftCost } from '@/data/CraftCost'
import SettingsFallback from '@/utils/SettingsFallback'
import { ComplementaryItems, calculateCraftByItem } from '@/utils/index'
import { useAtom } from 'jotai'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
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
    <div className="flex overflow-x-auto max-w-[120rem] mx-auto w-full flex-col gap-4 px-5 pb-14 pt-44 md:p-14 md:pt-24">
      <section className="mb-4 flex flex-col md:flex-row justify-center gap-6 md:gap-16">
        <MainItemFrame
          targetItem={targetItem}
          name={category}
          rarity={itemRarity}
          category={category}
          setCategory={setCategory}
          selectedTier={selectedTier}
          setTier={setTier}
          weaponType={weaponType}
          setWeaponType={setWeaponType}
          itemRarity={itemRarity}
          setItemRarity={setItemRarity}
        />

        <table>
          <tbody id="recipeSubitems" className="flex justify-center md:table-row-group w-full md:gap-5">
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
                  <tr className="flex flex-col md:table-row items-center gap-6 md:gap-20" key={name}>
                    <TableCostFragment
                      key={name}
                      cost={
                        item.cost -
                        (Number.isNaN(inventoryCount) ? 0 : inventoryCount)
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
                        multiplier={item.cost}
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
