'use client'

import Translation from '@/icons/Translation'
import * as Select from '@radix-ui/react-select'
import { toast } from 'react-hot-toast'
import { useTranslation } from '../../../../public/locales/client'

export default function ChangeLanguage() {
  const { t, i18n } = useTranslation()

  const changeLanguage = async (val: 'en' | 'pt') => {
    i18n
      .changeLanguage(val)
      .then(() => toast.success('Language updated'))
      .catch(() => toast.error('Something went wrong'))
  }

  return (
    <Select.Root
      defaultValue="en"
      value={i18n.language}
      onValueChange={changeLanguage}
    >
      <Select.Trigger className="flex shrink-0 h-[3.25rem] w-[3.25rem] rounded-full border-2 border-transparent bg-black/20 p-2 outline-none hover:border-white/10 transition-colors">
        <Translation className="h-6 w-6 text-white" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={12}
          align="center"
          className="z-[60] font-main flex h-[--radix-select-content-trigger-height] w-max flex-col gap-2 overflow-auto rounded relative border border-white/10 bg-primary-400/5 p-2 backdrop-blur-lg shadow-md"
        >
          <Select.Viewport>
            {languages.map(({ label, value }) => (
              <Select.Item
                className="cursor-pointer rounded p-2 text-base font-medium text-white outline-none hover:bg-black/20 transition-colors"
                value={value}
                key={value}
              >
                <Select.ItemText>{label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Português', value: 'pt' },
]
