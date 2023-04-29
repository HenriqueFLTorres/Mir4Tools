'use client';

import GeneratedXPTable from '@/components/xp/GeneratedXPTable';
import LevelCalculations from '@/components/xp/LevelCalculations';
import PercentageDifference from '@/components/xp/PercentageDifference';
import Timer from '@/components/xp/Timer';
import XPPerLevel from '@/data/XPPerLevel';
import { getPercentage } from '@/utils/index';
import { useState } from 'react';

export default function Home() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [percentages, setPercentages] = useState<PercentageState>({
    initial: "93.7718",
    final: "93.9311",
  });
  const [levels, setLevels] = useState<LevelState>({
    initial: "80",
    initialPercentage: "93.9311",
    final: "81",
  });

  const LevelGap =
    levels.initial && levels.final ? XPPerLevel[`${levels.final - 1}`] : '';

  const currentXP = levels.initial
    ? XPPerLevel[`${levels.initial}`] +
      getPercentage(LevelGap, percentages.final)
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

  return (
    <>
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
      />

      <GeneratedXPTable
        XPPerMinute={XPPerMinute}
        currentXP={currentXP}
        invalidInput={isInvalid}
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
