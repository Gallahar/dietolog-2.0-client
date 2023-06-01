import { SectionContext } from 'providers/SectionProvider/SectionProvider'
import { RefObject, useContext, useEffect, useRef } from 'react'

export const useSectionObserver = (): RefObject<HTMLElement> => {
	const sectionRef = useRef<null | HTMLElement>(null)
	const { setCurrentSection } = useContext(SectionContext)
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log(entry)
				if (entry.target.id !== 'sign-for-consult') {
					setCurrentSection(entry.target.id)
				}
			}
		})
	}

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: window.innerWidth < 720 ? 0.1 : 0.3,
		})

		if (!sectionRef.current) return
		observer.observe(sectionRef.current)
		return () => {
			setCurrentSection('')
			observer.disconnect()
		}
	}, [])

	return sectionRef
}
