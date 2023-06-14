import { XPCalculatorAtom, XPExtension } from '@/atoms/XPCalculator'
import Info from '@/icons/Info'
import { getReadableNumber, getValidNumber } from '@/utils/index'
import humanizeDuration from 'humanize-duration'
import { useAtom } from 'jotai'
import moment from 'moment'
import Image from 'next/image'
import Input from '../Input'

export default function SquareAndPeak({
  currentXP,
  totalXP,
  XPToTargetLevel
}: {
  currentXP: number
  totalXP: number
  XPToTargetLevel: number | undefined
}) {
  const [{ xpPerMinute, manualCalculation }] = useAtom(XPCalculatorAtom)
  const [{ magicSquare, secretPeak }, setExtension] = useAtom(XPExtension)

  const XPPerMinute = xpPerMinute ?? manualCalculation.xpPerMinute
  // const XPPerHour = (XPPerMinute ?? 0) * 60

  const XPPerReset =
    magicSquare.xpPerRun * magicSquare.tickets +
    secretPeak.xpPerRun * secretPeak.tickets
  // const hoursTaken = 0.5 * magicSquare.tickets + 0.5 * secretPeak.tickets // 30 minutes each ticket
  const ticketsXPPerMinute = XPPerReset / 1440 // XP per day divided by minutes per day

  return (
    <section className="flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg">
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
        <button aria-label="More info" className="ml-auto p-1">
          <Info className="h-6 w-6" />
        </button>
      </div>

      <div className="flex">
        <Input
          label="Tickets"
          className="w-16 text-xs text-white [&>div]:rounded-r-none [&>div]:py-1"
          onChange={(value) => {
            setExtension((prev) => ({
              ...prev,
              magicSquare: {
                ...prev.magicSquare,
                tickets: getValidNumber(value, prev.magicSquare.tickets)
              }
            }))
          }}
          value={String(magicSquare.tickets)}
        />
        <Input
          label="XP per run"
          className="w-full text-xs text-white [&>div]:rounded-l-none [&>div]:border-l-2 [&>div]:border-l-primary-500 [&>div]:py-1"
          onChange={(value) => {
            setExtension((prev) => ({
              ...prev,
              magicSquare: {
                ...prev.magicSquare,
                xpPerRun: getValidNumber(value, prev.magicSquare.xpPerRun)
              }
            }))
          }}
          value={getReadableNumber(magicSquare.xpPerRun)}
          suffix="XP"
        />
      </div>

      <div className="flex items-center gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 bg-primary-600">
          <Image
            src="/items/peak_ticket.webp"
            alt="Secret Peak Ticket"
            width={32}
            height={32}
          />
        </div>
        <h2 className="text-2xl font-bold text-white">Secret Peak</h2>
      </div>

      <div className="flex">
        <Input
          label="Tickets"
          className="w-16 text-xs text-white [&>div]:rounded-r-none [&>div]:py-1"
          onChange={(value) => {
            setExtension((prev) => ({
              ...prev,
              secretPeak: {
                ...prev.secretPeak,
                tickets: getValidNumber(value, prev.secretPeak.tickets)
              }
            }))
          }}
          value={String(secretPeak.tickets)}
        />
        <Input
          label="XP per run"
          className="w-full text-xs text-white [&>div]:rounded-l-none [&>div]:border-l-2 [&>div]:border-l-primary-500 [&>div]:py-1"
          onChange={(value) => {
            setExtension((prev) => ({
              ...prev,
              secretPeak: {
                ...prev.secretPeak,
                xpPerRun: getValidNumber(value, prev.secretPeak.xpPerRun)
              }
            }))
          }}
          value={getReadableNumber(secretPeak.xpPerRun)}
          suffix="XP"
        />
      </div>

      <p className="rounded-md bg-primary-600 px-4 py-2 text-sm text-white">
        {humanizeDuration(
          moment
            .duration(
              (XPToTargetLevel ?? 0) /
                (ticketsXPPerMinute + (XPPerMinute ?? 0)),
              'minutes'
            )
            .asMilliseconds(),
          { round: true }
        )}
      </p>
    </section>
  )
}
