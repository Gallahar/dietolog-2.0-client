import { IS_CLIENT } from '@/config/constants'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useWindowScroll = (): boolean[] | null[] => {
	if (!IS_CLIENT) {
		return [null, null]
	}

	const [lastScroll, setLastScroll] = useState(window.scrollY)
	const { pathname } = useRouter()
	const [animated, setAnimated] = useState(false)
	const [isStatic, setIsStatic] = useState(false)

	const handleScroll = () => {
		setLastScroll((w) => (w = window.scrollY))
		if (lastScroll > 30) {
			setAnimated(true)
		}
		if (lastScroll < 30) {
			setAnimated(false)
		}

		if (lastScroll > 250) {
			setIsStatic(false)
		}
		if (lastScroll < 100) {
			setIsStatic(true)
		}
	}

	useEffect(() => {
		if (pathname === '/') {
			window.addEventListener('scroll', handleScroll)
		}
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScroll, pathname])

	useEffect(() => {
		if (pathname !== '/') {
			setIsStatic(false)
			setAnimated(false)
		}
		if (pathname === '/' && lastScroll < 30) {
			setAnimated(false)
			setIsStatic(true)
		} else if (pathname === '/' && lastScroll > 400) {
			setIsStatic(false)
		}
	}, [pathname, lastScroll])

	return [isStatic, animated]
}
