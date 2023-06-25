type RarityTypes = 'Legendary' | 'Epic' | 'Rare' | 'Uncommon' | 'Common'

type ItemTypes =
  | 'anima_stone'
  | 'blue_devil_stone'
  | 'copper'
  | 'dark_steel'
  | 'dragon_leather'
  | 'energy'
  | 'evil_minded_orb'
  | 'exorcism_bauble'
  | 'glittering_powder'
  | 'illuminating_fragment'
  | 'moon_shadow_stone'
  | 'platinum'
  | 'quintessence'
  | 'steel'
  | 'dragon_eye'
  | 'dragon_scale'
  | 'dragon_claw'
  | 'dragon_horn'

type ItemWithRarity = Exclude<
  ItemTypes,
  | 'copper'
  | 'dark_steel'
  | 'energy'
  | 'glittering_powder'
>
type NonRarityItems = Exclude<ItemTypes, ItemWithRarity>

type InventoryType = {
  [key in ItemWithRarity]: {
    [key in RarityTypes]: { traddable: number; nonTraddable: number }
  }
} & {
  [key in NonRarityItems]: number
}

type ParsedInventoryType = {
  [key in ItemWithRarity]: {
    [key in RarityTypes]: number
  }
} & {
  [key in NonRarityItems]: number
}

type ItemsForRecipe = ItemTypes | 'dragon_scale'

type CraftCostType = Partial<{
  [key in ItemTypes]: {
    [key in Exclude<RarityTypes, 'Common' | 'Uncommon'>]: Partial<{
      [key in ItemTypes]: { rarity: RarityTypes | null; cost: number }
    }>
  }
}>

type ItemCraftCostType = {
  [key in 'primary' | 'secondary']: {
    [key in Exclude<RarityTypes, 'Common' | 'Uncommon'>]: Partial<{
      [key in ItemTypes]: { rarity: RarityTypes | null; cost: number }
    }>
  }
} & {
  [key in 'armor' | 'necklace' | 'earrings']: {
    [key in Exclude<RarityTypes, 'Common' | 'Uncommon'>]: Partial<{
      [key in ItemTypes]: { rarity: RarityTypes | null; cost: number }
    }>
  }
}

type CraftingCalcObject = {
  [key in ItemWithRarity]: {
    [key in RarityTypes]: number
  }
} & { [key in NonRarityItems]: number }

interface InventoryItem {
  traddable: number
  nonTraddable: number
}

interface PercentageState {
  initial?: string
  final?: string
}

type ItemCategory = 'weapon' | 'armor' | 'necklace' | 'earrings'

type ItemTier = 1 | 2 | 3 | 4

interface SettingsObject {
  displayRarity: RarityTypes[]
  showOwnedItems: boolean
  language: 'en' | 'pt'
}
