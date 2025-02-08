import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { Slice, State, Store } from './types'

import { devtoolsOptions, storage } from './config'
import { createAction } from './createAction'

const initialState: State = {
  count: 0
}

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

export const useCountState = create<Store>()(
  devtools(persist(immer(createSlice), storage), devtoolsOptions)
)
