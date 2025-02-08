import { useCountState } from './slice'

export const useCount = () => {
  const count = useCountState(state => state.count)
  const setIncrement = useCountState(state => state.setIncrement)
  const setDecrement = useCountState(state => state.setDecrement)
  const setUpdate = useCountState(state => state.setUpdate)
  const setReset = useCountState(state => state.setReset)

  return { count, setIncrement, setDecrement, setUpdate, setReset }
}
