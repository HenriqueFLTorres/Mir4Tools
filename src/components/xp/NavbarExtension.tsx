'use client'

import { WalkthroughAtom } from '@/atoms/Walkthrough'
import { ExperienceWalkthroughStages } from '@/data/WalkthroughStages'
import Tutorial from '@/icons/Tutorial'
import { cn } from '@/utils/classNames'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useTranslation } from '../../../public/locales/client'

export default function ExperienceNavExtesion() {
  const { t } = useTranslation()
  const [walk, setWalk] = useAtom(WalkthroughAtom)

  let walkthroughData = JSON.parse(localStorage.getItem('Walkthrough') ?? '{}')

  useEffect(() => {
    walkthroughData = JSON.parse(localStorage.getItem('Walkthrough') ?? '{}')
  }, [walk.isActive])

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => {
          setWalk({
            stage: 0,
            isActive: true,
            stages: ExperienceWalkthroughStages(t),
            type: 'xp',
          })
        }}
        className={cn(
          'relative w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors',
          {
            'before:absolute before:block before:h-8 before:w-8 before:animate-ping before:rounded-full before:bg-white/50 before:content-[""]':
              !walkthroughData.xp,
          }
        )}
        aria-label="Walkthrough"
      >
        <div
          className={cn({
            'animate-vibrate': !walkthroughData.xp,
          })}
        >
          <Tutorial className={'inline-block w-6 fill-white'} />
        </div>
      </button>
    </div>
  )
}
