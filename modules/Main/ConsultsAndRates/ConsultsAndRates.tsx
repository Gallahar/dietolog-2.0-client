import { useLanguageContext } from '@/hooks/useLanguageContext'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Description from '@/ui/Descriptions/Description/Description'
import consultImg1920 from '@/assets/consults_and_rates/consults-1920.png'
import Image from 'next/image'
import Heading from '@/ui/Headings/Heading/Heading'
import ConsultCard from '@/ui/Slider/ConsultCard/ConsultCard'
import Slider from '@/ui/Slider/Slider'
import s from './ConsultsAndRates.module.scss'
import { IConsultation } from '@/shared/models/consultation.interface'
import { FC, useState } from 'react'
import Section from '@/ui/Backgrounds/Section/Section'

interface ConsultsAndRatesProps {
	consults: IConsultation[]
}

const ConsultsAndRates: FC<ConsultsAndRatesProps> = ({ consults }) => {
	const {
		consults_and_rates,
		col_1_text_1,
		col_1_text_2,
		col_1_text_3,
		detailed_price,
	} = useLanguageContext().consults_and_rates
	const [isMoving, setIsMoving] = useState(false)

	return (
		<Section id="consults_and_rates" className={s.consultsAndRatesWrapper}>
			<Image fill src={consultImg1920} alt="consults-background" />
			<div className={`${s.contentWrapper} container`}>
				<div className={`${s.consultsTextWrapper}`}>
					<Heading text={consults_and_rates} />
					<div className={s.descriptionWrapper}>
						<Description text={col_1_text_1} />
						<br />
						<Description text={col_1_text_2} />
						<br />
						<Description text={col_1_text_3} />
					</div>
					<ActionLink path="/detailed-prices" text={detailed_price} />
				</div>
				<div className={s.sliderWrapper}>
					<Slider setIsMoving={setIsMoving} buttonsType={true}>
						{[
							...consults,
							...consults,
							...consults,
							...consults,
						].map((consult, i) => (
							<ConsultCard consult={consult} key={i} />
						))}
					</Slider>
				</div>
				<ActionLink className={s.mobileLink} path="/detailed-prices" text={detailed_price} />
			</div>
		</Section>
	)
}
export default ConsultsAndRates
