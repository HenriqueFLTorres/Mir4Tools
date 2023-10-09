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
    type: nodeTypes
    rarity: RarityTypes
    pos: [number, number]
  }
}>({
  '60fef7127e3f2': {
    pos: [70.66666666666667, 50.16666666666667],
    rarity: 'Legendary',
    type: 'energy',
  },
  '7d5af38442098': {
    pos: [66.66666666666666, 44],
    rarity: 'Epic',
    type: 'energy',
  },
  ce4f19a7d627f: {
    pos: [42.833333333333336, 45.83333333333333],
    rarity: 'Uncommon',
    type: 'energy',
  },
  '229861231ba57': {
    pos: [35, 57.666666666666664],
    rarity: 'Common',
    type: 'energy',
  },
  d233fa7dc9e93: {
    pos: [54.50000000000001, 42.333333333333336],
    rarity: 'Rare',
    type: 'energy',
  },
  '2cb535b83dad': {
    pos: [72.5, 69.33333333333334],
    rarity: 'Epic',
    type: 'gather',
  },
  '5d37d74762cf9': {
    pos: [50.66666666666667, 60.333333333333336],
    rarity: 'Legendary',
    type: 'mining',
  },
  '9803dbd30203f': {
    pos: [57.49999999999999, 55.833333333333336],
    rarity: 'Epic',
    type: 'mining',
  },
  '7e85397762aeb': {
    pos: [47.333333333333336, 67.5],
    rarity: 'Rare',
    type: 'chest',
  },
  ce33de516a9f5: {
    pos: [55.833333333333336, 65],
    rarity: 'Common',
    type: 'gather',
  },
})
