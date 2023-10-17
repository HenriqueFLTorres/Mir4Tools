import Discord from '@/icons/Discord'
import { useTranslation } from '../../../../public/locales/client'

export default function DiscordGroup() {
  const { t } = useTranslation()
  return (
    <a
      className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white transition-colors hover:bg-white/10"
      href={'https://discord.gg/BRJxNdbJgw'}
      target="_blank"
      rel="noreferrer"
    >
      <Discord className="h-6 w-6 fill-white" />
      {t('Join our group!')}
    </a>
  )
}
