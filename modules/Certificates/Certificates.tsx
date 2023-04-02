import parse from 'html-react-parser'
import { FC, useState } from 'react'
import { useLanguageContext } from '@/hooks/useLanguageContext'
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
	const [isMoving, setIsMoving] = useState(false)
	const { _return } = useLanguageContext().global
	const {
		diplomas_heading,
		skills_heading,
		skill_1,
		skill_2,
		skill_3,
		skill_4,
		skill_5,
		skill_6,
	} = useLanguageContext().certificates

	const skillsData = [skill_1, skill_2, skill_3, skill_4, skill_5, skill_6]

	return (
		<section className={`${s.certificatesWrapper} section`}>
			<Ellipse className={s.ellipse_1} />
			<Ellipse className={s.ellipse_2} />
			<div className={`${s.diplomasHeading} container`}>
				<Heading text={diplomas_heading} />
			</div>
			<div className={s.sliderWrapper}>
				<Slider setIsMoving={setIsMoving} buttonsType={false}>
					{certificates.map((certificate) => (
						<DiplomaCard
							key={certificate._id}
							openPopup={() => {
								if (!isMoving) setCertificate(certificate.link)
							}}
							certificate={certificate}
						/>
					))}
				</Slider>
			</div>
			<div className={`${s.skillsAndImagesWrapper} container `}>
				<div className={s.imagesWrapper}>
					<Image
						priority
						src={imgTop}
						alt="img_top"
						className={s.t}
					/>
					<Image
						priority
						src={imgRight}
						alt="img_right"
						className={s.r}
					/>
					<Image
						priority
						src={imgBot}
						alt="img_bottom"
						className={s.b}
					/>
					<div className={s.outline} />
				</div>
				<div className={s.skillsWrapper}>
					<Heading text={skills_heading} />
					<div className={s.skills}>
						{skillsData.map((skill, i) => (
							<div key={skill} className={s.skill}>
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
