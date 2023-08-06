import ItemFrame from '@/components/crafting/ItemFrame'
import { cn } from '@/utils/classNames'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '../../../public/locales/client'

export default function MainItemFrame({
  name,
  rarity,
  targetItem,
  category,
  setCategory,
  selectedTier,
  setTier,
  weaponType,
  setWeaponType,
  itemRarity,
  setItemRarity,
}: MainItemFrameProps) {
  const { t } = useTranslation()

  return (
    <Popover.Root>
      <Popover.Trigger
        id="mainItemFrame"
        className="group relative mx-auto h-max w-max hover:scale-110 transition-transform will-change-transform md:mx-0 md:w-auto"
      >
        <ItemFrame
          item={name as ItemTypes}
          rarity={rarity}
          tier={selectedTier}
          size="lg"
          className="shrink-0"
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="center"
          sideOffset={16}
          className={cn(
            'flex flex-col gap-4 rounded-lg border border-white/10 bg-primary-600/60 p-2 backdrop-blur-lg md:p-4',
            'data-[state=closed]:animate-hidePopover data-[state=open]:animate-showPopover'
          )}
        >
          <header className="flex justify-between gap-8">
            <h2 className="text-lg font-bold text-white md:text-2xl">
              {t('Items')}
            </h2>
            <div className="flex gap-2.5">
              {rarities.map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setItemRarity(r)
                  }}
                  className={cn(
                    'h-8 w-8 rounded-md bg-legendary-frame opacity-30 transition-opacity',
                    { 'bg-legendary-frame': r === 'Legendary' },
                    { 'bg-epic-frame': r === 'Epic' },
                    { 'bg-rare-frame': r === 'Rare' },
                    { 'opacity-100': itemRarity === r }
                  )}
                  aria-label={r}
                />
              ))}
            </div>
          </header>

          <div className="flex gap-2.5">
            {Items.map(({ value, image }) => (
              <MenuButton
                key={value}
                className={cn({
                  'bg-primary-100/10': category === value,
                })}
                onClick={() => {
                  setCategory(value)
                }}
                aria-label={value}
              >
                {image.map((i, idx) => (
                  <Image
                    key={idx}
                    alt="value"
                    src={i}
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain md:h-10 md:w-10"
                  />
                ))}
              </MenuButton>
            ))}
          </div>

          <div className="flex gap-2.5">
            {([1, 2, 3, 4] as const).map((tier) => (
              <MenuButton
                key={tier}
                className={cn('font-ptSerif text-3xl font-bold text-white', {
                  'bg-primary-100/10': selectedTier === tier,
                })}
                onClick={() => {
                  setTier(tier)
                }}
              >
                {tier === 4 ? 'IV' : 'I'.repeat(tier)}
              </MenuButton>
            ))}
          </div>

          {category === 'weapon' && (
            <div className="flex gap-2.5 text-sm font-medium text-white">
              <MenuButton
                onClick={() => {
                  setWeaponType('primary')
                }}
                className={cn('py-2', {
                  'bg-primary-100/10': weaponType === 'primary',
                })}
              >
                {t('Primary')}
              </MenuButton>
              <MenuButton
                onClick={() => {
                  setWeaponType('secondary')
                }}
                className={cn('py-2', {
                  'bg-primary-100/10': weaponType === 'secondary',
                })}
              >
                {t('Secondary')}
              </MenuButton>
            </div>
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

const Items = [
  {
    value: 'weapon',
    image: ['/items/weapon.webp'],
  },
  {
    value: 'armor',
    image: ['/items/armor.webp'],
  },
  {
    value: 'necklace',
    image: ['/items/necklace.webp', '/items/bracelet.webp'],
  },
  {
    value: 'earrings',
    image: ['/items/earrings.webp', '/items/ring.webp'],
  },
] as const

function MenuButton({
  children,
  className,
  disabled = false,
  ...props
}: {
  className?: string
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        'flex grow items-center justify-center gap-2 rounded-md p-2 transition-colors md:p-4',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

const rarities = ['Legendary', 'Epic', 'Rare'] as const

interface MainItemFrameProps {
  name: string
  rarity: RarityTypes
  targetItem: Partial<{
    [key in ItemTypes]: { rarity: RarityTypes | null; cost: number }
  }>
  category: ItemCategory
  setCategory: React.Dispatch<React.SetStateAction<ItemCategory>>
  selectedTier: ItemTier
  setTier: React.Dispatch<React.SetStateAction<ItemTier>>
  weaponType: 'primary' | 'secondary'
  setWeaponType: React.Dispatch<React.SetStateAction<'primary' | 'secondary'>>
  itemRarity: RarityTypes
  setItemRarity: React.Dispatch<
    React.SetStateAction<Exclude<RarityTypes, 'Common' | 'Uncommon'>>
  >
}
