import { FC } from 'react'
import Logo from '@/ui/Backgrounds/Logo/Logo'
import s from './Header.module.scss'
import Nav from './Nav'
import cn from 'classnames'
import { useWindowScroll } from '@/modules/Header/useWindowScroll'

const Header: FC = () => {
	const [isStatic, animated] = useWindowScroll()

	return (
		<header
			className={cn(s.headerWrapper, {
				[s.static]: isStatic,
				[s.fixed]: !isStatic,
				[s.startAnimation]: animated,
			})}
		>
			<div className={`container ${s.header}`}>
				<Logo />
				<div className={s.navWrapper}>
					<Nav />
				</div>
			</div>
		</header>
	)
}
export default Header
