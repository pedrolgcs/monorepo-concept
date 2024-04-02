import { atom } from 'jotai'

export type FiltersAtom = {
  minPrice: number
  characteristics: Record<string, boolean>
  rentalCompanies: Record<string, boolean>
  categories: Record<string, boolean>
}

export const filtersAtom = atom<FiltersAtom>({
  minPrice: 0,
  characteristics: {},
  rentalCompanies: {},
  categories: {},
})
