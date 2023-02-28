import { FC } from 'react'
import s from './Description.module.scss'
import cn from 'classnames'

interface DescriptionProps {
	text: string
	className?: string
}

const Description: FC<DescriptionProps> = ({ text, className }) => {
	return <div className={cn(s.description, className)}>{text}</div>

}

export default Description