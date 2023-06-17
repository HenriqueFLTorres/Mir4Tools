import Image from 'next/image'
import InfoTooltip from './InfoTooltip'
import InnerMagicSquare from './InnerMagicSquare'

export default function MagicSquare() {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 bg-primary-600">
          <Image
            src="/items/square_ticket.webp"
            alt="Magic Square Ticket"
            width={32}
            height={32}
          />
        </div>
        <h2 className="text-2xl font-bold text-white">Magic Square</h2>
        <InfoTooltip content="Enter your tickets and your XP earned per run to calculate the time taken to level up paired with peak/square runs." />
      </div>

      <InnerMagicSquare />
    </>
  )
}
