/* eslint-disable react-hooks/rules-of-hooks */
import { IS_CLIENT } from '@/config/constants'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useWindowScroll = (): boolean[] | null[] => {
	if (!IS_CLIENT) {
		return [null, null]
	}

	const { pathname } = useRouter()
	const [animated, setAnimated] = useState(false)
	const [isStatic, setIsStatic] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 30) {
			setAnimated(true)
		}
		if (window.scrollY < 30) {
			setAnimated(false)
		}

		if (window.scrollY > 250) {
			setIsStatic(false)
		}
		if (window.scrollY < 150) {
			if (pathname === '/') {
				setIsStatic(true)
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [pathname])

	useEffect(() => {
		if (pathname !== '/') {
			setIsStatic(false)
			setAnimated(false)
		}
		if (pathname === '/' && window.scrollY < 30) {
			setAnimated(false)
			setIsStatic(true)
		} else if (pathname === '/' && window.scrollY > 400) {
			setIsStatic(false)
		}
	}, [pathname])

	return [isStatic, animated]
}
