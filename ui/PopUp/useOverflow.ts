import { useEffect } from 'react'

export const useOverflow = () => {
	useEffect(() => {
		document.body.style.overflowY = 'hidden'

		return () => {
			document.body.style.overflowY = 'initial'
		}
	}, [])
}
