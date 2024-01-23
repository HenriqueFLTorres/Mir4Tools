'use client'

import { InnerForceBloodsAtom, InnerForceTabAtom } from '@/atoms/InnerForce'
import { cn } from '@/utils/classNames'
import { getBloodSetObject, toCamelCase } from '@/utils/index'
import { useAtom, useAtomValue } from 'jotai'
import Image from 'next/image'
import { useMemo } from 'react'

export default function TabButton({
  tabName,
  className,
  ...props
}: {
  tabName: BloodSets
} & Exclude<React.HTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  const [tab, setTab] = useAtom(InnerForceTabAtom)
  const bloodObject = useAtomValue(InnerForceBloodsAtom)

  const targetedObject = useMemo(
    () => getBloodSetObject(tabName, bloodObject),
    [tabName, bloodObject]
  )

  const minLevel = Math.min(
    ...Object.values(targetedObject).map((values) => values.initial)
  )
  const currentTier = Math.round(minLevel / 5) + 1

  return (
    <button
      className={cn(
        'flex w-20 h-20 sm:h-28 sm:w-28 shrink-0 flex-col justify-center rounded border-2 border-transparent bg-primary-600/50 px-3 py-2 text-white transition-colors hover:border-primary-400 hover:bg-primary-600/80 xl:h-20 xl:w-52 xl:flex-row xl:items-center xl:justify-between',
        { 'border-primary-400 bg-primary-600/80': tab === tabName },
        className
      )}
      onClick={() => setTab(tabName)}
      {...props}
    >
      <Image
        src={`/items/${toCamelCase(tabName)}.webp`}
        alt={tabName}
        width={70}
        height={58}
        className="object-contain w-12 sm:w-[4.5rem]"
      />
      <div className="hidden flex-col justify-between text-center text-xs font-medium xl:flex xl:h-full xl:text-end">
        <p>
          Tier {currentTier}{' '}
          {/* <span className="text-success-400">{'>'} Tier 5</span> */}
        </p>
        <p className="max-w-[6rem]">{tabName}</p>
      </div>
    </button>
  )
}
