import s from './ButtonGroup.module.scss'
import { ButtonGroupProps as ButtonsType } from 'react-multi-carousel/lib/types'
import { FC } from 'react'
import SliderArrowL from '@/assets/icons/SliderArrowL'
import SliderArrowR from '@/assets/icons/SliderArrowR'

interface ButtonGroupProps extends ButtonsType {
	buttonsType: boolean
	currentSlide: number
	slidesLength: number
}

const ButtonGroup: FC<ButtonGroupProps> = ({
	slidesLength,
	currentSlide,
	buttonsType,
	next,
	previous,
	...rest
}) => {
	const { carouselState } = rest

	if (!next || !previous || !carouselState) {
		return null
	}
    const {} = carouselState

	return (
		<div className={buttonsType ? s.buttonsNarrow : s.buttonsDefault}>
			<button
				disabled={currentSlide === 0}
				className={s.arrowLeft}
				onClick={() => previous()}
			>
				<SliderArrowL />
			</button>

			<button
				disabled={currentSlide === slidesLength - 3}
				className={s.arrowRight}
				onClick={() => next()}
			>
				<SliderArrowR />
			</button>
		</div>
	)
}
export default ButtonGroup
