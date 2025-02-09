import { createAction } from './createAction'
import type { Slice, State } from './types'

const initialState: State = {
  count: 0
}

export const slice: Slice = set => ({
  ...initialState,

  setIncrement: createAction(set, 'setIncrement', state => {
    state.count++
  }),

  setDecrement: createAction(set, 'setDecrement', state => {
    state.count--
  }),

  setUpdate: createAction(set, 'setUpdate', (state, qty) => {
    state.count += qty
  }),

  setReset: createAction(set, 'setReset', state => {
    state.count = 0
  })
})
