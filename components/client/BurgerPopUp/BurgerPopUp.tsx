import { INavbarItem } from '@/modules/Header/Header_types'
import { FC, useContext } from 'react'
import s from './BurgerPopUp.module.scss'
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

	return (
		<div className={s.popUpWrapper} onClick={closePopUp}>
			<div
				className={`container ${s.popUp}`}
				onClick={(e) => e.stopPropagation()}
			>
				<ClosePopupButton closePopup={closePopUp} />
				{links.map(({ title, href }: INavbarItem) =>
					pathname === '/' ? (
						<a
							onClick={closePopUp}
							className={`${s.default} ${
								currentSection === href.slice(1) ? s.filled : ''
							} `}
							key={href}
							href={href}
						>
							{title}
						</a>
					) : (
						<Link
							onClick={closePopUp}
							key={href}
							className={`${s.default} ${
								currentSection === href.slice(1) ? s.filled : ''
							} `}
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
