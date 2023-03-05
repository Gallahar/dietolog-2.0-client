import s from './ActionCircleButton.module.scss'
import { AnchorHTMLAttributes, FC } from 'react'
import Image from 'next/image'
import Arrow from '@/assets/icons/arrow-right.png'

interface ActionCircleAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string
	text: string
}

const ActionCircleAnchor: FC<ActionCircleAnchor> = ({
	text,
	className,
	...rest
}) => {
	return (
		<a className={`${s.buttonCircle} ${className}`} {...rest}>
			<Image alt="arrow" src={Arrow} />
			{text}
		</a>
	)
}
export default ActionCircleAnchor
