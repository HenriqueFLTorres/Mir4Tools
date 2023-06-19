import { atom } from 'jotai'
import Cookies from 'js-cookie'

const MySettings = atom<SettingsObject>({
  displayRarity: ['Legendary', 'Epic', 'Rare'],
  showOwnedItems: false,
  language: 'en',
})

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

interface SettingsObject {
  displayRarity: RarityTypes[]
  showOwnedItems: boolean
  language: 'en' | 'pt'
}
