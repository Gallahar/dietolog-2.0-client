import { IS_CLIENT } from '@/config/constants'
import { is } from 'immutable'
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

	const handleScroll = () => {
		setLastScroll((w) => (w = window.scrollY))
		if (lastScroll > 30) {
			setAnimated(true)
		}
		if (lastScroll < 30) {
			setAnimated(false)
		}

		if (lastScroll > 250 && pathname === '/') {
			setIsStatic(false)
		}
		if (lastScroll < 100 && pathname === '/') {
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
