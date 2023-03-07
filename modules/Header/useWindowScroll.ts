import { IS_CLIENT } from '@/config/constants'
import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react'

export const useWindowScroll = (): boolean[] | null[] => {
	if (!IS_CLIENT) {
		return [null, null]
	}

	const [lastScroll, setLastScroll] = useState(0)
	const { pathname } = useRouter()
	const [animated, setAnimated] = useState(false)
	const [isStatic, setIsStatic] = useState(false)

	const handleScroll = useCallback(() => {
		setLastScroll((w) => (w = window.scrollY))
		if (lastScroll > 30) {
			setAnimated(true)
		} else if (lastScroll < 30) {
			setAnimated(false)
		}

		if (lastScroll > 250 && pathname === '/') {
			setIsStatic(false)
		} else if (lastScroll < 250 && pathname === '/') {
			setIsStatic(true)
		}
	}, [lastScroll])

	useEffect(() => {
		if (pathname === '/') {
			window.addEventListener('scroll', handleScroll)
		}

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScroll])

	useEffect(() => {
		if (pathname === '/' && window.scrollY < 30) {
			setIsStatic(true)
		}
	}, [pathname])

	return [isStatic, animated]
}
