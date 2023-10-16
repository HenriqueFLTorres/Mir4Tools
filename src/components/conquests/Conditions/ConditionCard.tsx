import Image from 'next/image'

export default function ConditionCard({
  image,
  name,
  level,
}: {
  image: string
  name: string
  level?: number
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3">
      <Image
        src={image}
        alt={name}
        width={216}
        height={112}
        className="h-[4.8rem] w-[9.5rem] select-none object-contain sm:h-[7rem] sm:w-[13.5rem] sm:rounded-md"
      />

      <p className="max-w-[8rem] text-center text-xs font-medium text-white sm:max-w-[10rem] sm:text-sm">
        <b className="font-semibold">{name}</b>
        {level ? (
          <>
            <br />
            Lv. {level}
          </>
        ) : (
          <></>
        )}
      </p>
    </div>
  )
}
