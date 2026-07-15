import { atom } from 'jotai'

export const MapsAtom = atom<string[]>([
  'Global Map',
  // 'Snake Pit Area',
  // 'Snake Pit',
])

export const MapsFloorAtom = atom<number>(0)

export type rarityVibilityObject = { [key in RarityTypes]: boolean }

export const rarityVisibilityAtom = atom<{
  energy: rarityVibilityObject
  mining: rarityVibilityObject
  chest: rarityVibilityObject
  gather: rarityVibilityObject
  darksteel: rarityVibilityObject
}>({
  energy: {
    Mythic: true,
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  mining: {
    Mythic: true,
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  chest: {
    Mythic: true,
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  gather: {
    Mythic: true,
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
  darksteel: {
    Mythic: true,
    Legendary: true,
    Epic: true,
    Rare: true,
    Uncommon: true,
    Common: true,
  },
})

export const currentMapPointsAtom = atom<mapNodesObject>({})
