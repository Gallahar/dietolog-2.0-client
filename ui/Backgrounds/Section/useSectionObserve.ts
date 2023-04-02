import { SectionContext } from 'providers/SectionProvider/SectionProvider'
import { RefObject, useCallback, useContext, useEffect, useRef } from 'react'

export const useSectionObserver = (): RefObject<HTMLElement> => {
	const sectionRef = useRef<null | HTMLElement>(null)
	const { currentSection, setCurrentSection } = useContext(SectionContext)
	const handleIntersection = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (entry.target.id !== 'sign-for-consult') {
						setCurrentSection(entry.target.id)
					}
				}
			})
		},
		[currentSection]
	)

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.3,
		})
		if (!sectionRef.current) return
		observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	return sectionRef
}
