import { useStore } from './store'

export const useCount = () => {
  const stateCount = {
    count: useStore(state => state.count),
    setIncrement: useStore(state => state.setIncrement),
    setDecrement: useStore(state => state.setDecrement),
    setUpdate: useStore(state => state.setUpdate),
    setReset: useStore(state => state.setReset)
  }

  return { stateCount }
}
