import { cn } from '@/utils/classNames'
import { rarityVariantStyles } from '@/utils/index'
import Image from 'next/image'
import { type HTMLAttributes } from 'react'

export default function ItemFrame({
  item,
  rarity,
  children,
  size = 'md',
  className,
  tier,
  quantity = 1,
  ...props
}: ItemFrameProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-lg border-2',
        rarityVariantStyles[rarity],
        { 'h-10 w-10 sm:h-14 sm:w-14': size === 'sm' },
        { 'h-14 w-14 sm:h-20 sm:w-20': size === 'md' },
        { 'h-20 w-20 sm:h-28 sm:w-28': size === 'lg' },
        className
      )}
      {...props}
    >
      <Image
        src={`/items/${item}.webp`}
        alt=""
        width={sizeToPX[size]}
        height={sizeToPX[size]}
        className={cn(
          'object-contain',
          { 'h-6 w-6 sm:h-9 sm:w-9': size === 'sm' },
          { 'h-9 w-9 sm:h-14 sm:w-14': size === 'md' },
          { 'h-9 w-9 sm:h-14 sm:w-14': size === 'lg' }
        )}
      />
      {tier && (
        <p className="absolute bottom-2 left-2 w-max bg-transparent bg-gradient-to-b from-[#DEE7EF] to-[#959A9D] bg-clip-text text-start font-ptSerif text-base font-bold !leading-none text-transparent drop-shadow-[0_0_1px_#000] sm:text-2xl">
          {tier === 4 ? 'IV' : 'I'.repeat(tier)}
        </p>
      )}
      {quantity > 1 && (
        <p className="absolute bottom-2 right-2 text-end text-sm sm:text-base font-normal leading-none text-neutral-200 drop-shadow-[0_0_2px_#000]">
          {quantity}
        </p>
      )}
    </div>
  )
}

const sizeToPX = {
  sm: 36,
  md: 56,
  lg: 56,
}

type ItemFrameProps = {
  item: ItemTypes
  rarity: RarityTypes | 'Default'
  size?: 'sm' | 'md' | 'lg'
  tier?: ItemTier
  quantity?: number
} & HTMLAttributes<HTMLSpanElement>
