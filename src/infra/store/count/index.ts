import { useCountState } from './store'

export const useCount = () => ({
  count: useCountState(state => state.count),
  setIncrement: useCountState(state => state.setIncrement),
  setDecrement: useCountState(state => state.setDecrement),
  setUpdate: useCountState(state => state.setUpdate),
  setReset: useCountState(state => state.setReset)
})
