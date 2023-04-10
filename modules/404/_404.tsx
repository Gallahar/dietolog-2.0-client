import { useLanguageContext } from '@/hooks/useLanguageContext'
import Heading from '@/ui/Headings/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import Image from 'next/image'
import { FC } from 'react'
import _404image from '@/assets/images/404.png'

import s from './_404.module.scss'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Description from '@/ui/Descriptions/Description/Description'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'

const _404: FC = () => {
	const { back_to_main, heading, text_top, text_mid, text_bot } =
		useLanguageContext()._404

	return (
		<Meta title="404 - Page is not found">
			<section className={s.p404_Wrapper}>
				<Ellipse className={s.ellipse_1} />
				<Ellipse className={s.ellipse_2} />
				<div className={`${s.contentWrapper} container`}>
					<div className={s.textWrapper}>
						<Heading text={heading} />
						<div className={s.descriptionWrapper}>
							<Description text={text_top} />
							<Description text={text_mid} />
							<Description text={text_bot} />
						</div>
						<div className={`${s.linkBlock} section container`}>
							<ActionLink text={back_to_main} path="/" />
						</div>
					</div>
					<div className={s.imageWrapper}>
						<p>4</p>
						<Image priority src={_404image} alt="404-image" />
						<p>4</p>
					</div>
				</div>
			</section>
		</Meta>
	)
}
export default _404
