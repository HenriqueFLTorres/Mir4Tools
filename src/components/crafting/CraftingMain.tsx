import { CraftingCalcAtom, defaultCostObject } from '@/atoms/CraftingCalc';
import { SettingsAtom } from '@/atoms/Settings';
import ItemFrame from '@/components/crafting/ItemFrame';
import TableCostFragment from '@/components/crafting/TableCostFragment';
import CraftCost from '@/data/CraftCost';
import { ComplementaryItems, calculateCraftByItem } from '@/utils/index';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import TotalCost from './TotalCost';

export default function CraftingMain() {
  const [settings] = useAtom(SettingsAtom);
  const [craftCost, setCraftCost] = useAtom(CraftingCalcAtom);
  const targetItem = CraftCost.find((obj) => obj.name === 'weapon')!;

  useEffect(() => {
    setCraftCost(defaultCostObject);
    calculateCraftByItem({
      setAtom: setCraftCost,
      parentName: 'weapon',
      parentRarity: 'Epic',
      multiply: 1,
      displayRarity: settings.displayRarity,
      parentIsBase: true,
    });
  }, [setCraftCost, settings.displayRarity]);

  return (
    <div className='flex w-full flex-col gap-4 p-14'>
      <section className='mb-4 flex justify-center gap-16'>
        <ItemFrame
          item={targetItem.name as ItemTypes}
          rarity={targetItem.rarity}
          size='lg'
          className='my-auto shrink-0'
        />

        <table>
          <tbody className='w-full gap-5'>
            {Object.entries(targetItem.recipe).map(
              ([name, item]) =>
                !ComplementaryItems.includes(name) && (
                  <tr className='items-center gap-20' key={name}>
                    <TableCostFragment
                      key={name}
                      cost={item.cost}
                      name={name as ItemTypes}
                      rarity={item.rarity ? item.rarity : 'Default'}
                      size='md'
                    />

                    <RecursiveCostFragment
                      name={name}
                      rarity={item.rarity}
                      multiplier={item.cost}
                    />
                  </tr>
                )
            )}
          </tbody>
        </table>
      </section>

      <TotalCost craftCost={craftCost} targetRecipe={targetItem.recipe} />
    </div>
  );
}

function RecursiveCostFragment({
  name: parentName,
  rarity: parentRarity,
  multiplier,
}: {
  name: string;
  rarity?: RarityTypes;
  multiplier: number;
}) {
  const [settings] = useAtom(SettingsAtom);

  const craftable = CraftCost.find(
    (obj) => obj.name === parentName && obj.rarity === parentRarity
  );

  if (!craftable) return <></>;

  return (
    <>
      {Object.entries(craftable.recipe).map(
        ([name, recipe]) =>
          recipe.rarity &&
          !ComplementaryItems.includes(name) &&
          settings.displayRarity.includes(recipe.rarity as RarityTypes) && (
            <React.Fragment key={`${name} ${recipe.cost}`}>
              <TableCostFragment
                key={name}
                cost={recipe.cost * multiplier}
                name={name as ItemTypes}
                rarity={recipe.rarity ? recipe.rarity : 'Default'}
                size='md'
              />

              <RecursiveCostFragment
                name={name}
                rarity={recipe.rarity}
                multiplier={recipe.cost * multiplier}
              />
            </React.Fragment>
          )
      )}
    </>
  );
}
