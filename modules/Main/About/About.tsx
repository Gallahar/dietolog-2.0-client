import { useLanguageContext } from '@/hooks/useLanguageContext'
import aboutImg from '@/assets/about/about-img.png'
import notSuitableImg from '@/assets/sign_for_consult/consult-img.png'
import approachImg from '@/assets/main/main-img.png'
import Image from 'next/image'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import s from './About.module.scss'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import Section from '@/ui/Backgrounds/Section/Section'

const About = () => {
	const {
		my_approach,
		col_1_text_1,
		col_1_text_2,
		for_who,
		for_who_text_1,
		for_who_text_2,
		for_who_text_3,
		for_who_text_4,
		for_who_text_5,
		for_who_text_6,
		not_suitable,
		not_suitable_text_1,
		not_suitable_text_2,
		worth_1,
		worth_2,
		worth_3,
		my_education,
		reviews,
	} = useLanguageContext().about

	const forWhoData: string[] = [
		for_who_text_1,
		for_who_text_2,
		for_who_text_3,
		for_who_text_4,
		for_who_text_5,
		for_who_text_6,
	]

	return (
		<Section id="about" className={s.aboutWrapper}>
			<Ellipse className={s.ellipse_1} />
			<Ellipse className={s.ellipse_2} />
			<div className="container">
				<div className={s.approachWrapper}>
					<Heading text={my_approach} />
					<div className={s.approachTextBlock}>
						<Description text={col_1_text_1} />
						<Description text={col_1_text_2} />
					</div>
					<div className={s.approachImageWrapper}>
						<Image
							className={s.approachImage}
							fill
							src={approachImg}
							alt="approach-img"
						/>
						<div className={s.outlineApproach} />
					</div>
				</div>
				<div className={s.forWhoWrapper}>
					<div className={s.forWhoImageBlock}>
						<Image fill src={aboutImg} alt="about-img" />
						<div className={s.outline} />
					</div>
					<div className={s.forWhoTextWrapper}>
						<Heading text={for_who} />
						<div className={s.forWhoTextBlock}>
							{forWhoData.map((description, index) => (
								<div
									key={description}
									className={s.wrapperDescription}
								>
									<p
										className={`${
											s[`num_${index + 1}`]
										} hamilton`}
									>
										{index + 1}
									</p>
									<Description text={description} />
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={s.bottomSideInfo}>
					<div className={s.notSuitableBlock}>
						<div className={s.notSuitableHeading}>
							<Heading text={not_suitable} />
						</div>
						<div className={s.notSuitableDescriptionWrapper}>
							<div className={s.notSuitableDescription1}>
								<p className="hamilton">1</p>
								<Description text={not_suitable_text_1} />
							</div>
							<div className={s.notSuitableDescription2}>
								<p className="hamilton">2</p>
								<Description text={not_suitable_text_2} />
							</div>
						</div>
					</div>
					<div className={s.notSuitableImgWrapper}>
						<Image
							src={notSuitableImg}
							fill
							alt="not-suitable-img"
						/>
						<div />
					</div>
					<div id="aboutLinks" className={s.worthBlock}>
						<Heading text={worth_1} />
						<div className={s.description1}>
							<p className="hamilton">10+</p>
							<Description text={worth_2} />
						</div>
						<div className={s.description2}>
							<p className="hamilton">1000+</p>
							<Description text={worth_3} />
						</div>
						<ActionLink path="/certificates" text={my_education} />
						<ActionLink path="/reviews" text={reviews} />
					</div>
				</div>
			</div>
		</Section>
	)
}
export default About
