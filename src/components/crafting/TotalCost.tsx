import { SettingsAtom } from '@/atoms/Settings';
import CostFragment from '@/components/crafting/CostFragment';
import { useAtom } from 'jotai';

export default function TotalCost({
  craftCost,
  targetRecipe,
}: {
  craftCost: CraftingCalcObject;
  targetRecipe: CraftCostType['recipe'];
}) {
  const [settings] = useAtom(SettingsAtom);

  const isBaseRecipe = (name: string, rarity: string) => {
    const baseResources = Object.entries(targetRecipe);

    return baseResources.some(
      ([baseName, baseItem]) => baseName === name && baseItem.rarity === rarity
    );
  };

  return (
    <section className='flex flex-col gap-8 w-full'>
      <h2 className='text-3xl font-bold text-primary-200'>Total</h2>

      <div className='flex w-full flex-row gap-5'>
        <ul className='flex w-full gap-5'>
          {Object.entries(craftCost).map(
            ([name, item]) =>
              typeof item !== 'number' &&
              Object.entries(item).map(
                ([rarity, value]) =>
                  value > 0 &&
                  !isBaseRecipe(name, rarity) &&
                  settings.displayRarity.includes(rarity as RarityTypes) && (
                    <CostFragment
                      key={`${name} ${rarity}`}
                      name={name as ItemTypes}
                      cost={value}
                      rarity={rarity as RarityTypes}
                    />
                  )
              )
          )}
        </ul>

        <ul className='flex flex-row gap-5'>
          <CostFragment
            name='dark_steel'
            cost={craftCost['dark_steel']}
            rarity='Default'
          />

          <CostFragment
            name='copper'
            cost={craftCost['copper']}
            rarity='Default'
          />

          <CostFragment
            name='glittering_powder'
            cost={craftCost['glittering_powder']}
            rarity='Default'
          />
        </ul>
      </div>
    </section>
  );
}
