import { useLanguage } from '@/hooks/useLanguage'
import aboutImg from '@/assets/about/about-img.png'
import Image from 'next/image'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import s from './About.module.scss'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'

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
	} = useLanguage().about

	const forWhoData: string[] = [
		for_who_text_1,
		for_who_text_2,
		for_who_text_3,
		for_who_text_4,
		for_who_text_5,
		for_who_text_6,
	]

	return (
		<section id="about" className={`section ${s.aboutWrapper}`}>
			<Leaf className={s.leaf_1} />
			<Leaf className={s.leaf_2} />
			<Ellipse className={s.ellipse_1} />
			<Ellipse className={s.ellipse_2} />
			<div className={`section container ${s.approachWrapper}`}>
				<Heading text={my_approach} />
				<div className={s.approachTextBlock}>
					<Description text={col_1_text_1} />
					<Description text={col_1_text_2} />
				</div>
			</div>
			<div className={s.forWhoWrapper}>
				<div className={s.forWhoImageBlock}>
					<div className={s.outline} />
					<Image src={aboutImg} alt="about-img" />
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
									className={`${s[`num_${index + 1}`]} ${
										s.hamilton
									}`}
								>
									{index + 1}
								</p>
								<Description text={description} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={` container ${s.bottomSideInfo}`}>
				<div className={s.notSuitableBlock}>
					<div className={s.notSuitableHeading}>
						<Heading text={not_suitable} />
					</div>
					<div className={s.notSuitableDescriptionWrapper}>
						<div className={s.notSuitableDescription1}>
							<p className={s.hamilton}>1</p>
							<Description text={not_suitable_text_1} />
						</div>
						<div className={s.notSuitableDescription2}>
							<p className={s.hamilton}>2</p>
							<Description text={not_suitable_text_2} />
						</div>
					</div>
				</div>
				<div className={s.worthBlock}>
					<div className={s.worthDescriptionWrapper}>
						<div className={s.worthDescription1}>
							<div className={s.emptyBlock} />
							<p className={s.hamilton}>10+</p>
							<Description text={worth_2} />
							<ActionLink
								className={s.education}
								path="/education"
								text={my_education}
							/>
						</div>
						<div className={s.worthDescription2}>
							<Heading text={worth_1} />
							<p className={s.hamilton}>1000+</p>
							<Description text={worth_3} />
							<ActionLink
								className={s.reviews}
								path="/reviews"
								text={reviews}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default About
