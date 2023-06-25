import { InventoryAtom } from '@/atoms/Inventory'
import ItemFrame from '@/components/crafting/ItemFrame'
import RCT from '@/components/crafting/RealCostTooltip'
import Balance from '@/icons/Balance'
import { getReadableNumber } from '@/utils/index'
import { useAtom } from 'jotai'
import millify from 'millify'
import { useSession } from 'next-auth/react'
import Tooltip from '../ToolTip'
import SettingsFallback from '@/utils/SettingsFallback'

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
  const { data: session } = useSession()
  const settings = session?.user?.settings ?? SettingsFallback

  const hideCost = cost === 1

  return (
    <td className="px-12 pt-4" align="center">
      <ItemFrame className="mb-4" item={name} rarity={rarity} size={size} />

      {!hideCost &&
        (settings?.showOwnedItems ? (
          <div className="flex w-full flex-col rounded bg-primary-600 font-medium text-white">
            <ShowInventoryItem
              name={name as ItemWithRarity}
              rarity={rarity as RarityTypes}
            />
            <RealCost cost={cost} />
          </div>
        ) : (
          <RealCost cost={cost} />
        ))}
    </td>
  )
}

function RealCost({ cost }: { cost: number }) {
  return (
    <Tooltip.Wrapper delayDuration={0}>
      <Tooltip.Trigger>
        <span className="flex w-full flex-col rounded bg-primary-600 px-2 py-1 font-medium text-white">
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
        <span className={'flex w-full items-center gap-1.5 px-2'}>
          <Balance className="h-5 w-5 fill-white" /> {millify(traddableItem)}
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
  )
}
