import SliderArrowL from '@/assets/icons/SliderArrowL'
import SliderArrowR from '@/assets/icons/SliderArrowR'
import { FC, ReactNode, useState, MouseEvent } from 'react'
import s from './Slider.module.scss'

interface SliderProps {
	children: ReactNode
	setNext: () => void
	setPrev: () => void
}

const Slider: FC<SliderProps> = ({ children, setPrev, setNext }) => {
	const [clickPosition, setClickPosition] = useState<null | number>(null)
	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		const mouseDown = e.clientX
		setClickPosition(mouseDown)
	}

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault()
		const mouseDown = clickPosition
		if (mouseDown === null) {
			return
		}
		const currentDirection = e.clientX
		const diff = mouseDown - currentDirection

		if (diff > 0) {
			setNext()
		}

		if (diff < 0) {
			setPrev()
		}

		setClickPosition(null)
	}

	return (
		<section className={s.sliderWrapper}>
			<button onClick={setPrev} className={s.arrowLeft}>
				<SliderArrowL />
			</button>
			<button onClick={setNext} className={s.arrowRight}>
				<SliderArrowR />
			</button>
			<div className={s.sliderContainer}>
				<div
					onMouseMove={handleMouseMove}
					onMouseDown={handleMouseDown}
					className={s.slidesWrapper}
				>
					{children}
				</div>
			</div>
		</section>
	)
}

export default Slider
