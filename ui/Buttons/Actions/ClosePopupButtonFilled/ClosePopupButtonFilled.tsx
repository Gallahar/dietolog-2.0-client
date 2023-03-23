import CrossClose from '@/assets/icons/CrossClose'
import { FC, HTMLAttributes } from 'react'
import s from './ClosePopupButtonFilled.module.scss'

export interface ClosePopupButtonFilledProps
	extends HTMLAttributes<HTMLButtonElement> {
	className?: string
	closePopup: () => void
}

const ClosePopupButtonFilled: FC<ClosePopupButtonFilledProps> = ({
	closePopup,
	className,
	...rest
}) => {
	return (
		<button
			onClick={closePopup}
			className={`${s.closePopUp} ${className}`}
			{...rest}
		>
			<CrossClose />
		</button>
	)
}

export default ClosePopupButtonFilled
