'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import humanizeDuration from 'humanize-duration'
import { useAtomValue } from 'jotai'
import moment from 'moment'
import { useTranslation } from '../../../public/locales/client'

export default function ConquestHeader() {
  const { i18n } = useTranslation()
  const { tower, stage } = useAtomValue(ConquestsAtom)

  const currentTower = ConquestTowersData[tower].Steps[stage]
  const hasPreviousStage = stage > 0

  return (
    <header className="flex flex-col lg:flex-row w-full lg:justify-between">
      <div className="flex flex-col gap-1 lg:gap-2">
        <h1 className="text-2xl lg:text-4xl font-semibold">{tower}</h1>
        <p className="text-base lg:text-xl font-normal">
          {`Stage ${stage} > `}
          <span className="text-[#62CA63]">Stage {stage + 1}</span>
        </p>
      </div>

      <div className="flex flex-col gap-1 lg:gap-2 lg:text-end">
        <h2 className="text-base font-normal lg:text-2xl lg:font-bold">
          {humanizeDuration(
            moment
              .duration(currentTower.UpgradeTime, 'seconds')
              .asMilliseconds(),
            {
              round: true,
              language: i18n.language,
            }
          )}
        </h2>
        <p className="text-sm font-medium">
          <b className="lg:text-end font-bold">{'Power Score - '}</b>
          {`${
            hasPreviousStage
              ? ConquestTowersData[tower].Steps[stage - 1].Power
              : 0
          } > `}
          <span className="text-[#62CA63]">{currentTower.Power}</span>
        </p>
      </div>
    </header>
  )
}
