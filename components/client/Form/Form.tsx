import { useLanguageContext } from '@/hooks/useLanguageContext'
import { FC, useState } from 'react'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import Input from '@/ui/Fields/Inputs/Input/Input'
import s from './Form.module.scss'
import { RecordService } from '@/services/record.service'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IRecordCreate } from '@/shared/models/record.interface'

interface FormProps {
	alertHandler: (v: string) => void
}

const Form: FC<FormProps> = ({ alertHandler }) => {
	const {
		response,
		enroll,
		your_name,
		phone,
		email,
		field_is_required,
		invalid_email,
		invalid_phone,
	} = useLanguageContext().sign_for_consult
	const { error } = useLanguageContext().global
	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRecordCreate>({ mode: 'onChange', reValidateMode: 'onBlur' })

	const onSubmit: SubmitHandler<IRecordCreate> = async (dto, e) => {
		e?.preventDefault()
		setLoading(true)
		try {
			await RecordService.create(dto)
			alertHandler(response)
		} catch (err) {
			alertHandler(error)
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
			<Input
				error={errors?.name?.message}
				{...register('name', { required: field_is_required })}
				placeholder={your_name}
			/>
			<Input
				error={errors?.phone?.message}
				{...register('phone', {
					required: field_is_required,
					pattern: {
						value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
						message: invalid_phone,
					},
				})}
				placeholder={phone}
			/>
			<Input
				error={errors?.email?.message}
				{...register('email', {
					required: field_is_required,
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
						message: invalid_email,
					},
				})}
				placeholder={email}
			/>
			<ActionCircleButton
				disabled={loading}
				type="submit"
				text={enroll}
			/>
		</form>
	)
}
export default Form
