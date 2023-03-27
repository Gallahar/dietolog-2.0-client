import s from './DiplomaCard.module.scss'
import Image from 'next/image'
import ArrowSvg from './ArrowSvg'
import { FC } from 'react'
import { ICertificate } from '@/shared/models/certificate.interface'
import { currentLanguage } from '@/utils/language'

interface DiplomaCardProps {
	certificate: ICertificate
	openPopup: () => void
}

const DiplomaCard: FC<DiplomaCardProps> = ({ certificate, openPopup }) => {
	const { preview, title } = certificate

	return (
		<div className={s.card}>
			<p>{currentLanguage(title)}</p>
			<Image
				draggable={false}
				width={396}
				height={396}
				src={preview}
				alt="diploma"
			/>
			<button onClick={openPopup} className={s.arrowButton}>
				<ArrowSvg />
			</button>
		</div>
	)
}
export default DiplomaCard
