import { type Level } from '@/app/xp/page'
import { atom } from 'jotai'

export const rarityRegex = /(\[L\].|\[E\].|\[R\].|\[UC\].)/gm

export const ComplementaryItems = [
  'Darksteel',
  'Copper',
  'Energy',
  'Glittering Powder',
]

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

export const sumObjects = <T extends { [key in string]: number }>(
  data: T[]
): any => {
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

export const extractItemRarity = (name: string): RarityTypes | 'Default' => {
  if (name === 'Copper' || name === 'Darksteel') return 'Default'

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
        category: 'weapon'
        weaponType: 'primary' | 'secondary'
      }
    | { category: Exclude<ItemCategory, 'weapon'> }
  ) & {
    rarity: RarityTypes
  }
) => {
  const { category, rarity } = props
  switch (category) {
    case 'weapon':
      return `/items/weapon_${rarity}_${props.weaponType}.webp`
    case 'armor':
      return `/items/armor_${rarity}.webp`
    case 'jewelry':
      return `/items/accessory_${rarity}_1.webp`
    case 'earrings':
      return `/items/accessory_${rarity}_2.webp`
  }
}

export const toCamelCase = (string?: string) =>
  (string ?? '').toLocaleLowerCase().replace(/\s/g, '_')

export const createNodeGroups = (currentMapPoints: {
  [key in string]: nodeObject
}) => {
  const groupedNodes: Record<string, Array<nodeObject & { id: string }>> = {}
  if (!currentMapPoints) return []
  Object.entries(currentMapPoints).forEach(([id, { pos, type, rarity }]) => {
    const sum = `${Math.round(pos[0] / 5)} ${Math.round(
      pos[1] / 5
    )} ${type} ${rarity}`
    const obj = {
      pos: [pos[0], pos[1]] as [number, number],
      type,
      rarity,
      id,
    }

    if (sum in groupedNodes) {
      groupedNodes[sum].push(obj)
    } else groupedNodes[sum] = [obj]
  })

  const readyToDisplayGroups: {
    [key in string]: nodeObject & {
      amount: number
    }
  } = {}
  Object.values(groupedNodes).forEach((values) => {
    const reduceResult = values.reduce(
      (acc, cur) => {
        acc.left += cur.pos[0]
        acc.right += cur.pos[1]
        return acc
      },
      { left: 0, right: 0 }
    )

    const amount = values.length
    const valueX = (reduceResult.left / amount).toFixed(2)
    const valueY = (reduceResult.right / amount).toFixed(2)
    const { rarity, type } = values[0]

    readyToDisplayGroups[values[0].id] = {
      pos: [Number(valueX), Number(valueY)],
      amount,
      rarity,
      type,
    }
  })

  return readyToDisplayGroups
}
