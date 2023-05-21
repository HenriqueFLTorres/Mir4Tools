import { InventoryAtom } from '@/atoms/Inventory'
import { cn } from '@/utils/classNames'
import { useAtom } from 'jotai'
import { useState, type HTMLAttributes } from 'react'
import ItemFrame from '../crafting/ItemFrame'

export default function BasicItemComponent({
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
    value
  }: {
    item: ItemWithRarity
    value: number
  }) => {
    setInventory((prev) => ({
      ...prev,
      [item]: value
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
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          type="number"
          value={inventory[item as NonRarityItems]}
          onChange={(e) => {
            modifyInventory({ item, value: Number(e.target.value) })
          }}
          className={
            'flex w-full appearance-none items-center justify-center gap-1.5 rounded-md border-b-2 border-b-primary-400 bg-transparent bg-input-bottom-to-top px-3 py-1 font-bold text-primary-400 outline-none selection:bg-primary-200/40 focus:bg-primary-700 motion-safe:transition-colors'
          }
        />
      </div>
    </label>
  )
}

type ItemComponentProps = {
  item: ItemWithRarity
  rarity: RarityTypes | 'Default'
} & HTMLAttributes<HTMLLabelElement>
