import { CraftingCalcAtom, defaultCostObject } from '@/atoms/CraftingCalc'
import { SettingsAtom } from '@/atoms/Settings'
import TableCostFragment from '@/components/crafting/TableCostFragment'
import CraftCost, { WeaponCraftCost } from '@/data/CraftCost'
import { ComplementaryItems, calculateCraftByItem } from '@/utils/index'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import MainItemFrame from './MainItemFrame'
import TotalCost from './TotalCost'

export default function CraftingMain() {
  const [settings] = useAtom(SettingsAtom)
  const [craftCost, setCraftCost] = useAtom(CraftingCalcAtom)

  const [category, setCategory] = useState<ItemCategory>('weapon')
  const [selectedTier, setTier] = useState<ItemTier>(1)
  const [weaponType, setWeaponType] = useState<'primary' | 'secondary'>(
    'primary'
  )
  const [itemRarity, setItemRarity] =
    useState<Exclude<RarityTypes, 'Common'>>('Epic')

  // const targetItem = CraftCost.find((obj) => obj.name === category)!;
  const targetItem = WeaponCraftCost[weaponType][itemRarity][selectedTier]

  useEffect(() => {
    setCraftCost(defaultCostObject)
    calculateCraftByItem({
      setAtom: setCraftCost,
      category,
      parentRarity: itemRarity,
      multiply: 1,
      displayRarity: settings.displayRarity,
      parentIsBase: true,
      weaponType,
      tier: selectedTier
    })
  }, [
    category,
    itemRarity,
    selectedTier,
    setCraftCost,
    settings.displayRarity,
    weaponType
  ])

  return (
    <div className="flex w-full flex-col gap-4 p-14">
      <section className="mb-4 flex justify-center gap-16">
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
          <tbody className="w-full gap-5">
            {Object?.entries(targetItem)?.map(
              ([name, item]) =>
                !ComplementaryItems.includes(name) && (
                  <tr className="items-center gap-20" key={name}>
                    <TableCostFragment
                      key={name}
                      cost={item.cost}
                      name={name as ItemTypes}
                      rarity={item?.rarity ? item?.rarity : 'Default'}
                      size="md"
                    />

                    {item?.rarity && (
                      <RecursiveCostFragment
                        name={name as ItemTypes}
                        rarity={item?.rarity}
                        multiplier={item.cost}
                      />
                    )}
                  </tr>
                )
            )}
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
  multiplier
}: {
  name: keyof typeof CraftCost
  rarity: RarityTypes | null
  multiplier: number
}) {
  const [settings] = useAtom(SettingsAtom)

  if (!parentRarity) return <></>

  const craftable = CraftCost?.[parentName]?.[parentRarity]

  if (craftable == null) return <></>

  return (
    <>
      {Object.entries(craftable).map(
        ([name, recipe]) =>
          recipe.rarity &&
          !ComplementaryItems.includes(name) &&
          settings.displayRarity.includes(recipe.rarity) && (
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
                rarity={recipe.rarity}
                multiplier={recipe.cost * multiplier}
              />
            </React.Fragment>
          )
      )}
    </>
  )
}
