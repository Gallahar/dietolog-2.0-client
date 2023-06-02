import { useMobileResize } from '@/hooks/useMobileResize'
import { SectionContext } from 'providers/SectionProvider/SectionProvider'
import { RefObject, useContext, useEffect, useRef, useState } from 'react'

export const useSectionObserver = (): RefObject<HTMLElement> | null => {
	const mobile = useMobileResize()

	const sectionRef = useRef<null | HTMLElement>(null)
	const { setCurrentSection } = useContext(SectionContext)
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.id !== 'sign-for-consult') {
					setCurrentSection(entry.target.id)
				}
			}
		})
	}

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: mobile ? 0.1 : 0.3,
		})

		if (!sectionRef.current) return
		observer.observe(sectionRef.current)

		return () => {
			setCurrentSection('')
			observer.disconnect()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mobile])

	return sectionRef
}
