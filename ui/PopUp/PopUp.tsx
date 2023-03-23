import { FC, ReactNode } from 'react'
import s from './PopUp.module.scss'
import { useOverflow } from './useOverflow'

interface PopUpProps {
	children?: ReactNode
	className?: string
	closePopup: () => void
}

const PopUp: FC<PopUpProps> = ({ children, closePopup, className }) => {
	useOverflow()

	return (
		<div onClick={closePopup} className={`${s.popUpWrapper} ${className}`}>
			<div className={s.popUp} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
export default PopUp
