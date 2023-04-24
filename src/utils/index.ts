import CraftCost from '@/data/CraftCost';
import { SetStateAction, atom } from 'jotai';

export const atomWithLocalStorage = <T>(key: string, initialValue: T) => {
  if (typeof window === 'undefined') return atom(initialValue) as any;

  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item ?? '');
    } catch {
      return initialValue;
    }
  };

  const baseAtom = atom(getInitialValue());

  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    }
  );
  return derivedAtom;
};

export const ComplementaryItems = [
  'dark_steel',
  'copper',
  'energy',
  'glittering_powder',
];

export const calculateCraftByItem = ({
  setAtom,
  parentName,
  parentRarity,
  multiply,
  displayRarity,
  parentIsBase,
}: {
  setAtom: React.Dispatch<SetStateAction<CraftingCalcObject>>;
  parentName: string;
  parentRarity?: RarityTypes;
  multiply: number;
  displayRarity: RarityTypes[];
  parentIsBase: boolean;
}) => {
  if (!parentRarity || (!displayRarity.includes(parentRarity) && !parentIsBase))
    return;

  const targetItem = CraftCost.find(
    (obj) => obj.name === parentName && obj.rarity === parentRarity
  );

  if (!targetItem) return;

  Object.entries(targetItem.recipe).map(([name, value]) => {
    if (value.rarity && !ComplementaryItems.includes(name)) {
      setAtom((prev) => ({
        ...prev,
        ...{
          [name]: {
            ...prev[name as ItemWithRarity],
            [value.rarity as RarityTypes]:
              prev[name as ItemWithRarity][value.rarity as RarityTypes] +
              value.cost * multiply,
          },
        },
      }));
      calculateCraftByItem({
        setAtom,
        parentName: name,
        parentRarity: value.rarity,
        multiply: value.cost * multiply,
        displayRarity,
        parentIsBase: false,
      });
    } else {
      setAtom((prev) => ({
        ...prev,
        [name]: prev[name as NonRarityItems] + value.cost * multiply,
      }));
    }
  });

  return;
};

export const formatForExperience = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{6})(.+)/g, '$1');
  return value.replace(/^(\d{2})(\d{1,4})/, '$1.$2');
};

export const formatLevel = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{3})(.+)/g, '$1'); 
  return Number(value) > 190 ? "190" : value
};

export const getPercentage = (
  value: string | number,
  percentage?: string | number
) => Number(value) * (Number(percentage ?? 0) / 100);

export const getReadableNumber = (number: number) =>
  Math.round(number).toLocaleString('en', { useGrouping: true });
