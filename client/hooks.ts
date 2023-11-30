import { MutationFunction, useQuery } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import * as API from './api.ts'

export function useFriendBooking() {
  const query = useQuery({
    queryKey: ['friends-booking'],
    queryFn: API.getFriendBookings,
  })

  return {
    ...query,
    update: useUpdateFriendBooking(),
    delete: useDeleteFriendBooking(),
    add: useAddFriendBooking(),
  }
}

export function useFriendBookingMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(['Friend Booking'])
    },
  })

  return mutation
}

export function useUpdateFriendBooking() {
  return useFriendBookingMutation(API.updateFriendBooking)
}

export function useDeleteFriendBooking() {
  return useFriendBookingMutation(API.deleteFriendBooking)
}

export function useAddFriendBooking() {
  return useFriendBookingMutation(API.addFriendBooking)
}
