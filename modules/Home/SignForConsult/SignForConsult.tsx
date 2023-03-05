import s from './SignForConsult.module.scss'
import signImg from '@/assets/sign_for_consult/consult-img.png'
import Image from 'next/image'
import Heading from '@/ui/Headings/Heading/Heading'
import { useLanguage } from '@/hooks/useLanguage'
import Form from '@/components/client/Form/Form'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'

const SignForConsult = () => {
	const { sign_for_consult } = useLanguage().sign_for_consult
	return (
		<div
			id="sign-for-consult"
			className={`section ${s.signForConsultWrapper}`}
		>
			<Image priority={true} src={signImg} alt="enrolling" />
			<div className={s.outline} />
			<div className="container">
				<Leaf className={s.leaf} />
				<div className={s.signForConsult}>
					<div className={s.signWrapper}>
						<Heading text={sign_for_consult} />
						<Form />
					</div>
				</div>
			</div>
		</div>
	)
}
export default SignForConsult
