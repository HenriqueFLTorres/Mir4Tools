'use client'

import { XPExtension } from '@/atoms/XPCalculator'
import Input from '@/components/Input'
import { getReadableNumber, getValidNumber } from '@/utils/index'
import { useAtom } from 'jotai'
import { useTranslation } from '../../../../public/locales/client'

export default function InnerMagicSquare() {
  const { t } = useTranslation()
  const [{ magicSquare }, setExtension] = useAtom(XPExtension)

  return (
    <div className="flex">
      <Input
        label={t('Tickets')}
        className="w-16 text-xs text-white [&>div]:rounded-r-none [&>div]:py-1"
        onChange={(value) => {
          setExtension((prev) => ({
            ...prev,
            magicSquare: {
              ...prev.magicSquare,
              tickets: getValidNumber(value, prev.magicSquare.tickets),
            },
          }))
        }}
        value={String(magicSquare.tickets)}
      />
      <Input
        label={t('XP per run')}
        className="w-full text-xs text-white [&>div]:rounded-l-none [&>div]:border-l-2 [&>div]:border-l-primary-500 [&>div]:py-1"
        onChange={(value) => {
          setExtension((prev) => ({
            ...prev,
            magicSquare: {
              ...prev.magicSquare,
              xpPerRun: getValidNumber(value, prev.magicSquare.xpPerRun),
            },
          }))
        }}
        value={getReadableNumber(magicSquare.xpPerRun)}
        suffix="XP"
      />
    </div>
  )
}
