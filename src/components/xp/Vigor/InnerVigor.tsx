'use client'

import { XPCalculatorAtom, XPExtension } from '@/atoms/XPCalculator'
import Input from '@/components/Input'
import XPPerLevel from '@/data/XPPerLevel'
import { useAtom } from 'jotai'
import millify from 'millify'
import { useEffect } from 'react'

let acquiredXPWithVigor = 0
let acquiredPercentage = '0.0000'

export default function InnerVigor() {
  const [{ levels, xpPerMinute = 0, manualCalculation }] =
    useAtom(XPCalculatorAtom)
  const [{ vigor }, setExtension] = useAtom(XPExtension)

  const XPPerMinute = xpPerMinute || (manualCalculation.xpPerMinute ?? 0)

  useEffect(() => {
    acquiredXPWithVigor = XPPerMinute * 60 * vigor
  }, [XPPerMinute, vigor])

  useEffect(() => {
    acquiredPercentage = levels.initial
      ? ((acquiredXPWithVigor / XPPerLevel[`${levels.initial}`]) * 100).toFixed(
          4
        )
      : '0.0000'
  }, [acquiredXPWithVigor, levels.initial])

  return (
    <div className="flex items-center gap-2">
      <Input
        className={'max-w-[5rem] shrink-0 [&>div]:py-1'}
        suffix="h"
        placeholder="duration"
        onChange={(value) => {
          setExtension((prev) => ({
            ...prev,
            vigor:
              Number.isInteger(Number(value)) && Number(value) < 1000
                ? Number(value)
                : prev.vigor,
          }))
        }}
        value={String(vigor)}
      />

      <div className="flex w-full items-baseline justify-end gap-3 truncate rounded-md bg-primary-600 px-3 py-1 text-base text-white">
        <span className="inline-flex gap-2">
          <p className="truncate">{millify(acquiredXPWithVigor)} </p>
          <b className="shrink-0 font-bold">XP</b>
        </span>
        <span className="inline-flex gap-2">
          <p className="truncate">{acquiredPercentage}</p>
          <b className="shrink-0 font-bold">%</b>
        </span>
      </div>
    </div>
  )
}
