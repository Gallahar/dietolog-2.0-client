import { useLanguage } from '@/hooks/useLanguage'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Heading from '@/ui/Headings/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import Image from 'next/image'
import { FC } from 'react'
import _404image from '@/assets/images/404.png'

import s from './_404.module.scss'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Description from '@/ui/Descriptions/Description/Description'

const _404: FC = () => {
	const { back_to_main, heading, text_bot, text_mid, text_top } =
		useLanguage()._404

	return (
		<Meta title="404 - Page is not found">
			<section className={s.section}>
				<Leaf className={s.leaf} />
				<div className={`container ${s.container}`}>
					<div>
						<Heading text={heading} className={s.heading} />
						<div className={`description ${s.description}`}>
							<Description text={text_top} />
							<Description text={text_mid} />
							<Description text={text_bot} />
						</div>
						<ActionLink
							path="/"
							className={s.link}
							text={back_to_main}
						/>
					</div>
					<Image src={_404image} alt="404 error" />
				</div>
			</section>
		</Meta>
	)
}
export default _404
