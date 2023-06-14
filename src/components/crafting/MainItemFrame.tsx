import ItemFrame from '@/components/crafting/ItemFrame'
import { cn } from '@/utils/classNames'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'

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
  return (
    <Popover.Root>
      <Popover.Trigger className="my-auto h-max">
        <ItemFrame
          item={name as ItemTypes}
          rarity={rarity}
          tier={selectedTier}
          size="lg"
          className="my-auto shrink-0"
        />
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          sideOffset={-40}
          alignOffset={-20}
          side="right"
          align="center"
          className="flex flex-col gap-4 rounded-lg border border-white/10 bg-primary-600/60 p-4 backdrop-blur-lg"
        >
          <header className="flex justify-between gap-8">
            <h2 className="text-2xl font-bold text-white">Items</h2>
            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  setItemRarity('Legendary')
                }}
                className={cn(
                  'h-8 w-8 rounded-md bg-legendary-frame opacity-30 motion-safe:transition-opacity',
                  { 'opacity-100': itemRarity === 'Legendary' }
                )}
                aria-label="Legendary"
              />
              <button
                onClick={() => {
                  setItemRarity('Epic')
                }}
                className={cn(
                  'h-8 w-8 rounded-md bg-epic-frame opacity-30 motion-safe:transition-opacity',
                  {
                    'opacity-100': itemRarity === 'Epic',
                  }
                )}
                aria-label="Epic"
              />
              <button
                onClick={() => {
                  setItemRarity('Rare')
                }}
                className={cn(
                  'h-8 w-8 rounded-md bg-rare-frame opacity-30 motion-safe:transition-opacity',
                  {
                    'opacity-100': itemRarity === 'Rare',
                  }
                )}
                aria-label="Rare"
              />
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
                    className="object-contain"
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
                disabled={tier !== 1}
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
                Primary
              </MenuButton>
              <MenuButton
                onClick={() => {
                  setWeaponType('secondary')
                }}
                className={cn('py-2', {
                  'bg-primary-100/10': weaponType === 'secondary',
                })}
              >
                Secondary
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
        'flex grow items-center justify-center gap-2 rounded-md p-4 motion-safe:transition-colors',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

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
