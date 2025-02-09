import type { SetAction, State } from './types'

export const createAction =
  <T extends unknown[]>(
    set: SetAction,
    name: string,
    updater: (state: State, ...args: T) => void
  ) =>
  (...args: T) =>
    set(state => updater(state, ...args), undefined, name)
