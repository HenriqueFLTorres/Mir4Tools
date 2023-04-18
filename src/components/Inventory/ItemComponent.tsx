import { InventoryAtom } from '@/atoms/Inventory';
import Balance from '@/icons/Balance';
import { cn } from '@/utils/classNames';
import { useAtom } from 'jotai';
import { HTMLAttributes, useState } from 'react';
import ItemFrame from '../crafting/ItemFrame';

export default function ItemComponent({
  item,
  rarity,
  children,
  ...props
}: ItemComponentProps) {
  const [inventory, setInventory] = useAtom(InventoryAtom);
  const [isEditing, setIsEditing] = useState(false);

  const onFocus = () => setIsEditing(true);
  const onBlur = () => setIsEditing(false);

  const modifyInventory = ({
    item,
    value,
    type,
    rarity,
  }: {
    item: ItemWithRarity;
    value: number;
    type: 'traddable' | 'nonTraddable';
    rarity: RarityTypes;
  }) => {
    setInventory((prev) => ({
      ...prev,
      [item]: {
        ...prev[item],
        [rarity]: {
          ...(prev[item][rarity] as unknown as object),
          [type]: value,
        },
      },
    }));
  };

  return (
    <label
      className='flex w-32 cursor-pointer flex-col items-center gap-3'
      {...props}
    >
      <ItemFrame item={item} rarity={rarity} />
      <div
        className={cn(
          'flex w-full flex-col px-6 motion-safe:transition-[padding]',
          { ['px-0']: isEditing }
        )}
      >
        <label className='flex w-full cursor-text items-center justify-center gap-1.5 border-b-2 border-b-primary-400 bg-transparent bg-input-bottom-to-top px-2 py-1 focus-within:bg-primary-700 motion-safe:transition-colors motion-safe:duration-500'>
          <Balance className='inline-block h-5 w-5 shrink-0 fill-primary-400' />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            className='w-full bg-transparent font-bold text-primary-400 outline-none selection:bg-primary-200/40'
            type='number'
            value={
              (inventory[item][rarity] as unknown as { traddable: number })
                .traddable
            }
            onChange={(e) =>
              modifyInventory({
                item,
                value: Number(e.target.value),
                type: 'traddable',
                rarity: rarity,
              })
            }
          />
        </label>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className='flex w-full appearance-none items-center justify-center gap-1.5 bg-transparent bg-input-top-to-bottom px-3 py-1 font-bold text-primary-400 outline-none selection:bg-primary-200/40 focus:bg-primary-700 motion-safe:transition-colors motion-safe:duration-500'
          type='number'
          value={
            (inventory[item][rarity] as unknown as { nonTraddable: number })
              .nonTraddable
          }
          onChange={(e) =>
            modifyInventory({
              item,
              value: Number(e.target.value),
              type: 'nonTraddable',
              rarity: rarity,
            })
          }
        />
      </div>
    </label>
  );
}

type ItemComponentProps = {
  item: ItemWithRarity;
  rarity: RarityTypes;
} & HTMLAttributes<HTMLLabelElement>;
