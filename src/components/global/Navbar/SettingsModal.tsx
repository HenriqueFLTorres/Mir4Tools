'use client'

import { SettingsAtom } from '@/atoms/Settings'
import Checkbox from '@/components/shared/Checkbox'
import Modal from '@/components/shared/Modal'
import Select from '@/components/shared/Select'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Settings from '@/icons/Settings'
import * as Tabs from '@radix-ui/react-tabs'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useTranslation } from '../../../../public/locales/client'

export default function SettingsModal() {
  const [settings, setSettings] = useAtom(SettingsAtom)
  const { t, i18n } = useTranslation()
  const router = useRouter()

  const handleFilterChange = (option: RarityTypes) => {
    if (settings.displayRarity.includes(option)) {
      setSettings({
        ...settings,
        displayRarity: settings.displayRarity.filter((r) => r !== option),
      })
      return
    }

    setSettings({
      ...settings,
      displayRarity: [...settings.displayRarity, option],
    })
  }

  const changeLanguage = async (val: string) => {
    await i18n.changeLanguage(val)
    setSettings({ ...settings, language: val })
    router.refresh()
  }

  return (
    <Modal.Wrapper>
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
              value={settings.language}
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
                    checked={settings.displayRarity.includes(option)}
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
                checked={settings.showOwnedItems}
                onCheckedChange={() => {
                  setSettings({
                    ...settings,
                    showOwnedItems: !settings.showOwnedItems,
                  })
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
        </Tabs.Root>
      </Modal.Content>
    </Modal.Wrapper>
  )
}

const filterOptions: RarityTypes[] = ['Epic', 'Rare', 'Uncommon', 'Common']
