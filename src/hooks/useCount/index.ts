import { useState } from 'react'

import type { UseCount } from './types'

export const useCount = (): UseCount => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1)

  return { count, increment }
}
