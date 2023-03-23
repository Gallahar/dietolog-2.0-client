import { useLanguage } from '@/hooks/useLanguage'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import Input from '@/ui/Fields/Inputs/Input/Input'
import TextArea from '@/ui/Fields/Inputs/TextArea/TextArea'
import Heading from '@/ui/Headings/Heading/Heading'
import { ReviewService } from '@/services/review.service'
import { FC, FormEvent, useRef, useState } from 'react'
import s from './LeaveReviewForm.module.scss'
import { HelpChooseFormProps } from '../HelpToPickForm/HelpToPickForm'

interface LeaveReviewFormProps extends HelpChooseFormProps {}

const LeaveReviewForm: FC<LeaveReviewFormProps> = ({
	alertHandler,
	setOpenPopup,
}) => {
	const { your_review, your_name, review, send, review_min_max_length } =
		useLanguage().leave_review
	const { response } = useLanguage().reviews
	const { error, filed_is_required } = useLanguage().global
	const nameRef = useRef<HTMLInputElement>(null)
	const reviewRef = useRef<HTMLTextAreaElement>(null)
	const [nameError, setNameError] = useState('')
	const [reviewError, setReviewError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setNameError('')
		setReviewError('')
		if (!nameRef.current?.value) {
			return setNameError(filed_is_required)
		}
		if (
			!reviewRef.current?.value ||
			reviewRef.current?.value.length < 50 ||
			reviewRef.current?.value.length > 300
		) {
			return setReviewError(review_min_max_length)
		}

		try {
			setLoading(true)
			await ReviewService.create({
				name: nameRef.current.value,
				text: reviewRef.current.value,
			})
			alertHandler(response)
		} catch (e) {
			alertHandler(error)
			console.error(e)
		} finally {
			setLoading(false)
			setOpenPopup()
		}
	}

	return (
		<form onSubmit={handleSubmit} className={s.leaveReview}>
			<Heading text={your_review} />
			<Input error={nameError} ref={nameRef} placeholder={your_name} />
			<TextArea
				error={reviewError}
				ref={reviewRef}
				placeholder={review}
			/>
			<ActionCircleButton disabled={loading} text={send} />
		</form>
	)
}
export default LeaveReviewForm
