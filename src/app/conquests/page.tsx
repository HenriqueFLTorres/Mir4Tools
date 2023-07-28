import dynamic from 'next/dynamic'

const ConquestConditions = dynamic(
  async () => await import('@/components/conquests/Conditions'),
  { ssr: false }
)
const ConquestSelection = dynamic(
  async () => await import('@/components/conquests/ConquestSelection'),
  { ssr: false }
)
const ConquestCosts = dynamic(
  async () => await import('@/components/conquests/Costs'),
  { ssr: false }
)
const ConquestEffectsTable = dynamic(
  async () => await import('@/components/conquests/EffectsTable'),
  { ssr: false }
)
const ConquestHeader = dynamic(
  async () => await import('@/components/conquests/Header'),
  { ssr: false }
)
const ConquestStageHandler = dynamic(
  async () => await import('@/components/conquests/StageHandler'),
  { ssr: false }
)

export default function Conquests() {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[90rem] flex-col items-center pt-[4.3125rem] 2xl:pt-24 selection:bg-primary-800">
      <ConquestSelection />

      <section className="flex w-full flex-col items-center px-4 lg:px-8 py-4 text-white">
        <ConquestStageHandler />

        <ConquestHeader />

        <ConquestEffectsTable />

        <ConquestConditions />

        <ConquestCosts />
      </section>
    </div>
  )
}
