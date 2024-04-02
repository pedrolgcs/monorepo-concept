import { api } from '@/lib/axios'

export type GetCarsParams = {
  pickUpLocation: string
  dropOffLocation?: string
  fromDate: Date
  toDate: Date
  startTime: number
  endTime: number
}

export type GetCarsResponse = {
  cars: Array<unknown>
}

export async function getCars(params: GetCarsParams) {
  const response = await api.get<GetCarsResponse>('/cars', { params })
  return response.data
}
