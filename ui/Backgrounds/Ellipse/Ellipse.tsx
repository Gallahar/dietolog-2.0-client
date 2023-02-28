import { type } from 'os'
import { FC } from 'react'
import s from './Ellipse.module.scss'

interface EllipseProps {
	className?: string
}

const Ellipse: FC<EllipseProps> = ({ className }) => {
	return <div className={`${className} ${s.ellipse}`}>Ellipse</div>
}
export default Ellipse
