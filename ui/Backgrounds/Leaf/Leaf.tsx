import s from './Leaf.module.scss'
import leaf from '@/assets/images/leaf.png'
import Image from 'next/image'
import { FC } from 'react'

interface LeafProps {
	className?: string
	id?: string
}

const Leaf: FC<LeafProps> = ({ className, id }) => {
	return (
		<Image
			id={id}
			priority
			src={leaf}
			alt={'leaf-bg'}
			className={`${s.leaf} ${className}`}
		/>
	)
}
export default Leaf
