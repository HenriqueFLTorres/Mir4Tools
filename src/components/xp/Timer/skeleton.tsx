import Image from 'next/image'

export default function TimerSkeleton() {
  return (
    <section
      id="experienceTimer"
      className="relative flex w-full max-w-[20rem] flex-col items-center gap-6 overflow-hidden rounded-lg border-2 border-[#7E73AD30] py-4 backdrop-blur-2xl"
    >
      <Image
        alt=""
        src="/images/timer-background.svg"
        className="pointer-events-none absolute object-cover"
        fill
        sizes="(max-width: 768px) 155px, (max-width: 1200px) 320px"
        priority
      />

      <h1 className="text-5xl font-bold text-white sm:text-6xl">5 : 00</h1>

      <div className="flex flex-row gap-3">
        <div className="rounded-[4px] bg-[#368D6E] px-4 py-2 text-xs font-bold uppercase text-white disabled:bg-opacity-50">
          Start
        </div>

        <div className="rounded-[4px] bg-[#473E65] bg-opacity-50 px-4 py-2 text-xs font-bold uppercase text-white">
          Reset
        </div>
      </div>
    </section>
  )
}
