type RarityTypes = 'Legendary' | 'Epic' | 'Rare' | 'Uncommon' | 'Common';

type ItemTypes =
  | 'anima_stone'
  | 'blue_devil_stone'
  | 'copper'
  | 'dark_steel'
  | 'energy'
  | 'evil_minded_orb'
  | 'exorcism_bauble'
  | 'glittering_powder'
  | 'illuminating_fragment'
  | 'moon_shadow_stone'
  | 'platinum'
  | 'steel'
  | 'dragon_scale';

type ItemWithRarity = Exclude<
  ItemTypes,
  'copper' | 'dark_steel' | 'energy' | 'glittering_powder'
>;
type NonRarityItems = 'copper' | 'dark_steel' | 'energy' | 'glittering_powder';

type InventoryType = {
  [key in ItemWithRarity]: {
    [key in RarityTypes]: number;
  };
} & {
  copper: number;
  dark_steel: number;
  energy: number;
  glittering_powder: number;
  dragon_scale: number;
};

type ItemsForRecipe = ItemTypes | 'dragon_scale';

type CraftCostType = Partial<{
  [key in ItemTypes]: {
    [key in RarityTypes]: Partial<{
      [key in ItemTypes]: { rarity: RarityTypes | null; cost: number };
    }>;
  };
}>

type WeaponCraftCostType = {
  [key in 'primary' | 'secondary']: {
    [key in Exclude<RarityTypes, "Common">]: {
      [key in "1" | "2" | "3" | "4"]: Partial<{
        [key in ItemTypes]: { rarity: RarityTypes | null; cost: number };
      }>;
    };
  };
}

type CraftingCalcObject = {
  [key in ItemWithRarity]: {
    [key in RarityTypes]: number;
  };
} & { [key in NonRarityItems]: number };

type InventoryItem = { traddable: number; nonTraddable: number };

type PercentageState = {
  initial?: string;
  final?: string;
};

type ItemWithRarity = { rarity: string };

type ItemCategory = 'weapon' | 'armor' | 'necklace' | 'earrings';

type ItemTier = 1 | 2 | 3 | 4