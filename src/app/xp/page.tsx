'use client';

import GeneratedXPTable from '@/components/xp/GeneratedXPTable';
import LevelCalculations from '@/components/xp/LevelCalculations';
import PercentageDifference from '@/components/xp/PercentageDifference';
import SquareAndPeak from '@/components/xp/SquareAndPeak';
import Timer from '@/components/xp/Timer';
import Vigor from '@/components/xp/Vigor';
import XPPerLevel from '@/data/XPPerLevel';
import { getPercentage } from '@/utils/index';
import { useState } from 'react';

export default function Home() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [xpPerMinute, setXPperMinute] = useState<undefined | number>(undefined);
  const [percentages, setPercentages] = useState<PercentageState>({
    initial: undefined,
    final: undefined,
  });
  const [levels, setLevels] = useState<LevelState>({
    initial: undefined,
    initialPercentage: undefined,
    final: undefined,
  });

  const LevelGap =
    levels.initial && levels.final
      ? XPPerLevel[`${Number(levels.final) - 1}` as Level]
      : '';

  const XPToTargetLevel = !!LevelGap
    ? getPercentage(LevelGap, 100 - Number(levels.initialPercentage ?? percentages.final))
    : undefined;

  const XPPerMinute = xpPerMinute
    ? xpPerMinute
    : levels.initial && levels.final && percentages.initial && percentages.final
    ? getPercentage(
        XPPerLevel[`${levels.initial}`],
        (Number(levels.initialPercentage ?? percentages.final) - Number(percentages.initial)) / 5
      )
    : 0;

  return (
    <>
      <Timer />

      <div className='absolute right-4 top-4 z-50 flex flex-col gap-4'>
        <SquareAndPeak
          XPPerHour={XPPerMinute * 60}
          currentXP={getPercentage(LevelGap, Number(levels.initialPercentage ?? percentages.final))}
          totalXP={LevelGap ? LevelGap : 0}
        />

        <Vigor XPPerMinute={XPPerMinute} levels={levels} />
      </div>

      <PercentageDifference
        percentages={percentages}
        setPercentages={setPercentages}
        invalidInput={isInvalid}
        setIsInvalid={setIsInvalid}
        xpPerMinute={xpPerMinute}
        setXPperMinute={setXPperMinute}
        initialPercentage={levels.initialPercentage}
        onChangeInitial={(value) => setLevels(prev => ({ ...prev, initialPercentage: value }))}
      />

      <LevelCalculations
        percentages={percentages}
        setPercentages={setPercentages}
        levels={levels}
        setLevels={setLevels}
        XPToTargetLevel={XPToTargetLevel}
        XPPerMinute={XPPerMinute}
        invalidInput={isInvalid}
      />

      <GeneratedXPTable
        XPPerMinute={XPPerMinute}
        XPToTargetLevel={XPToTargetLevel}
        invalidInput={isInvalid}
        currentLvl={levels.initial}
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
