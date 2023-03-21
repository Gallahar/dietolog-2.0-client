import SliderArrowL from '@/assets/icons/SliderArrowL'
import SliderArrowR from '@/assets/icons/SliderArrowR'
import {
	FC,
	ReactNode,
	useRef,
	useState,
	MouseEvent as ReactMouseEvent,
	TouchEvent as ReactTouchEvent,
} from 'react'
import { useStateRef, getRefValue } from '@/hooks/useStateRef'
import { getTouchEventData } from '@/utils/getTouchEventData'
import s from './Slider.module.scss'

interface SliderProps {
	children: ReactNode
	dataLength: number
}

const Slider: FC<SliderProps> = ({ children, dataLength }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const containerWidthRef = useRef(0)
	const wrapperRef = useRef<HTMLDivElement>(null)
	const minOffsetX = useRef(0)
	const currentOffsetXRef = useRef(0)
	const startXRef = useRef(0)
	const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)
	const [slide, setSlide] = useState(0)
	const [sliding, setSliding] = useState(false)

	const onMouseDown = (
		e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>
	) => {
		setSliding(true)
		currentOffsetXRef.current = getRefValue(offsetXRef)
		startXRef.current = getTouchEventData(e).clientX

		const sliderWrapper = getRefValue(wrapperRef)
		const sliderContainer = getRefValue(containerRef)
		containerWidthRef.current = Math.floor(sliderContainer.offsetWidth / 3)
		minOffsetX.current =
			sliderContainer.clientWidth - 140 - sliderWrapper.scrollWidth

		window.addEventListener('mousemove', onMouseMove)
		window.addEventListener('mouseup', onMouseUp)
		window.addEventListener('touchmove', onMouseMove)
		window.addEventListener('touchend', onMouseUp)
	}

	const onMouseMove = (e: MouseEvent | TouchEvent) => {
		const currentX = getTouchEventData(e).clientX
		const diff = getRefValue(startXRef) - currentX
		let newOffsetX = getRefValue(currentOffsetXRef) - diff
		const maxOffset = 0
		const minOffset = getRefValue(minOffsetX)

		if (newOffsetX > maxOffset) {
			newOffsetX = 0
		}
		if (newOffsetX < minOffset) {
			newOffsetX = minOffset
		}

		setOffsetX(newOffsetX)
	}

	const onMouseUp = () => {
		const containerWidth = getRefValue(containerWidthRef)
		let newOffset = getRefValue(offsetXRef)
		console.log(newOffset, containerWidth)
		newOffset = Math.round(newOffset / containerWidth) * containerWidth

		setSliding(false)
		setOffsetX(newOffset)
		setSlide(Math.abs(newOffset / containerWidth))

		window.removeEventListener('mousemove', onMouseMove)
		window.removeEventListener('mouseup', onMouseUp)
		window.removeEventListener('touchmove', onMouseMove)
		window.removeEventListener('touchend', onMouseUp)
	}

	const handleNext = () => {
		if (slide < dataLength - 3) {
			setSlide((s) => s + 1)
			setOffsetX(offsetX - 470)
		}
	}
	const handlePrev = () => {
		if (slide > 0) {
			setSlide((s) => s - 1)
			setOffsetX(offsetX + 470)
		}
	}

	return (
		<section className={s.sliderWrapper}>
			<button onClick={handlePrev} className={s.arrowLeft}>
				<SliderArrowL />
			</button>
			<button onClick={handleNext} className={s.arrowRight}>
				<SliderArrowR />
			</button>
			<div
				ref={containerRef}
				className={s.sliderContainer}
				onMouseDown={onMouseDown}
				onTouchStart={onMouseDown}
			>
				<div
					ref={wrapperRef}
					style={{
						transform: `translate3d(${offsetX}px,0 , 0)`,
					}}
					className={`${s.slidesWrapper} ${
						sliding ? s.isSliding : ''
					}`}
				>
					{children}
				</div>
			</div>
		</section>
	)
}

export default Slider
