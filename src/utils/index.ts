import { type Level } from '@/app/xp/page'
import CraftCost, { ItemCraftCost } from '@/data/CraftCost'
import { atom, type SetStateAction } from 'jotai'

export const atomWithLocalStorage = <T>(key: string, initialValue: T) => {
  if (typeof window === 'undefined') return atom(initialValue) as any

  const getInitialValue = () => {
    const item = localStorage.getItem(key)
    try {
      return JSON.parse(item ?? '')
    } catch {
      return initialValue
    }
  }

  const baseAtom = atom(getInitialValue())

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      localStorage.setItem(key, JSON.stringify(nextValue))
    }
  )
  return derivedAtom
}

export const ComplementaryItems = [
  'darksteel',
  'copper',
  'energy',
  'glittering_powder',
]

export const calculateCraftByItem = ({
  setAtom,
  name,
  category,
  parentRarity,
  multiply = 1,
  displayRarity,
  parentIsBase,
  weaponType,
  baseRarity,
  inventory,
}: {
  name?: ItemTypes
  setAtom: React.Dispatch<SetStateAction<CraftingCalcObject>>
  category?: ItemCategory
  parentRarity?: Exclude<RarityTypes, 'Uncommon' | 'Common'>
  baseRarity?: Exclude<RarityTypes, 'Uncommon' | 'Common'>
  multiply?: number
  displayRarity: RarityTypes[]
  parentIsBase: boolean
  weaponType?: 'primary' | 'secondary'
  inventory: InventoryType
}) => {
  if (
    parentRarity !== undefined &&
    !displayRarity.includes(parentRarity) &&
    parentRarity !== (baseRarity ?? parentRarity) &&
    !parentIsBase
  ) {
    return
  }

  let targetItem

  if (!!parentRarity && !!category) {
    targetItem =
      category === 'weapon'
        ? ItemCraftCost[weaponType as 'primary' | 'secondary'][parentRarity]
        : ItemCraftCost[category][parentRarity]
  } else if (name && parentRarity) {
    targetItem = CraftCost?.[name]?.[parentRarity]
  }

  if (targetItem == null) return

  Object.entries(targetItem).forEach(([name, item]) => {
    let ownedAmount = 0
    const itemHasRarity = typeof inventory[name as NonRarityItems] === 'object'

    if (itemHasRarity && !!item.rarity) {
      ownedAmount =
        inventory[name as ItemWithRarity][item.rarity].traddable +
        inventory[name as ItemWithRarity][item.rarity].nonTraddable
    } else {
      ownedAmount = inventory?.[name as NonRarityItems]
    }

    if (item.rarity && !ComplementaryItems.includes(name)) {
      setAtom((prev) => ({
        ...prev,
        ...{
          [name]: {
            ...prev[name as ItemWithRarity],
            [item.rarity as RarityTypes]:
              prev[name as ItemWithRarity][item.rarity as RarityTypes] +
              item.cost * multiply -
              ownedAmount,
          },
        },
      }))
      calculateCraftByItem({
        setAtom,
        name: name as unknown as ItemTypes,
        parentRarity: item.rarity as Exclude<
          RarityTypes,
          'Uncommon' | 'Common'
        >,
        multiply: item.cost * multiply - ownedAmount,
        displayRarity,
        parentIsBase: false,
        baseRarity: parentRarity,
        inventory,
      })
    } else {
      setAtom((prev) => ({
        ...prev,
        [name]: prev[name as NonRarityItems] + item.cost * multiply,
      }))
    }
  })
}

export const formatForExperience = (value: string) => {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{6})(.+)/g, '$1')
  return value.replace(/^(\d{1,2})(\d{4})/, '$1.$2')
}

export const formatForPercentage = (value: string) => {
  value = value.replace(/\D/g, '')
  return value.replace(/^(\d{3})(.+)/g, '$1')
}

export const formatLevel = (value: string): Level => {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{3})(.+)/g, '$1')
  return Number(value) > 190 ? 190 : (Number(value) as Level)
}

