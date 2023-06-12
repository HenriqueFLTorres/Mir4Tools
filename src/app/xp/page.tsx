'use client'

import { XPCalculatorAtom } from '@/atoms/XPCalculator'
import XPPerLevel from '@/data/XPPerLevel'
import { getPercentage } from '@/utils/index'
import { useAtom } from 'jotai'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const GeneratedXPTable = dynamic(
  async () => await import('@/components/xp/GeneratedXPTable'),
  { ssr: false }
)
const LevelCalculations = dynamic(
  async () => await import('@/components/xp/LevelCalculations'),
  { ssr: false }
)
const PercentageDifference = dynamic(
  async () => await import('@/components/xp/PercentageDifference'),
  { ssr: false }
)
const SquareAndPeak = dynamic(
  async () => await import('@/components/xp/SquareAndPeak'),
  { ssr: false }
)
const Timer = dynamic(async () => await import('@/components/xp/Timer'), {
  ssr: false,
})
const Vigor = dynamic(async () => await import('@/components/xp/Vigor'), {
  ssr: false,
})

export default function Home() {
  const [{ levels, percentages }, setXPCalc] = useAtom(XPCalculatorAtom)
  const [isInvalid, setIsInvalid] = useState(false)

  const LevelGap =
    levels.initial && levels.final
      ? XPPerLevel[(Number(levels.final) - 1) as Level]
      : ''

  const XPToTargetLevel = LevelGap
    ? getPercentage(
        LevelGap,
        100 - Number(levels.initialPercentage ?? percentages.final)
      )
    : undefined

  useEffect(() => {
    if (levels.initial) {
      setXPCalc((prev) => ({
        ...prev,
        xpPerMinute: getPercentage(
          XPPerLevel[levels.initial as Level],
          (Number(levels.initialPercentage ?? percentages.final) -
            Number(percentages.initial)) /
            5
        ),
      }))
    }
  }, [
    levels.initial,
    levels.initialPercentage,
    percentages.final,
    percentages.initial,
    setXPCalc,
  ])

  return (
    <>
      <Timer />

      <section className="absolute right-4 top-4 z-50 flex flex-col items-end gap-4">
        <SquareAndPeak
          currentXP={getPercentage(
            LevelGap,
            Number(levels.initialPercentage ?? percentages.final)
          )}
          totalXP={LevelGap || 0}
          XPToTargetLevel={XPToTargetLevel}
        />

        <Vigor />
      </section>

      <PercentageDifference
        invalidInput={isInvalid}
        setIsInvalid={setIsInvalid}
      />

      <LevelCalculations
        XPToTargetLevel={XPToTargetLevel}
        invalidInput={isInvalid}
      />

      <GeneratedXPTable
        XPToTargetLevel={XPToTargetLevel}
        invalidInput={isInvalid}
      />
    </>
  )
}

export type Level = keyof typeof XPPerLevel

export interface LevelState {
  initial?: Level
  initialPercentage?: string
  final?: Level
}
