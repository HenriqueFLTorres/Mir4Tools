const rarityPlaceholder = {
  copper: {
    rarity: null,
    cost: 1
  }
}

const itemPlaceholder = {
  Legendary: rarityPlaceholder,
  Epic: rarityPlaceholder,
  Rare: rarityPlaceholder,
  Uncommon: rarityPlaceholder,
  Common: rarityPlaceholder
}

const CraftCost: CraftCostType = {
  steel: {
    ...itemPlaceholder,
    Epic: {
      steel: {
        rarity: 'Rare',
        cost: 10
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 25
      },
      copper: {
        rarity: null,
        cost: 20000
      },
      dark_steel: {
        rarity: null,
        cost: 5000
      }
    },
    Rare: {
      steel: {
        rarity: 'Uncommon',
        cost: 10
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 2
      },
      copper: {
        rarity: null,
        cost: 2000
      },
      dark_steel: {
        rarity: null,
        cost: 1000
      }
    }
  },
  evil_minded_orb: {
    ...itemPlaceholder,
    Epic: {
      evil_minded_orb: {
        rarity: 'Rare',
        cost: 10
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 25
      },
      copper: {
        rarity: null,
        cost: 20000
      },
      dark_steel: {
        rarity: null,
        cost: 5000
      }
    },
    Rare: {
      evil_minded_orb: {
        rarity: 'Uncommon',
        cost: 10
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 2
      },
      copper: {
        rarity: null,
        cost: 2000
      },
      dark_steel: {
        rarity: null,
        cost: 1000
      }
    }
  },
  moon_shadow_stone: {
    ...itemPlaceholder,
    Epic: {
      moon_shadow_stone: {
        rarity: 'Rare',
        cost: 10
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 25
      },
      copper: {
        rarity: null,
        cost: 20000
      },
      dark_steel: {
        rarity: null,
        cost: 5000
      }
    },
    Rare: {
      moon_shadow_stone: {
        rarity: 'Uncommon',
        cost: 10
      },
      glittering_powder: {
        rarity: 'Uncommon',
        cost: 2
      },
      copper: {
        rarity: null,
        cost: 2000
      },
      dark_steel: {
        rarity: null,
        cost: 1000
      }
    }
  }
}

export default CraftCost

const weaponRecipePlaceholder = {
  copper: {
    rarity: null,
    cost: 1
  }
}

const weaponRarityPlaceholder = {
  1: weaponRecipePlaceholder,
  2: weaponRecipePlaceholder,
  3: weaponRecipePlaceholder,
  4: weaponRecipePlaceholder
}

export const WeaponCraftCost: WeaponCraftCostType = {
  primary: {
    Legendary: weaponRarityPlaceholder,
    Rare: weaponRarityPlaceholder,
    Uncommon: weaponRarityPlaceholder,
    Epic: {
      1: {
        steel: {
          rarity: 'Epic',
          cost: 300
        },
        evil_minded_orb: {
          rarity: 'Epic',
          cost: 100
        },
        moon_shadow_stone: {
          rarity: 'Epic',
          cost: 100
        },
        dragon_scale: {
          rarity: 'Epic',
          cost: 1
        },
        copper: {
          rarity: null,
          cost: 800000
        },
        dark_steel: {
          rarity: null,
          cost: 100000
        }
      },
      2: weaponRecipePlaceholder,
      3: weaponRecipePlaceholder,
      4: weaponRecipePlaceholder
    }
  },
  secondary: {
    Legendary: weaponRarityPlaceholder,
    Epic: weaponRarityPlaceholder,
    Rare: weaponRarityPlaceholder,
    Uncommon: weaponRarityPlaceholder
  }
}
