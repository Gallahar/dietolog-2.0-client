import { IReview } from '@/shared/models/review.interface'
import { formatDate } from '@/utils/date'
import { FC } from 'react'
import s from './ReviewCard.module.scss'

interface ReviewCardProps {
	review: IReview
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
	const { createdAt, name, text } = review

	return (
		<div className={s.card}>
			<div className={s.cardTextWrapper}>
				<h2>{name}</h2>
				<span>{formatDate(createdAt, 's')}</span>
				<p>{text}</p>
			</div>
		</div>
	)
}
export default ReviewCard
