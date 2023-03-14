import s from './CardProgram.module.scss'
import Image from 'next/image'
import CardImg from '@/assets/testSlide/card.png'
import ArrowCard from '@/assets/icons/ArrowCard'
import { FC, HTMLAttributes } from 'react'

interface CardProgramProps extends HTMLAttributes<HTMLDivElement> {
	currentWidthX: number
}

const CardProgram: FC<CardProgramProps> = ({ currentWidthX }) => {
	return (
		<div
			style={{ transform: `translate3d(${currentWidthX}px,0 , 0)` }}
			className={s.card}
		>
			<div className={s.cardBlock}>
				<Image src={CardImg} alt="programCard" />
				<div className={s.cardInfo}>
					<span className={s.price}>350 ₴</span>
					<h1 className={s.heading}> dfijdsafia</h1>
					<p className={s.description}> dsfdsfdas</p>
				</div>
				<ArrowCard />
			</div>
		</div>
	)
}
export default CardProgram
