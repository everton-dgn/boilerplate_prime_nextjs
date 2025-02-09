import { type PersistOptions, createJSONStorage } from 'zustand/middleware'

import { middlewaresProvider } from '../config'

import { slice } from './slice'

import type { State, Store } from './types'

const name = 'count'

const storage: PersistOptions<Store, Partial<State>> = {
  name,
  storage: createJSONStorage(() => localStorage)
}

export const useCountState = middlewaresProvider<Store>({
  slice,
  storage,
  name
})
