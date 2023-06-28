import SquareAndPeak from '@/components/xp/SquareAndPeak'
import Timer from '@/components/xp/Timer'
import Vigor from '@/components/xp/Vigor'
import type XPPerLevel from '@/data/XPPerLevel'
import dynamic from 'next/dynamic'

const GeneratedXPTable = dynamic(
  async () => await import('@/components/xp/GeneratedXPTable'),
  { ssr: false }
)
const LevelCalculations = dynamic(
  async () => await import('@/components/xp/LevelCalculations'),
  { ssr: false }
)
const PercentageDifference = dynamic(
  async () => await import('@/components/xp/PercentageDifference'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Timer />

      <section className="absolute right-4 top-24 flex flex-col items-end gap-4">
        <SquareAndPeak />
        <Vigor />
      </section>

      <PercentageDifference />

      <LevelCalculations />

      <GeneratedXPTable />
    </>
  )
}

export type Level = keyof typeof XPPerLevel

export interface LevelState {
  initial?: Level
  initialPercentage?: string
  final?: Level
}
