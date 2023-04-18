import { Atom, PrimitiveAtom } from 'jotai';
import { atomWithLocalStorage } from '../utils';

export const SettingsAtom: PrimitiveAtom<SettingsObject> &
  Atom<SettingsObject> = atomWithLocalStorage('Mir4Tools_Settings', {
  displayRarity: ['Epic', 'Rare'],
});

type SettingsObject = {
  displayRarity: RarityTypes[];
  showOwnedItems: boolean;
};
