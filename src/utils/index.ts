import { type Level } from '@/app/xp/page'
import CraftCost, { WeaponCraftCost } from '@/data/CraftCost'
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
  'glittering_powder'
]

export const calculateCraftByItem = ({
  setAtom,
  name,
  category,
  parentRarity,
  multiply,
  displayRarity,
  parentIsBase,
  weaponType,
  tier
}: {
  name?: ItemTypes
  setAtom: React.Dispatch<SetStateAction<CraftingCalcObject>>
  category?: ItemCategory
  parentRarity?: RarityTypes
  multiply: number
  displayRarity: RarityTypes[]
  parentIsBase: boolean
  weaponType?: 'primary' | 'secondary'
  tier?: ItemTier
}) => {
  if (
    parentRarity !== undefined &&
    !displayRarity.includes(parentRarity) &&
    !parentIsBase
  ) {
    return
  }

  let targetItem

  if (!!tier && !!weaponType && !!parentRarity && parentRarity !== 'Common') {
    targetItem = WeaponCraftCost?.[weaponType]?.[parentRarity]?.[tier]
  } else if (name && parentRarity) {
    targetItem = CraftCost?.[name]?.[parentRarity]
  }

  if (targetItem == null) return

  Object.entries(targetItem).forEach(([name, value]) => {
    if (value.rarity && !ComplementaryItems.includes(name)) {
      setAtom((prev) => ({
        ...prev,
        ...{
          [name]: {
            ...prev[name as ItemWithRarity],
            [value.rarity as RarityTypes]:
              prev[name as ItemWithRarity][value.rarity as RarityTypes] +
              value.cost * multiply
          }
        }
      }))
      calculateCraftByItem({
        setAtom,
        name: name as unknown as ItemTypes,
        parentRarity: value.rarity,
        multiply: value.cost * multiply,
        displayRarity,
        parentIsBase: false
      })
    } else {
      setAtom((prev) => ({
        ...prev,
        [name]: prev[name as NonRarityItems] + value.cost * multiply
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
  return Number(value) > 190 ? 190 : Number(value) as Level
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
