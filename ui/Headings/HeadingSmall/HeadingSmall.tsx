import { FC } from "react"
import s from './HeadingSmall.module.scss'

interface HeadingSmallProps {
  className?: string;
  text: string;

}

const HeadingSmall: FC<HeadingSmallProps> = ({text,className}) => {
	return <h5 className={`${className} ${s.headingSmall}`}>{text}</h5>
}
export default HeadingSmall