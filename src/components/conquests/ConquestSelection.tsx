'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import { cn } from '@/utils/classNames'
import { useAtom } from 'jotai'
import Image from 'next/image'

export default function ConquestSelection() {
  const [{ tower, stage }, setConquests] = useAtom(ConquestsAtom)

  const handleTowerChange = (selectedTower: ConquestTowers) =>
    setConquests((prev) => ({
      ...prev,
      stage:
        selectedTower === 'Sanctuary of Hydra' && stage > 12 ? 12 : prev.stage,
      tower: selectedTower,
    }))

  return (
    <div className="custom-scroll relative flex w-full shrink-0 self-start overflow-x-auto">
      <Image
        src="/conquests/main.png"
        alt=""
        width={2813}
        height={809}
        className="w-[90rem] min-w-[90rem] shrink-0 rounded-lg object-contain"
      />
      {towersButtonPosition.map(({ label, styling, buttonStyling }) => (
        <label
          key={label}
          className={cn(
            'group absolute flex flex-col items-center gap-2',
            styling
          )}
          data-active={label === tower}
        >
          <button
            className={cn('rounded-full', buttonStyling)}
            onClick={() => handleTowerChange(label)}
          />
          <span className="max-w-[8rem] text-center text-xl font-extrabold text-neutral-100 drop-shadow-[0_1px_4px_rgb(0,0,0,0.6)] transition-[transform,_color,_filter] will-change-[transform,color,filter] group-hover:-translate-y-2 group-data-[active=true]:text-white group-data-[active=true]:drop-shadow-[0_1px_4px_rgb(200,200,200)]">
            {label}
          </span>
        </label>
      ))}
    </div>
  )
}

const towersButtonPosition = [
  {
    label: 'Mine',
    styling: 'translate-x-12 translate-y-12',
    buttonStyling: 'h-32 w-32',
  },
  {
    label: 'Forge',
    styling: 'translate-x-36 translate-y-[9.5rem]',
    buttonStyling: 'h-36 w-36',
  },
  {
    label: 'Sanctuary of Hydra',
    styling: 'translate-x-[18.75rem] translate-y-[9.5rem]',
    buttonStyling: 'h-44 w-36',
  },
  {
    label: 'Tower of Conquest',
    styling: 'translate-x-[28.5rem] translate-y-[1.5rem]',
    buttonStyling: 'h-48 w-40',
  },
  {
    label: 'Tower of Quintessence',
    styling: 'translate-x-[37rem] translate-y-[7rem]',
    buttonStyling: 'h-44 w-20',
  },
  {
    label: 'Millennial Tree',
    styling: 'translate-x-[43.5rem] translate-y-[7rem]',
    buttonStyling: 'h-28 w-32',
  },
  {
    label: 'Portal',
    styling: 'translate-x-[52rem] translate-y-[4rem]',
    buttonStyling: 'h-48 w-32',
  },
  {
    label: 'Tower of Victory',
    styling: 'translate-x-[60.5rem] translate-y-[3rem]',
    buttonStyling: 'h-48 w-24',
  },
  {
    label: 'Training Sanctum',
    styling: 'translate-x-[67.5rem] translate-y-[12rem]',
    buttonStyling: 'h-[7rem] w-28',
  },
  {
    label: 'Holy Shrine',
    styling: 'translate-x-[76rem] translate-y-[1.5rem]',
    buttonStyling: 'h-48 w-40',
  },
] as const
