import { useQuery } from '@tanstack/react-query'

import { getCars, GetCarsParams } from '../api/get-cars'

export const USE_GET_CARS_QUERY_KEY = 'cars'

export type UseGetOrdersQueryKey = [
  typeof USE_GET_CARS_QUERY_KEY,
  GetCarsParams,
]

export const useGetOrdersQuery = (params: GetCarsParams) => {
  return useQuery({
    queryKey: [USE_GET_CARS_QUERY_KEY, params],
    queryFn: () => getCars(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
