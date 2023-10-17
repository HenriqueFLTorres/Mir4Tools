import Discord from '@/icons/Discord'

export default function DiscordButton() {
  return (
    <a
      href={'https://discord.gg/BRJxNdbJgw'}
      target="_blank"
      rel="noreferrer"
      className="absolute left-4 hover:bg-white/10 hover:scale-125 transition-[background-color,_transform] top-20 z-10 flex w-16 h-16 flex-col items-center justify-center gap-2 rounded-full border border-white/10 bg-primary-400/5 p-4 text-center text-sm font-light text-white backdrop-blur-lg sm:w-max sm:flex-row sm:text-left lg:top-24"
    >
      <Discord className="fill-white w-full h-full" />
    </a>
  )
}
