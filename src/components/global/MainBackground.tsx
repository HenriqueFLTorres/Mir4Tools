import Image from 'next/image'

export default function MainBackground() {
  return (
    <div className="pointer-events-none fixed h-screen w-screen select-none">
      <Image
        src={'/images/main-background.webp'}
        alt=""
        fill
        className="pointer-events-none fixed left-0 top-0 overflow-hidden fill-pink-400 object-cover opacity-20"
        priority
      />
      <div className="absolute bottom-0 right-0 block h-[35rem] w-[35rem] translate-x-1/4 translate-y-1/2 rounded-full bg-primary-radial" />
      <div className="absolute bottom-0 left-0 block h-[35rem] w-[35rem] -translate-x-1/4 -translate-y-[10%] rounded-full bg-secondary-radial" />
      <div className="absolute -top-1/4 left-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-primary-radial" />
      <div className="absolute right-0 top-0 block h-[35rem] w-[35rem] translate-x-1/4 rounded-full bg-secondary-radial" />
      <div className="absolute left-0 top-0 h-full w-full bg-primary-700/30" />
    </div>
  )
}
