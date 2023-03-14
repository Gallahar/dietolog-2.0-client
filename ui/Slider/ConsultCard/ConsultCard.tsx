import s from './ConsultCard.module.scss'

interface ConsultCardProps{
    
}

const ConsultCard = () => {
	return (
		<div className={s.card}>
			<div className={s.cardHeading}>
				<h2 className={s.tittle}>Консультація + конструктор меню</h2>
				<h2 className={s.type}>зустріч</h2>
			</div>
			<ul className={s.optionsWrapper}>
				{Array.from({ length: 8 }).map((_, i) => (
					<li key={i}>
						заміри об’ємів, зважування на вагах-аналізаторах;
					</li>
				))}
			</ul>
			<span className={s.price}>2800-6300 ₴</span>
		</div>
	)
}
export default ConsultCard
