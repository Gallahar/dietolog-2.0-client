import { useLanguageContext } from '@/hooks/useLanguageContext'
import ActionButton from '@/ui/Buttons/Actions/ActionButton/ActionButton'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Heading from '@/ui/Headings/Heading/Heading'
import s from './Reviews.module.scss'
import { FC, useState } from 'react'
import LeaveReviewForm from '@/components/client/LeaveReviewForm/LeaveReviewForm'
import PopUp from '@/ui/PopUp/PopUp'
import ClosePopupButtonFilled from '@/ui/Buttons/Actions/ClosePopupButtonFilled/ClosePopupButtonFilled'
import Description from '@/ui/Descriptions/Description/Description'
import { IReview } from '@/shared/models/review.interface'
import Slider from '@/ui/Slider/Slider'
import ReviewCard from '@/ui/Slider/ReviewCard/ReviewCard'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'

interface ReviewsProps {
	reviews: IReview[]
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
	const { heading, add_review } = useLanguageContext().reviews
	const { _return } = useLanguageContext().global
	const [openPopup, setOpenPopup] = useState(false)
	const [alertToggle, setAlertToggle] = useState(false)
	const [alertText, setAlertText] = useState('')
	const [isMoving, setIsMoving] = useState(false)

	const alertHandler = (alert: string) => {
		setAlertText(alert)
		setAlertToggle(true)
	}

	return (
		<section className={`${s.reviews} section`}>
			<Ellipse className={s.ellipse_1} />
			<Ellipse className={s.ellipse_2} />
			<div className={`${s.heading} container `}>
				<Heading text={heading} />
			</div>
			<div className={s.sliderSection}>
				<Slider setIsMoving={setIsMoving} buttonsType={false}>
					{reviews.map((review, i) => (
						<ReviewCard review={review} key={i} />
					))}
				</Slider>
			</div>
			<div className={`${s.links} container`}>
				<ActionButton
					onClick={() => setOpenPopup(true)}
					text={add_review}
				/>
				<ActionLink path="/#aboutLinks" text={_return} />
			</div>
			{openPopup && (
				<PopUp closePopup={() => setOpenPopup(false)}>
					<ClosePopupButtonFilled
						closePopup={() => setOpenPopup(false)}
					/>
					<LeaveReviewForm
						setOpenPopup={() => setOpenPopup(false)}
						alertHandler={alertHandler}
					/>
				</PopUp>
			)}
			{alertToggle && (
				<PopUp closePopup={() => setAlertToggle(false)}>
					<ClosePopupButtonFilled
						closePopup={() => setAlertToggle(false)}
					/>
					<Description text={alertText} />
				</PopUp>
			)}
		</section>
	)
}
export default Reviews
