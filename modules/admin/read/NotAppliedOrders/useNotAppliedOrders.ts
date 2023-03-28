import { OrderService } from '@/services/order.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useNotAppliedOrders = () => {
	const {
		isLoading,
		data: orders,
		refetch,
	} = useQuery('not applied orders', () => OrderService.getNotApplied(), {
		select: ({ data }) => data,
	})


	const { mutate: toggleOrder } = useMutation(
		'toggle order',
		(_id: string) => OrderService.toggleConfirmation(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	const { mutate: deleteOrder } = useMutation(
		'delete order',
		(_id: string) => OrderService.delete(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	return useMemo(
		() => ({
			isLoading,
			orders: orders || [],
			toggleOrder,
			deleteOrder,
		}),
		[isLoading, orders, toggleOrder, deleteOrder]
	)
}
