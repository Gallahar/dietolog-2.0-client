import { useLanguage } from '@/hooks/useLanguage'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import Image from 'next/image'
import preparedImg from '@/assets/prepared_solutions/prepared-solutions-img.png'
import parse from 'html-react-parser'
import s from './PreparedSolutions.module.scss'
import cn from 'classnames'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Slider from '@/ui/Slider/Slider'
import CardProgram from '@/ui/Slider/CardProgram/CardProgram'
import { IProgram } from '@/shared/models/program.interface'
import { FC, useState } from 'react'
import DiplomaCard from '@/ui/Slider/DiplomaCard/DiplomCard'
import ReviewCard from '@/ui/Slider/ReviewCard/ReviewCard'
import ConsultCard from '@/ui/Slider/ConsultCard/ConsultCard'

interface PreparedSolutionsProps {
	programs: IProgram[]
}

const PreparedSolutions: FC<PreparedSolutionsProps> = ({ programs }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentWidthX, setCurrentWidthX] = useState(0)

	const handleNext = () => {
		if (currentIndex < 10 - 3) {
			setCurrentIndex(currentIndex + 1)
			setCurrentWidthX((prev) => prev - 475)
		}
	}
	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1)
			setCurrentWidthX((prev) => prev + 475)
		}
	}

	const {
		prepared_solutions,
		col_1_part_1,
		col_1_part_2,
		col_2_part_1,
		col_2_part_2,
		constructor_heading,
		constructor_1,
		constructor_2,
		constructor_3,
		constructor_4,
		constructor_5,
		constructor_col_1_part_1,
		constructor_col_1_part_2,
		constructor_col_1_part_3,
		constructor_col_2_part_1,
		constructor_col_2_part_2,
		constructor_col_2_part_3,
		programs_and_checks,
		help_to_pick,
	} = useLanguage().prepared_solutions

	const constructorData = [
		constructor_1,
		constructor_2,
		constructor_3,
		constructor_4,
		constructor_5,
	]

	return (
		<section
			id="turnkey_solutions"
			className={`section ${s.preparedSolutionsWrapper}`}
		>
			<Leaf className={s.leaf_1} />
			<Leaf className={s.leaf_2} />
			<div className={cn('section', 'container', s.readyMadeWrapper)}>
				<Heading text={prepared_solutions} />
				<div className={s.descriptionWrapper}>
					<div className={s.descLeft}>
						<Description
							className="bold_description"
							text={parse(col_1_part_1)}
						/>
						<Description text={col_1_part_2} />
					</div>
					<div className={s.descRight}>
						<Description
							className="bold_description"
							text={parse(col_2_part_1)}
						/>
						<Description
							className="bold_description"
							text={parse(col_2_part_2)}
						/>
					</div>
				</div>
			</div>
			<div className={`section ${s.constructorMenuWrapper}`}>
				<div className={s.constructorImageWrapper}>
					<Image src={preparedImg} alt="preparedImg" />
					<div className={s.outline} />
				</div>
				<div className={s.constructorTextWrapper}>
					<Heading text={constructor_heading} />
					<div className={s.constructorDescriptionWrapper}>
						{constructorData.map((block, index) => (
							<Description
								className="bold_description"
								key={block}
								text={index === 2 || 3 ? parse(block) : block}
							/>
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'section',
					'container',
					s.constructorBottomWrapper
				)}
			>
				<div className={s.leftBlock}>
					<Description
						className="bold_description"
						text={parse(constructor_col_1_part_1)}
					/>
					<Description text={constructor_col_1_part_2} />
					<Description text={constructor_col_1_part_3} />
				</div>
				<div className={s.rightBlock}>
					<Description text={constructor_col_2_part_1} />
					<Description text={constructor_col_2_part_2} />
					<Description text={constructor_col_2_part_3} />
				</div>
			</div>
			<div className="container">
				<Heading text={programs_and_checks} />
			</div>
			<Slider setNext={handleNext} setPrev={handlePrev}>
				{Array.from({ length: 10 }, (_, i) => (
					<CardProgram key={i} currentWidthX={currentWidthX} />
					// <DiplomaCard />
					// <ReviewCard />
					// <ConsultCard />
				))}
			</Slider>
			<div className="container">
				<ActionLink
					className={s.actionLink}
					path="openPopup"
					text={help_to_pick}
				/>
			</div>
		</section>
	)
}
export default PreparedSolutions
