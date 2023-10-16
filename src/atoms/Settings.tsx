import { atomWithStorage } from 'jotai/utils'

interface SettingsAtomType {
  language: 'pt' | 'en' | 'es'
  showConstitutionPromotion: boolean
  displayRarity: RarityTypes[]
  showOwnedItems: boolean
}

export const SettingsAtom = atomWithStorage<SettingsAtomType>(
  'Mir4tools_GlobalSettings',
  {
    language: 'en',
    showConstitutionPromotion: true,
    displayRarity: ['Legendary', 'Epic', 'Rare'],
    showOwnedItems: true
  },
  undefined
)
