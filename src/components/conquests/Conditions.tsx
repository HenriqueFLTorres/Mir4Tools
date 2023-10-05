'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import { toCamelCase } from '@/utils/index'
import { useAtomValue } from 'jotai'
import Image from 'next/image'
import { useTranslation } from '../../../public/locales/client'

export default function ConquestConditions() {
  const { tower, stage } = useAtomValue(ConquestsAtom)
  const { t } = useTranslation()

  const currentTower = ConquestTowersData[tower].Steps[stage]

  return currentTower.Condition ? (
    <div className="custom-scroll relative mx-auto mt-6 flex flex-row flex-wrap items-start justify-start gap-4 overflow-auto px-2 py-3 sm:flex-nowrap lg:max-w-7xl lg:px-8 lg:py-6">
      {'Building' in currentTower.Condition &&
        Object.entries(currentTower.Condition?.Building).map(
          ([buildingName, level]) => (
            <ConditionCard
              key={buildingName}
              image={`/conquests/previews/${toCamelCase(buildingName)}.png`}
              name={t(buildingName)}
              level={level}
            />
          )
        )}
      {'Achievement' in currentTower.Condition &&
        Object.values(currentTower.Condition?.Achievement).map(
          (achievment, index) => {
            const isMultiple = hasMultiple(achievment)
            let amount = 0
            if (isMultiple) {
              const match = achievment.match(/\d+/gm)?.[0]
              amount = Number.isInteger(Number(match)) ? Number(match) : 0
            }

            return (
              <ConditionCard
                key={index}
                image={'/conquests/previews/condition.png'}
                name={
                  hasMultiple(achievment)
                    ? t(achievment.replace(/\d+/gm, '{{amount}}'), { amount })
                    : t(achievment)
                }
              />
            )
          }
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
        className="h-[4.8rem] w-[9.5rem] select-none object-contain sm:h-[7rem] sm:w-[13.5rem] sm:rounded-md"
      />

      <p className="max-w-[8rem] text-center text-xs font-medium text-white sm:max-w-[10rem] sm:text-sm">
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

function hasMultiple(achievement: string) {
  return [
    'times',
    'Promote Constitution to Tier ',
    'Reach Lv. ',
    ' Spirit Stones',
    ' Codices',
    'Promote ',
    'Solitude Training Limbo Realm',
    'Solitude Training Profound Realm Lv',
  ].some((d) => achievement.includes(d))
}
