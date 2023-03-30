import { SectionContext } from 'providers/SectionProvider/SectionProvider'
import {
	FC,
	HTMLAttributes,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
} from 'react'
import s from './Section.module.scss'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	id: string
	children: ReactNode
}

const Section: FC<SectionProps> = ({ id, className, children, ...rest }) => {
	const sectionRef = useRef<null | HTMLElement>(null)
	const { currentSection, setCurrentSection } = useContext(SectionContext)
	const handleIntersection = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (
					entry.target.id !== currentSection &&
					entry.isIntersecting
				) {
					if (entry.target.id !== 'sign-for-consult')
						setCurrentSection(entry.target.id)
				}
			})
		},
		[currentSection]
	)

	useEffect(() => {
		console.log(currentSection)
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.2,
			rootMargin: '-200px 0px',
		})
		if (!sectionRef.current) return
		observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [currentSection])

	return (
		<section
			id={id}
			{...rest}
			ref={sectionRef}
			className={`${s.block} ${className}`}
		>
			{children}
		</section>
	)
}
export default Section
