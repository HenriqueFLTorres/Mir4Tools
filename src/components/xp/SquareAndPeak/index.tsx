import InfoTooltip from '@/components/xp/SquareAndPeak/InfoTooltip'
import InnerMagicSquare from '@/components/xp/SquareAndPeak/InnerMagicSquare'
import InnerSecretPeak from '@/components/xp/SquareAndPeak/InnerSecretPeak'
import Image from 'next/image'
import { useTranslation } from '../../../../public/locales/index'
import SquareAndPeakResult from './CalculationResult'

export default async function SquareAndPeak() {
  const { t } = await useTranslation()

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
        <h2 className="text-2xl font-bold text-white">{t('Magic Square')}</h2>
        <InfoTooltip
          content={t(
            'Enter your tickets and your XP earned per run to calculate the time taken to level up paired with peak/square runs.'
          )}
        />
      </div>

      <InnerMagicSquare />

      <div className="flex items-center gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 bg-primary-600">
          <Image
            src="/items/peak_ticket.webp"
            alt="Secret Peak Ticket"
            width={32}
            height={32}
          />
        </div>
        <h2 className="text-2xl font-bold text-white">{t('Secret Peak')}</h2>
      </div>

      <InnerSecretPeak />

      <SquareAndPeakResult />
    </section>
  )
}
