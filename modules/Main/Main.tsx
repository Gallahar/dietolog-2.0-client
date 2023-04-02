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
			<Image
				className={s.imgMain}
				alt="main-img"
				priority={true}
				src={mainImg}
			/>
			<div className={s.outline} />
			<div className={`container ${s.main}`}>
				<h2>{`${name} ${last_name}`}</h2>
				<h1>{post_name}</h1>
				<Description className={s.description} text={description} />
				<ActionCircleAnchor
					href="#sign-for-consult"
					text={sign_for_consult}
				/>
			</div>
		</Section>
	)
}
export default Main
