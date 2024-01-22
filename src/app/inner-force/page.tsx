'use client'
import { InnerForceBloodsAtom, InnerForceTabAtom } from '@/atoms/InnerForce'
import { SettingsAtom } from '@/atoms/Settings'
import Tooltip from '@/components/ToolTip'
import ItemFrame from '@/components/crafting/ItemFrame'
import BloodFrame from '@/components/inner-force/BloodFrame'
import TabButton from '@/components/inner-force/TabButton'
import {
  ArbalistInnerForce,
  DarkistInnerForce,
  LancerInnerForce,
  SorcererInnerForce,
  TaoistInnerForce,
  WarriorInnerForce,
} from '@/data/InnerForce'
import {
  Alkaid,
  Antirelaxation,
  CentenaryCongregation,
  DiviseAction,
  Dubhe,
  EarthValley,
  EmbroideredThrone,
  FertileScale,
  GoldenJade,
  GreatRuler,
  GreatUnion,
  LandsEnd,
  Mizar,
  PinnacleStar,
  PulsingSky,
  Quorum,
  RoyalDecree,
  SkyPalace,
  Springwater,
  UnitedHeaven,
  VirtuousElevation,
  Waterbridge,
  WindHub,
} from '@/icons/inner-force/index'
import {
  AllowedInventoryItemTypes,
  extractItemRarity,
  formatItemName,
  getNumbersInRange,
  getReadableNumber,
} from '@/utils/index'
import { useAtomValue } from 'jotai'
import millify from 'millify'
import { useMemo } from 'react'

const getBloodIcon = {
  Alkaid,
  Antirelaxation,
  'Centenary Congregation': CentenaryCongregation,
  'Divise Action': DiviseAction,
  Dubhe,
  'Earth Valley': EarthValley,
  'Embroidered Throne': EmbroideredThrone,
  'Fertile Scale': FertileScale,
  'Golden Jade': GoldenJade,
  'Great Ruler': GreatRuler,
  'Great Union': GreatUnion,
  'Heart Core': SkyPalace,
  "Land's End": LandsEnd,
  Mizar,
  'Pinnacle Star': PinnacleStar,
  'Pulsing Sky': PulsingSky,
  Quorum,
  'Royal Decree': RoyalDecree,
  'Sky Palace': SkyPalace,
  Springwater,
  'United Heaven': UnitedHeaven,
  'Virtuous Elevation': VirtuousElevation,
  Waterbridge,
  'Wind Hub': WindHub,
}

const bloodNameToSet: { [key in BloodNames]: BloodSets } = {
  'Sky Palace': 'Muscle Strength Manual',
  'Royal Decree': 'Muscle Strength Manual',
  'Pulsing Sky': 'Muscle Strength Manual',
  'Great Ruler': 'Muscle Strength Manual',
  "Land's End": 'Nine Yin Manual',
  'Centenary Congregation': 'Nine Yin Manual',
  'Embroidered Throne': 'Nine Yin Manual',
  'Golden Jade': 'Nine Yin Manual',
  'Heart Core': 'Nine Yang Manual',
  'Virtuous Elevation': 'Nine Yang Manual',
  Antirelaxation: 'Nine Yang Manual',
  Springwater: 'Nine Yang Manual',
  'Pinnacle Star': 'Nine Yang Manual',
  'Wind Hub': 'Nine Yang Manual',
  'Great Union': 'Nine Yang Manual',
  'Earth Valley': 'Nine Yang Manual',
  Dubhe: 'Northern Profound Art',
  'Fertile Scale': 'Northern Profound Art',
  Mizar: 'Northern Profound Art',
  Alkaid: 'Northern Profound Art',
  'Divise Action': 'Toad Stance',
  Waterbridge: 'Toad Stance',
  'United Heaven': 'Toad Stance',
  Quorum: 'Toad Stance',
}

