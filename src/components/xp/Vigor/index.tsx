'use client'

import { useTranslation } from '../../../../public/locales/client'
import InfoTooltip from '../SquareAndPeak/InfoTooltip'
import InnerVigor from './InnerVigor'

export default function Vigor() {
  const { t } = useTranslation()

  return (
    <section id="experienceVigor" className="flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg">
      <header className="flex justify-between">
        <h2 className="text-2xl font-bold text-white">{t('Vigor')}</h2>
        <InfoTooltip
          content={t(
            'Enter your remaining vigor in hours to calculate your XP and percentage earned during an active vigor.'
          )}
        />
      </header>

      <InnerVigor />
    </section>
  )
}
