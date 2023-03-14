import { FC, ReactNode } from 'react'
import s from './Description.module.scss'
import cn from 'classnames'

interface DescriptionProps {
	text: string | ReactNode
	className?: string
}

const Description: FC<DescriptionProps> = ({ text, className }) => {
	return <div className={cn(s.description, className)}>{text}</div>
}

export default Description
