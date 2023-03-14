import s from './ActionCircleButton.module.scss'
import { AnchorHTMLAttributes, FC } from 'react'
import ArrowRight from '@/assets/icons/ArrowRight'

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
			<ArrowRight />
			{text}
		</a>
	)
}
export default ActionCircleAnchor
