import { atom } from 'jotai'

export const MapsAtom = atom<string[]>([
  'Global Map',
  'Snake Pit Area',
  'Snake Pit',
])

export type rarityVibilityObject = { [key in RarityTypes]: boolean }

export const rarityVisibilityAtom = atom<{
  energy: rarityVibilityObject
  mining: rarityVibilityObject
  chest: rarityVibilityObject
  gather: rarityVibilityObject
}>({
  energy: {
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  mining: {
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  chest: {
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  gather: {
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
})

export const currentMapPointsAtom = atom<{
  [key in string]: {
    type: nodeTypes,
    rarity: RarityTypes,
    pos: [number, number]
  }
}>({})
