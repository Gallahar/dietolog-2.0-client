import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { certificateService } from '@/services/certificate.service'
import { getKeys } from '@/utils/object'
import { getAdminUrl } from '@/config/api'
import { IEditCertificate } from '@/shared/models/certificate.interface'

export const useEditCertificate = (
	setValue: UseFormSetValue<IEditCertificate>
) => {
	const { push, query } = useRouter()

	const certificateId = String(query._id)

	const { isLoading } = useQuery(
		['certificate', certificateId],
		() => certificateService.getById(certificateId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError(err) {
				alert('Ошибка')
			},
			enabled: !!query._id,
		}
	)

	const { mutateAsync } = useMutation(
		'update certificate',
		(data: IEditCertificate) =>
			certificateService.update(certificateId, data),
		{
			onError(err) {
				alert('Ошибка')
			},
			onSuccess: () => {
				alert('Обновлено успешно')
				push(getAdminUrl('/certificates'))
			},
		}
	)

	const onSubmit: SubmitHandler<IEditCertificate> = async (
		data: IEditCertificate
	) => {
		console.log(data)
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
