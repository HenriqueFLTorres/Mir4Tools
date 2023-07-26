'use client'

import { statusLevelsAtom, type statusEffects } from '@/atoms/Constitution'
import ConstitutionData from '@/data/ConstituionData'
import { useAtomValue } from 'jotai'

export default function ConstitutionStatsTable() {
  const levels = useAtomValue(statusLevelsAtom)

  return (
    <div className="relative flex shrink-0 h-max w-[26rem] max-w-xl flex-col rounded-md bg-primary-600 p-1 md:rounded-xl">
      <table className="relative">
        <thead>
          <tr className="border-b-2 border-primary-500/50">
            <th
              colSpan={4}
              className="py-1 text-center text-lg font-medium text-white"
            >
              Tier 2 Constitution
            </th>
          </tr>
        </thead>
        <tbody className="w-full text-sm font-normal text-white [&>tr:nth-child(even)>*]:bg-primary-500/20 [&>tr>td:nth-child(even)]:text-end [&>tr>td:nth-child(odd)]:font-bold [&>tr>td]:px-2 [&>tr>td]:py-1.5 [&>tr>td]:sm:px-4 [&>tr>td]:sm:py-2">
          <tr>
            <td>PHYS DEF</td>
            <td>
              {getValuesFromAtom(
                getStatus('PHYS DEF', levels['PHYS DEF'].from),
                getStatus('PHYS DEF', levels['PHYS DEF'].to)
              )}
            </td>
            <td>Spell DEF</td>
            <td>
              {getValuesFromAtom(
                getStatus('Spell DEF', levels['Spell DEF'].from),
                getStatus('Spell DEF', levels['Spell DEF'].to)
              )}
            </td>
          </tr>
          <tr>
            <td>HP</td>
            <td>
              {getValuesFromAtom(
                getStatus('HP', levels.HP.from),
                getStatus('HP', levels.HP.to)
              )}
            </td>
            <td>MP</td>
            <td>
              {getValuesFromAtom(
                getStatus('MP', levels.MP.from),
                getStatus('MP', levels.MP.to)
              )}
            </td>
          </tr>
          <tr>
            <td>EVA</td>
            <td>
              {getValuesFromAtom(
                getStatus('EVA', levels.EVA.from),
                getStatus('EVA', levels.EVA.to)
              )}
            </td>
            <td>Accuracy</td>
            <td>
              {getValuesFromAtom(
                getStatus('Accuracy', levels.Accuracy.from),
                getStatus('Accuracy', levels.Accuracy.to)
              )}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>PHYS ATK & Spell ATK</td>
            <td colSpan={2}>
              {getValuesFromAtom(
                getStatus('PHYS ATK', levels['PHYS ATK'].from),
                getStatus('PHYS ATK', levels['PHYS ATK'].to)
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

function getStatus(status: statusEffects, index: number) {
  return (ConstitutionData[status].at(index - 1) as any)[status]
}
