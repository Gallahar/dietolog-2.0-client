import s from './Slider.module.scss'
import { FC, ReactNode, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ButtonGroup from './ButtonGroup/ButtonGroup'

interface SliderProps {
	children: ReactNode
	buttonsType: boolean
	setIsMoving: (v: boolean) => void
}

const Slider: FC<SliderProps> = ({ children, buttonsType, setIsMoving }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	return (
		<Carousel
			keyBoardControl={true}
			beforeChange={() => setIsMoving(true)}
			afterChange={() => setIsMoving(false)}
			swipeable={true}
			arrows={false}
			renderButtonGroupOutside={true}
			customButtonGroup={<ButtonGroup buttonsType={buttonsType} />}
			draggable={true}
			containerClass={s.slider}
			responsive={responsive}
			customTransition="all .3s ease-in-out"
			ssr={true}
			transitionDuration={300}
		>
			{children}
		</Carousel>
	)
}

export default Slider
