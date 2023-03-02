import { ButtonHTMLAttributes, FC } from 'react'
import Arrow from '@/assets/icons/arrow-right.png'
import Image from 'next/image'
import s from './ActionCircleButton.module.scss'

interface ActionCircleButtonProps
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
			<Image src={Arrow} alt="arrow" />
			{text}
		</button>
	)
}
export default ActionCircleButton
