import { StateCreator } from 'zustand'

type Consul = {
  example: string
}

type State = {
  consul: Consul | null
}

type Actions = {
  updateConsul: (consul: Consul) => void
  resetConsul: () => void
}

export type ConsulSlice = State & Actions

const initialState: State = {
  consul: null,
}

export const useConsulSlice: StateCreator<ConsulSlice> = (set) => {
  return {
    ...initialState,

    updateConsul: (consul: Consul) => {
      set({ consul })
    },

    resetConsul: () => {
      set(initialState)
    },
  }
}
