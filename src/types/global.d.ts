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
  | 'dragon_scale'

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

type CraftCostType = {
  name: string;
  tier?: 1 | 2 | 3 | 4;
  rarity: RarityTypes;
  recipe: {
    [key: string]: {
      rarity?: RarityTypes;
      cost: number;
    };
  };
};

type CraftingCalcObject = {
  [key in ItemWithRarity]: {
    [key in RarityTypes]: number;
  };
} & { [key in NonRarityItems]: number };

type InventoryItem = { traddable: number, nonTraddable: number }