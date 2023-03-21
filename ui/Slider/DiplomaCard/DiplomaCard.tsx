import s from './DiplomaCard.module.scss'
import Image from 'next/image'
import ArrowSvg from './ArrowSvg'
import DiplomaImg from '@/assets/testSlide/Diploma.png'

interface DiplomaCardProps {}

const DiplomaCard = () => {
	return (
		<div className={s.card}>
			<p>
				Національний університет фізичного виховання і спорту України за
				спеціалізацією “Спортивна дієтологія”
			</p>
			<Image draggable={false} src={DiplomaImg} alt="diploma" />
			<div className={s.arrowWrapper}>
				<ArrowSvg />
			</div>
		</div>
	)
}
export default DiplomaCard
