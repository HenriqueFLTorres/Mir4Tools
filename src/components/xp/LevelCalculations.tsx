import { Level, LevelState } from '@/app/xp/page';
import Input from '@/components/Input';
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
}: {
  levels: LevelState;
  setLevels: React.Dispatch<SetStateAction<LevelState>>;
  percentages: PercentageState;
  setPercentages: React.Dispatch<SetStateAction<PercentageState>>;
  XPToTargetLevel?: number;
  XPPerMinute: number;
}) {
  console.log(XPToTargetLevel);
  console.log(XPPerMinute);
  return (
    <section className='flex w-full items-center gap-4'>
      <div className='flex h-32 w-32 flex-col items-center justify-center rounded-full border-[.375rem] border-primary-400 bg-input-bottom-to-top p-4'>
        <input
          className='appearance-none bg-transparent text-center text-4xl font-bold text-primary-200 outline-none placeholder:text-primary-200/50'
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
          className='bg-transparent py-0 focus-within:bg-transparent hover:bg-transparent'
          onChange={(value) =>
            setPercentages((prev) => ({
              ...prev,
              final: formatForExperience(value),
            }))
          }
          suffix='%'
        />
      </div>

      <div className='flex w-full flex-col items-center gap-2'>
        <p className='mt-6 text-center text-xl font-medium text-white'>
          {XPToTargetLevel
            ? `${getReadableNumber(XPToTargetLevel)} (${millify(
                XPToTargetLevel
              )})`
            : ''}
        </p>

        <span className='flex h-1 w-full rounded-full bg-primary-400' />

        <p className='text-center text-base font-light text-white'>
          <b className='font-bold'>
            {XPToTargetLevel
              ? humanizeDuration(
                  moment
                    .duration((XPToTargetLevel / XPPerMinute) * 5, 'minutes')
                    .asMilliseconds(),
                  { round: true }
                )
              : 0}{' '}
            minutes
          </b>{' '}
          to level up
        </p>

        <p className='text-center text-base font-light text-white'>
          You are earning {getReadableNumber(XPPerMinute * 5)} XP every 5
          minutes
        </p>
      </div>

      <div className='flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full border-[.375rem] border-primary-400 bg-input-bottom-to-top p-4'>
        <input
          className='appearance-none bg-transparent text-center text-4xl font-bold text-primary-200 outline-none placeholder:text-primary-200/50'
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
