import { atom } from 'jotai';

const defaultLevels = {
  'PHYS DEF': {
    from: 1,
    to: 5,
  },
  HP: {
    from: 1,
    to: 5,
  },
  EVA: {
    from: 1,
    to: 5,
  },
  'PHYS ATK': {
    from: 1,
    to: 5,
  },
  Accuracy: {
    from: 1,
    to: 5,
  },
  MP: {
    from: 1,
    to: 5,
  },
  'Spell DEF': {
    from: 1,
    to: 5,
  },
}

export const statusAtom = atom<statusEffects | null>(null)

export const statusLevelsAtom = atom<{
  [key in statusEffects]: { from: number; to: number }
}>(defaultLevels)

export type statusEffects =
  | 'PHYS DEF'
  | 'HP'
  | 'EVA'
  | 'PHYS ATK'
  | 'Accuracy'
  | 'MP'
  | 'Spell DEF'
