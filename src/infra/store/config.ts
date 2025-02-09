import type { DevtoolsOptions } from 'zustand/middleware'

export const devtoolsOptions = (name: string): DevtoolsOptions => ({
  name,
  enabled: process.env.NODE_ENV === 'development',
  store: `${name}State`
})
