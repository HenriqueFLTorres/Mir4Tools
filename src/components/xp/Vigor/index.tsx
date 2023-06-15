import Info from '@/icons/Info'
import InnerVigor from './InnerVigor'

export default function Vigor() {
  return (
    <section className="flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg">
      <header className="flex justify-between">
        <h2 className="text-2xl font-bold text-white">Vigor</h2>
        <button aria-label="More info" className="p-1">
          <Info className="h-6 w-6" />
        </button>
      </header>

      <InnerVigor />
    </section>
  )
}
