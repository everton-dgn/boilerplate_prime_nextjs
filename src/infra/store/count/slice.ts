import { create } from 'zustand'
import {
  type DevtoolsOptions,
  createJSONStorage,
  devtools,
  persist
} from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { Slice, State, UseCountState } from './types'

const initialState: State = {
  count: 0
}

const createAction =
  <T extends unknown[]>(
    set: Parameters<Slice>[0],
    name: string,
    updater: (state: State, ...args: T) => void
  ) =>
  (...args: T) =>
    set(state => updater(state, ...args), false, name)

const slice: Slice = set => ({
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

const storage = {
  name: 'count-storage',
  storage: createJSONStorage(() => localStorage)
}

const devtoolsOptions: DevtoolsOptions = {
  name: 'count',
  enabled: process.env.NODE_ENV === 'development',
  store: 'useCountState'
}

export const useCountState = create<UseCountState>()(
  devtools(
    persist(
      immer((...params) => slice(...params)),
      storage
    ),
    devtoolsOptions
  )
)
