import { FC, useEffect, useState } from 'react'
import Logo from '@/ui/Backgrounds/Logo/Logo'
import s from './Header.module.scss'
import Nav from './Nav'
import { useRouter } from 'next/router'
import { IS_CLIENT } from '@/config/constants'
import cn from 'classnames'

const Header: FC = () => {
	const { pathname } = useRouter()
	const [isStatic, setIsStatic] = useState(pathname === '/' ? true : false)
	const [lastScroll, setLastScroll] = useState(0)

	const handleScroll = () => {
		if (IS_CLIENT) {
			if (lastScroll > 40) {
				setIsStatic(false)
			} else {
				setIsStatic(true)
			}
		}
		setLastScroll((w) => (w = window.scrollY))
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScroll])

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
