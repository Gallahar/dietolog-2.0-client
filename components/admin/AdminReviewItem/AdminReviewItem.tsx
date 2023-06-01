import { IReview } from '@/shared/models/review.interface'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { formatDate } from '@/utils/date'
import { FC } from 'react'

import s from './AdminReviewItem.module.scss'

interface AdminReviewItemProps {
	review: IReview
	apply: (_id: string) => void
	deleteReview: (_id: string) => void
}

const AdminReviewItem: FC<AdminReviewItemProps> = ({
	review,
	apply,
	deleteReview,
}) => {
	const { _id, name, text, createdAt } = review

	return (
		<div className={s.review}>
			<div className={s.date}>{formatDate(createdAt)}</div>
			<div className={s.name}>{name}</div>
			<p className={s.text}>{text}</p>
			<div className={s.btn_wrapper}>
				<AdminButton
					text="Подтвердить"
					onClick={() => apply(_id)}
				/>
				<AdminButton
					text="Удалить"
					onClick={() => deleteReview(_id)}
				/>
			</div>
		</div>
	)
}

export default AdminReviewItem
