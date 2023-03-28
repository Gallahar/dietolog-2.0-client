import s from './CardProgram.module.scss'
import Image from 'next/image'
import ArrowCard from '@/assets/icons/ArrowCard'
import { FC } from 'react'
import { IProgram } from '@/shared/models/program.interface'
import { currentLanguage } from '@/utils/language'
import Link from 'next/link'
import parse from 'html-react-parser'

interface CardProgramProps {
	program: IProgram
}

const CardProgram: FC<CardProgramProps> = ({ program }) => {
	const { photo_small, price, description_short, title, slug } = program

	return (
		<Link href={`/programs/${slug}`}>
			<div className={s.card}>
				<div className={s.cardBlock}>
					<Image
						draggable={false}
						width={396}
						height={564}
						src={photo_small}
						alt="programCard"
					/>
					<div className={s.cardInfo}>
						<span className={s.price}>{price} ₴</span>
						<h1>{currentLanguage(title)}</h1>
						{parse(currentLanguage(description_short))}
					</div>
					<ArrowCard />
				</div>
			</div>
		</Link>
	)
}
export default CardProgram
