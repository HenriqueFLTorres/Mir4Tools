'use client';

import { XPCalculatorAtom } from '@/atoms/XPCalculator';
import GeneratedXPTable from '@/components/xp/GeneratedXPTable';
import LevelCalculations from '@/components/xp/LevelCalculations';
import PercentageDifference from '@/components/xp/PercentageDifference';
import SquareAndPeak from '@/components/xp/SquareAndPeak';
import Timer from '@/components/xp/Timer';
import Vigor from '@/components/xp/Vigor';
import XPPerLevel from '@/data/XPPerLevel';
import { getPercentage } from '@/utils/index';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export default function Home() {
  const [{ levels, percentages, xpPerMinute }, setXPCalc] =
    useAtom(XPCalculatorAtom);
  const [isInvalid, setIsInvalid] = useState(false);

  const LevelGap =
    levels.initial && levels.final
      ? XPPerLevel[`${Number(levels.final) - 1}` as Level]
      : '';

  const XPToTargetLevel = !!LevelGap
    ? getPercentage(
        LevelGap,
        100 - Number(levels.initialPercentage ?? percentages.final)
      )
    : undefined;

  useEffect(() => {
    if (!!levels.initial) {
      setXPCalc((prev) => ({
        ...prev,
        xpPerMinute: getPercentage(
          XPPerLevel[levels.initial as Level],
          (Number(levels.initialPercentage ?? percentages.final) -
            Number(percentages.initial)) /
            5
        ),
      }));
    }
  }, [
    levels.initial,
    levels.initialPercentage,
    percentages.final,
    percentages.initial,
    setXPCalc,
  ]);

  const XPPerMinute = xpPerMinute
    ? xpPerMinute
    : levels.initial && levels.final && percentages.initial && percentages.final
    ? getPercentage(
        XPPerLevel[`${levels.initial}`],
        (Number(levels.initialPercentage ?? percentages.final) -
          Number(percentages.initial)) /
          5
      )
    : 0;

  return (
    <>
      <Timer />

      <div className='absolute right-4 top-4 z-50 flex flex-col gap-4'>
        <SquareAndPeak
          XPPerHour={XPPerMinute * 60}
          currentXP={getPercentage(
            LevelGap,
            Number(levels.initialPercentage ?? percentages.final)
          )}
          totalXP={LevelGap ? LevelGap : 0}
        />

        <Vigor />
      </div>

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
  );
}

export type Level = keyof typeof XPPerLevel;

export type LevelState = {
  initial?: Level;
  initialPercentage?: string;
  final?: Level;
};
