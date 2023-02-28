import { FC } from 'react'
import Arrow from '@/assets/icons/arrow-button.svg'
import Image from 'next/image'
import ActionButton, { ActionButtonProps } from '../ActionButton/ActionButton'
import s from './ActionCircleButton.module.scss'

const ActionCircleButton: FC<ActionButtonProps> = ({
	locationClass,
	className,
	...rest
}) => {
	return (
		<div className={`${s.actionCircleButton} ${locationClass}`}>
			<ActionButton
				className={`${s.circleButton} ${className}`}
				{...rest}
			/>
			<Image src={Arrow} alt="arrow" />
		</div>
	)
}
export default ActionCircleButton
