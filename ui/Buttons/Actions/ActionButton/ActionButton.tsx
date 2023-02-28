import { ButtonHTMLAttributes, FC } from 'react'
import s from './ActionButton.module.scss'

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
	className?: string
	locationClass?:string
}

const ActionButton: FC<ActionButtonProps> = ({ text, className,locationClass, ...rest }) => {
	return (
		<button
			className={`${s.actionButton} ${className} ${locationClass}`}
			{...rest}
		>
			{text}
		</button>
	)
}
export default ActionButton
