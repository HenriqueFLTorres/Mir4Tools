import { atom, type Atom, type PrimitiveAtom } from 'jotai'
import { atomWithLocalStorage } from '../utils'

export const InnerForceTabAtom = atom<BloodSets>('Muscle Strength Manual')

export type InnerForceObject = {
  [key in BloodNames]: { initial: number; final: number }
}

export const InnerForceBloodsAtom: PrimitiveAtom<InnerForceObject> &
  Atom<InnerForceObject> = atomWithLocalStorage('Mir4Tools_InnerForce', {
  'Sky Palace': { initial: 1, final: 1 },
  'Royal Decree': { initial: 1, final: 1 },
  'Pulsing Sky': { initial: 1, final: 1 },
  'Great Ruler': { initial: 1, final: 1 },
  "Land's End": { initial: 1, final: 1 },
  'Centenary Congregation': { initial: 1, final: 1 },
  'Embroidered Throne': { initial: 1, final: 1 },
  'Golden Jade': { initial: 1, final: 1 },
  'Heart Core': { initial: 1, final: 1 },
  'Virtuous Elevation': { initial: 1, final: 1 },
  Antirelaxation: { initial: 1, final: 1 },
  Springwater: { initial: 1, final: 1 },
  'Pinnacle Star': { initial: 1, final: 1 },
  'Wind Hub': { initial: 1, final: 1 },
  'Great Union': { initial: 1, final: 1 },
  'Earth Valley': { initial: 1, final: 1 },
  Dubhe: { initial: 1, final: 1 },
  'Fertile Scale': { initial: 1, final: 1 },
  Mizar: { initial: 1, final: 1 },
  Alkaid: { initial: 1, final: 1 },
  'Divise Action': { initial: 1, final: 1 },
  Waterbridge: { initial: 1, final: 1 },
  'United Heaven': { initial: 1, final: 1 },
  Quorum: { initial: 1, final: 1 },
})
