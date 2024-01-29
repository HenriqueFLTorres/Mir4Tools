'use client'
import {
  InnerForceBloodsAtom,
  InnerForceTabAtom,
  type InnerForceObject,
} from '@/atoms/InnerForce'
import {
  getBloodSetObject,
  getMaxIFTier,
  getValidBloodValue,
} from '@/utils/index'
import { useAtom, useAtomValue } from 'jotai'
import { useMemo } from 'react'

export default function TierHandler() {
  const bloodTab = useAtomValue(InnerForceTabAtom)
  const [bloodObject, setBloodObject] = useAtom(InnerForceBloodsAtom)
  const targetedObject = useMemo(
    () => getBloodSetObject(bloodTab, bloodObject),
    [bloodTab, bloodObject]
  )

  const handleStageChange = (type: 'increment' | 'decrement') => {
    const minLevel = Math.min(
      ...Object.values(targetedObject).map((values) => values.initial)
    )
    const tier = Math.round(minLevel / 5)

    const newValues = Object.values(targetedObject).map(() => ({
      initial: getValidBloodValue(
        bloodTab,
        5 * (type === 'increment' ? tier + 1 : tier - 1)
      ),
      final: getValidBloodValue(
        bloodTab,
        5 * (type === 'increment' ? tier + 2 : tier)
      ),
    }))

    const merged = Object.keys(targetedObject).reduce(
      (obj, key, index) => ({ ...obj, [key]: newValues[index] }),
      {}
    ) as InnerForceObject

    setBloodObject((prev) => ({ ...prev, ...merged }))
  }

  const minLevel = Math.min(
    ...Object.values(targetedObject).map((values) => values.initial)
  )
  const currentTier = Math.min(
    Math.round(minLevel / 5) + 1,
    getMaxIFTier[bloodTab]
  )

  return (
    <div className="flex h-12 items-center text-base font-bold text-white">
      <button
        aria-label={'Decrement constitution tier'}
        onClick={() => handleStageChange('decrement')}
        className="h-full rounded-l-full bg-primary-500 px-3 py-2 transition-colors hover:bg-primary-450"
      >
        -
      </button>
      <p className="flex h-full items-center bg-primary-500 p-2 text-center">
        Tier {currentTier}
      </p>
      <button
        aria-label={'Increment constitution tier'}
        onClick={() => handleStageChange('increment')}
        className="h-full rounded-r-full bg-primary-500 px-3 py-2 transition-colors hover:bg-primary-450"
      >
        +
      </button>
    </div>
  )
}
