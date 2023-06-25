'use client'

import { type SettingsObject } from '@/atoms/Settings'
import Checkbox from '@/components/shared/Checkbox'
import Modal from '@/components/shared/Modal'
import Select from '@/components/shared/Select'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Settings from '@/icons/Settings'
import SettingsFallback from '@/utils/SettingsFallback'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Tabs from '@radix-ui/react-tabs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { useTranslation } from '../../../../public/locales/client'
import { trpc } from '../../../client/trpcClient'

const schema = z.object({
  displayRarity: z.array(
    z.enum(['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'])
  ),
  language: z.enum(['en', 'pt']),
  showOwnedItems: z.boolean(),
})

export default function SettingsModal() {
  const [isOpen, setIsOpen] = useState(false)

  const { data: session, update: updateSession } = useSession()
  const settings = session?.user?.settings

  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { isLoading, mutate: saveSettings } = trpc.saveSettings.useMutation({
    onSuccess: async (_, data) => {
      await updateSession({ settings: data })
      await i18n.changeLanguage(data.language)
      router.refresh()
      setIsOpen(false)
      toast.success(t('Settings updated successfully!'))
      toast.dismiss('loading toast')
    },
    onMutate: () =>
      toast.loading(t('Updating settings...'), { id: 'loading toast' }),
    onError: ({ message }) => {
      toast.dismiss('loading toast')
      toast.error(t(message))
    },
  })

  const { handleSubmit, watch, setValue } = useForm<SettingsObject>({
    resolver: zodResolver(schema),
    defaultValues: settings ?? SettingsFallback,
  })

  const displayRarity = watch('displayRarity')

  const handleFilterChange = (option: RarityTypes) => {
    if (displayRarity.includes(option)) {
      setValue(
        'displayRarity',
        displayRarity.filter((r) => r !== option)
      )
      return
    }
    setValue('displayRarity', [...displayRarity, option])
  }

  const changeLanguage = async (val: 'en' | 'pt') => {
    setValue('language', val)
  }

  const onSubmit = (data: SettingsObject) => saveSettings(data)

  return (
    <Modal.Wrapper onOpenChange={setIsOpen} open={isOpen}>
      <Modal.Trigger
        aria-label={t('Manage settings')}
        className="flex w-full items-center justify-start gap-4 rounded-md px-3 py-2 font-medium text-white hover:bg-black/20 motion-safe:transition-colors"
      >
        <Settings className="h-5 w-5 fill-white" />
        {t('Manage Settings')}
      </Modal.Trigger>
      <Modal.Content className="max-w-3xl gap-4 pb-6">
        <header className="flex w-full items-center justify-between">
          <Modal.Title>{t('Manage Settings')}</Modal.Title>
          <Modal.Close />
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs.Root defaultValue="general">
            <Tabs.List
              className="custom-scroll flex gap-3 overflow-auto py-2"
              aria-label="Manage your settings"
            >
              <Tabs.Trigger
                className="flex shrink-0 gap-4 rounded p-3 text-sm font-medium text-white data-[state=active]:bg-white/10 motion-safe:transition-colors"
                value="general"
              >
                <Settings className="h-5 w-5 fill-white" />
                {t('General Settings')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="flex shrink-0 gap-4 rounded p-3 text-sm font-medium text-white data-[state=active]:bg-white/10 motion-safe:transition-colors"
                value="crafting"
              >
                <Forge className="h-5 w-5 fill-white" />
                {t('Crafting Calculator')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="flex shrink-0 gap-4 rounded p-3 text-sm font-medium text-white data-[state=active]:bg-white/10 motion-safe:transition-colors"
                value="experience"
              >
                <EXP className="h-5 w-5 fill-white" />
                {t('Experience Calculator')}
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="flex flex-col pb-2 pt-4" value="general">
              <Select
                label={t('Language')}
                defaultValue="en"
                value={watch('language')}
                items={[
                  { label: 'English', value: 'en' },
                  { label: 'Português', value: 'pt' },
                ]}
                onValueChange={changeLanguage}
              />
            </Tabs.Content>

            <Tabs.Content
              className="relative flex flex-col gap-8 md:flex-row"
              value="crafting"
            >
              <div className="flex flex-1 flex-col gap-4">
                <h2>{t('Resources Filter')}</h2>

                <ul className="flex flex-col gap-2">
                  {filterOptions.map((option) => (
                    <Checkbox
                      key={option}
                      label={t(`${option}`)}
                      // checked={settings.displayRarity.includes(option)}
                      checked={watch('displayRarity').includes(option)}
                      onCheckedChange={() => {
                        handleFilterChange(option)
                      }}
                      disabled={option === 'Uncommon' || option === 'Common'}
                    />
                  ))}
                </ul>
              </div>

              <hr className="border border-primary-400 md:h-40" />

              <div className="flex flex-1 flex-col gap-4">
                <h2>{t('Advanced View')}</h2>

                <Checkbox
                  label={t('Show Owned Items')}
                  checked={watch('showOwnedItems')}
                  onCheckedChange={() => {
                    setValue('showOwnedItems', !watch('showOwnedItems'))
                  }}
                />
              </div>
            </Tabs.Content>

            <Tabs.Content
              className="relative flex flex-col gap-4"
              value="experience"
            >
              <h2>{t('Panel Visibility')}</h2>

              <ul className="flex flex-col gap-2">
                <Checkbox
                  label={t('Magic Square and Secret Peak')}
                  checked
                  disabled
                />
                <Checkbox label={t('Vigor')} checked disabled />
              </ul>
            </Tabs.Content>

            <button
              aria-label={t('Save Settings')}
              className="ml-auto mt-4 rounded bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-500 motion-safe:transition-colors"
              type="submit"
              disabled={isLoading}
            >
              {t('Save Settings')}
            </button>
          </Tabs.Root>
        </form>
      </Modal.Content>
    </Modal.Wrapper>
  )
}

const filterOptions: RarityTypes[] = ['Epic', 'Rare', 'Uncommon', 'Common']
