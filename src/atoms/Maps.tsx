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
  [key in string]: nodeObject
}>({
  bf811aa53a773: {
    pos: [56.17, 50.17],
    rarity: 'Rare',
    type: 'energy',
  },
  '4cf160769ad2d': {
    pos: [56.67, 51],
    rarity: 'Rare',
    type: 'energy',
  },
  '2014a3a6c941b': {
    pos: [56.5, 51.67],
    rarity: 'Rare',
    type: 'energy',
  },
  '0c1a82c1feeed': {
    pos: [56.17, 52.67],
    rarity: 'Rare',
    type: 'energy',
  },
  '0e502844bc3e4': {
    pos: [55.83, 51.17],
    rarity: 'Rare',
    type: 'energy',
  },
  '01c3ae07120b4': {
    pos: [55.17, 52],
    rarity: 'Rare',
    type: 'energy',
  },
  '28ad0c4e7d1b8': {
    pos: [36, 57.17],
    rarity: 'Rare',
    type: 'energy',
  },
  '241ae21ae8a9d': {
    pos: [34.5, 56.33],
    rarity: 'Rare',
    type: 'energy',
  },
  '7781acf66c89e': {
    pos: [33.17, 55.33],
    rarity: 'Rare',
    type: 'energy',
  },
  '9712cd8913556': {
    pos: [37, 55.5],
    rarity: 'Rare',
    type: 'energy',
  },
  f500a22b27667: {
    pos: [35.17, 54.83],
    rarity: 'Rare',
    type: 'energy',
  },
  '060fb6c83bd0b': {
    pos: [42.33, 37.67],
    rarity: 'Rare',
    type: 'energy',
  },
  '3b1f199020e9e': {
    pos: [41.83, 35.5],
    rarity: 'Rare',
    type: 'energy',
  },
  ce6679e6ed907: {
    pos: [40.17, 37.17],
    rarity: 'Rare',
    type: 'energy',
  },
  '4a78177e021b': {
    pos: [41.17, 33.67],
    rarity: 'Rare',
    type: 'energy',
  },
  c26d4a8ce6cc1: {
    pos: [39.5, 35],
    rarity: 'Rare',
    type: 'energy',
  },
  '1de3a92bed61c': {
    pos: [38.67, 32.5],
    rarity: 'Rare',
    type: 'energy',
  },
  ed4bf6658af4: {
    pos: [41, 31.17],
    rarity: 'Rare',
    type: 'energy',
  },
  '526c1b458878c': {
    pos: [42.83, 30.17],
    rarity: 'Rare',
    type: 'energy',
  },
  '83ccde79d6d9b': {
    pos: [42.17, 32.17],
    rarity: 'Rare',
    type: 'energy',
  },
  1232158725709: {
    pos: [40.67, 29.5],
    rarity: 'Rare',
    type: 'energy',
  },
  a662546f39aed: {
    pos: [41.83, 28.33],
    rarity: 'Rare',
    type: 'energy',
  },
  a7bc0427d83f9: {
    pos: [39.67, 27.5],
    rarity: 'Rare',
    type: 'energy',
  },
})
