import { IConsultation } from '@/shared/models/consultation.interface'
import { currentLanguage } from '@/utils/language'
import { FC, Fragment } from 'react'
import s from './ConsultCard.module.scss'
import parse from 'html-react-parser'

interface ConsultCardProps {
	consult: IConsultation
}

const ConsultCard: FC<ConsultCardProps> = ({ consult }) => {
	const { title, type, options, price } = consult

	return (
		<div className={s.card}>
			<div className={s.cardHeading}>
				<h2 className={s.tittle}>{currentLanguage(title)}</h2>
				<h2 className={s.type}>{currentLanguage(type)}</h2>
			</div>
			<div className={s.optionsWrapper}>
				{options.map((option, i) => (
					<Fragment key={i}>
						{parse(currentLanguage(option))}
					</Fragment>
				))}
			</div>
			<span className={s.price}>{price} ₴</span>
		</div>
	)
}
export default ConsultCard
