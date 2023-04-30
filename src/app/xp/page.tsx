'use client';

import Input from '@/components/Input';
import GeneratedXPTable from '@/components/xp/GeneratedXPTable';
import LevelCalculations from '@/components/xp/LevelCalculations';
import PercentageDifference from '@/components/xp/PercentageDifference';
import Timer from '@/components/xp/Timer';
import XPPerLevel from '@/data/XPPerLevel';
import { getPercentage } from '@/utils/index';
import millify from 'millify';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [percentages, setPercentages] = useState<PercentageState>({
    initial: undefined,
    final: undefined,
  });
  const [levels, setLevels] = useState<LevelState>({
    initial: undefined,
    initialPercentage: undefined,
    final: undefined,
  });
  const [vigor, setVigor] = useState(0);

  const LevelGap =
    levels.initial && levels.final
      ? XPPerLevel[`${Number(levels.final) - 1}` as Level]
      : '';

  const currentXP = levels.initial
    ? getPercentage(LevelGap, percentages.final)
    : 0;

  const XPToTargetLevel = !!LevelGap
    ? getPercentage(LevelGap, 100 - Number(percentages.final))
    : undefined;

  const XPPerMinute =
    levels.initial && levels.final && percentages.initial && percentages.final
      ? getPercentage(
          XPPerLevel[`${levels.initial}`],
          (Number(percentages.final) - Number(percentages.initial)) / 5
        )
      : 0;

  const acquiredXPWithVigor = XPPerMinute * 60 * vigor;
  const acquiredPercentage = levels.initial
    ? ((acquiredXPWithVigor / XPPerLevel[`${levels.initial}`]) * 100).toFixed(4)
    : 0;

  return (
    <>
      <div className='absolute right-4 top-56 flex flex-row items-center gap-2'>
        <Image
          src='/items/vigor.png'
          alt=''
          width={72}
          height={72}
          className='rounded-full bg-black/40 p-2'
        />

        <Input
          className={
            'rounded-md bg-black/40 hover:bg-black/60 focus-within:bg-black/60 text-secondary-100 [&>input]:max-w-[5rem]'
          }
          suffix='hour'
          placeholder='duration'
          onChange={(value) =>
            setVigor((prev) =>
              Number.isInteger(Number(value)) ? Number(value) : prev
            )
          }
          value={String(vigor)}
        />
      </div>

      <span className='absolute right-4 text-white flex flex-col text-right font-light top-72 items-end gap-2 p-2 rounded-md bg-black/40'>
        <b className='font-bold'>{millify(acquiredXPWithVigor)} XP</b>
        {acquiredPercentage} %
      </span>

      <Timer />

      <PercentageDifference
        percentages={percentages}
        setPercentages={setPercentages}
        invalidInput={isInvalid}
        setIsInvalid={setIsInvalid}
      />

      <LevelCalculations
        percentages={percentages}
        setPercentages={setPercentages}
        levels={levels}
        setLevels={setLevels}
        XPToTargetLevel={XPToTargetLevel}
        XPPerMinute={XPPerMinute}
        invalidInput={isInvalid}
        vigor={vigor}
      />

      <GeneratedXPTable
        XPPerMinute={XPPerMinute}
        XPToTargetLevel={XPToTargetLevel}
        invalidInput={isInvalid}
        currentLvl={levels.initial}
        currentXP={currentXP}
        vigor={vigor}
      />

      <section></section>
    </>
  );
}

export type Level = keyof typeof XPPerLevel;

export type LevelState = {
  initial?: Level;
  initialPercentage?: string;
  final?: Level;
};
