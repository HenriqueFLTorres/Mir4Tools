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
  'dark_steel',
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
    const ownedAmount =
      item.rarity === null || name === 'glittering_powder'
        ? inventory[name as NonRarityItems]
        : inventory[name as ItemWithRarity][item.rarity]?.traddable +
          inventory[name as ItemWithRarity][item.rarity]?.nonTraddable

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
