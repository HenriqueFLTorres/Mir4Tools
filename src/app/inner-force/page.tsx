'use client'
import { InnerForceBloodsAtom, InnerForceTabAtom } from '@/atoms/InnerForce'
import { SettingsAtom } from '@/atoms/Settings'
import Tooltip from '@/components/ToolTip'
import ItemFrame from '@/components/crafting/ItemFrame'
import BloodFrame from '@/components/inner-force/BloodFrame'
import TabButton from '@/components/inner-force/TabButton'
import TierHandler from '@/components/inner-force/TierHandler'
import {
  AllowedInventoryItemTypes,
  calculateBloodCost,
  calculateBloodEffects,
  effectToBloodName,
  extractItemRarity,
  formatEffectValue,
  formatItemName,
  getBloodIcon,
  getBloodsByTab,
  getReadableNumber,
} from '@/utils/index'
import { useAtomValue } from 'jotai'
import millify from 'millify'
import Image from 'next/image'
import { useMemo } from 'react'

const ItemRarities = [
  'Legendary',
  'Epic',
  'Rare',
  'Uncommon',
  'Common',
  'Default',
]

export default function InnerForce() {
  const bloodTab = useAtomValue(InnerForceTabAtom)
  const bloodObject = useAtomValue(InnerForceBloodsAtom)
  const { class: mir4Class } = useAtomValue(SettingsAtom)

  const sortedResult = useMemo(() => {
    const object = calculateBloodCost(bloodObject, mir4Class)
    const sortedObject = Object.entries(object)
      .sort(([name1], [name2]) => {
        const formatted1 = formatItemName(name1)
        const formatted2 = formatItemName(name2)

        if (formatted1 > formatted2) return -1
        if (formatted1 < formatted2) return 1

        return 0
      })
      .sort(([name1], [name2]) => {
        const rarity1 = ItemRarities.indexOf(extractItemRarity(name1))
        const rarity2 = ItemRarities.indexOf(extractItemRarity(name2))

        if (rarity1 > rarity2) return -1
        if (rarity1 < rarity2) return 1

        return 0
      })

    return sortedObject
  }, [JSON.stringify(bloodObject), mir4Class])

  const effectsObject = useMemo(() => {
    const object = calculateBloodEffects(bloodObject, mir4Class)
    const formattedObject = Object.entries(object).sort(([name1], [name2]) => {
      if (name1 < name2) return -1
      if (name1 > name2) return 1

      return 0
    })

    return formattedObject
  }, [JSON.stringify(bloodObject), mir4Class])

  return (
    <div className="relative mx-auto flex w-full max-w-[90rem] justify-center gap-8 px-6 pt-20 selection:bg-primary-800">
      <aside className="flex flex-col gap-4">
        <TabButton tabName="Muscle Strength Manual" />
        <TabButton tabName="Nine Yin Manual" />
        <TabButton tabName="Nine Yang Manual" />
        <TabButton tabName="Violet Mist Art" />
        <TabButton tabName="Northern Profound Art" />
        <TabButton tabName="Toad Stance" />
      </aside>

      <div className="flex max-w-[40rem] flex-col items-center gap-8">
        {effectsObject.length > 0 ? (
          <ul className="relative flex grid-cols-2 flex-col gap-1 rounded-md bg-primary-600 p-1 md:rounded-xl lg:grid">
            {effectsObject.map(([name, value]) => {
              const formattedName = formatItemName(name)

              if (
                AllowedInventoryItemTypes.includes(formattedName) ||
                value.final < value.initial
              ) {
                return <></>
              }

              const Icon =
                getBloodIcon[effectToBloodName[name as statusEffects]]

              const hasIncreased = value.final > value.initial

              return (
                <li
                  key={name}
                  className="flex items-center gap-4 rounded bg-primary-500/20 px-1 py-0.5 text-xs font-light text-white md:px-3 md:py-1.5 md:text-sm"
                >
                  <Icon className="h-6 w-6" />{' '}
                  <b className="mr-auto font-bold">{name}</b>
                  <p className="ml-4 shrink-0 text-end font-medium">
                    {hasIncreased ? (
                      <>
                        {formatEffectValue(name, value.initial)}{' '}
                        <span className="text-success-400">
                          {'>'} {formatEffectValue(name, value.final)}
                        </span>
                      </>
                    ) : (
                      formatEffectValue(name, value.initial)
                    )}
                  </p>
                </li>
              )
            })}
          </ul>
        ) : (
          <></>
        )}

        <ol className="flex items-center gap-6">
          {getBloodsByTab[bloodTab].map((blood) => (
            <BloodFrame
              key={blood}
              bloodName={blood}
              Icon={getBloodIcon[blood]}
            />
          ))}
        </ol>

        <div className="flex items-center gap-4">
          <TierHandler />

          <div className="flex items-center gap-4 rounded-full bg-primary-600 px-3 py-2 pr-6 text-xl font-bold text-white">
            <Image
              src={'/items/energy.webp'}
              alt={'Energy icon'}
              width={32}
              height={32}
            />
            {getReadableNumber(sortedResult.energy ?? 0)}
          </div>
        </div>

        <ul className="flex w-full flex-wrap items-center justify-center gap-4">
          {sortedResult.map(([name, value]) => {
            const formattedName = formatItemName(name)
            const itemRarity = extractItemRarity(name)

            if (
              !AllowedInventoryItemTypes.includes(formattedName) ||
              formattedName === ('energy' as ItemWithRarity)
            ) {
              return <></>
            }

            return (
              <li key={name} className="flex flex-col items-center gap-2">
                <ItemFrame item={formattedName} rarity={itemRarity} />
                <Tooltip.Wrapper>
                  <Tooltip.Trigger
                    asChild={false}
                    aria-label="See detailed amount"
                    className="w-max rounded bg-primary-600 px-3 py-1 text-center text-sm font-medium text-white"
                  >
                    {millify(value)}
                  </Tooltip.Trigger>
                  <Tooltip.Content>{getReadableNumber(value)}</Tooltip.Content>
                </Tooltip.Wrapper>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
