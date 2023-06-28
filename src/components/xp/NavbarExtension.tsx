'use client'

import { WalkthroughAtom } from '@/atoms/Walkthrough'
import { ExperienceWalkthroughStages } from '@/data/WalkthroughStages'
import Tutorial from '@/icons/Tutorial'
import { useSetAtom } from 'jotai'
import { useTranslation } from '../../../public/locales/client'

export default function ExperienceNavExtesion() {
  const { t } = useTranslation()
  const setWalk = useSetAtom(WalkthroughAtom)

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => {
          setWalk({
            stage: 0,
            isActive: true,
            stages: ExperienceWalkthroughStages(t),
          })
        }}
        className="w-14 rounded-md p-3 hover:bg-gray-100/10 motion-safe:transition-colors"
        aria-label="Walkthrough"
      >
        <Tutorial className="inline-block w-6 fill-white" />
      </button>
    </div>
  )
}
