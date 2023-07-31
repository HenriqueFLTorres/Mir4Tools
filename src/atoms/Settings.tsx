import { atomWithStorage } from 'jotai/utils'

interface SettingsAtomType {
  language: 'pt' | 'en' | 'es' | 'fil'
  showConstitutionPromotion: boolean
}

export const SettingsAtom = atomWithStorage<SettingsAtomType>(
  'Mir4tools_Settings',
  {
    language: 'en',
    showConstitutionPromotion: true,
  }
)
