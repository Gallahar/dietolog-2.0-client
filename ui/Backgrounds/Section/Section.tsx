import { FC, HTMLAttributes, ReactNode } from 'react'
import s from './Section.module.scss'
import { useSectionObserver } from './useSectionObserve'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	id: string
	children: ReactNode
}

const Section: FC<SectionProps> = ({ id, className, children, ...rest }) => {
	const sectionRef = useSectionObserver()
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
