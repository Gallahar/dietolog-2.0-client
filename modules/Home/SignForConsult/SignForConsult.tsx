import s from './SignForConsult.module.scss'
import enrollImg from '@/assets/images/enroll-main.png'
import Image from 'next/image'
import Heading from '@/ui/Headings/Heading/Heading'
import { useLanguage } from '@/hooks/useLanguage'
import Form from './Form'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'

const SignForConsult = () => {
	const { sign_for_consult } = useLanguage().sign_for_consult
	return (
		<div className="container section">
			<Leaf className={s.leaf} />
			<div className={s.SignForConsult}>
				<div className={s.signWrapper}>
					<Heading text={sign_for_consult} />
					<Form />
				</div>
				<div className={s.imageWrapper}>
					<Image src={enrollImg} alt="enrolling" />
					<div className={s.Outline} />
				</div>
			</div>
		</div>
	)
}
export default SignForConsult
