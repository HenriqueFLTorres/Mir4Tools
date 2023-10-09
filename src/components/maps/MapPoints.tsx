export const navigationMaps: mapTypes[] = ['Global Map', 'Snake Pit Area']

export default function MapPoints({
  lastMap,
  onPointClick,
}: {
  lastMap: mapTypes
  onPointClick: (label: string) => void
}) {
  return (
    <>
      {MapPointsObject[lastMap]?.map(({ label, pos }, index) => (
        <label
          key={index}
          className="group absolute flex -translate-x-1/2 -translate-y-[calc(100%-1rem)] cursor-pointer flex-col items-center gap-2 p-2"
          style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
        >
          <p className="text-lg font-medium text-white drop-shadow-lg transition-transform group-hover:-translate-y-2">
            {label}
          </p>
          <button
            onClick={() => onPointClick(label)}
            className="h-5 w-5 rounded-full border-2 border-primary-400 bg-primary-700/40 transition-transform group-hover:scale-150"
          ></button>
        </label>
      ))}
    </>
  )
}

const GlobalMapPoints: mapPointsObject = [
  {
    label: 'Bicheon Area',
    pos: [44, 72],
  },
  {
    label: 'Snake Pit Area',
    pos: [40, 46],
  },
  {
    label: 'Spiritual Center Area',
    pos: [22, 41.5],
  },
  {
    label: 'Sabuk Area',
    pos: [59, 40],
  },
  {
    label: 'Sabuk Area',
    pos: [69.2, 54],
  },
  {
    label: 'Snowfield Area',
    pos: [67, 25.5],
  },
]

const SnakePitMapPoints: mapPointsObject = [
  {
    label: 'Death George',
    pos: [14, 41],
  },
  {
    label: 'Snake Valley',
    pos: [25.5, 49],
  },
  {
    label: 'Snake Pit Labyrinth',
    pos: [27, 71],
  },
  {
    label: 'Abandoned Mine',
    pos: [38, 34],
  },
  {
    label: 'Abandoned Mine Labyrinth',
    pos: [59, 36],
  },
  {
    label: 'Snake Pit',
    pos: [51.5, 57],
  },
  {
    label: "Sinner's Shrine",
    pos: [80.5, 35],
  },
  {
    label: 'Secret Mine',
    pos: [85, 52],
  },
  {
    label: 'Viberbeast Plain',
    pos: [70.5, 74],
  },
]

const MapPointsObject: { [key in mapTypes]: mapPointsObject } = {
  'Global Map': GlobalMapPoints,
  'Snake Pit Area': SnakePitMapPoints,
}
