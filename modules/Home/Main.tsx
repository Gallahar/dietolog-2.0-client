import Header from '../Header/Header'
import s from './Main.module.scss'
import Image from 'next/image'
import mainImg from '@/assets/main/main-img.png'
import ActionCircleAnchor from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleAnchor'
import Description from '@/ui/Descriptions/Description/Description'
import { useLanguage } from '@/hooks/useLanguage'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'

const Main = () => {
	const { name, last_name, post_name, description, sign_for_consult } =
		useLanguage().main

	return (
		<div className={`section ${s.mainWrapper}`}>
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
		</div>
	)
}
export default Main
