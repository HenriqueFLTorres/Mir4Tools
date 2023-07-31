'use client'

import {
  statusAtom,
  statusLevelsAtom,
  type statusEffects,
} from '@/atoms/Constitution'
import Input from '@/components/Input'
import Accuracy from '@/icons/Accuracy'
import Eva from '@/icons/Eva'
import HP from '@/icons/HP'
import MP from '@/icons/MP'
import PhysAtk from '@/icons/PhysAtk'
import PhysDef from '@/icons/PhysDef'
import SpellDef from '@/icons/SpellDef'
import { cn } from '@/utils/classNames'
import { Transition } from '@headlessui/react'
import { useAtom } from 'jotai'
import React from 'react'

export default function ConstitutionStatusSelector() {
  const [status, setStatus] = useAtom(statusAtom)
  const [levels, setLevels] = useAtom(statusLevelsAtom)

  function handleInput(
    value: number,
    type: 'from' | 'to',
    label: statusEffects
  ) {
    if (Number.isNaN(Number(value))) {
      return
    }

    setLevels((prev) => {
      value = getValidNumber(value)

      if (type === 'from' && value > prev[label].to) value = prev[label].to
      if (type === 'to' && value < prev[label].from) value = prev[label].from

      return {
        ...prev,
        [label]: {
          ...prev[label],
          [type]: getValidNumber(value),
        },
      }
    })
  }

  function buttonHandleStatus(
    label: statusEffects,
    type: 'from' | 'to',
    action: 'increment' | 'decrement'
  ) {
    setLevels((prev) => {
      let newValue = prev[label][type]

      if (action === 'increment') newValue += 1
      if (action === 'decrement') newValue -= 1

      if (type === 'from' && newValue > prev[label].to) {
        newValue = prev[label].to
      }
      if (type === 'to' && newValue < prev[label].from) {
        newValue = prev[label].from
      }

      return {
        ...prev,
        [label]: {
          ...prev[label],
          [type]: getValidNumber(newValue),
        },
      }
    })
  }

  return (
    <>
      {buttons.map(({ label, styling, inputStyling, tagStyling, Icon }) => {
        const isActive = label === status

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
              <div className="flex flex-col font-bold text-white [&>button:first-child]:rounded-t-full [&>button:hover]:bg-primary-500 [&>button:last-child]:rounded-b-full [&>button]:bg-primary-700 [&>button]:px-2 [&>button]:py-1 [&>button]:transition-colors">
                <button
                  aria-label="Increment current level"
                  onClick={() => buttonHandleStatus(label, 'from', 'increment')}
                >
                  +
                </button>
                <button
                  aria-label="Decrement current level"
                  onClick={() => buttonHandleStatus(label, 'from', 'decrement')}
                >
                  -
                </button>
              </div>

              <div className="flex flex-col">
                <Input
                  id={`from${label}`}
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
              </div>

              <div className="flex flex-col font-bold text-white [&>button:first-child]:rounded-t-full [&>button:hover]:bg-primary-500 [&>button:last-child]:rounded-b-full [&>button]:bg-primary-700 [&>button]:px-2 [&>button]:py-1 [&>button]:transition-colors">
                <button
                  aria-label="Increment desired level"
                  onClick={() => buttonHandleStatus(label, 'to', 'increment')}
                >
                  +
                </button>
                <button
                  aria-label="Decrement desired level"
                  onClick={() => buttonHandleStatus(label, 'to', 'decrement')}
                >
                  -
                </button>
              </div>
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

            <button
              className={cn(
                'group absolute z-[11] h-[4.2rem] w-[4.2rem] rounded-full bg-primary-400/10 transition-[transform,_background-color] duration-300 hover:scale-[1.2] hover:bg-primary-400/30 lg:h-[7.4rem] lg:w-[7.4rem]',
                'data-[active=true]:scale-[1.35] data-[active=true]:bg-primary-450'
              )}
              data-active={isActive}
              onClick={() =>
                setStatus((prev) => (prev === label ? null : label))
              }
            >
              <Icon className="h-8 w-8 fill-[#D9D5EA] transition-[filter] duration-300 group-data-[active=true]:drop-shadow-[0_1px_4px_rgb(140,140,140)] lg:h-16 lg:w-16" />
            </button>
          </label>
        )
      })}
    </>
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
