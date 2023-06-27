'use client'

import { WalkthroughAtom } from '@/atoms/Walkthrough'
import { useAtom } from 'jotai'
import { useLayoutEffect, useState } from 'react'
import Tooltip from './ToolTip'

export default function WalkthroughWrapper() {
  const [{ isActive, stage, stages }, setWalk] = useAtom(WalkthroughAtom)
  const [elementStyles, setStylings] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  })

  const isFirstStage = stage === 0
  const isLastStage = stage === stages.length - 1
  const selectedStage = stages[stage]

  const handlePrevious = () =>
    setWalk((prev) => ({
      ...prev,
      stage: isFirstStage ? 0 : prev.stage - 1,
      ...(isFirstStage ? { isActive: false } : {}),
    }))

  const handleNext = () =>
    setWalk((prev) => ({
      ...prev,
      stage: isLastStage ? 0 : prev.stage + 1,
      ...(isLastStage ? { isActive: false } : {}),
    }))

  useLayoutEffect(() => {
    const getActiveElement = () => {
      const element = document?.querySelector(
        stages[stage ?? 0]?.id
      ) as HTMLElement
      const boundaries = element?.getClientRects()?.item(0)

      setStylings({
        width: (boundaries?.width ?? 0) + 24,
        height: (boundaries?.height ?? 0) + 24,
        top: (boundaries?.top ?? 0) - 12,
        left: (boundaries?.left ?? 0) - 12,
      })
    }

    window.addEventListener('resize', getActiveElement)
    getActiveElement()

    return () => window.removeEventListener('resize', getActiveElement)
  }, [isActive, stage])

  if (!isActive) return <></>

  return (
    <Tooltip.Wrapper open={isActive}>
      <Tooltip.Trigger>
        <button
          key={JSON.stringify(elementStyles)}
          className="custom absolute left-64 top-64 rounded-xl shadow-[0px_0px_0px_9999px_#00000060] motion-safe:transition-all motion-safe:duration-300"
          style={elementStyles}
        />
      </Tooltip.Trigger>
      <Tooltip.Content
        className="flex max-w-xs flex-col items-start gap-5 border border-primary-500 p-3"
        collisionPadding={24}
        alignOffset={24}
        sideOffset={24}
      >
        <h2 className="text-lg font-bold">{selectedStage.title}</h2>
        <p className="text-xs font-medium">{selectedStage.content}</p>

        <footer className="flex w-full items-center gap-4">
          <button
            aria-label={isFirstStage ? 'Skip' : 'Previous'}
            className="w-full rounded-[4px] bg-[#368D6E] py-2 text-xs font-bold uppercase text-white disabled:bg-opacity-50"
            onClick={handlePrevious}
          >
            {isFirstStage ? 'Skip' : 'Previous'}
          </button>

          <button
            aria-label={isLastStage ? 'Finish' : 'Next'}
            className="w-full rounded-[4px] bg-[#473E65] py-2 text-xs font-bold uppercase text-white disabled:bg-opacity-50"
            onClick={handleNext}
          >
            {isLastStage ? 'Finish' : 'Next'}
          </button>
        </footer>
      </Tooltip.Content>
    </Tooltip.Wrapper>
  )
}
