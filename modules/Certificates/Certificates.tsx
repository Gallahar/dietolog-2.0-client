import parse from 'html-react-parser'
import { FC, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { ICertificate } from '@/shared/models/certificate.interface'
import imgTop from '@/assets/certificates/img_top.png'
import imgRight from '@/assets/certificates/img_right.png'
import imgBot from '@/assets/certificates/img_bot.png'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import Slider from '@/ui/Slider/Slider'
import Image from 'next/image'
import DiplomaCard from '@/ui/Slider/DiplomaCard/DiplomaCard'
import s from './Certificates.module.scss'
import PopUp from '@/ui/PopUp/PopUp'
import ClosePopupButtonFilled from '@/ui/Buttons/Actions/ClosePopupButtonFilled/ClosePopupButtonFilled'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'

interface CertificatesProps {
	certificates: ICertificate[]
}

const Certificates: FC<CertificatesProps> = ({ certificates }) => {
	const [certificate, setCertificate] = useState('')

	const { _return } = useLanguage().global
	const {
		diplomas_heading,
		skills_heading,
		skill_1,
		skill_2,
		skill_3,
		skill_4,
		skill_5,
		skill_6,
	} = useLanguage().certificates

	const skillsData = [skill_1, skill_2, skill_3, skill_4, skill_5, skill_6]

	return (
		<section className={`${s.certificatesWrapper} section`}>
			<Ellipse className={s.ellipse_1} />
			<Ellipse className={s.ellipse_2} />
			<div className={`${s.diplomasHeading} container`}>
				<Heading text={diplomas_heading} />
			</div>
			<div className={s.sliderWrapper}>
				<Slider buttonsType={false}>
					{certificates.map((certificate) => (
						<DiplomaCard
							openPopup={() => setCertificate(certificate.link)}
							certificate={certificate}
						/>
					))}
				</Slider>
			</div>
			<div className={`${s.skillsAndImagesWrapper} container `}>
				<div className={s.imagesWrapper}>
					<Image src={imgTop} alt="img_top" className={s.t} />
					<Image src={imgRight} alt="img_right" className={s.r} />
					<Image src={imgBot} alt="img_bottom" className={s.b} />
					<div className={s.outline} />
				</div>
				<div className={s.skillsWrapper}>
					<Heading text={skills_heading} />
					<div className={s.skills}>
						{skillsData.map((skill, i) => (
							<div className={s.skill}>
								<Description
									className={i > 1 ? 'bold_description' : ''}
									key={skill + i}
									text={i > 1 ? parse(skill) : skill}
								/>
								{i !== 0 && (
									<p
										className={`${s[`num_${i}`]} ${
											s.hamilton
										}`}
									>
										{i}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={` container ${s.linkContainer}`}>
				<ActionLink path="/" text={_return} />
			</div>
			{certificate && (
				<PopUp
					className={s.popUp}
					closePopup={() => setCertificate('')}
				>
					<ClosePopupButtonFilled
						closePopup={() => setCertificate('')}
					/>
					<Image
						width={950}
						height={670}
						src={certificate}
						alt="certificate"
					/>
				</PopUp>
			)}
		</section>
	)
}
export default Certificates