'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import { useAtomValue } from 'jotai'
import Image from 'next/image'

export default function ConquestConditions() {
  const { tower, stage } = useAtomValue(ConquestsAtom)

  const currentTower = ConquestTowersData[tower].Steps[stage]

  return currentTower.Condition ? (
    <div className="custom-scroll relative mt-6 items-start px-8 flex w-max max-w-7xl gap-4 overflow-auto py-6">
      {'Building' in currentTower.Condition &&
        Object.entries(currentTower.Condition?.Building).map(
          ([buildingName, level]) => (
            <div
              key={buildingName}
              className="flex shrink-0 flex-col items-center gap-3"
            >
              <Image
                src={`/conquests/previews/${buildingName
                  .toLocaleLowerCase()
                  .replace(/\s/g, '_')}.png`}
                alt={buildingName}
                width={216}
                height={112}
                className="select-none rounded-md object-contain"
              />

              <p className="max-w-[10rem] text-center text-sm font-medium text-white">
                <b className="font-semibold">{buildingName}</b> <br />
                Lv. {level as number}
              </p>
            </div>
          )
        )}
      {'Achievement' in currentTower.Condition &&
        Object.values(currentTower.Condition?.Achievement).map(
          (achievment, index) => (
            <div
              key={index}
              className="flex shrink-0 flex-col items-center gap-3"
            >
              <Image
                src={'/conquests/previews/condition.png'}
                alt={''}
                width={216}
                height={112}
                className="select-none rounded-md object-contain"
              />

              <p className="max-w-[10rem] text-center text-sm font-semibold text-white">
                {achievment as string}
              </p>
            </div>
          )
        )}
    </div>
  ) : (
    <></>
  )
}
