'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import { useAtomValue } from 'jotai'
import Image from 'next/image'

export default function ConquestConditions() {
  const { tower, stage } = useAtomValue(ConquestsAtom)

  const currentTower = ConquestTowersData[tower].Steps[stage]

  return currentTower.Condition ? (
    <div className="custom-scroll relative mt-6 flex flex-wrap justify-center sm:flex-nowrap items-start gap-4 overflow-auto px-2 py-3 flex-row lg:w-full lg:max-w-7xl lg:px-8 lg:py-6">
      {'Building' in currentTower.Condition &&
        Object.entries(currentTower.Condition?.Building).map(
          ([buildingName, level]) => (
            <ConditionCard
              key={buildingName}
              image={`/conquests/previews/${buildingName
                .toLocaleLowerCase()
                .replace(/\s/g, '_')}.png`}
              name={buildingName}
              level={level}
            />
          )
        )}
      {'Achievement' in currentTower.Condition &&
        Object.values(currentTower.Condition?.Achievement).map(
          (achievment, index) => (
            <ConditionCard
              key={index}
              image={'/conquests/previews/condition.png'}
              name={achievment as string}
            />
          )
        )}
    </div>
  ) : (
    <></>
  )
}

function ConditionCard({
  image,
  name,
  level,
}: {
  image: string
  name: string
  level?: number
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3">
      <Image
        src={image}
        alt={name}
        width={216}
        height={112}
        className="select-none w-[9.5rem] h-[4.8rem] sm:w-[13.5rem] sm:h-[7rem] sm:rounded-md object-contain"
      />

      <p className="max-w-[8rem] sm:max-w-[10rem] text-center text-xs sm:text-sm font-medium text-white">
        <b className="font-semibold">{name}</b>
        {level ? (
          <>
            <br />
            Lv. {level}
          </>
        ) : (
          <></>
        )}
      </p>
    </div>
  )
}
