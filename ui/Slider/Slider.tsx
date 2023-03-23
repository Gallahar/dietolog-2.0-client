import s from './Slider.module.scss'
import { FC, ReactNode, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ButtonGroup from './ButtonGroup/ButtonGroup'

interface SliderProps {
	children: ReactNode
	slidesLength: number
	buttonsType: boolean
}

const Slider: FC<SliderProps> = ({ children, slidesLength, buttonsType }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [isMoving, setIsMoving] = useState(false)
	const responsive = {
		desktop: {
			breakpoint: { max: 1920, min: 1024 },
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
			beforeChange={(currentSlide) => setCurrentSlide(currentSlide)}
			swipeable={true}
			arrows={false}
			renderButtonGroupOutside={true}
			customButtonGroup={
				<ButtonGroup
					slidesLength={slidesLength}
					buttonsType={buttonsType}
					currentSlide={currentSlide}
				/>
			}
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
