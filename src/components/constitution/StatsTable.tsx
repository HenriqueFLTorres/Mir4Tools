'use client'

import {
  constitutionUpgradeAtom,
  statusLevelsAtom,
  type statusEffects,
} from '@/atoms/Constitution'
import ConstitutionData from '@/data/ConstituionData'
import ConstitutionMasteryData from '@/data/ConstitutionMasteryData'
import { useAtomValue } from 'jotai'

export default function ConstitutionStatsTable() {
  const levels = useAtomValue(statusLevelsAtom)
  const constUpgrade = useAtomValue(constitutionUpgradeAtom)

  const minLevel = Math.min(
    ...Object.values(levels).map((values) => values.from)
  )
  const myTierIndex = Math.ceil(minLevel / 5) - 1

  const initialTier = myTierIndex + 1
  const finalTier = (constUpgrade.masteryIteration.at(-1) ?? 0) + 1

  return (
    <div className="relative flex h-max w-[28rem] max-w-xl shrink-0 flex-col rounded-md bg-primary-600 p-1 md:rounded-xl">
      <table className="relative">
        <thead>
          <tr className="border-b-2 border-primary-500/50">
            <th
              colSpan={4}
              className="py-1 text-center text-lg font-medium text-white"
            >
              Tier{' '}
              {finalTier > initialTier
                ? `${initialTier} > ${finalTier}`
                : initialTier}{' '}
              Constitution
            </th>
          </tr>
        </thead>
        <tbody className="w-full text-sm font-normal text-white [&>tr:nth-child(even)>*]:bg-primary-500/20 [&>tr>td:nth-child(even)]:text-end [&>tr>td:nth-child(odd)]:font-bold [&>tr>td]:px-2 [&>tr>td]:py-1.5 [&>tr>td]:sm:px-4 [&>tr>td]:sm:py-2">
          <tr>
            <td>PHYS DEF</td>
            <td>
              {getValuesFromAtom(
                getStatus('PHYS DEF', levels['PHYS DEF'].from, myTierIndex),
                getStatus('PHYS DEF', levels['PHYS DEF'].to, myTierIndex)
              )}
            </td>
            <td>Spell DEF</td>
            <td>
              {getValuesFromAtom(
                getStatus('Spell DEF', levels['Spell DEF'].from, myTierIndex),
                getStatus('Spell DEF', levels['Spell DEF'].to, myTierIndex)
              )}
            </td>
          </tr>
          <tr>
            <td>HP</td>
            <td>
              {getValuesFromAtom(
                getStatus('HP', levels.HP.from, myTierIndex),
                getStatus('HP', levels.HP.to, myTierIndex)
              )}
            </td>
            <td>MP</td>
            <td>
              {getValuesFromAtom(
                getStatus('MP', levels.MP.from, myTierIndex),
                getStatus('MP', levels.MP.to, myTierIndex)
              )}
            </td>
          </tr>
          <tr>
            <td>EVA</td>
            <td>
              {getValuesFromAtom(
                getStatus('EVA', levels.EVA.from, myTierIndex),
                getStatus('EVA', levels.EVA.to, myTierIndex)
              )}
            </td>
            <td>Accuracy</td>
            <td>
              {getValuesFromAtom(
                getStatus('Accuracy', levels.Accuracy.from, myTierIndex),
                getStatus('Accuracy', levels.Accuracy.to, myTierIndex)
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>PHYS ATK & Spell ATK</td>
            <td colSpan={2}>
              {getValuesFromAtom(
                getStatus('PHYS ATK', levels['PHYS ATK'].from, myTierIndex),
                getStatus('PHYS ATK', levels['PHYS ATK'].to, myTierIndex)
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function getValuesFromAtom(initialStatus: number, endStatus: number) {
  return endStatus > initialStatus ? (
    <>
      {initialStatus} <span className="text-[#62CA63]">{`> ${endStatus}`}</span>
    </>
  ) : (
    initialStatus
  )
}

function getStatus(status: statusEffects, index: number, tierIndex: number) {
  return (
    ((ConstitutionData[status].at(index - 1) as any)[status] as number) +
    ConstitutionMasteryData[tierIndex].Effects[status]
  )
}
