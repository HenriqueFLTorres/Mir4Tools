import SettingsFallback from '@/utils/SettingsFallback'
import { atom } from 'jotai'

export const SettingsAtom = atom<SettingsObject>(SettingsFallback)

export interface SettingsObject {
  displayRarity: RarityTypes[]
  showOwnedItems: boolean
  language: 'en' | 'pt'
}
