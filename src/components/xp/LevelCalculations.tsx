import { Level } from '@/app/xp/page';
import { XPCalculatorAtom } from '@/atoms/XPCalculator';
import { cn } from '@/utils/classNames';
import { formatLevel, getReadableNumber } from '@/utils/index';
import humanizeDuration from 'humanize-duration';
import { useAtom } from 'jotai';
import millify from 'millify';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

export default function LevelCalculations({
  XPToTargetLevel = 0,
  invalidInput,
}: {
  XPToTargetLevel?: number;
  invalidInput: boolean;
}) {
  const [
    { levels, percentages, xpPerMinute = 0, manualCalculation },
    setXPCalc,
  ] = useAtom(XPCalculatorAtom);
  const successfulInput = !!levels.initial && !!levels.final;

  const XPPerMinute = xpPerMinute
    ? xpPerMinute
    : manualCalculation.xpPerMinute ?? 0;

  return (
    <section className='flex w-full items-center gap-4'>
      <LevelFrame
        label='Current Level'
        placeholder='100'
        percentage={`${levels.initialPercentage ?? percentages.final ?? 0}%`}
        value={levels.initial ?? ''}
        onChange={(value) =>
          setXPCalc((prev) => ({
            ...prev,
            levels: {
              ...prev.levels,
              initial: formatLevel(value),
            },
          }))
        }
        onBlur={() =>
          !levels.final &&
          setXPCalc((prev) => ({
            ...prev,
            levels: {
              ...prev.levels,
              final: prev.levels.initial
                ? (`${Number(prev.levels.initial) + 1}` as Level)
                : prev.levels.final,
            },
          }))
        }
        success={successfulInput}
      />

      <div className='grid h-full w-full grid-rows-[1fr_4px_1fr] flex-col items-center gap-4 pt-11'>
        <p className='mt-auto px-4 text-center text-xl font-medium text-white'>
          {XPToTargetLevel && !invalidInput
            ? `${getReadableNumber(XPToTargetLevel)} (${millify(
                XPToTargetLevel
              )})`
            : ''}
        </p>

        <span
          className={cn(
            'flex h-1 w-full rounded-full bg-primary-500 motion-safe:transition-colors',
            { ['bg-white']: successfulInput }
          )}
        />

        <div className='flex flex-col items-center gap-2 px-4'>
          <p className='text-center text-base font-light text-white'>
            <b className='font-bold'>
              {XPToTargetLevel && !invalidInput
                ? humanizeDuration(
                    moment
                      .duration(XPToTargetLevel / XPPerMinute, 'minutes')
                      .asMilliseconds(),
                    { round: true }
                  )
                : 0}
            </b>{' '}
            to level up
          </p>

          <p className='text-center text-base font-light text-white'>
            You are earning{' '}
            <b className='font-bold'>
              {invalidInput ? 0 : getReadableNumber(XPPerMinute * 5)}
            </b>{' '}
            XP every <b className='font-bold'>5 minutes</b>
          </p>
        </div>
      </div>

      <LevelFrame
        label='Desired Level'
        placeholder='100'
        value={levels.final ?? ''}
        onChange={(value) =>
          setXPCalc((prev) => ({
            ...prev,
            levels: {
              ...prev.levels,
              final: formatLevel(value),
            },
          }))
        }
        success={successfulInput}
      />
    </section>
  );
}

function LevelFrame({
  label,
  percentage,
  onChange,
  value,
  success,
  ...props
}: {
  label: string;
  percentage?: string;
  onChange: (value: string) => void;
  value?: string;
  success: boolean;
} & Omit<React.HTMLAttributes<HTMLElement>, 'value' | 'onChange'>) {
  return (
    <label className='flex shrink-0 flex-col gap-4 text-center text-lg font-bold text-white'>
      {label}

      <div
        className={
          'relative flex h-32 w-32 flex-col items-center justify-center'
        }
      >
        <Image
          src={'/images/level-frame.svg'}
          alt=''
          width={136}
          height={136}
          className='pointer-events-none absolute select-none'
        />
        <input
          className={cn(
            'relative z-10 w-28 bg-transparent text-center text-4xl font-bold text-white outline-none drop-shadow-sm selection:bg-primary-800 placeholder:text-white/70 motion-safe:transition-colors',
            { ['pt-4']: !!percentage }
          )}
          {...props}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {percentage ? (
          <p className='relative z-10 text-sm font-normal text-white'>
            {percentage}
          </p>
        ) : (
          <></>
        )}
      </div>
    </label>
  );
}
