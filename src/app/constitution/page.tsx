import ConstitutionCostInformation from '@/components/constitution/CostInformation'
import ConstitutionStatsTable from '@/components/constitution/StatsTable'
import dynamic from 'next/dynamic'

const ConstitutionStatusSelector = dynamic(
  async () => await import('@/components/constitution/StatusSelector'),
  { ssr: false }
)

export default function Constitution() {
  return (
    <div className="relative mx-auto flex h-screen w-full px-6 max-w-[90rem] flex-col items-center pt-20 selection:bg-primary-800">
      <ConstitutionStatusSelector />
      <div className='flex flex-col items-center xl:items-start pb-20 mt-32 xl:flex-row gap-12'>
        <ConstitutionStatsTable />
        <ConstitutionCostInformation />
      </div>
    </div>
  )
}
