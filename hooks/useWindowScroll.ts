import { IS_CLIENT } from '@/config/constants'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useWindowScroll = () => {
	if (!IS_CLIENT) {
		return null
	}

	const { pathname } = useRouter()
	const [isStatic, setIsStatic] = useState(
		pathname === '/' && window.scrollY > 100 ? true : false
	)
	const [lastScroll, setLastScroll] = useState(0)

	const handleScroll = () => {
		if (lastScroll > 90 && pathname === '/') {
			setIsStatic(false)
		} else if (lastScroll < 90 && pathname === '/') {
			setIsStatic(true)
		}

		setLastScroll((w) => (w = window.scrollY))
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScroll])

	useEffect(() => {
		if (pathname === '/') {
			setIsStatic(true)
		}
		return () => {
			setIsStatic(false)
		}
	}, [pathname])

	return isStatic
}
