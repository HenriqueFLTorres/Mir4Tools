'use client'

import { ConquestsAtom } from '@/atoms/Conquests'
import ConquestTowersData from '@/data/ConquestTowerData'
import { toCamelCase } from '@/utils/index'
import { useAtomValue } from 'jotai'
import { useTranslation } from '../../../../public/locales/client'
import AditionalBuildingsConditions from './AdditionalBuildings'
import ConditionCard from './ConditionCard'

export default function ConquestConditions() {
  const { tower, stage } = useAtomValue(ConquestsAtom)
  const { t } = useTranslation()

  const currentTower = ConquestTowersData[tower].Steps[stage]

  return (
    <section className="flex flex-col gap-4">
      <div className="custom-scroll relative mx-auto mt-6 flex flex-row flex-wrap items-start justify-start gap-4 overflow-auto px-2 py-3 sm:flex-nowrap lg:max-w-7xl lg:px-8 lg:py-6">
        {Object.entries(currentTower.Building).map(([buildingName, level]) => (
          <ConditionCard
            key={buildingName}
            image={`/conquests/previews/${toCamelCase(buildingName)}.png`}
            name={t(buildingName)}
            level={level}
          />
        ))}

        {Object.values(currentTower.Achievement).map((achievment, index) => {
          return (
            <ConditionCard
              key={index}
              image={'/conquests/previews/condition.png'}
              name={t(achievment, { ns: 'conquest' })}
            />
          )
        })}
      </div>

      <AditionalBuildingsConditions />
    </section>
  )
}
