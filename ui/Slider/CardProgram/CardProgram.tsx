import s from './CardProgram.module.scss'
import Image from 'next/image'
import ArrowCard from '@/assets/icons/ArrowCard'
import { FC } from 'react'
import { IProgram } from '@/shared/models/program.interface'
import { currentLanguage } from '@/utils/currentLanguage'
import Link from 'next/link'
import parse from 'html-react-parser'
import { useLanguageContext } from '@/hooks/useLanguageContext'

interface CardProgramProps {
	program: IProgram
	isMoving: boolean
}

const CardProgram: FC<CardProgramProps> = ({ program, isMoving }) => {
	const { mark, accessibility } = useLanguageContext()
	const { photo_small, price, description_short, title, slug, isAvailable } =
		program

	return (
		<>
			{isAvailable ? (
				<Link
					className={`${s.card} ${s.link}`}
					tabIndex={-1}
					draggable={false}
					onClick={(e) => {
						if (isMoving) {
							e.preventDefault()
						}
					}}
					href={`/programs/${slug}`}
				>
					<Image
						draggable={false}
						fill
						src={photo_small}
						alt={`programCard${currentLanguage(title, mark)}`}
					/>
					<div className={s.cardBlock}>
						<div className={s.cardInfo}>
							<span className={s.price}>{price} ₴</span>
							<h1>{currentLanguage(title, mark)}</h1>
							{parse(currentLanguage(description_short, mark))}
						</div>
						<ArrowCard />
					</div>
				</Link>
			) : (
				<div className={s.card} tabIndex={-1} draggable={false}>
					<Image
						draggable={false}
						fill
						src={photo_small}
						alt={`programCard${currentLanguage(title, mark)}`}
					/>
					<div className={s.cardBlock}>
						<div className={s.cardInfo}>
							<span className={s.price}>{price} ₴</span>
							<h1>{currentLanguage(title, mark)}</h1>
							{parse(currentLanguage(description_short, mark))}
						</div>
						<ArrowCard />
						<span className={s.accessibility}>{accessibility}</span>
					</div>
				</div>
			)}
		</>
	)
}
export default CardProgram
