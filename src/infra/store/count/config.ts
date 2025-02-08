import {
  type DevtoolsOptions,
  type PersistOptions,
  createJSONStorage
} from 'zustand/middleware'

import type { State, Store } from './types'

export const storage: PersistOptions<Store, Partial<State>> = {
  name: 'count',
  storage: createJSONStorage(() => localStorage)
}

export const devtoolsOptions: DevtoolsOptions = {
  name: 'count',
  enabled: process.env.NODE_ENV === 'development',
  store: 'useCountState'
}
