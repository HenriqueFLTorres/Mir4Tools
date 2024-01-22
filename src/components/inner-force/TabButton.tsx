'use client'

import { InnerForceTabAtom } from '@/atoms/InnerForce'
import { cn } from '@/utils/classNames'
import { toCamelCase } from '@/utils/index'
import { useAtom } from 'jotai'
import Image from 'next/image'

export default function TabButton({
  tabName,
  className,
  ...props
}: {
  tabName: BloodSets
} & Exclude<React.HTMLAttributes<HTMLButtonElement>, 'onClick'>) {
  const [tab, setTab] = useAtom(InnerForceTabAtom)

  return (
    <button
      className={cn(
        'flex h-20 w-52 items-center justify-between rounded border-2 border-transparent bg-primary-600/50 px-3 py-2 text-white transition-colors hover:border-primary-400 hover:bg-primary-600/80',
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
        className="object-contain"
      />
      <div className="flex h-full flex-col justify-between text-end text-xs font-medium">
        <p>
          Tier 1 {/* <span className="text-success-400">{'>'} Tier 5</span> */}
        </p>
        <p className="max-w-[6rem]">{tabName}</p>
      </div>
    </button>
  )
}
