import BaseResourceCost from '@/data/BaseResouceCost'

import {
  ComplementaryItems,
  extractItemRarity,
  formatItemName,
  rarityRegex,
} from '@/utils/index'

export const defaultItemObject = { traddable: 0, nonTraddable: 0 }

export const defaultFullItemObject: {
  [key in RarityTypes]: { traddable: number; nonTraddable: number }
} = {
  Mythic: { traddable: 0, nonTraddable: 0 },
  Legendary: { traddable: 0, nonTraddable: 0 },
  Epic: { traddable: 0, nonTraddable: 0 },
  Rare: { traddable: 0, nonTraddable: 0 },
  Uncommon: { traddable: 0, nonTraddable: 0 },
  Common: { traddable: 0, nonTraddable: 0 },
}

export const defaultInventoryValue: InventoryType = {
  anima_stone: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  blue_devil_stone: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  evil_minded_orb: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  exorcism_bauble: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  illuminating_fragment: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  moon_shadow_stone: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  platinum: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  steel: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  quintessence: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  glittering_powder: 0,
  copper: 0,
  darksteel: 0,
  energy: 0,
  dragon_scale: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  dragon_claw: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  dragon_eye: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  dragon_horn: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  dragon_leather: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  century_fruit: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  eternal_snow_panax: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  flower_oil: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  herb_leaf: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  herb_root: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  moonlight_magic_stone: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  purified_water: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  reishi: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  snow_panax: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  unihorn_slice: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
  virtue_pill: {
    Mythic: { traddable: 0, nonTraddable: 0 },
    Legendary: { traddable: 0, nonTraddable: 0 },
    Epic: { traddable: 0, nonTraddable: 0 },
    Rare: { traddable: 0, nonTraddable: 0 },
    Uncommon: { traddable: 0, nonTraddable: 0 },
    Common: { traddable: 0, nonTraddable: 0 },
  },
}

export function getItemOwnedAmount({
  item,
  rarity,
  inventory,
}: {
  item: ItemWithRarity | NonRarityItems
  rarity: RarityTypes | 'Default'
  inventory: InventoryType
}) {
  if (rarity === 'Default') {
    return inventory[formatItemName(item) as NonRarityItems]
  }

  const inventoryItem = inventory[formatItemName(item)][rarity]

  let ownedAmount = 0
  if (inventoryItem) {
    ownedAmount =
      typeof inventoryItem === 'number'
        ? inventoryItem
        : inventoryItem?.traddable + inventoryItem?.nonTraddable
  }

  return ownedAmount
}

export function getFullItemRecipe(
  itemRecipe: Record<string, number>,
  result: Record<string, number>,
  inventory: InventoryType,
  tierMultiplier: number
) {
  for (const [item, amount] of Object.entries(itemRecipe)) {
    const itemRarity = extractItemRarity(item)

    let ownedAmount = getItemOwnedAmount({
      item: item as ItemWithRarity,
      rarity: itemRarity,
      inventory,
    })

    if (ComplementaryItems.includes(item)) ownedAmount = 0

    const totalResource = ((result[item] || 0) + amount) * tierMultiplier
    const totalAmount = Math.max(totalResource - ownedAmount, 0)

    getItemRecipe(item, itemRarity, result, totalAmount, inventory)

    result[item] = totalAmount
  }

  ComplementaryItems.forEach((item) => {
    if (item in result) {
      result[item] -= getItemOwnedAmount({
        item: formatItemName(item),
        rarity: 'Default',
        inventory,
      })
    }
  })

  return result
}

export function getItemRecipe(
  itemName: string,
  rarity: RarityTypes | 'Default',
  result: Record<string, number>,
  multiplier: number,
  inventory: InventoryType
) {
  if (rarity === 'Default') return

  const nameWithoutRarity = itemName.replace(rarityRegex, '')
  const itemRecipe =
    BaseResourceCost?.[nameWithoutRarity as keyof typeof BaseResourceCost]?.[
      rarity as Exclude<RarityTypes, 'Mythic' | 'Rare' | 'Uncommon' | 'Common'>
    ]

  if (!itemRecipe) return

  for (const [item, amount] of Object.entries(itemRecipe)) {
    const itemRarity = extractItemRarity(item)

    let ownedAmount = getItemOwnedAmount({
      item: item as ItemWithRarity,
      rarity: itemRarity,
      inventory,
    })

    // prevent owned amount from being subtracted multiple times
    if (ComplementaryItems.includes(item)) ownedAmount = 0

    const totalAmount = (result[item] || 0) + amount * multiplier
    const realAmount = Math.max(totalAmount - ownedAmount, 0)

    result[item] = realAmount

    getItemRecipe(item, itemRarity, result, realAmount, inventory)
  }
}
