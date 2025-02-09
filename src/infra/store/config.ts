import { type StateCreator, create } from 'zustand'
import { type DevtoolsOptions, devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import type { MiddlewaresProvider } from './types'

export const devtoolsOptions = (name: string): DevtoolsOptions => ({
  name,
  enabled: process.env.NODE_ENV === 'development',
  store: `${name}State`
})

export const middlewaresProvider = <TStore>({
  slice,
  storage,
  name
}: MiddlewaresProvider<TStore>) => {
  const appliedSlice = storage ? persist(immer(slice), storage) : immer(slice)

  return create<TStore>()(
    devtools(appliedSlice as StateCreator<TStore>, devtoolsOptions(name))
  )
}
