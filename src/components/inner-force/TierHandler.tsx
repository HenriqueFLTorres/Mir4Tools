'use client'
import {
  InnerForceBloodsAtom,
  InnerForceTabAtom,
  type InnerForceObject,
} from '@/atoms/InnerForce'
import { getBloodSetObject } from '@/utils/index'
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
      initial: getValidNumber(
        bloodTab,
        5 * (type === 'increment' ? tier + 1 : tier - 1)
      ),
      final: getValidNumber(
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
  const currentTier = Math.round(minLevel / 5) + 1

  return (
    <div className="flex items-center text-base font-bold text-white">
      <button
        aria-label={'Decrement constitution tier'}
        onClick={() => handleStageChange('decrement')}
        className="rounded-l-full bg-primary-500 p-2 transition-colors hover:bg-primary-450"
      >
        -
      </button>
      <p className="bg-primary-500 p-2">Tier {currentTier}</p>
      <button
        aria-label={'Increment constitution tier'}
        onClick={() => handleStageChange('increment')}
        className="rounded-r-full bg-primary-500 p-2 transition-colors hover:bg-primary-450"
      >
        +
      </button>
    </div>
  )
}

function getValidNumber(bloodTab: BloodSets, value: number) {
  let MAX_VALUE = 100

  if (
    ['Violet Mist Art', 'Northern Profound Art', 'Toad Stance'].includes(
      bloodTab
    )
  ) {
    MAX_VALUE = 60
  }

  if (value < 1) return 1
  if (value > MAX_VALUE) return MAX_VALUE
  return value
}
