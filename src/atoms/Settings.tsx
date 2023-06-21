import { atom } from 'jotai'
import Cookies from 'js-cookie'

export const SettingsFallback = {
  displayRarity: ['Legendary', 'Epic', 'Rare'],
  showOwnedItems: false,
  language: 'en',
} satisfies SettingsObject

const MySettings = atom<SettingsObject>(SettingsFallback)

export const SettingsAtom = atom(
  (get) => get(MySettings),
  (_, set, newValue) => {
    Cookies.set(
      'Mir4Tools_Settings',
      JSON.stringify(newValue as SettingsObject)
    )
    set(MySettings, newValue as SettingsObject)
  }
)

export interface SettingsObject {
  displayRarity: RarityTypes[]
  showOwnedItems: boolean
  language: 'en' | 'pt'
}
