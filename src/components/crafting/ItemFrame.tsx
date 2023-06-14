import { cn } from '@/utils/classNames'
import Image from 'next/image'
import { type HTMLAttributes } from 'react'

export default function ItemFrame({
  item,
  rarity,
  children,
  size = 'md',
  className,
  tier,
  priority,
  ...props
}: ItemFrameProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-lg border-2',
        variantStyles[rarity],
        { 'h-14 w-14': size === 'sm' },
        { 'h-20 w-20': size === 'md' },
        { 'h-28 w-28': size === 'lg' },
        className
      )}
      {...props}
    >
      <Image
        src={`/items/${item}.webp`}
        alt=""
        width={sizeToPX[size]}
        height={sizeToPX[size]}
        style={{
          width: sizeToPX[size],
          height: sizeToPX[size],
        }}
        className="object-contain"
        priority={priority}
      />
      {tier && (
        <p className="absolute bottom-1.5 left-2 w-max bg-transparent bg-gradient-to-b from-[#DEE7EF] to-[#959A9D] bg-clip-text text-start font-ptSerif text-2xl font-bold leading-none text-transparent drop-shadow-[0_0_1px_#000]">
          {tier === 4 ? 'IV' : 'I'.repeat(tier)}
        </p>
      )}
    </div>
  )
}

const sizeToPX = {
  sm: 36,
  md: 56,
  lg: 74,
}

const variantStyles: { [key in RarityTypes | 'Default']: string } = {
  Default: 'border-[#272043] bg-default-frame drop-shadow-[0_0_8px_#272043]',
  Legendary:
    'border-[#DCC529] bg-legendary-frame drop-shadow-[0_0_5px_#DCC529]',
  Epic: 'border-[#761B29] bg-epic-frame drop-shadow-[0_0_5px_#761B29]',
  Rare: 'border-[#2F60A8] bg-rare-frame drop-shadow-[0_0_5px_#2F60A8]',
  Uncommon: 'border-[#38896B] bg-uncommon-frame drop-shadow-[0_0_5px_#38896B]',
  Common: 'border-[#6D737A] bg-common-frame drop-shadow-[0_0_5px_#6D737A]',
}

type ItemFrameProps = {
  item: ItemTypes
  rarity: RarityTypes | 'Default'
  size?: 'sm' | 'md' | 'lg'
  tier?: ItemTier
  priority?: boolean
} & HTMLAttributes<HTMLSpanElement>
