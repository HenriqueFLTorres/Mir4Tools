import Image from 'next/image'

export default function Maps() {
  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[90rem] flex-col items-center gap-8 px-6 pt-32 selection:bg-primary-800">
      <div className="relative min-h-[40rem] w-full max-w-5xl gap-4 rounded-md border-2 border-white/10 p-4 pb-6 backdrop-blur-md">
        <Image
          src={'/maps/world_map.webp'}
          alt=""
          fill
          className={'absolute -z-10 rounded-md object-cover'}
          sizes="100%"
        />

        <MapButton>Global Map</MapButton>
      </div>
    </div>
  )
}

function MapButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded px-4 py-3 text-xl font-bold text-white transition-colors hover:bg-white/10">
      {children}
    </button>
  )
}
