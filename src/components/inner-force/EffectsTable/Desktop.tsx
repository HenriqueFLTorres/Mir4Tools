import {
  AllowedInventoryItemTypes,
  effectToBloodName,
  formatEffectValue,
  formatItemName,
  getBloodIcon,
} from '@/utils/index'

export default function DesktopEffectsTable({
  effectsObject,
}: {
  effectsObject: Array<
    [
      string,
      {
        initial: number
        final: number
      }
    ]
  >
}) {
  return effectsObject.length > 0 ? (
    <ul className="custom-scroll relative hidden w-[23rem] max-h-[calc(100vh-10rem)] flex-col gap-1 overflow-auto rounded-md bg-primary-600 p-1 md:rounded-xl xl:flex">
      {effectsObject.map(([name, value]) => {
        const formattedName = formatItemName(name)

        if (
          AllowedInventoryItemTypes.includes(formattedName) ||
          value.final < value.initial
        ) {
          return <></>
        }

        const Icon = getBloodIcon[effectToBloodName[name as statusEffects]]

        const hasIncreased = value.final > value.initial

        return (
          <li
            key={name}
            className="flex items-center gap-4 rounded bg-primary-500/20 px-1 py-0.5 text-xs font-light text-white md:px-3 md:py-1.5 md:text-sm"
          >
            <Icon className="h-6 w-6 shrink-0" />{' '}
            <b className="mr-auto font-bold">{name}</b>
            <p className="ml-4 shrink-0 text-end font-medium">
              {hasIncreased ? (
                <>
                  {formatEffectValue(name, value.initial)}{' '}
                  <span className="text-success-400">
                    {'>'} {formatEffectValue(name, value.final)}
                  </span>
                </>
              ) : (
                formatEffectValue(name, value.initial)
              )}
            </p>
          </li>
        )
      })}
    </ul>
  ) : (
    <></>
  )
}
