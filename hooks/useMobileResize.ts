import { useState, useEffect } from 'react'

export const useMobileResize = () => {
	const [mobile, setMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 729 && !mobile) {
				setMobile(true)
			}
			if (window.innerWidth >= 729 && mobile) {
				setMobile(false)
			}
		}
		if (window.innerWidth <= 729 && !mobile) {
			setMobile(true)
		}
		if (window.innerWidth >= 729 && mobile) {
			setMobile(false)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [mobile])

	return mobile
}
