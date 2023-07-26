import dynamic from 'next/dynamic'

const ConstitutionStatusSelector = dynamic(
  async () => await import('@/components/constitution/StatusSelector'),
  { ssr: false }
)

export default function Constitution() {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[90rem] flex-col items-center pt-20 selection:bg-primary-800">
      <ConstitutionStatusSelector />
    </div>
  )
}
