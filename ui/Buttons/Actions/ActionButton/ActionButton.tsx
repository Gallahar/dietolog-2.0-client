import { ButtonHTMLAttributes, FC } from 'react'
import s from './ActionButton.module.scss'

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	className?: string
}

const ActionButton: FC<ActionButtonProps> = ({ text, className, ...rest }) => {
	return (
		<button
			className={`${s.actionButton} ${className}`}
			{...rest}
		>
			{text}
		</button>
	)
}
export default ActionButton
