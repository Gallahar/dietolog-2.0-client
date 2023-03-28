import { IOrder } from '@/shared/models/order.interface'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import { formatDate } from '@/utils/date'
import { FC } from 'react'

import s from './AdminOrderItem.module.scss'
import AdminOrderItemParam from './AdminOrderItemParam'

interface AdminOrderItemProps {
	order: IOrder
	apply: (_id: string) => void
	deleteOrder: (_id: string) => void
}

const AdminOrderItem: FC<AdminOrderItemProps> = ({
	order,
	apply,
	deleteOrder,
}) => {
	const {
		_id,
		name,
		email,
		createdAt,
		phone,
		isConfirmed,
		params,
		program_title,
	} = order

	return (
		<div className={s.order}>
			<div className={s.date}>{formatDate(createdAt)}</div>
			<div className={s.name}>Имя: {name}</div>
			<div className={s.phone}>
				<span>Телефон: </span>
				{phone}
			</div>
			<div className={s.email}>
				<span>Email: </span>
				{email}
			</div>
			<div className={s.phone}>
				<span>Программа: </span>
				{program_title}
			</div>
			<div className={s.params}>
				{params.map((p) => (
					<AdminOrderItemParam key={p.title} param={p} />
				))}
			</div>
			<div className={s.btn_wrapper}>
				{!isConfirmed && (
					<AdminButton
						text="Подтвердить"
						onClick={() => apply(_id)}
					/>
				)}
				<AdminButton text="Удалить" onClick={() => deleteOrder(_id)} />
			</div>
		</div>
	)
}

export default AdminOrderItem
