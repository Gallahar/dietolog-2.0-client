import { INavbarItem } from '@/modules/Header/Header_types'
import { FC, useContext, useState } from 'react'
import s from './BurgerPopUp.module.scss'
import cn from 'classnames'
import ClosePopupButton from '@/ui/Buttons/Actions/ClosePopupButton/ClosePopupButton'
import { useOverflow } from '@/ui/PopUp/useOverflow'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SectionContext } from 'providers/SectionProvider/SectionProvider'

interface BurgerPopUpProps {
	links: INavbarItem[]
	closePopUp: () => void
}

export const BurgerPopUp: FC<BurgerPopUpProps> = ({ links, closePopUp }) => {
	useOverflow()

	const { pathname } = useRouter()

	const { currentSection } = useContext(SectionContext)

	const [close, setClose] = useState(false)

	const handleClose = () => {
		setClose(true)
		setTimeout(() => {
			closePopUp()
		}, 400)
	}

	return (
		<div
			className={cn(s.popUpWrapper, { [s.hide]: close })}
			onClick={handleClose}
		>
			<div className={`container ${s.popUp}`}>
				<ClosePopupButton closePopup={handleClose} />
				{links.map(({ title, href }: INavbarItem) =>
					pathname === '/' ? (
						<a
							onClick={handleClose}
							className={cn(s.default, {
								[s.disappear]: close,
								[s.filled]: currentSection === href.slice(1),
							})}
							key={href}
							href={href}
						>
							{title}
						</a>
					) : (
						<Link
							onClick={handleClose}
							key={href}
							className={cn(s.default, {
								[s.disappear]: close,
								[s.filled]: currentSection === href.slice(1),
							})}
							href={`/${href}`}
						>
							{title}
						</Link>
					)
				)}
			</div>
		</div>
	)
}
