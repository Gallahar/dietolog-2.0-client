import CrossClose from '@/assets/icons/CrossClose'
import { FC, HTMLAttributes } from 'react'
import { ClosePopupButtonFilledProps } from '../ClosePopupButtonFilled/ClosePopupButtonFilled'
import s from './ClosePopupButton.module.scss'

interface ClosePopupButtonProps extends ClosePopupButtonFilledProps {}

const ClosePopupButton: FC<ClosePopupButtonProps> = ({
	closePopup,
	className,
	...rest
}) => {
	return (
		<button
			onClick={() => closePopup(false)}
			className={`${s.closePopUp} ${className}`}
			{...rest}
		>
			<CrossClose />
		</button>
	)
}

export default ClosePopupButton
