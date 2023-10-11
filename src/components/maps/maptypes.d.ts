type nodeTypes = 'energy' | 'mining' | 'chest' | 'gather'

type mapTypes = 'Global Map' | 'Snake Pit Area'
type subMaps = 'snake_pit'
type mapPointsObject = Array<{ label: string; pos: [number, number] }>
interface nodeObject {
  type: nodeTypes
  rarity: RarityTypes
  pos: [number, number]
  amount?: number
}
type mapNodesObject = {
  [key in string]: nodeObject
}
