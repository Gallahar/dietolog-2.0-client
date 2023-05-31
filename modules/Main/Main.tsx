import s from './Main.module.scss'
import Image from 'next/image'
import mainImg from '@/assets/main/main-img.png'
import ActionCircleAnchor from '@/ui/Buttons/Actions/ActionCircleAnchor/ActionCircleAnchor'
import Description from '@/ui/Descriptions/Description/Description'
import { useLanguageContext } from '@/hooks/useLanguageContext'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Section from '@/ui/Backgrounds/Section/Section'

const Main = () => {
	const { name, last_name, post_name, description, sign_for_consult } =
		useLanguageContext().main

	return (
		<Section id="main" className={s.mainWrapper}>
			<Leaf className={s.leaf_1} />
			<Leaf className={s.leaf_2} />
			<div className={`container ${s.main}`}>
				<div className={s.fullName}>
					<h2 className={s.name}>{name}</h2>
					<h2 className={s.lastName}>{last_name}</h2>
				</div>
				<h1>{post_name}</h1>
				<div className={s.contentWrapper}>
					<div className={s.descriptionWrapper}>
						<Description
							className={s.description}
							text={description}
						/>
						<ActionCircleAnchor
							href="#sign-for-consult"
							text={sign_for_consult}
						/>
					</div>
					<div className={s.imageWrapper}>
						<Image
							className={s.imgMain}
							alt="main-img"
							priority={true}
							src={mainImg}
						/>
						<div className={s.outline} />
					</div>
				</div>
			</div>
		</Section>
	)
}
export default Main
