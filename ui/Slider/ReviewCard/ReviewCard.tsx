import s from './ReviewCard.module.scss'

interface ReviewCardProps {}

const ReviewCard = () => {
	return (
		<div className={s.card}>
			<div className={s.cardTextWrapper}>
				<h2>Виктория</h2>
				<span>08.10.2022</span>
				<p>
					Катюша, я очень рада, что ты наконец обзавелась своим личным
					сайтом. Теперь, когда рекомендую тебя знакомым, не нужно
					объяснять “на пальцах”, кто ты и что ты))) Когда-то пришла к
					тебе вынужденно и спасибо тебе огромное, что помогла мне не
					только восстановить здоровье, но и сделать этот процесс
					достаточно приятным. На некоторые блюда я прямо “подсела” и
					готовлю их до сих пор для всей семьи. готовлю их до сих пор
					для всей семьи.
				</p>
			</div>
		</div>
	)
}
export default ReviewCard
