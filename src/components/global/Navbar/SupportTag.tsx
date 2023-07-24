'use client'
import Info from '@/icons/Info'
import { useTranslation } from '../../../../public/locales/client'

export default function SupportTag() {
  const { t } = useTranslation()

  return <></>
  return (
    <div className="absolute z-10 left-4 top-20 flex w-[calc(100%-2rem)] flex-col items-center justify-center gap-2 rounded border border-white/10 bg-primary-400/5 p-2 text-center text-sm font-light text-white backdrop-blur-lg sm:w-max sm:flex-row sm:text-left lg:top-24">
      <Info className="shrink-0 fill-white" />
      <p>{t('For support')}: Treffy#4964</p>
    </div>
  )
}
