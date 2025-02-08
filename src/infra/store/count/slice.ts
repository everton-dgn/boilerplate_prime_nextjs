import { create } from 'zustand'
import {
  type DevtoolsOptions,
  type PersistOptions,
  createJSONStorage,
  devtools,
  persist
} from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { SetAction, Slice, State, Store } from './types'

const initialState: State = {
  count: 0
}

const createAction =
  <T extends unknown[]>(
    set: SetAction,
    name: string,
    updater: (state: State, ...args: T) => void
  ) =>
  (...args: T) =>
    set(state => updater(state, ...args), false, name)

const createSlice: Slice = set => ({
  ...initialState,

  setIncrement: createAction(set, 'setIncrement', state => {
    state.count++
  }),

  setDecrement: createAction(set, 'setDecrement', state => {
    state.count--
  }),

  setUpdate: createAction(set, 'setUpdate', (state, qty: State['count']) => {
    state.count += qty
  }),

  setReset: createAction(set, 'setReset', state => {
    state.count = 0
  })
})

const storage: PersistOptions<Store, Partial<State>> = {
  name: 'count-storage',
  storage: createJSONStorage(() => localStorage)
}

const devtoolsOptions: DevtoolsOptions = {
  name: 'count',
  enabled: process.env.NODE_ENV === 'development',
  store: 'useCountState'
}

export const useCountState = create<Store>()(
  devtools(persist(immer(createSlice), storage), devtoolsOptions)
)
