import { atom, type Atom, type PrimitiveAtom } from 'jotai'
import { atomWithLocalStorage } from '../utils'

export const showInventoryAtom = atom(false)

export const InventoryAtom: PrimitiveAtom<InventoryType> & Atom<InventoryType> =
  atomWithLocalStorage('Mir4Tools_Inventory', {
    anima_stone: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    blue_devil_stone: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    evil_minded_orb: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    exorcism_bauble: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    illuminating_fragment: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    moon_shadow_stone: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    platinum: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    steel: {
      Legendary: { traddable: 0, nonTraddable: 0 },
      Epic: { traddable: 0, nonTraddable: 0 },
      Rare: { traddable: 0, nonTraddable: 0 },
      Uncommon: { traddable: 0, nonTraddable: 0 },
      Common: { traddable: 0, nonTraddable: 0 }
    },
    glittering_powder: 0,
    copper: 0,
    dark_steel: 0,
    energy: 0,
    dragon_scale: 0
  })
