import { type SettingsObject } from '@/atoms/Settings'

const SettingsFallback = {
  displayRarity: ['Legendary', 'Epic', 'Rare'],
  showOwnedItems: false,
  language: 'en',
} satisfies SettingsObject

export default SettingsFallback
