import { useLanguage } from '@/hooks/useLanguage'
import ActionButton from '@/ui/Buttons/Actions/ActionButton/ActionButton'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Heading from '@/ui/Headings/Heading/Heading'
import Image from 'next/image'
import reviewImg from '@/assets/reviews/reviewImg.png'
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
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'

interface ReviewsProps {
	reviews: IReview[]
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
	const { heading, add_review } = useLanguage().reviews
	const { _return } = useLanguage().global
	const [openPopup, setOpenPopup] = useState(false)
	const [alertToggle, setAlertToggle] = useState(false)
	const [alertText, setAlertText] = useState('')

	const alertHandler = (t: string) => {
		setAlertText(t)
		setAlertToggle(true)
	}

	return (
		<section className={`${s.reviews} section`}>
			<Ellipse className={s.ellipse_1} />
			<Ellipse className={s.ellipse_2} />
			<Leaf className={s.leaf_1} />
			<div className={`${s.heading} container section`}>
				<Heading text={heading} />
			</div>
			<div className={`${s.sliderSection} section`}>
				<div className={s.sliderWrapper}>
					<Slider buttonsType={false}>
						{Array.from({ length: 10 }).map((_, i) => (
							<ReviewCard key={i} />
						))}
					</Slider>
				</div>
			</div>
			<div className={`${s.links} container`}>
				<ActionButton
					onClick={() => setOpenPopup(true)}
					text={add_review}
				/>
				<ActionLink path="/" text={_return} />
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
