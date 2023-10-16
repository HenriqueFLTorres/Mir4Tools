import { InventoryAtom } from '@/atoms/Inventory'
import { SettingsAtom } from '@/atoms/Settings'
import ItemFrame from '@/components/crafting/ItemFrame'
import RCT from '@/components/crafting/RealCostTooltip'
import Balance from '@/icons/Balance'
import { getReadableNumber } from '@/utils/index'
import { useAtom, useAtomValue } from 'jotai'
import millify from 'millify'
import Tooltip from '../ToolTip'

export default function TableCostFragment({
  name,
  rarity,
  size,
  cost,
}: {
  name: ItemTypes
  rarity: RarityTypes | 'Default'
  size: 'sm' | 'md' | 'lg'
  cost: number
}) {
  const settings = useAtomValue(SettingsAtom)

  const hideCost = cost === 1

  if (hideCost) return <></>

  return (
    <td className="px-2 md:px-12 md:pt-4" align="center">
      <ItemFrame className="mb-4" item={name} rarity={rarity} size={size} />

      {settings.showOwnedItems ? (
        <div className="flex w-full flex-col rounded bg-primary-600 font-medium text-white">
          <ShowInventoryItem
            name={name as ItemWithRarity}
            rarity={rarity as RarityTypes}
          />
          <RealCost cost={cost} />
        </div>
      ) : (
        <RealCost cost={cost} />
      )}
    </td>
  )
}

function RealCost({ cost }: { cost: number }) {
  return (
    <Tooltip.Wrapper delayDuration={0}>
      <Tooltip.Trigger>
        <span className="flex w-full flex-col rounded bg-primary-600 px-2 py-1 text-xs font-medium text-white sm:text-base">
          {millify(cost)}
        </span>
      </Tooltip.Trigger>
      <Tooltip.Content sideOffset={6}>
        {getReadableNumber(cost)}
      </Tooltip.Content>
    </Tooltip.Wrapper>
  )
}

function ShowInventoryItem({
  name,
  rarity,
}: {
  name: ItemWithRarity
  rarity: RarityTypes
}) {
  const [inventory] = useAtom(InventoryAtom)

  const targetItem = inventory?.[name]?.[rarity] as unknown as InventoryItem

  const traddableItem = targetItem?.traddable ?? 0
  const NonTraddableItem = targetItem?.nonTraddable ?? 0

  return (
    <div className="flex border-b-2 border-b-primary-400">
      <RCT cost={traddableItem}>
        <span
          className={
            'flex w-full items-center gap-1.5 px-2 text-xs sm:text-base'
          }
        >
          <Balance className="h-3 w-3 fill-white sm:h-5 sm:w-5" />{' '}
          {millify(traddableItem)}
        </span>
      </RCT>
      <RCT cost={NonTraddableItem}>
        <span
          className={
            'flex w-full justify-center border-l-2 border-l-primary-400 px-2 text-xs sm:text-base'
          }
        >
          {millify(NonTraddableItem)}
        </span>
      </RCT>
    </div>
  )
}
