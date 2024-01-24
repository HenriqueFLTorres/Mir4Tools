import { getReadableNumber } from '@/utils/index'
import Image from 'next/image'

export default function EnergyCost({ cost }: { cost?: number }) {
  return (
    <div className="flex items-center gap-4 rounded-full bg-primary-600 px-3 py-2 pr-6 text-xl font-bold text-white">
      <Image
        src={'/items/energy.webp'}
        alt={'Energy icon'}
        width={32}
        height={32}
      />
      {getReadableNumber(cost ?? 0)}
    </div>
  )
}
