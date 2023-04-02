import s from './DiplomaCard.module.scss'
import Image from 'next/image'
import ArrowSvg from './ArrowSvg'
import { FC } from 'react'
import { ICertificate } from '@/shared/models/certificate.interface'
import { currentLanguage } from '@/utils/currentLanguage'
import { useLanguageContext } from '@/hooks/useLanguageContext'

interface DiplomaCardProps {
	certificate: ICertificate
	openPopup: () => void
}

const DiplomaCard: FC<DiplomaCardProps> = ({ certificate, openPopup }) => {
	const mark = useLanguageContext().mark
	const { preview, title } = certificate

	return (
		<button onClick={openPopup}>
			<div className={s.card}>
				<p>{currentLanguage(title, mark)}</p>
				<Image
					draggable={false}
					width={396}
					height={396}
					src={preview}
					alt="diploma"
				/>
				<div className={s.arrowButton}>
					<ArrowSvg />
				</div>
			</div>
		</button>
	)
}
export default DiplomaCard
