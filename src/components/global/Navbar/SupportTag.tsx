import Info from '@/icons/Info'

export default async function SupportTag() {
  return (
    <div className="absolute left-4 top-24 flex gap-2 rounded border border-white/10 bg-primary-400/5 p-2 text-sm font-light text-white backdrop-blur-lg">
      <Info className="fill-white" />
      <p>For support: Treffy#4964</p>
    </div>
  )
}
