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

export type UseCountState = State & Actions

export type Slice = StateCreator<
  UseCountState,
  [['zustand/immer', never], ['zustand/devtools', never]]
>
