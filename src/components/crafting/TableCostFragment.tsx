import { InventoryAtom } from '@/atoms/Inventory';
import { SettingsAtom } from '@/atoms/Settings';
import ItemFrame from '@/components/crafting/ItemFrame';
import { default as RCT } from '@/components/crafting/RealCostTooltip';
import Balance from '@/icons/Balance';
import { useAtom } from 'jotai';
import millify from 'millify';

export default function TableCostFragment({
  name,
  rarity,
  size,
  cost,
}: {
  name: ItemTypes;
  rarity: RarityTypes | 'Default';
  size: 'sm' | 'md' | 'lg';
  cost: number;
}) {
  const [settings] = useAtom(SettingsAtom);

  const hideCost = cost === 1;

  return (
    <td className='px-12 pt-4' align='center'>
      <ItemFrame item={name} rarity={rarity} size={size} />

      {!hideCost &&
        (settings.showOwnedItems ? (
          <div className='mt-4 flex w-full flex-col rounded-md border-2 border-primary-400 bg-primary-700 font-bold text-primary-400 selection:bg-primary-200/40'>
            <ShowInventoryItem
              name={name as ItemWithRarity}
              rarity={rarity as RarityTypes}
            />
            <span className={'flex w-full justify-center px-2'}>{cost}</span>
          </div>
        ) : (
          <span className='mt-4 flex w-full flex-col rounded-md border-b-2 border-primary-400 bg-input-bottom-to-top font-bold text-primary-400 selection:bg-primary-200/40'>
            {cost}
          </span>
        ))}
    </td>
  );
}

function ShowInventoryItem({
  name,
  rarity,
}: {
  name: ItemWithRarity;
  rarity: RarityTypes;
}) {
  const [inventory] = useAtom(InventoryAtom);

  const targetItem = inventory?.[name]?.[rarity] as unknown as InventoryItem;

  const traddableItem = targetItem?.traddable ?? 0;
  const NonTraddableItem = targetItem?.nonTraddable ?? 0;

  return (
    <div className='flex flex-row border-b-2 border-b-primary-400'>
      <RCT cost={traddableItem}>
        <span className={'flex w-full items-center gap-1.5 px-2'}>
          <Balance className='h-5 w-5 fill-primary-400' />{' '}
          {millify(traddableItem)}
        </span>
      </RCT>
      <RCT cost={NonTraddableItem}>
        <span
          className={
            'flex w-full justify-center border-l-2 border-l-primary-400 px-2'
          }
        >
          {millify(NonTraddableItem)}
        </span>
      </RCT>
    </div>
  );
}
