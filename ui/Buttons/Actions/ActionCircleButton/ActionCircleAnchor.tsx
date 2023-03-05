import s from './ActionCircleButton.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Arrow from '@/assets/icons/arrow-right.png'

interface ActionCircleAnchor {
	className?: string
	text: string
	href: string
}

const ActionCircleAnchor: FC<ActionCircleAnchor> = ({
	href,
	text,
	className,
}) => {
	return (
		<a className={`${s.buttonCircle} ${className}`} href={href}>
			<Image alt="arrow" src={Arrow} />
			{text}
		</a>
	)
}
export default ActionCircleAnchor
