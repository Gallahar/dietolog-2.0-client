import s from './OrderProgram.module.scss'
import { useLanguage } from '@/hooks/useLanguage'
import { FC, useState } from 'react'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import Input from '@/ui/Fields/Inputs/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { OrderService } from '@/services/order.service'
import { IOrderParam } from '@/shared/models/order.interface'
import { IProgram } from '@/shared/models/program.interface'
import { currentLanguage } from '@/utils/language'
import { IRecordCreate } from '@/shared/models/record.interface'

interface OrderProgramFormProps {
	alertHandler: (v: string) => void
	setOpenPopup: () => void
	program: IProgram
	answers: string[]
}

const OrderProgramForm: FC<OrderProgramFormProps> = ({
	alertHandler,
	setOpenPopup,
	program,
	answers,
}) => {
	const {
		your_name,
		phone,
		email,
		field_is_required,
		invalid_email,
		invalid_phone,
	} = useLanguage().sign_for_consult
	const { error, order, privacy } = useLanguage().global
	const { success_program, _program } = useLanguage().program
	const { chosen_params, your_order } = useLanguage().program_popup
	const { radios, title, price } = program
	const [loading, setLoading] = useState(false)
	const currentQuestions = radios.map(({ title_short }) =>
		currentLanguage(title_short)
	)
	const currentProgramTitle = currentLanguage(title)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRecordCreate>({ mode: 'onChange', reValidateMode: 'onBlur' })

	const onSubmit: SubmitHandler<IRecordCreate> = async (dto, e) => {
		e?.preventDefault()
		setLoading(true)

		try {
			const { email, phone, name } = dto
			const params: IOrderParam[] = currentQuestions.map((title, i) => {
				const value = answers[i]
				return {
					title: title,
					value: value,
				}
			})
			await OrderService.create({
				name,
				phone,
				email,
				params,
				program_title: currentProgramTitle,
			})
			alertHandler(success_program)
		} catch (err) {
			alertHandler(error)
			console.log(err)
		} finally {
			setLoading(false)
			setOpenPopup()
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
			<div className={s.inputsWrapper}>
				<p className={s.heading}>{`${chosen_params}:`}</p>
				<p className={s.title}>{`${_program} ${currentLanguage(
					title
				)}`}</p>
				<span className={s.price}>{`${price} ₴`}</span>
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
				<p className={s.privacy}>{privacy}</p>
			</div>
			<div className={s.checkListWrapper}>
				<p className={s.heading}>{`${your_order}:`}</p>
				<div className={s.parametersWrapper}>
					<div className={s.questions}>
						{radios.map(({ title_short }) => (
							<p key={title_short.en}>
								{currentLanguage(title_short)}
							</p>
						))}
					</div>
					<div className={s.answers}>
						{answers.map((a, i) => (
							<p key={i}>{a}</p>
						))}
					</div>
				</div>
				<ActionCircleButton
					disabled={loading}
					type="submit"
					text={order}
				/>
			</div>
		</form>
	)
}
export default OrderProgramForm
