import { useLanguageContext } from '@/hooks/useLanguageContext'
import { ConsultHelpService } from '@/services/consult-help.service'
import { IConsultHelpCreate } from '@/shared/models/consult-help.interface'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import Input from '@/ui/Fields/Inputs/Input/Input'
import TextArea from '@/ui/Fields/Inputs/TextArea/TextArea'
import Heading from '@/ui/Headings/Heading/Heading'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import s from './HelpToPickForm.module.scss'
import { IS_CLIENT } from '@/config/constants'

export interface HelpToPickFormProps {
	alertHandler: (alert: string) => void
	setOpenPopup: () => void
}

const HelpToPickForm: FC<HelpToPickFormProps> = ({
	alertHandler,
	setOpenPopup,
}) => {
	const {
		description_min_max_length,
		your_name,
		phone,
		email,
		description,
		invalid_phone,
		invalid_email,
		field_is_required,
		help_to_pick,
		send,
		response,
	} = useLanguageContext().help_to_pick

	const { error } = useLanguageContext().global

	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IConsultHelpCreate>({
		mode: 'onChange',
		reValidateMode: 'onBlur',
	})

	const onSubmit: SubmitHandler<IConsultHelpCreate> = async (dto, e) => {
		e?.preventDefault()
		setLoading(true)
		try {
			await ConsultHelpService.create(
				dto,
				IS_CLIENT ? localStorage.getItem('lang') : 'ua'
			)
			alertHandler(response)
		} catch (err) {
			alertHandler(error)
			console.log(err)
		} finally {
			setLoading(false)
			setOpenPopup()
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.helperForm}>
			<div className={s.inputsWrapper}>
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
				<TextArea
					error={errors?.description?.message}
					{...register('description', {
						required: description_min_max_length,
						minLength: {
							value: 50,
							message: description_min_max_length,
						},
						maxLength: {
							value: 300,
							message: description_min_max_length,
						},
					})}
					placeholder={description}
				/>
			</div>
			<div className={s.handlerWrapper}>
				<Heading text={help_to_pick} />
				<ActionCircleButton
					type="submit"
					text={send}
					disabled={loading}
				/>
			</div>
		</form>
	)
}
export default HelpToPickForm
