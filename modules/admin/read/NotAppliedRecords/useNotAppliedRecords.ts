import { RecordService } from '@/services/record.service'
import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'

export const useNotAppliedRecords = () => {
	const {
		isLoading,
		data: records,
		refetch,
	} = useQuery('not applied records', () => RecordService.getNotApplied(), {
		select: ({ data }) => data,
	})

	const { mutate: toggleRecord } = useMutation(
		'toggle record',
		(_id: string) => RecordService.toggleConfirmation(_id),
		{
			onError: (err) => {
				alert('Произошла ошибка')
			},
			onSuccess: () => {
				refetch()
			},
		}
	)

	const { mutate: deleteRecord } = useMutation(
		'delete record',
		(_id: string) => RecordService.delete(_id),
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
			records: records || [],
			toggleRecord,
			deleteRecord,
		}),
		[isLoading, records, toggleRecord, deleteRecord]
	)
}
