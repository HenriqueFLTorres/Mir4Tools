import { InventoryAtom } from '@/atoms/Inventory'
import Balance from '@/icons/Balance'
import { cn } from '@/utils/classNames'
import { useAtom } from 'jotai'
import { useState, type HTMLAttributes } from 'react'
import ItemFrame from '../crafting/ItemFrame'

export default function ItemComponent({
  item,
  rarity,
  children,
  ...props
}: ItemComponentProps) {
  const [inventory, setInventory] = useAtom(InventoryAtom)
  const [isEditing, setIsEditing] = useState(false)

  const onFocus = () => {
    setIsEditing(true)
  }
  const onBlur = () => {
    setIsEditing(false)
  }

  const modifyInventory = ({
    item,
    value,
    type,
    rarity,
  }: {
    item: ItemWithRarity
    value: number
    type: 'traddable' | 'nonTraddable'
    rarity: RarityTypes
  }) => {
    setInventory((prev) => ({
      ...prev,
      [item]: {
        ...(prev[item] as unknown as object),
        [rarity]: {
          ...(prev[item][rarity] as unknown as object),
          [type]: value,
        },
      },
    }))
  }

  return (
    <label
      className="flex w-32 cursor-pointer flex-col items-center gap-3"
      {...props}
    >
      <ItemFrame item={item} rarity={rarity} />
      <div
        className={cn(
          'flex w-full flex-col px-6 motion-safe:transition-[padding]',
          { 'px-0': isEditing }
        )}
      >
        <label className="flex w-full cursor-text items-center justify-center gap-1.5 rounded-t border-b-2 border-b-primary-400 bg-primary-600 px-2 py-1">
          <Balance className="inline-block h-5 w-5 shrink-0 fill-white" />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            className="w-full bg-transparent font-medium text-white outline-none"
            type="number"
            value={
              (inventory[item][rarity] as unknown as { traddable: number })
                .traddable
            }
            onChange={(e) => {
              modifyInventory({
                item,
                value: Number(e.target.value),
                type: 'traddable',
                rarity,
              })
            }}
          />
        </label>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className="flex w-full appearance-none items-center justify-center gap-1.5 rounded-b bg-primary-600 px-3 py-1 font-medium text-white outline-none"
          type="number"
          value={
            (inventory[item][rarity] as unknown as { nonTraddable: number })
              .nonTraddable
          }
          onChange={(e) => {
            modifyInventory({
              item,
              value: Number(e.target.value),
              type: 'nonTraddable',
              rarity,
            })
          }}
        />
      </div>
    </label>
  )
}

type ItemComponentProps = {
  item: ItemWithRarity
  rarity: RarityTypes
} & HTMLAttributes<HTMLLabelElement>
