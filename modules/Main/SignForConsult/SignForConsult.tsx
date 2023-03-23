import s from './SignForConsult.module.scss'
import signImg from '@/assets/sign_for_consult/consult-img.png'
import Image from 'next/image'
import Heading from '@/ui/Headings/Heading/Heading'
import { useLanguage } from '@/hooks/useLanguage'
import Form from '@/components/client/Form/Form'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import PopUp from '@/ui/PopUp/PopUp'
import CLosePopupButton from '@/ui/Buttons/Actions/ClosePopupButtonFilled/ClosePopupButtonFilled'
import Description from '@/ui/Descriptions/Description/Description'
import { useState } from 'react'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'

const SignForConsult = () => {
	const { sign_for_consult } = useLanguage().sign_for_consult
	const [open, setOpen] = useState(false)
	const [message, setMessage] = useState('')

	const alertHandler = (v: string) => {
		setMessage(v)
		setOpen(true)
	}
	return (
		<section
			id="sign-for-consult"
			className={`section ${s.signForConsultWrapper}`}
		>
			<Ellipse className={s.ellipse_1}/>
			<Leaf className={s.leaf_1} />
			<Image priority={true} src={signImg} alt="enrolling" />
			<div className={s.outline} />
			<div className="container">
				<div className={s.signForConsult}>
					<div className={s.signWrapper}>
						<Heading text={sign_for_consult} />
						<Form alertHandler={alertHandler} />
					</div>
				</div>
			</div>
			{open && (
				<PopUp closePopup={() => setOpen(false)}>
					<CLosePopupButton closePopup={() => setOpen(false)} />
					<Description text={message} />
				</PopUp>
			)}
		</section>
	)
}
export default SignForConsult
