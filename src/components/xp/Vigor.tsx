'use client';

import { LevelState } from '@/app/xp/page';
import Input from '@/components/Input';
import XPPerLevel from '@/data/XPPerLevel';
import millify from 'millify';
import Image from 'next/image';
import { useState } from 'react';

export default function Vigor({
  XPPerMinute,
  levels,
}: {
  XPPerMinute: number;
  levels: LevelState;
}) {
  const [vigor, setVigor] = useState(0);

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
          className={'rounded-md bg-black/40 [&>input]:max-w-[5rem]'}
          suffix='h'
          placeholder='duration'
          onChange={(value) =>
            setVigor((prev) =>
              Number.isInteger(Number(value)) ? Number(value) : prev
            )
          }
          value={String(vigor)}
        />
      </div>

      <span className='absolute right-4 top-72 flex flex-col items-end gap-2 rounded-md bg-black/40 p-2 text-right font-light text-white'>
        <b className='font-bold'>{millify(acquiredXPWithVigor)} XP</b>
        {acquiredPercentage} %
      </span>
    </>
  );
}
