'use client'

import { statusLevelsAtom, type statusEffects } from '@/atoms/Constitution'
import Input from '@/components/Input'
import Accuracy from '@/icons/Accuracy'
import ConstitutionBackground from '@/icons/ConstitutionBackground'
import Eva from '@/icons/Eva'
import HP from '@/icons/HP'
import MP from '@/icons/MP'
import PhysAtk from '@/icons/PhysAtk'
import PhysDef from '@/icons/PhysDef'
import SpellDef from '@/icons/SpellDef'
import { cn } from '@/utils/classNames'
import { Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import React, { useState } from 'react'

export default function ConstitutionStatusSelector() {
  const [status, setStatus] = useState<statusEffects | null>(null)
  const [levels, setLevels] = useAtom(statusLevelsAtom)

  function handleInput(
    value: number,
    type: 'from' | 'to',
    label: statusEffects
  ) {
    if (Number.isNaN(Number(value))) {
      return
    }

    setLevels((prev) => ({
      ...prev,
      [label]: {
        ...prev[label],
        [type]: getValidNumber(value),
      },
    }))
  }

  return (
    <div className="relative">
      {buttons.map(({ label, styling, inputStyling, tagStyling, Icon }) => {
        const isActive = label === status

        return (
          <label
            key={label}
            className={cn(
              'absolute flex flex-col items-center justify-center',
              styling
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
              className={cn('absolute flex flex-col', inputStyling, {
                'translate-x-2.5': label === 'PHYS ATK',
              })}
            >
              <Input
                className="w-24 rounded-b-none border-b border-primary-400 [&>div]:rounded-b-none"
                value={levels[label].from}
                type="number"
                onChange={(e) =>
                  handleInput(e.currentTarget.valueAsNumber, 'from', label)
                }
                suffix="Lv."
                placeholder="45"
              />
              <Input
                className="w-24 rounded-t-none [&>div]:rounded-t-none"
                value={levels[label].to}
                type="number"
                onChange={(e) =>
                  handleInput(e.currentTarget.valueAsNumber, 'to', label)
                }
                suffix="Lv."
                placeholder="50"
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
                'absolute flex flex-col whitespace-nowrap rounded-full bg-primary-450 px-4 py-2 text-base font-medium text-white shadow-md',
                tagStyling
              )}
            >
              {`Lv. ${levels[label].from} ${
                levels[label].to > levels[label].from
                  ? `> Lv. ${levels[label].to}`
                  : ''
              }`}
            </Transition>

            <button
              className={cn(
                'absolute h-[7.4rem] w-[7.4rem] rounded-full bg-primary-400/10 transition-[transform,_background-color] hover:scale-[1.2] hover:bg-primary-400/30',
                'data-[active=true]:scale-[1.35] data-[active=true]:bg-primary-450'
              )}
              data-active={isActive}
              onClick={() =>
                setStatus((prev) => (prev === label ? null : label))
              }
            >
              <Icon className="h-16 w-16 fill-[#D9D5EA]" />
            </button>
          </label>
        )
      })}
      <ConstitutionBackground className="[&>#cbDots]:origin-center [&>#cbDots]:animate-rotate [&>#cbLabyrinth]:origin-center [&>#cbLabyrinth]:animate-rotate [&>#cbMiddle]:origin-center [&>#cbMiddle]:animate-rotateInvert" />
    </div>
  )
}

function getValidNumber(value: number) {
  if (value < 1) return 1
  if (value > 105) return 105
  return value
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
    styling: 'left-[6.55rem] top-[6.6rem]',
    inputStyling: '-translate-x-40',
    tagStyling: '-translate-x-40',
    Icon: PhysDef,
  },
  {
    label: 'HP',
    styling: 'top-[17.34rem] left-[2.05rem]',
    inputStyling: '-translate-x-40',
    tagStyling: '-translate-x-40',
    Icon: HP,
  },
  {
    label: 'EVA',
    styling: 'left-[6.495rem] top-[28.227rem]',
    inputStyling: '-translate-x-40',
    tagStyling: '-translate-x-40',
    Icon: Eva,
  },
  {
    label: 'PHYS ATK',
    styling: 'left-[17.34rem] top-[32.6rem]',
    inputStyling: 'translate-y-40',
    tagStyling: 'translate-y-28',
    Icon: PhysAtk,
  },
  {
    label: 'Accuracy',
    styling: 'left-[28.15rem] top-[28.1rem]',
    inputStyling: 'translate-x-40',
    tagStyling: 'translate-x-40',
    Icon: Accuracy,
  },
  {
    label: 'MP',
    styling: 'top-[17.34rem] left-[32.62rem]',
    inputStyling: 'translate-x-40',
    tagStyling: 'translate-x-40',
    Icon: MP,
  },
  {
    label: 'Spell DEF',
    styling: 'left-[28.15rem] top-[6.6rem]',
    inputStyling: 'translate-x-40',
    tagStyling: 'translate-x-40',
    Icon: SpellDef,
  },
]
