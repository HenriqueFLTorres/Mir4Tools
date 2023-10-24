'use client'

// import CraftCost, { ItemCraftCost } from '@/data/CraftCost'
import { ItemSelectorAtom } from '@/atoms/CraftingCalc'
import ItemSelector from '@/components/crafting/ItemSelector'
import { cn } from '@/utils/classNames'
import { getItemImagePath, itemTierToQuantity } from '@/utils/index'
import { useAtomValue } from 'jotai'
import ItemFrame from './ItemFrame'

export default function CraftingMain() {
  const { tier, category, rarity, weaponType } = useAtomValue(ItemSelectorAtom)

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
            {/* {Object?.entries(targetItem)?.map(([name, item]) => {
              let inventoryCount = 0
              const itemHasRarity =
                typeof inventory[name as NonRarityItems] === 'object'

              if (itemHasRarity && !!item.rarity) {
                inventoryCount =
                  inventory[name][item.rarity].traddable +
                  inventory[name][item.rarity].nonTraddable
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
            })} */}
          </tbody>
        </table>
      </section>

      {/* <TotalCost craftCost={craftCost} targetRecipe={targetItem} /> */}
    </div>
  )
}

// function RecursiveCostFragment({
//   name: parentName,
//   rarity: parentRarity,
//   multiplier,
// }: {
//   name: keyof typeof CraftCost
//   rarity: Exclude<RarityTypes, 'Uncommon' | 'Common'> | null
//   multiplier: number
// }) {
//   const settings = useAtomValue(SettingsAtom)

//   if (!parentRarity) return <></>

//   const craftable = CraftCost?.[parentName]?.[parentRarity]

//   if (craftable == null) return <></>

//   return (
//     <>
//       {Object.entries(craftable).map(
//         ([name, recipe]) =>
//           recipe.rarity &&
//           !ComplementaryItems.includes(name) &&
//           settings?.displayRarity.includes(recipe.rarity) && (
//             <React.Fragment key={`${name} ${recipe.cost}`}>
//               <TableCostFragment
//                 key={name}
//                 cost={recipe.cost * multiplier}
//                 name={name as ItemTypes}
//                 rarity={recipe.rarity ? recipe.rarity : 'Default'}
//                 size="md"
//               />

//               <RecursiveCostFragment
//                 name={name as keyof typeof CraftCost}
//                 rarity={
//                   recipe.rarity as Exclude<RarityTypes, 'Uncommon' | 'Common'>
//                 }
//                 multiplier={recipe.cost * multiplier}
//               />
//             </React.Fragment>
//           )
//       )}
//     </>
//   )
// }
