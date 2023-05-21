import millify from 'millify'
import ItemFrame from './ItemFrame'

export default function CostFragment({
  name,
  rarity,
  size = 'md',
  cost
}: {
  name: ItemTypes
  rarity: RarityTypes | 'Default'
  size?: 'sm' | 'md' | 'lg'
  cost: number
}) {
  if (!cost) return <></>
  return (
    <span className="flex flex-col gap-2">
      <ItemFrame item={name} rarity={rarity} size={size} />

      <span
        className={
          'flex w-full items-center justify-center gap-1.5 rounded-md border-b-2 border-b-primary-400 bg-transparent bg-input-bottom-to-top px-3 py-1 font-bold text-primary-400 outline-none selection:bg-primary-200/40'
        }
      >
        {millify(cost)}
      </span>
    </span>
  )
}
