import { SnakePitAreaMapPoints, SnakePitAreaMaps } from './SnakePitArea'

export const GlobalMapPoints: mapPointsObject = [
  // {
  //   label: 'Bicheon Area',
  //   pos: [44, 72],
  // },
  {
    label: 'Snake Pit Area',
    pos: [40, 46],
  },
  // {
  //   label: 'Spiritual Center Area',
  //   pos: [22, 41.5],
  // },
  // {
  //   label: 'Sabuk Area',
  //   pos: [59, 40],
  // },
  // {
  //   label: 'Sabuk Area',
  //   pos: [69.2, 54],
  // },
  // {
  //   label: 'Snowfield Area',
  //   pos: [67, 25.5],
  // },
]

export const MapPointsObject: { [key in mapTypes]: mapPointsObject } = {
  'Global Map': GlobalMapPoints,
  'Snake Pit Area': SnakePitAreaMapPoints,
}

export const MapNodesObject: Record<subMaps, mapNodesObject> = {
  ...SnakePitAreaMaps,
}
