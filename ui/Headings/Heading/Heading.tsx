import { AllHTMLAttributes, FC } from 'react'
import s from './Heading.module.scss'

interface HeadingProps extends AllHTMLAttributes<HTMLElement> {
	className?: string
	text: string
}

const Heading: FC<HeadingProps> = ({ className, text }) => {
	return <h2 className={`${className} ${s.heading}`}>{text}</h2>
}
export default Heading
