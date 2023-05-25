const rarityPlaceholder = {
  copper: {
    rarity: null,
    cost: 1,
  },
}

const itemPlaceholder = {
  Legendary: rarityPlaceholder,
  Epic: rarityPlaceholder,
  Rare: rarityPlaceholder,
  Uncommon: rarityPlaceholder,
  Common: rarityPlaceholder,
}

const CraftCost: CraftCostType = {
  steel: {
    Legendary: {
      steel: {
        rarity: 'Epic',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 125,
      },
      copper: {
        rarity: null,
        cost: 100000,
      },
      dark_steel: {
        rarity: null,
        cost: 25000,
      },
    },
    Epic: {
      steel: {
        rarity: 'Rare',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 25,
      },
      copper: {
        rarity: null,
        cost: 20000,
      },
      dark_steel: {
        rarity: null,
        cost: 5000,
      },
    },
    Rare: {
      steel: {
        rarity: 'Uncommon',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 2,
      },
      copper: {
        rarity: null,
        cost: 2000,
      },
      dark_steel: {
        rarity: null,
        cost: 1000,
      },
    },
  },
  evil_minded_orb: {
    Legendary: {
      evil_minded_orb: {
        rarity: 'Epic',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 125,
      },
      copper: {
        rarity: null,
        cost: 100000,
      },
      dark_steel: {
        rarity: null,
        cost: 25000,
      },
    },
    Epic: {
      evil_minded_orb: {
        rarity: 'Rare',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 25,
      },
      copper: {
        rarity: null,
        cost: 20000,
      },
      dark_steel: {
        rarity: null,
        cost: 5000,
      },
    },
    Rare: {
      evil_minded_orb: {
        rarity: 'Uncommon',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 2,
      },
      copper: {
        rarity: null,
        cost: 2000,
      },
      dark_steel: {
        rarity: null,
        cost: 1000,
      },
    },
  },
  moon_shadow_stone: {
    Legendary: {
      moon_shadow_stone: {
        rarity: 'Epic',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 125,
      },
      copper: {
        rarity: null,
        cost: 100000,
      },
      dark_steel: {
        rarity: null,
        cost: 25000,
      },
    },
    Epic: {
      moon_shadow_stone: {
        rarity: 'Rare',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 25,
      },
      copper: {
        rarity: null,
        cost: 20000,
      },
      dark_steel: {
        rarity: null,
        cost: 5000,
      },
    },
    Rare: {
      moon_shadow_stone: {
        rarity: 'Uncommon',
        cost: 10,
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 2,
      },
      copper: {
        rarity: null,
        cost: 2000,
      },
      dark_steel: {
        rarity: null,
        cost: 1000,
      },
    },
  },
}

export default CraftCost

export const WeaponCraftCost: WeaponCraftCostType = {
  primary: {
    Legendary: {
      steel: {
        rarity: 'Legendary',
        cost: 300,
      },
      evil_minded_orb: {
        rarity: 'Legendary',
        cost: 100,
      },
      moon_shadow_stone: {
        rarity: 'Legendary',
        cost: 100,
      },
      dragon_scale: {
        rarity: 'Legendary',
        cost: 1,
      },
      copper: {
        rarity: null,
        cost: 10000000,
      },
      dark_steel: {
        rarity: null,
        cost: 1000000,
      },
    },
    Epic: {
      steel: {
        rarity: 'Epic',
        cost: 300,
      },
      evil_minded_orb: {
        rarity: 'Epic',
        cost: 100,
      },
      moon_shadow_stone: {
        rarity: 'Epic',
        cost: 100,
      },
      dragon_scale: {
        rarity: 'Epic',
        cost: 1,
      },
      copper: {
        rarity: null,
        cost: 800000,
      },
      dark_steel: {
        rarity: null,
        cost: 100000,
      },
    },
    Rare: {
      steel: {
        rarity: 'Rare',
        cost: 75,
      },
      evil_minded_orb: {
        rarity: 'Rare',
        cost: 25,
      },
      moon_shadow_stone: {
        rarity: 'Rare',
        cost: 25,
      },
      dragon_scale: {
        rarity: 'Rare',
        cost: 1,
      },
      copper: {
        rarity: null,
        cost: 50000,
      },
      dark_steel: {
        rarity: null,
        cost: 10000,
      },
    },
  },
  secondary: {
    Legendary: {
      steel: {
        rarity: 'Legendary',
        cost: 300,
      },
      evil_minded_orb: {
        rarity: 'Legendary',
        cost: 100,
      },
      moon_shadow_stone: {
        rarity: 'Legendary',
        cost: 100,
      },
      dragon_claw: {
        rarity: 'Legendary',
        cost: 1,
      },
      copper: {
        rarity: null,
        cost: 10000000,
      },
      dark_steel: {
        rarity: null,
        cost: 10000000,
      },
    },
    Epic: {
      steel: {
        rarity: 'Epic',
        cost: 300,
      },
      evil_minded_orb: {
        rarity: 'Epic',
        cost: 100,
      },
      moon_shadow_stone: {
        rarity: 'Epic',
        cost: 100,
      },
      dragon_claw: {
        rarity: 'Epic',
        cost: 1,
      },
      copper: {
        rarity: null,
        cost: 800000,
      },
      dark_steel: {
        rarity: null,
        cost: 800000,
      },
    },
    Rare: {
      steel: {
        rarity: 'Rare',
        cost: 75,
      },
      evil_minded_orb: {
        rarity: 'Rare',
        cost: 25,
      },
      moon_shadow_stone: {
        rarity: 'Rare',
        cost: 25,
      },
      dragon_claw: {
        rarity: 'Rare',
        cost: 1,
      },
      copper: {
        rarity: null,
        cost: 50000,
      },
      dark_steel: {
        rarity: null,
        cost: 50000,
      },
    },
  },
}
