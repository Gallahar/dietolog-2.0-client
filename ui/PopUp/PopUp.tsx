import { FC, ReactNode } from 'react'
import s from './PopUp.module.scss'

interface PopUpProps {
	children?: ReactNode
	className?: string
	closePopup: (val: boolean) => void
}

const PopUp: FC<PopUpProps> = ({ children, closePopup, className }) => {
	return (
		<div
			onClick={() => closePopup(false)}
			className={`${s.popUpWrapper} ${className}`}
		>
			<div className={s.popUp} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
export default PopUp
