import { useLanguage } from '@/hooks/useLanguage'
import aboutImg from '@/assets/about/about-img.png'
import Image from 'next/image'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import s from './About.module.scss'

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
		<div className={`section ${s.aboutWrapper}`}>
			<div className={`section container ${s.approachWrapper}`}>
				<Heading text={my_approach} />
				<div className={s.approachTextBlock}>
					<Description text={col_1_text_1} />
					<Description text={col_1_text_2} />
				</div>
			</div>
			<div className={s.forWhoWrapper}>
				<div className={s.forWhoImageBlock}>
					<div className={s.outline}>
						<Image src={aboutImg} alt="about-img" />
					</div>
				</div>
				<div className={s.forWhoTextWrapper}>
					<Heading text={for_who} />
					<div className={s.forWhoTextBlock}>
						{forWhoData.map((description, index) => (
							<div
								key={description}
								className={s.wrapperDescription}
							>
								<p>{index + 1}</p>
								<Description text={description} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default About
