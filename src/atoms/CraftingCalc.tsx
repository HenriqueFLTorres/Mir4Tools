import { atom } from 'jotai';

export const defaultCostObject: CraftingCalcObject = {
  anima_stone: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  blue_devil_stone: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  evil_minded_orb: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  exorcism_bauble: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  illuminating_fragment: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  moon_shadow_stone: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  platinum: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  steel: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  },
  glittering_powder: 0,
  copper: 0,
  dark_steel: 0,
  energy: 0,
  dragon_scale: {
    Legendary: 0,
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
    Common: 0,
  }
}

export const CraftingCalcAtom = atom(defaultCostObject);
