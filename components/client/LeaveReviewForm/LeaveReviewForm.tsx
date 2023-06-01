import { useLanguageContext } from '@/hooks/useLanguageContext'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import Input from '@/ui/Fields/Inputs/Input/Input'
import TextArea from '@/ui/Fields/Inputs/TextArea/TextArea'
import Heading from '@/ui/Headings/Heading/Heading'
import { ReviewService } from '@/services/review.service'
import { FC, useState } from 'react'
import s from './LeaveReviewForm.module.scss'
import { HelpToPickFormProps } from '../HelpToPickForm/HelpToPickForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IReviewCreate } from '@/shared/models/review.interface'

interface LeaveReviewFormProps extends HelpToPickFormProps {}

const LeaveReviewForm: FC<LeaveReviewFormProps> = ({
	alertHandler,
	setOpenPopup,
}) => {
	const { your_review, your_name, review, send, review_min_max_length } =
		useLanguageContext().leave_review
	const { response } = useLanguageContext().reviews
	const { error, field_is_required } = useLanguageContext().global

	const [loading, setLoading] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IReviewCreate>({
		mode: 'onChange',
		reValidateMode: 'onBlur',
	})

	const onSubmit: SubmitHandler<IReviewCreate> = async (dto, e) => {
		e?.preventDefault()
		setLoading(true)
		try {
			await ReviewService.create(dto)
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
		<form
			autoComplete="on"
			onSubmit={handleSubmit(onSubmit)}
			className={s.leaveReview}
		>
			<Heading text={your_review} />
			<Input
				error={errors?.name?.message}
				{...register('name', {
					required: field_is_required,
				})}
				placeholder={your_name}
			/>
			<TextArea
				error={errors?.text?.message}
				{...register('text', {
					required: review_min_max_length,
					minLength: {
						value: 50,
						message: review_min_max_length,
					},
					maxLength: {
						value: 500,
						message: review_min_max_length,
					},
				})}
				placeholder={review}
			/>
			<ActionCircleButton type="submit" disabled={loading} text={send} />
		</form>
	)
}
export default LeaveReviewForm
