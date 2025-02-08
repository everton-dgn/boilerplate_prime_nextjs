import type { StateCreator } from 'zustand'

export type State = {
  count: number
}

export type Actions = {
  setIncrement: () => void
  setDecrement: () => void
  setUpdate: (qty: State['count']) => void
  setReset: () => void
}

export type Store = State & Actions

export type Slice = StateCreator<
  Store,
  [
    ['zustand/immer', never],
    ['zustand/persist', unknown],
    ['zustand/devtools', never]
  ]
>

export type SetAction = Parameters<Slice>[0]
