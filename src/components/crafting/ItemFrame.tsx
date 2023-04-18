import { cn } from '@/utils/classNames';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

export default function ItemFrame({
  item,
  rarity,
  children,
  size = 'md',
  className,
  ...props
}: ItemFrameProps) {
  return (
    <span
      className={cn(
        'flex items-center justify-center rounded-lg border-2',
        variantStyles[rarity],
        { ['h-14 w-14']: size === 'sm' },
        { ['h-20 w-20']: size === 'md' },
        { ['h-28 w-28']: size === 'lg' },
        className
      )}
      {...props}
    >
      <Image
        src={`/items/${item}.png`}
        alt=''
        width={sizeToPX[size]}
        height={sizeToPX[size]}
        className='object-contain'
      />
    </span>
  );
}

const sizeToPX = {
  sm: 36,
  md: 56,
  lg: 74,
};

const variantStyles: { [key in RarityTypes | 'Default']: string } = {
  Default: 'border-[#272043] bg-default-frame drop-shadow-[0_0_8px_#272043]',
  Legendary: 'border-[#DCC529] bg-legendary-frame drop-shadow-[0_0_8px_#DCC529]',
  Epic: 'border-[#761B29] bg-epic-frame drop-shadow-[0_0_8px_#761B29]',
  Rare: 'border-[#2F60A8] bg-rare-frame drop-shadow-[0_0_8px_#2F60A8]',
  Uncommon: 'border-[#38896B] bg-uncommon-frame drop-shadow-[0_0_8px_#38896B]',
  Common: 'border-[#6D737A] bg-common-frame drop-shadow-[0_0_8px_#6D737A]',
};

type ItemFrameProps = {
  item: ItemTypes;
  rarity: RarityTypes | 'Default';
  size?: 'sm' | 'md' | 'lg';
} & HTMLAttributes<HTMLSpanElement>;
