'use client'
import { InnerForceBloodsAtom, InnerForceTabAtom } from '@/atoms/InnerForce'
import { SettingsAtom } from '@/atoms/Settings'
import { ItemRarities } from '@/components/constitution/CostInformation'
import BloodFrame from '@/components/inner-force/BloodFrame'
import DesktopEffectsTableSkeleton from '@/components/inner-force/EffectsTable/Desktop.Skeleton'
import MobileEffectsTableSkeleton from '@/components/inner-force/EffectsTable/Mobile.skeleton'
import EnergyCostSkeleton from '@/components/inner-force/EnergyCost/Skeleton'
import TabButtonSkeleton from '@/components/inner-force/TabButton.skeleton'
import TierHandlerSkeleton from '@/components/inner-force/TierHandler.skeleton'
import {
  calculateBloodCost,
  calculateBloodEffects,
  extractItemRarity,
  formatItemName,
  getBloodIcon,
  getBloodsByTab,
} from '@/utils/index'
import { useAtomValue } from 'jotai'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const TabButton = dynamic(
  async () => await import('@/components/inner-force/TabButton'),
  {
    ssr: false,
    loading: () => <TabButtonSkeleton />,
  }
)
const EnergyCost = dynamic(
  async () => await import('@/components/inner-force/EnergyCost'),
  {
    ssr: false,
    loading: () => <EnergyCostSkeleton />,
  }
)
const TierHandler = dynamic(
  async () => await import('@/components/inner-force/TierHandler'),
  {
    ssr: false,
    loading: () => <TierHandlerSkeleton />,
  }
)
const ItemCostList = dynamic(
  async () => await import('@/components/inner-force/ItemCostList'),
  {
    ssr: false,
  }
)
const DesktopEffectsTable = dynamic(
  async () => await import('@/components/inner-force/EffectsTable/Desktop'),
  {
    ssr: false,
    loading: () => <DesktopEffectsTableSkeleton />,
  }
)
const MobileEffectsTable = dynamic(
  async () => await import('@/components/inner-force/EffectsTable/Mobile'),
  {
    ssr: false,
    loading: () => <MobileEffectsTableSkeleton />,
  }
)

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
    <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-8 px-6 pt-28 selection:bg-primary-800 xl:flex-row xl:items-start">
      <aside className="custom-scroll mx-auto flex w-full max-w-max flex-row gap-4 overflow-x-auto py-4 xl:mx-0 xl:w-max xl:shrink-0 xl:flex-col xl:py-0">
        <TabButton tabName="Muscle Strength Manual" />
        <TabButton tabName="Nine Yin Manual" />
        <TabButton tabName="Nine Yang Manual" />
        <TabButton tabName="Violet Mist Art" />
        <TabButton tabName="Northern Profound Art" />
        <TabButton tabName="Toad Stance" />
      </aside>

      <div className="flex max-w-[40rem] flex-col items-center gap-8">
        <ol className="grid scale-[0.8] grid-cols-2 items-center gap-6 sm:scale-100 md:flex">
          {getBloodsByTab[bloodTab].map((blood) => (
            <BloodFrame
              key={blood}
              bloodName={blood}
              Icon={getBloodIcon[blood]}
            />
          ))}
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <TierHandler />

          <EnergyCost
            cost={sortedResult.find(([name]) => name === 'energy')?.[1]}
          />
        </div>

        <ItemCostList sortedResult={sortedResult} />
      </div>

      <MobileEffectsTable effectsObject={effectsObject} />

      <DesktopEffectsTable effectsObject={effectsObject} />
    </div>
  )
}
