import s from './Leaf.module.scss'
import leaf from '@/assets/images/leaf.png'
import Image from 'next/image'
import { FC } from 'react';


interface LeafProps {
    className?:string;
}

const Leaf: FC<LeafProps> = ({className}) => {
	return <Image src={leaf} alt={'leaf-bg'} className={`${s.leaf} ${className}`} />
}
export default Leaf