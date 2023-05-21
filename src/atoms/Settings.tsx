import { type Atom, type PrimitiveAtom } from 'jotai'
import { atomWithLocalStorage } from '../utils'

export const SettingsAtom: PrimitiveAtom<SettingsObject> &
  Atom<SettingsObject> = atomWithLocalStorage('Mir4Tools_Settings', {
  displayRarity: ['Epic', 'Rare']
})

interface SettingsObject {
  displayRarity: RarityTypes[]
  showOwnedItems: boolean
}
