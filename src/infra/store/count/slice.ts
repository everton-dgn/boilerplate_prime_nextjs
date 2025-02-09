import type { Slice, State, Store } from './types'

import { middlewaresProvider } from '../config'
import { storage } from './config'
import { createAction } from './createAction'

const initialState: State = {
  count: 0
}

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

export const useCountState = middlewaresProvider<Store>({
  slice,
  storage,
  name: 'count'
})