const getBloodsByTab: { [key in BloodSets]: BloodNames[] } = {
  'Muscle Strength Manual': [
    'Sky Palace',
    'Royal Decree',
    'Pulsing Sky',
    'Great Ruler',
  ],
  'Nine Yin Manual': [
    "Land's End",
    'Centenary Congregation',
    'Embroidered Throne',
    'Golden Jade',
  ],
  'Nine Yang Manual': [
    'Heart Core',
    'Virtuous Elevation',
    'Antirelaxation',
    'Springwater',
  ],
  'Violet Mist Art': [
    'Pinnacle Star',
    'Wind Hub',
    'Great Union',
    'Earth Valley',
  ],
  'Northern Profound Art': ['Dubhe', 'Fertile Scale', 'Mizar', 'Alkaid'],
  'Toad Stance': ['Divise Action', 'Waterbridge', 'United Heaven', 'Quorum'],
}

const getDataByClass = {
  Warrior: WarriorInnerForce,
  Sorcerer: SorcererInnerForce,
  Taoist: TaoistInnerForce,
  Arbalist: ArbalistInnerForce,
  Lancer: LancerInnerForce,
  Darkist: DarkistInnerForce,
}

export default function InnerForce() {
  const bloodTab = useAtomValue(InnerForceTabAtom)
  const bloodObject = useAtomValue(InnerForceBloodsAtom)
  const { class: mir4Class } = useAtomValue(SettingsAtom)

  const calculateBloodCost = () => {
    const dataObject = getDataByClass[mir4Class ?? 'Arbalist']

    const resultObj: { [key in string]: number } = {}
    for (const [bloodName, { initial, final }] of Object.entries(bloodObject)) {
      if (initial === final) continue

      const levelDifference = final - initial
      if (levelDifference < 1) continue

      const levelIteration = getNumbersInRange(initial + 1, final)
      for (const levelstep of levelIteration) {
        const bloodLevel = dataObject[bloodNameToSet[bloodName as BloodNames]][levelstep as keyof typeof dataObject[BloodSets]]
        const bloodContent = bloodLevel[bloodName as keyof typeof bloodLevel]

        for (const [key, value] of Object.entries(bloodContent)) {
          resultObj[key] = (resultObj?.[key] || 0) + (value as number)
          resultObj.energy = (resultObj?.energy || 0) + (bloodLevel.EnergyPerClick as number)
        }
      }
    }

    return resultObj
  }

  const resultObject = useMemo(
    () => calculateBloodCost(),
    [JSON.stringify(bloodObject)]
  )

  return (
    <div className="relative mx-auto flex w-full max-w-[90rem] justify-center gap-8 px-6 pt-20 selection:bg-primary-800">
      <aside className="flex flex-col gap-4">
        <TabButton tabName="Muscle Strength Manual" />
        <TabButton tabName="Nine Yin Manual" />
        <TabButton tabName="Nine Yang Manual" />
        <TabButton tabName="Violet Mist Art" />
        <TabButton tabName="Northern Profound Art" />
        <TabButton tabName="Toad Stance" />
      </aside>

      <div className="flex max-w-[40rem] flex-col items-center gap-8">
        <ol className="flex items-center gap-6">
          {getBloodsByTab[bloodTab].map((blood) => (
            <BloodFrame key={blood} bloodName={blood} Icon={getBloodIcon[blood]} />
          ))}
        </ol>

        <ul className="flex w-full flex-wrap items-center justify-center gap-4">
          {Object.entries(resultObject).map(([name, value]) => {
            const formattedName = formatItemName(name)
            const itemRarity = extractItemRarity(name)

            if (!AllowedInventoryItemTypes.includes(formattedName)) return <></>

            return (
              <li key={name} className="flex flex-col items-center gap-2">
                <ItemFrame item={formattedName} rarity={itemRarity} />
                <Tooltip.Wrapper>
                  <Tooltip.Trigger
                    asChild={false}
                    aria-label="See detailed amount"
                    className="w-max rounded bg-primary-600 px-3 py-1 text-center text-sm font-medium text-white"
                  >
                    {millify(value)}
                  </Tooltip.Trigger>
                  <Tooltip.Content>{getReadableNumber(value)}</Tooltip.Content>
                </Tooltip.Wrapper>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
