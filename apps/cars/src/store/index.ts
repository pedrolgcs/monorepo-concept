import { create } from 'zustand'

import { ConsulSlice, useConsulSlice } from './consul'

type Store = ConsulSlice

const useStore = create<Store>()((...params) => ({
  ...useConsulSlice(...params),
}))

export { useStore }
