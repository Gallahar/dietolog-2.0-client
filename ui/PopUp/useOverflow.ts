import { useEffect } from 'react'

export const useOverflow = () => {
	const cleanup = () => {
		document.body.style.overflowY = 'initial'
	}

	useEffect(() => {
		document.body.style.overflowY = 'hidden'

		return () => cleanup()
	}, [])
}
