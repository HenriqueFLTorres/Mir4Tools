import Image from 'next/image'

export default function EnergyCostSkeleton({ cost }: { cost?: number }) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-primary-600 px-3 py-2 pr-6 text-xl font-bold text-white">
      <Image
        src={'/items/energy.webp'}
        alt={'Energy icon'}
        width={32}
        height={32}
      />
      <span className="h-6 w-20 animate-pulse rounded-full bg-primary-400" />
    </div>
  )
}
