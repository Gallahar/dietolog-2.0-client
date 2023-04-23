import s from './OrderProgram.module.scss'
import { useLanguageContext } from '@/hooks/useLanguageContext'
import { FC, useState } from 'react'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import Input from '@/ui/Fields/Inputs/Input/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { OrderService } from '@/services/order.service'
import { IOrderParam } from '@/shared/models/order.interface'
import { IProgram } from '@/shared/models/program.interface'
import { currentLanguage } from '@/utils/currentLanguage'
import { IRecordCreate } from '@/shared/models/record.interface'

interface OrderProgramFormProps {
	alertHandler: (alert: string) => void
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
	const mark = useLanguageContext().mark
	const {
		your_name,
		phone,
		email,
		field_is_required,
		invalid_email,
		invalid_phone,
	} = useLanguageContext().sign_for_consult

	const { error, order, privacy } = useLanguageContext().global
	const { success_program, _program } = useLanguageContext().program
	const { chosen_params, your_order } = useLanguageContext().program_popup

	const [loading, setLoading] = useState(false)

	const { radios, title, price } = program

	const currentQuestions = radios.map(({ title_short }) =>
		currentLanguage(title_short, mark)
	)
	const currentProgramTitle = currentLanguage(title, mark)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRecordCreate>({ mode: 'onChange', reValidateMode: 'onBlur' })

	const onSubmit: SubmitHandler<IRecordCreate> = async (dto, e) => {
		e?.preventDefault()
		setLoading(true)

		try {
			const params: IOrderParam[] = currentQuestions.map((title, i) => {
				const value = answers[i]
				return {
					title,
					value,
				}
			})
			await OrderService.create({
				...dto,
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
				<p className={s.heading}>{`${your_order}:`}</p>
				<p className={s.title}>{`${_program} ${currentLanguage(
					title,
					mark
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
				<p className={s.heading}>{`${chosen_params}:`}</p>
				<div className={s.parametersWrapper}>
					{radios.map(({ title_short }, i) => (
						<div key={title_short.en} className={s.parameter}>
							<p>{currentLanguage(title_short, mark)}</p>
							<p>{answers[i]}</p>
						</div>
					))}
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