export const getPercentage = (
  value: string | number,
  percentage?: string | number
) => Number(value) * (Number(percentage ?? 0) / 100)

export const getReadableNumber = (number: number) =>
  Math.round(number).toLocaleString('en', { useGrouping: true })

export const getValidNumber = (
  value: string | number,
  fallbackValue: number
) => {
  value = String(value).replace(/\D/g, '')
  return Number.isInteger(Number(value)) ? Number(value) : fallbackValue
}

export function retrieveWalkthroughFromStorage() {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('Walkthrough') ?? '{}')
  }
  return {}
}

// Get the quantity of items of tier one to craft the selected  tier
export const itemTierToQuantity = {
  1: 1,
  2: 2,
  3: 4,
  4: 8,
} as const

export const ItemRarities: RarityTypes[] = [
  'Legendary',
  'Epic',
  'Rare',
  'Uncommon',
  'Common',
]

export const AllowedInventoryItemTypes = [
  'anima_stone',
  'blue_devil_stone',
  'copper',
  'darksteel',
  'dragon_leather',
  'energy',
  'evil_minded_orb',
  'exorcism_bauble',
  'glittering_powder',
  'illuminating_fragment',
  'moon_shadow_stone',
  'platinum',
  'quintessence',
  'steel',
  'dragon_eye',
  'dragon_scale',
  'dragon_claw',
  'dragon_horn',
  'moonlight_magic_stone',
  'century_fruit',
  'eternal_snow_panax',
  'flower_oil',
  'herb_leaf',
  'herb_root',
  'purified_water',
  'reishi',
  'snow_panax',
  'unihorn_slice',
  'virtue_pill',
]

export function deepMerge(targetObject: any, sourceObject: any) {
  const copyTargetObject = structuredClone(targetObject)
  const copySourceObject = structuredClone(sourceObject)

  Object.keys(copySourceObject).forEach((key) => {
    if (
      typeof copySourceObject[key] === 'object' &&
      !Array.isArray(copySourceObject[key])
    ) {
      copyTargetObject[key] = deepMerge(
        copyTargetObject[key],
        copySourceObject[key]
      )
    } else {
      copyTargetObject[key] = copySourceObject[key]
    }
  })

  return copyTargetObject
}

export const sumObjects = <T extends { [key in string]: number }>(data: T[]): any => {
  const result: any = {}

  data.forEach((object) => {
    for (const [key, value] of Object.entries(object)) {
      if (key in result) {
        result[key] = (result[key] as number) + value
      } else {
        result[key] = value
      }
    }
  })
  return result
}

export const prepareItemForDisplay = (
  data: Array<{ [key in ItemTypes]: number }>
): ItemForDisplay[] => {
  return Object.entries(data).map(([item, amount]) => {
    const rarity = extractItemRarity(item)
    let name = item

    if (rarity !== 'Common') {
      name = name.substring(name.indexOf(' ') + 1)
    }

    return {
      name,
      rarity,
      amount,
    }
  }) as any
}

const extractItemRarity = (name: string): RarityTypes | 'Default' => {
  if (name === 'Copper') return 'Default'

  const rarity = name.match(/^([\S]+)/gm)

  if (rarity === null) return 'Common'

  switch (rarity[0]) {
    case '[L]':
      return 'Legendary'
    case '[E]':
      return 'Epic'
    case '[R]':
      return 'Rare'
    case '[UC]':
      return 'Uncommon'
    default:
      return 'Common'
  }
}

export const getItemImagePath = (
  props: (
    | {
        item: 'weapon'
        weaponType: 'primary' | 'secondary'
      }
    | { item: 'earrings' | 'necklace' | 'armor' }
  ) & {
    rarity: RarityTypes
  }
) => {
  const { item, rarity } = props
  switch (item) {
    case 'weapon':
      return `/items/weapon_${rarity}_${props.weaponType}.webp`
    case 'armor':
      return `/items/armor_${rarity}.webp`
    case 'necklace':
      return `/items/accessory_${rarity}_1.webp`
    case 'earrings':
      return `/items/accessory_${rarity}_2.webp`
  }
}
