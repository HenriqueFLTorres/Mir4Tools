import InfoTooltip from '../SquareAndPeak/InfoTooltip'
import InnerVigor from './InnerVigor'

export default async function Vigor() {
  return (
    <section className="flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg">
      <header className="flex justify-between">
        <h2 className="text-2xl font-bold text-white">Vigor</h2>
        <InfoTooltip
          content={
            'Enter your remaining vigor in hours to calculate your XP and percentage earned during an active vigor.'
          }
        />
      </header>

      <InnerVigor />
    </section>
  )
}
