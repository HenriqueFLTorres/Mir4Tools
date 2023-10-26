import { InventoryAtom } from '@/atoms/Inventory'
import ItemFrame from '@/components/crafting/ItemFrame'
import Balance from '@/icons/Balance'
import { cn } from '@/utils/classNames'
import { useAtom } from 'jotai'
import millify from 'millify'
import { useState } from 'react'

export default function TableCostFragment({
  name,
  rarity,
  size,
  cost,
}: {
  name: ItemWithRarity
  rarity: RarityTypes
  size: 'sm' | 'md' | 'lg'
  cost: number
}) {
  const [inventory, setInventory] = useAtom(InventoryAtom)

  const updateInventoryValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    isTraddable: boolean
  ) =>
    setInventory((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [rarity]: {
          ...prev[name][rarity],
          [isTraddable ? 'traddable' : 'nonTraddable']: Number(e.target.value),
        },
      },
    }))

  return (
    <td className="w-40 px-2 pt-4" align="center">
      <ItemFrame className="mb-4" item={name} rarity={rarity} size={size} />

      <div className="flex w-20 focus-within:w-36 transition-[width] flex-col rounded bg-primary-600 text-white">
        <InventoryInput
          isTraddable
          onChange={(e) => updateInventoryValue(e, true)}
          value={inventory[name][rarity].traddable}
          className="border-b-2 border-b-primary-400"
        />
        <InventoryInput
          onChange={(e) => updateInventoryValue(e, false)}
          value={inventory[name][rarity].nonTraddable}
        />
      </div>
    </td>
  )
}

function InventoryInput({
  isTraddable,
  className,
  ...props
}: { isTraddable?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false)

  return (
    <label
      className={cn(
        'relative flex w-full items-center gap-1.5 px-2 py-1 text-xs sm:text-base',
        className
      )}
    >
      {isTraddable ? (
        <Balance className="h-6 w-6 shrink-0 fill-white" />
      ) : (
        <></>
      )}
      <input
        className={
          'flex w-full appearance-none items-center justify-center bg-transparent text-center text-sm font-semibold outline-none transition-colors duration-300 selection:bg-primary-800 placeholder:text-neutral-200/70 sm:text-base'
        }
        {...props}
        value={
          focused
            ? props.value
            : typeof props.value === 'number' && Number(props.value)
            ? millify(props.value)
            : props.value
        }
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
    </label>
  )
}
