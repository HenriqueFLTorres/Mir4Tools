'use client'
import MagicSquareItemSelector from '@/components/magic-square-shop/ItemSelector'
import ShardItem from '@/components/magic-square-shop/ShardItem'

export default function MagicSquareShop() {
  return (
    <section className="mx-auto flex w-full max-w-[120rem] flex-col gap-4 overflow-x-auto px-5 pb-14 pt-44 text-white md:p-14 md:pt-24 lg:flex-row lg:justify-center lg:gap-24 xl:gap-48">
      <div className="relative flex flex-col gap-8">
        <h2 className="text-3xl font-bold">What you have</h2>

        <ul className="grid grid-cols-4 gap-4">
          <ShardItem item="ethereal_shard" rarity="Epic" />
          <ShardItem item="lunar_shard" rarity="Epic" />
          <ShardItem item="solar_shard" rarity="Epic" />
          <ShardItem item="boundless_shard" rarity="Epic" />

          <ShardItem item="ethereal_shard" rarity="Rare" />
          <ShardItem item="lunar_shard" rarity="Rare" />
          <ShardItem item="solar_shard" rarity="Rare" />
          <ShardItem item="boundless_shard" rarity="Rare" />

          <ShardItem item="ethereal_shard" rarity="Uncommon" />
          <ShardItem item="lunar_shard" rarity="Uncommon" />
          <ShardItem item="solar_shard" rarity="Uncommon" />
          <ShardItem item="boundless_shard" rarity="Uncommon" />
        </ul>
      </div>

      <MagicSquareItemSelector />
    </section>
  )
}
