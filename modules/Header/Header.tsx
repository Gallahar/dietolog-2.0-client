import { FC } from 'react'
import Logo from '@/ui/Backgrounds/Logo/Logo'
import s from './Header.module.scss'
import Nav from './Nav'
import cn from 'classnames'
import { useWindowScroll } from '@/hooks/useWindowScroll'

const Header: FC = () => {
	const isStatic = useWindowScroll()

	return (
		<div
			className={cn(s.headerWrapper, {
				[s.static]: isStatic,
				[s.fixed]: !isStatic,
			})}
		>
			<div id="main" className={`container ${s.header}`}>
				<Logo />
				<div className={s.navWrapper}>
					<Nav />
				</div>
			</div>
		</div>
	)
}
export default Header
