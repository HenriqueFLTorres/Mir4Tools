'use client'

import { XPExtension } from '@/atoms/XPCalculator'
import Input from '@/components/Input'
import { getReadableNumber, getValidNumber } from '@/utils/index'
import { useAtom } from 'jotai'
import { useTranslation } from '../../../../public/locales/client'

export default function InnerSecretPeak() {
  const { t } = useTranslation()
  const [{ secretPeak }, setExtension] = useAtom(XPExtension)

  return (
    <div className="flex">
      <Input
        label={t('Tickets')}
        className="w-16 text-xs text-white [&>div]:rounded-r-none [&>div]:py-1"
        onChange={(value) => {
          setExtension((prev) => ({
            ...prev,
            secretPeak: {
              ...prev.secretPeak,
              tickets: getValidNumber(value, prev.secretPeak.tickets),
            },
          }))
        }}
        value={String(secretPeak.tickets)}
      />
      <Input
        label={t('XP per run')}
        className="w-full text-xs text-white [&>div]:rounded-l-none [&>div]:border-l-2 [&>div]:border-l-primary-500 [&>div]:py-1"
        onChange={(value) => {
          setExtension((prev) => ({
            ...prev,
            secretPeak: {
              ...prev.secretPeak,
              xpPerRun: getValidNumber(value, prev.secretPeak.xpPerRun),
            },
          }))
        }}
        value={getReadableNumber(secretPeak.xpPerRun)}
        suffix="XP"
      />
    </div>
  )
}
