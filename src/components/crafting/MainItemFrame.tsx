import ItemFrame from '@/components/crafting/ItemFrame'
import { cn } from '@/utils/classNames'
import { getItemImagePath } from '@/utils/index'
import * as Popover from '@radix-ui/react-popover'
import Image from 'next/image'
import { useTranslation } from '../../../public/locales/client'

export default function MainItemFrame({
  name,
  rarity,
  category,
  setCategory,
  selectedTier,
  setTier,
  weaponType,
  setWeaponType,
  setItemRarity,
}: MainItemFrameProps) {
  const { t } = useTranslation()

  return (
    <Popover.Root>
      <Popover.Trigger
        id="mainItemFrame"
        className="group relative mx-auto h-max w-max transition-transform will-change-transform hover:scale-110 md:mx-0 md:w-auto"
      >
        <ItemFrame
          item={name as ItemTypes}
          rarity={rarity}
          tier={selectedTier}
          customPath={getItemImagePath({ item: name, rarity, weaponType })}
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
          <div className="flex w-full gap-2.5">
            {rarities.map((r) => (
              <button
                key={r}
                onClick={() => {
                  setItemRarity(r)
                }}
                className={cn(
                  'h-8 w-8 flex-grow rounded-md py-4 opacity-30 shadow-md outline-none transition-[opacity,_transform] hover:scale-105 hover:opacity-60',
                  {
                    'bg-legendary-frame': r === 'Legendary',
                  },
                  { 'bg-epic-frame': r === 'Epic' },
                  { 'bg-rare-frame': r === 'Rare' },
                  {
                    'opacity-100 hover:scale-90 hover:opacity-100':
                      rarity === r,
                  }
                )}
                aria-label={r}
              ></button>
            ))}
          </div>

          <div className="flex gap-2.5">
            {Items.map((item) => {
              const path = getItemImagePath({ item, rarity, weaponType })

              return (
                <MenuButton
                  key={item}
                  className={cn({
                    'bg-primary-100/10': category === item,
                  })}
                  onClick={() => setCategory(item)}
                  aria-label={item}
                >
                  <Image
                    src={path}
                    alt={''}
                    width={80}
                    height={80}
                    className="h-12 w-12 object-contain md:h-20 md:w-20"
                  />
                </MenuButton>
              )
            })}
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

const Items = ['weapon', 'armor', 'necklace', 'earrings'] as const

const rarities = ['Legendary', 'Epic', 'Rare'] as const

interface MainItemFrameProps {
  name: ItemCategory
  rarity: RarityTypes
  category: ItemCategory
  setCategory: React.Dispatch<React.SetStateAction<ItemCategory>>
  selectedTier: ItemTier
  setTier: React.Dispatch<React.SetStateAction<ItemTier>>
  weaponType: 'primary' | 'secondary'
  setWeaponType: React.Dispatch<React.SetStateAction<'primary' | 'secondary'>>
  setItemRarity: React.Dispatch<
    React.SetStateAction<Exclude<RarityTypes, 'Common' | 'Uncommon'>>
  >
}
