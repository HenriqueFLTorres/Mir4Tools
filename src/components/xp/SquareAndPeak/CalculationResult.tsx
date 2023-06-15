'use client'

import { type Level } from '@/app/xp/page'
import { XPCalculatorAtom, XPExtension } from '@/atoms/XPCalculator'
import XPPerLevel from '@/data/XPPerLevel'
import { getPercentage } from '@/utils/index'
import humanizeDuration from 'humanize-duration'
import { useAtom } from 'jotai'
import moment from 'moment'
import { useEffect } from 'react'

let resultInMinutes = 0

export default function SquareAndPeakResult() {
  const [{ xpPerMinute, manualCalculation, levels, percentages }] =
    useAtom(XPCalculatorAtom)
  const [{ magicSquare, secretPeak }] = useAtom(XPExtension)

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

  const XPPerMinute = xpPerMinute ?? manualCalculation.xpPerMinute

  const XPPerReset =
    magicSquare.xpPerRun * magicSquare.tickets +
    secretPeak.xpPerRun * secretPeak.tickets

  const ticketsXPPerMinute = XPPerReset / 1440 // XP per day divided by minutes per day

  useEffect(() => {
    resultInMinutes =
      (XPToTargetLevel ?? 0) / (ticketsXPPerMinute + (XPPerMinute ?? 0))
  }, [XPToTargetLevel, ticketsXPPerMinute, XPPerMinute])

  return (
    <p className="rounded-md bg-primary-600 px-4 py-2 text-sm text-white">
      {humanizeDuration(
        moment.duration(resultInMinutes, 'minutes').asMilliseconds(),
        { round: true }
      )}
    </p>
  )
}
