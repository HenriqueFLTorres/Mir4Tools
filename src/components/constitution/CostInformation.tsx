'use client'

import { statusLevelsAtom, type statusEffects } from '@/atoms/Constitution'
import ConstitutionData from '@/data/ConstituionData'
import { getReadableNumber } from '@/utils/index'
import { useAtomValue } from 'jotai'
import millify from 'millify'
import Tooltip from '../ToolTip'
import ItemFrame from '../crafting/ItemFrame'
import Checkbox from '../shared/Checkbox'

export default function ConstitutionCostInformation() {
  const levels = useAtomValue(statusLevelsAtom)

  const result = statusKeys.map((key) => {
    const iteration = Array(levels[key].to - levels[key].from)
      .fill(0)
      .map((_, i) => i + levels[key].from)

    return iteration.map((i) => ConstitutionData[key][i])
  })

  const mergedResults = mergeLevels(result.flat() as unknown as MergeObject[])

  return (
    <div className="flex flex-row flex-wrap gap-4">
      <header className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Cost</h1>
        <Checkbox label="Show promotion" />
      </header>
      {Object.entries(mergedResults).map(([itemName, amount]) => {
        const rarity = extractRarity(itemName)

        if (rarity !== 'Common') {
          itemName = itemName.substring(itemName.indexOf(' ') + 1)
        }

        return (
          <div key={itemName} className="flex flex-col items-center gap-2">
            <ItemFrame
              key={itemName}
              item={itemName.toLowerCase().replace(/\s/g, '_') as ItemTypes}
              rarity={rarity}
            />
            <Tooltip.Wrapper>
              <Tooltip.Trigger
                asChild={false}
                aria-label="See detailed amount"
                className="w-max rounded bg-primary-600 px-3 py-1 text-center text-sm font-medium text-white"
              >
                {millify(amount)}
              </Tooltip.Trigger>
              <Tooltip.Content>{getReadableNumber(amount)}</Tooltip.Content>
            </Tooltip.Wrapper>
          </div>
        )
      })}
    </div>
  )
}

const statusKeys = [
  'PHYS DEF',
  'Spell DEF',
  'HP',
  'MP',
  'EVA',
  'Accuracy',
  'PHYS ATK',
] as const

type MergeObject = {
  [key in 'Level' | statusEffects]: number
} & Partial<{ [key in ItemTypes]: number }>

const mergeLevels = (data: MergeObject[]) => {
  const result: Partial<MergeObject> = {}

  data.forEach((object) => {
    for (const [key, value] of Object.entries(object) as Array<
      [ItemTypes, number]
    >) {
      if (key in result) {
        result[key] = (result[key] as number) + value
      } else {
        result[key] = value
      }
    }
  })

  if ('Level' in result) delete result.Level
  // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  statusKeys.forEach((key) => delete result[key])

  return result
}

const extractRarity = (name: string): RarityTypes => {
  const rarity = name.match(/^([\S]+)/gm)

  console.log(name)

  if (rarity === null) return 'Common'

  switch (rarity[0]) {
    case '[L]':
      return 'Legendary'
    case '[E]':
      return 'Epic'
    case '[R]':
      return 'Epic'
    case '[UC]':
      return 'Uncommon'
    default:
      return 'Common'
  }
}
