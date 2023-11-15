import { atomWithStorage } from 'jotai/utils'

export const ShardsInventoryAtom = atomWithStorage<{
  [key in shardsType]: {
    [key in 'Epic' | 'Rare' | 'Uncommon']: number
  }
}>('Mir4Tools_Shards', {
  ethereal_shard: {
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
  },
  lunar_shard: {
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
  },
  solar_shard: {
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
  },
  boundless_shard: {
    Epic: 0,
    Rare: 0,
    Uncommon: 0,
  },
})
