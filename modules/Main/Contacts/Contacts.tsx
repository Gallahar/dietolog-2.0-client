import { useLanguage } from '@/hooks/useLanguage'
import Heading from '@/ui/Headings/Heading/Heading'
import avatar from '@/assets/contacts/contact-avatar.png'
import Image from 'next/image'
import s from './Contacts.module.scss'
import FaceBook from './Icons/FaceBook'
import Telegram from './Icons/Telegram'
import Instagram from './Icons/Instagram'
import WhatsApp from './Icons/WhatsApp'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import Section from '@/ui/Backgrounds/Section/Section'

const Contacts = () => {
	const { my_contacts, addres_first_pt, addres_second_pt, name, speech } =
		useLanguage().contacts

	return (
		<Section id="contacts" className={s.contactsWrapper}>
			<Leaf className={s.leaf_1} />
			<Leaf className={s.leaf_2} />
			<Ellipse className={s.ellipse_1} />
			<div className="container">
				<Heading className={s.heading} text={my_contacts} />
				<div className={s.contactsContainer}>
					<div className={s.contacts}>
						<div className={s.phones}>
							<p>+380 (68) 776 79 01</p>
							<p>+380 (95) 786 58 94</p>
						</div>
						<a
							className={s.email}
							href="mailto:dietolog.kirichenko@gmail.com?subject=ask about program body=hello i want to talk about program prices"
						>
							dietolog.kirichenko@gmail.com
						</a>
						<div className={s.address}>
							<p>{addres_first_pt}</p>
							<p>{addres_second_pt}</p>
						</div>
						<div className={s.icons}>
							<Instagram />
							<WhatsApp />
							<Telegram />
							<FaceBook />
						</div>
					</div>
					<div className={s.avatarWrapper}>
						<div className={s.outline}>
							<Image src={avatar} alt="avatar" />
							<div className={s.nameBlock}>
								<h4>{name}</h4>
								<p>{speech}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}
export default Contacts
