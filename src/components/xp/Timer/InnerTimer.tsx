'use client'

import moment from 'moment'
import { useRef, useState } from 'react'
import useSound from 'use-sound'

export default function InnerTimer() {
  const [play] = useSound('/audio/timer.mp3', { volume: 0.2 })
  const [timerState, setTimerState] = useState<TimerState>({
    start: undefined,
    now: moment.now(),
    isActive: false,
  })
  const countRef = useRef<any>(null)

  const handleStart = () => {
    setTimerState((prev) => ({ ...prev, isActive: true, start: moment.now() }))

    countRef.current = setInterval(() => {
      setTimerState((prev) => {
        const targetTime = moment
          .duration(moment.now())
          .subtract({ minutes: 5 })
          .as('milliseconds')
        const timeDifference = moment(prev.start).diff(targetTime)

        if (timeDifference <= 0) {
          play()
          handleReset()
        }

        return { ...prev, now: moment.now() }
      })
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setTimerState((prev) => ({ ...prev, isActive: false, start: undefined }))
  }

  const differenceDate = Math.round(
    moment
      .duration(moment(timerState.start).diff(moment.now()))
      .add({ minutes: 5 })
      .asSeconds()
  )

  const minutes = Math.floor(differenceDate / 60)
  const seconds = Number(differenceDate % 60).toLocaleString('en', {
    minimumIntegerDigits: 2,
  })

  const showStopwatch = !!timerState.start && differenceDate > 0
  return (
    <>
      <title>
        {showStopwatch
          ? `[${minutes}:${seconds}] Timer`
          : 'Experience Calculator'}
      </title>

      <h1 className="text-6xl font-bold text-white">
        {minutes} : {seconds}
      </h1>

      <div className="flex flex-row gap-3">
        <button
          aria-label="Start timer"
          onClick={handleStart}
          className="w-20 rounded-[4px] bg-[#368D6E] py-2 text-xs font-bold uppercase text-white disabled:bg-opacity-50"
          disabled={timerState.isActive}
        >
          Start
        </button>

        <button
          aria-label="Reset timer"
          onClick={handleReset}
          className="w-20 rounded-[4px] bg-[#473E65] py-2 text-xs font-bold uppercase text-white disabled:bg-opacity-50"
          disabled={!timerState.isActive}
        >
          Reset
        </button>
      </div>
    </>
  )
}

interface TimerState {
  start?: number
  now?: number
  isActive: boolean
}
