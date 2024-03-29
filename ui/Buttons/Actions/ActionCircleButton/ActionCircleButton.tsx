import { ButtonHTMLAttributes, FC } from 'react'
import s from './ActionCircleButton.module.scss'
import ArrowRight from '@/assets/icons/ArrowRight'

export interface ActionCircleButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	text: string
}

const ActionCircleButton: FC<ActionCircleButtonProps> = ({
	text,
	className,
	...rest
}) => {
	return (
		<button className={`${s.buttonCircle} ${className}`} {...rest}>
			<p className={s.text}>{text}</p>
			<ArrowRight />
		</button>
	)
}
export default ActionCircleButton
