'use client'

import { statusAtom, statusLevelsAtom } from '@/atoms/Constitution'
import Input from '@/components/Input'
import ConstitutionData from '@/data/ConstituionData'
import Accuracy from '@/icons/Accuracy'
import Eva from '@/icons/Eva'
import HP from '@/icons/HP'
import MP from '@/icons/MP'
import PhysAtk from '@/icons/PhysAtk'
import PhysDef from '@/icons/PhysDef'
import SpellDef from '@/icons/SpellDef'
import { cn } from '@/utils/classNames'
import { prepareItemForDisplay, sumObjects } from '@/utils/index'
import { Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { useTranslation } from '../../../public/locales/client'
import Tooltip from '../ToolTip'
import ItemFrame from '../crafting/ItemFrame'

export default function ConstitutionStatusSelector() {
  const [status, setStatus] = useAtom(statusAtom)
  const [levels, setLevels] = useAtom(statusLevelsAtom)
  const { t } = useTranslation()

  return (
    <>
      {buttons.map(({ label, styling, inputStyling, tagStyling, Icon }) => {
        const isActive = label === status
        const hasLevelDifference = levels[label].to > levels[label].from

        return (
          <label
            key={label}
            htmlFor={`from${label}`}
            className={cn(
              'absolute flex flex-col items-center justify-center',
              styling,
              { 'z-40': isActive }
            )}
          >
            <Transition
              show={isActive}
              enter="transition-transform duration-200"
              enterFrom="translate-x-0 opacity-0"
              enterTo={cn('opacity-100', inputStyling)}
              leave="transition-[transform,opacity] duration-300"
              leaveFrom={cn('opacity-100', inputStyling)}
              leaveTo="translate-x-0 opacity-0"
              as="div"
              className={cn(
                'absolute z-10 flex items-center gap-2',
                'translate-y-24 lg:translate-y-0',
                inputStyling
              )}
            >
              <StatusInput
                label={label}
                levels={levels}
                setLevels={setLevels}
              />
            </Transition>

            <Transition
              show={!isActive}
              enter="transition-transform duration-300"
              enterFrom="opacity-0"
              enterTo={'opacity-100'}
              leave="transition-[transform,opacity] duration-200"
              leaveFrom={'opacity-100'}
              leaveTo="opacity-0"
              as="span"
              className={cn(
                'absolute flex flex-col whitespace-nowrap rounded-full bg-primary-450 px-2 py-1 text-xs font-medium text-white shadow-md lg:px-4 lg:py-2 lg:text-base',
                'translate-y-[3.25rem] lg:translate-y-0',
                tagStyling
              )}
            >
              {`Lv. ${levels[label].from} ${
                levels[label].to > levels[label].from
                  ? `> Lv. ${levels[label].to}`
                  : ''
              }`}
            </Transition>

            <Tooltip.Wrapper open={isActive && hasLevelDifference}>
              <Tooltip.Trigger asChild>
                <button
                  className={cn(
                    'group z-[11] h-[4.2rem] w-[4.2rem] rounded-full bg-primary-400/10 transition-[transform,_background-color] duration-300 hover:scale-[1.2] hover:bg-primary-400/30 lg:h-[7.4rem] lg:w-[7.4rem]',
                    'data-[active=true]:scale-[1.35] data-[active=true]:bg-primary-450'
                  )}
                  data-active={isActive}
                  aria-label={t(label)}
                  onClick={() =>
                    setStatus((prev) => (prev === label ? null : label))
                  }
                >
                  <Icon className="h-8 w-8 fill-[#D9D5EA] transition-[filter] duration-300 group-data-[active=true]:drop-shadow-[0_1px_4px_rgb(140,140,140)] lg:h-16 lg:w-16" />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                className={
                  'pointer-events-none z-[100] flex scale-75 items-center justify-center gap-2 overflow-auto rounded-md border-2 border-primary-450 bg-primary-600 p-2 md:scale-100'
                }
                sideOffset={16}
                side={getPopperSideByLabel(label)}
              >
                {isActive &&
                  hasLevelDifference &&
                  getStatusRecipeCost(levels, label).map(
                    ({ name, amount, rarity }, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center gap-2"
                      >
                        <ItemFrame
                          item={
                            name.toLowerCase().replace(/\s/g, '_') as ItemTypes
                          }
                          rarity={rarity}
                          size="sm"
                        />
                        <span className="w-max rounded bg-primary-600 px-3 py-1 text-center text-sm font-medium text-white">
                          {millify(amount)}
                        </span>
                      </li>
                    )
                  )}
              </Tooltip.Content>
            </Tooltip.Wrapper>
          </label>
        )
      })}
    </>
  )
}

function StatusInput({
  label,
  levels,
  setLevels,
}: {
  label: statusEffects
  levels: statusLevels
  setLevels: React.Dispatch<React.SetStateAction<statusLevels>>
}) {
  const [currentLevel, setCurrentLevel] = useState<{
    from: number | string
    to: number | string
  }>(levels[label])

  useEffect(() => {
    if (
      Number.isInteger(Number(currentLevel.from)) &&
      Number.isInteger(Number(currentLevel.to)) &&
      Number(currentLevel.from) > 0 &&
      Number(currentLevel.to) > 0
    ) {
      setLevels((prev) => {
        let fromValue = Number.isNaN(currentLevel.from)
          ? prev[label].from
          : currentLevel.from
        const toValue = Number.isNaN(currentLevel.to)
          ? prev[label].to
          : currentLevel.to

        if (fromValue > toValue) fromValue = toValue

        return {
          ...prev,
          [label]: {
            from: Number(fromValue),
            to: Number(toValue),
          },
        }
      })
    }
  }, [currentLevel.from, currentLevel.to])

  function handleInput(value: string, type: 'from' | 'to') {
    value = value.replace(/\D/gm, '')
    if (Number(value) > 105) value = '105'

    setCurrentLevel((prev) => ({ ...prev, [type]: value }))
  }

  return (
    <div className="flex flex-col">
      <Input
        id={`from${label}`}
        className="w-24 rounded-b-none border-b border-primary-400 [&>div]:rounded-b-none"
        value={currentLevel.from ?? ''}
        onChange={(e) => handleInput(e.target.value, 'from')}
        suffix="Lv."
        placeholder="45"
        autoComplete='off'
      />
      <Input
        className="w-24 rounded-t-none [&>div]:rounded-t-none"
        value={currentLevel.to ?? ''}
        onChange={(e) => handleInput(e.target.value, 'to')}
        suffix="Lv."
        placeholder="50"
        autoComplete='off'
      />
    </div>
  )
}

function getStatusRecipeCost(levels: statusLevels, label: statusEffects) {
  const result = Array(levels[label].to - levels[label].from)
    .fill(0)
    .map((_, i) => i + levels[label].from)
    .map((i) => ConstitutionData[label][i])

  const results = sumObjects(result.flat())

  if ('Level' in results) delete results.Level
  // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
  delete results[label]

  return prepareItemForDisplay(results)
}

const buttons: Array<{
  label: statusEffects
  styling: string
  inputStyling: string
  tagStyling: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}> = [
  {
    label: 'PHYS DEF',
    styling:
      'translate-x-[-6.2rem] translate-y-[-6.2rem] lg:translate-x-[-10.8rem] lg:translate-y-[-10.8rem]',
    inputStyling: 'lg:-translate-x-44',
    tagStyling: 'lg:-translate-x-40',
    Icon: PhysDef,
  },
  {
    label: 'HP',
    styling: 'translate-x-[-8.8rem] lg:translate-x-[-15.25rem]',
    inputStyling: 'lg:-translate-x-44',
    tagStyling: 'lg:-translate-x-40',
    Icon: HP,
  },
  {
    label: 'EVA',
    styling:
      'translate-x-[-6.2rem] translate-y-[6.2rem] lg:translate-x-[-10.8rem] lg:translate-y-[10.8rem]',
    inputStyling: 'lg:-translate-x-44',
    tagStyling: 'lg:-translate-x-40',
    Icon: Eva,
  },
  {
    label: 'PHYS ATK',
    styling: 'translate-y-[8.8rem] lg:translate-y-[15.2rem]',
    inputStyling: 'lg:translate-y-36',
    tagStyling: 'lg:translate-y-28',
    Icon: PhysAtk,
  },
  {
    label: 'Accuracy',
    styling:
      'translate-x-[6.2rem] translate-y-[6.2rem] lg:translate-x-[10.8rem] lg:translate-y-[10.8rem]',
    inputStyling: 'lg:translate-x-44',
    tagStyling: 'lg:translate-x-40',
    Icon: Accuracy,
  },
  {
    label: 'MP',
    styling: 'translate-x-[8.8rem] lg:translate-x-[15.25rem]',
    inputStyling: 'lg:translate-x-44',
    tagStyling: 'lg:translate-x-40',
    Icon: MP,
  },
  {
    label: 'Spell DEF',
    styling:
      'translate-x-[6.2rem] translate-y-[-6.2rem] lg:translate-x-[10.8rem] lg:translate-y-[-10.8rem]',
    inputStyling: 'lg:translate-x-44',
    tagStyling: 'lg:translate-x-40',
    Icon: SpellDef,
  },
]

const getPopperSideByLabel = (label: statusEffects) => {
  switch (label) {
    case 'PHYS DEF':
    case 'HP':
    case 'EVA':
      return 'right'
    case 'PHYS ATK':
      return 'top'
    default:
      return 'left'
  }
}
