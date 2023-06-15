import SquareAndPeakResult from './CalculationResult'
import MagicSquare from './MagicSquare'
import SecretPeak from './SecretPeak'

export default function SquareAndPeak() {
  return (
    <section className="flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg">
      <MagicSquare />

      <SecretPeak />

      <SquareAndPeakResult />
    </section>
  )
}
