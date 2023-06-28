'use client'

import { type Level } from '@/app/xp/page'
import { XPCalculatorAtom, XPInvalidInput } from '@/atoms/XPCalculator'
import XPPerLevel from '@/data/XPPerLevel'
import { cn } from '@/utils/classNames'
import { formatLevel, getPercentage, getReadableNumber } from '@/utils/index'
import humanizeDuration from 'humanize-duration'
import { useAtom } from 'jotai'
import millify from 'millify'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '../../../public/locales/client'

export default function LevelCalculations() {
  const [
    { levels, percentages, xpPerMinute = 0, manualCalculation },
    setXPCalc,
  ] = useAtom(XPCalculatorAtom)
  const [invalidInput] = useAtom(XPInvalidInput)
  const { t, i18n } = useTranslation()

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

  const successfulInput = !!levels.initial && !!levels.final

  const XPPerMinute = xpPerMinute || (manualCalculation.xpPerMinute ?? 0)

  return (
    <section id="experienceLevels" className="flex w-full max-w-3xl items-center gap-4">
      <LevelFrame
        label={t('Current Level')}
        placeholder="100"
        percentage={`${levels.initialPercentage ?? percentages.final ?? 0}%`}
        value={String(levels.initial ?? '')}
        onChange={(value) => {
          setXPCalc((prev) => ({
            ...prev,
            levels: {
              ...prev.levels,
              initial: formatLevel(value),
            },
          }))
        }}
        onBlur={() => {
          !levels.final &&
            setXPCalc((prev) => ({
              ...prev,
              levels: {
                ...prev.levels,
                final: prev.levels.initial
                  ? ((Number(prev.levels.initial) + 1) as Level)
                  : prev.levels.final,
              },
            }))
        }}
        success={successfulInput}
      />

      <div className="grid h-full w-full grid-rows-[1fr_4px_1fr] flex-col items-center gap-4 pt-11">
        <p className="mt-auto px-4 text-center text-xl font-medium text-white">
          {XPToTargetLevel && !invalidInput
            ? `${getReadableNumber(XPToTargetLevel)} (${millify(
                XPToTargetLevel
              )})`
            : ''}
        </p>

        <span
          className={cn(
            'flex h-1 w-full rounded-full bg-primary-500 motion-safe:transition-colors',
            { 'bg-white': successfulInput }
          )}
        />

        <div className="flex flex-col items-center gap-2 px-4">
          <p className="text-center text-base font-light text-white">
            <b className="font-bold">
              {XPToTargetLevel && !invalidInput
                ? humanizeDuration(
                    moment
                      .duration(XPToTargetLevel / XPPerMinute, 'minutes')
                      .asMilliseconds(),
                    { round: true, language: i18n.language }
                  )
                : 0}
            </b>{' '}
            {t('to level up')}
          </p>

          <p className="text-center text-base font-light text-white">
            {t('You are earning')}{' '}
            <b className="font-bold">
              {invalidInput ? 0 : getReadableNumber(XPPerMinute * 5)}
            </b>{' '}
            {t('XP every')} <b className="font-bold">5 {t('minutes')}</b>
          </p>
        </div>
      </div>

      <LevelFrame
        label={t('Desired Level')}
        placeholder="100"
        value={String(levels.final ?? '')}
        onChange={(value) => {
          setXPCalc((prev) => ({
            ...prev,
            levels: {
              ...prev.levels,
              final: formatLevel(value),
            },
          }))
        }}
        success={successfulInput}
      />
    </section>
  )
}

function LevelFrame({
  label,
  percentage,
  onChange,
  value,
  success,
  ...props
}: {
  label: string
  percentage?: string
  onChange: (value: string) => void
  value?: string
  success: boolean
} & Omit<React.HTMLAttributes<HTMLElement>, 'value' | 'onChange'>) {
  return (
    <label className="flex shrink-0 flex-col gap-4 text-center text-lg font-bold text-white">
      {label}

      <div
        className={
          'relative flex h-32 w-32 flex-col items-center justify-center'
        }
      >
        <Image
          src={'/images/level-frame.svg'}
          alt=""
          width={136}
          height={136}
          className="pointer-events-none absolute select-none"
        />
        <input
          className={cn(
            'relative z-10 w-28 bg-transparent text-center text-4xl font-bold text-white outline-none drop-shadow-sm selection:bg-primary-800 placeholder:text-white/70 motion-safe:transition-colors',
            { 'pt-4': !!percentage }
          )}
          {...props}
          value={value}
          onChange={(e) => {
            onChange(e.target.value)
          }}
        />
        {percentage ? (
          <p className="relative z-10 text-sm font-normal text-white">
            {percentage}
          </p>
        ) : (
          <></>
        )}
      </div>
    </label>
  )
}
