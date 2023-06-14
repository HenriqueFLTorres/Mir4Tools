import ItemFrame from '@/components/crafting/ItemFrame'
import { getReadableNumber } from '@/utils/index'
import millify from 'millify'
import Tooltip from '../ToolTip'

export default function CostFragment({
  name,
  rarity,
  size = 'md',
  cost,
}: {
  name: ItemTypes
  rarity: RarityTypes | 'Default'
  size?: 'sm' | 'md' | 'lg'
  cost: number
}) {
  if (!cost) return <></>
  return (
    <li className="flex flex-col gap-2">
      <ItemFrame item={name} rarity={rarity} size={size} />

      <Tooltip.Wrapper delayDuration={0}>
        <Tooltip.Trigger>
          <span
            className={
              'flex w-full items-center justify-center gap-1.5 rounded bg-primary-600 px-3 py-1 font-medium text-white outline-none'
            }
          >
            {millify(cost)}
          </span>
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={6}>
          {getReadableNumber(cost)}
        </Tooltip.Content>
      </Tooltip.Wrapper>
    </li>
  )
}
