import ConstitutionCostInformation from '@/components/constitution/CostInformation'
import ConstitutionStatsTable from '@/components/constitution/StatsTable'
import ConstitutionWarning from '@/components/constitution/Warning'
import dynamic from 'next/dynamic'

const ConstitutionStatusSelector = dynamic(
  async () => await import('@/components/constitution/StatusSelector'),
  { ssr: false }
)

export default function Constitution() {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[90rem] flex-col items-center gap-8 px-6 pt-20 selection:bg-primary-800">
      <ConstitutionStatusSelector />
      <ConstitutionWarning />
      <div className="relative flex w-full flex-col items-center gap-12 pb-20 xl:flex-row xl:items-start">
        <ConstitutionStatsTable />
        <ConstitutionCostInformation />
      </div>
    </div>
  )
}
