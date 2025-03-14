import type { Slice, State } from './types'

const initialState: State = {
  count: 0
}

export const slice: Slice = set => ({
  ...initialState,

  setIncrement: () =>
    set(
      state => {
        state.count++
      },
      undefined,
      'setIncrement'
    ),

  setDecrement: () =>
    set(
      state => {
        state.count--
      },
      undefined,
      'setDecrement'
    ),

  setUpdate: qty =>
    set(
      state => {
        state.count += qty
      },
      undefined,
      'setUpdate'
    ),

  setReset: () => set(() => initialState, undefined, 'setReset')
})
