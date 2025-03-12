import type { StateCreator } from 'zustand'

import type { Middleware } from '../types'

export type State = {
  count: number
}

type Actions = {
  setIncrement: () => void
  setDecrement: () => void
  setUpdate: (qty: State['count']) => void
  setReset: () => void
}

export type Store = State & Actions

export type Slice = StateCreator<Store, Middleware>
