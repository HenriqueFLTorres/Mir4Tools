import { InventoryAtom } from '@/atoms/Inventory'
import Tooltip from '@/components/ToolTip'
import ItemFrame from '@/components/crafting/ItemFrame'
import BaseResourceCost from '@/data/BaseResouceCost'
import Balance from '@/icons/Balance'
import { cn } from '@/utils/classNames'
import { formatItemName, rarityRegex } from '@/utils/index'
import { useAtom } from 'jotai'
import millify from 'millify'
import { useState } from 'react'
import FragmentRecipe from './FragmentRecipe'

export default function TableCostFragment({
  name,
  rarity,
  cost,
}: {
  name: string
  rarity: RarityTypes
  cost: number
}) {
  const [inventory, setInventory] = useAtom(InventoryAtom)

  const formattedName = formatItemName(name)

  const updateInventoryValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    isTraddable: boolean
  ) =>
    setInventory((prev) => ({
      ...prev,
      [formattedName]: {
        ...prev[formattedName],
        [rarity]: {
          ...prev[formattedName][rarity],
          [isTraddable ? 'traddable' : 'nonTraddable']: Number(e.target.value),
        },
      },
    }))

  let itemRecipe: Record<string, number> = {}
  if (['Legendary', 'Epic'].includes(rarity)) {
    itemRecipe =
      BaseResourceCost[
        name.replace(rarityRegex, '') as keyof typeof BaseResourceCost
      ]?.[rarity as Exclude<RarityTypes, 'Rare' | 'Uncommon' | 'Common'>]
  }

  const itemHasRecipe = Object.keys(itemRecipe ?? {}).length > 0

  return (
    <Tooltip.Wrapper disableHoverableContent>
      <Tooltip.Trigger disabled={Object.keys(itemRecipe ?? {}).length < 1}>
        <td className="w-40 gap-4 px-2 pt-4" align="center">
          <ItemFrame
            className="mb-4"
            item={formattedName}
            rarity={rarity}
            size={'md'}
          />

          <div className="flex w-20 flex-col overflow-hidden rounded bg-primary-600 text-white transition-[width] focus-within:w-36">
            <InventoryInput
              isTraddable
              onChange={(e) => updateInventoryValue(e, true)}
              value={inventory[formattedName][rarity].traddable}
              className="border-b-2 border-b-primary-400"
            />
            <InventoryInput
              onChange={(e) => updateInventoryValue(e, false)}
              value={inventory[formattedName][rarity].nonTraddable}
            />
          </div>
        </td>
      </Tooltip.Trigger>
      {itemHasRecipe ? (
        <FragmentRecipe itemRecipe={itemRecipe} cost={cost} />
      ) : (
        <></>
      )}
    </Tooltip.Wrapper>
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
        onClick={(e) => e.currentTarget.setSelectionRange(0, 25, 'backward')}
      />
    </label>
  )
}
