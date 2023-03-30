import { useLanguage } from '@/hooks/useLanguage'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Description from '@/ui/Descriptions/Description/Description'
import consultImg from '@/assets/consults_and_rates/consults_and_rates.png'
import Heading from '@/ui/Headings/Heading/Heading'
import ConsultCard from '@/ui/Slider/ConsultCard/ConsultCard'
import Slider from '@/ui/Slider/Slider'
import s from './ConsultsAndRates.module.scss'
import { IConsultation } from '@/shared/models/consultation.interface'
import { FC } from 'react'
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
	} = useLanguage().consults_and_rates

	return (
		<Section
			style={{ background: `url(${consultImg.src}) bottom/cover` }}
			id="consults_and_rates"
			className={s.consultsAndRatesWrapper}
		>
			<div className={`${s.contentWrapper} container`}>
				<div className={`${s.consultsTextWrapper}`}>
					<Heading text={consults_and_rates} />
					<div className={s.descriptionWrapper}>
						<Description text={col_1_text_1} />
						<Description text={col_1_text_2} />
						<Description text={col_1_text_3} />
					</div>
					<ActionLink path="/detailed-prices" text={detailed_price} />
				</div>
				<div className={s.sliderWrapper}>
					<Slider buttonsType={true}>
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
			</div>
		</Section>
	)
}
export default ConsultsAndRates
