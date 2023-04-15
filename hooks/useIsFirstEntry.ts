import { useEffect, useState } from 'react'

export const useIsFirstEntry = (): string | null => {
	const [IsFirstEntry, setIsFirstEntry] = useState<string | null>(null)

	useEffect(() => {
		setIsFirstEntry(sessionStorage.getItem('isFirstEntry'))
		sessionStorage.setItem('isFirstEntry', 'true')
	}, [])

	return IsFirstEntry
}
