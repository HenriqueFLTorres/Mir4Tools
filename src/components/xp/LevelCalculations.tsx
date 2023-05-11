import { Level, LevelState } from '@/app/xp/page';
import Input from '@/components/Input';
import { cn } from '@/utils/classNames';
import {
  formatForExperience,
  formatLevel,
  getReadableNumber,
} from '@/utils/index';
import humanizeDuration from 'humanize-duration';
import { SetStateAction } from 'jotai';
import millify from 'millify';
import moment from 'moment';
import React from 'react';

export default function LevelCalculations({
  levels,
  setLevels,
  percentages,
  setPercentages,
  XPToTargetLevel = 0,
  XPPerMinute,
  invalidInput,
}: {
  levels: LevelState;
  setLevels: React.Dispatch<SetStateAction<LevelState>>;
  percentages: PercentageState;
  setPercentages: React.Dispatch<SetStateAction<PercentageState>>;
  XPToTargetLevel?: number;
  XPPerMinute: number;
  invalidInput: boolean;
}) {
  const successfulInput = !!levels.initial && !!levels.final;

  return (
    <section className='flex w-full items-center gap-4'>
      <div className={cn('flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border-8 border-white/10 bg-black/10 p-4 motion-safe:transition-colors', { ["border-white/80"]: successfulInput })}>
        <input
          className='w-20 appearance-none bg-transparent text-center text-4xl font-bold text-white outline-none placeholder:text-white/20'
          placeholder='100'
          value={levels.initial ?? ''}
          onChange={(e) =>
            setLevels((prev) => ({
              ...prev,
              initial: formatLevel(e.target.value) as Level,
            }))
          }
          onBlur={() =>
            !levels.final &&
            setLevels((prev) =>
              prev.initial
                ? { ...prev, final: `${Number(prev.initial) + 1}` as Level }
                : prev
            )
          }
        />
        <Input
          placeholder='0.0000'
          value={percentages.final}
          className='bg-transparent bg-none py-0 focus-within:bg-transparent hover:bg-transparent [&>input]:w-16'
          onChange={(value) =>
            setPercentages((prev) => ({
              ...prev,
              final: formatForExperience(value),
            }))
          }
          suffix='%'
        />
      </div>

      <div className='grid h-full w-full grid-rows-[1fr_4px_1fr] flex-col items-center gap-2'>
        <p className='px-4 text-center text-xl font-medium text-neutral-200'>
          {XPToTargetLevel && !invalidInput
            ? `${getReadableNumber(XPToTargetLevel)} (${millify(
                XPToTargetLevel
              )})`
            : ''}
        </p>

        <span
          className={cn(
            'flex h-1 w-full rounded-full bg-white/10 motion-safe:transition-colors',
            { ['bg-white/80']: successfulInput }
          )}
        />

        <div className='flex flex-col items-center gap-2 px-4'>
          <p className='text-center text-base font-light text-neutral-200'>
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

          <p className='text-center text-base font-light text-neutral-200'>
            You are earning{' '}
            <b className='font-bold'>
              {invalidInput ? 0 : getReadableNumber(XPPerMinute * 5)}
            </b>{' '}
            XP every <b className='font-bold'>5 minutes</b>
          </p>
        </div>
      </div>

      <div className={cn('flex h-32 w-32 shrink-0 flex-col items-center justify-center gap-1 rounded-full border-8 border-white/10 bg-black/10 p-4 motion-safe:transition-colors', { ["border-white/80"]: successfulInput })}>
        <input
          className='w-20 appearance-none bg-transparent text-center text-4xl font-bold text-white outline-none placeholder:text-white/20'
          placeholder='100'
          value={levels.final ?? ''}
          onChange={(e) =>
            setLevels((prev) => ({
              ...prev,
              final: formatLevel(e.target.value) as Level,
            }))
          }
        />
      </div>
    </section>
  );
}
