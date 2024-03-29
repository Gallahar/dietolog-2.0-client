import s from './Slider.module.scss'
import { FC, ReactNode } from 'react'
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
			breakpoint: { max: 3000, min: 985 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 985, min: 735 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 735, min: 0 },
			items: 1,
		},
	}

	return (
		<Carousel
			keyBoardControl={true}
			beforeChange={() => setIsMoving(true)}
			afterChange={() => setIsMoving(false)}
			swipeable={true}
			removeArrowOnDeviceType={'mobile'}
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
