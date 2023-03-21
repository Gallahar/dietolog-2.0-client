import { useLanguage } from '@/hooks/useLanguage'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import Image from 'next/image'
import preparedImg from '@/assets/prepared_solutions/prepared-solutions-img.png'
import parse from 'html-react-parser'
import s from './PreparedSolutions.module.scss'
import cn from 'classnames'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Slider from '@/ui/Slider/Slider'
import CardProgram from '@/ui/Slider/CardProgram/CardProgram'
import { IProgram } from '@/shared/models/program.interface'
import { FC, useState } from 'react'
import DiplomaCard from '@/ui/Slider/DiplomaCard/DiplomaCard'
import ReviewCard from '@/ui/Slider/ReviewCard/ReviewCard'
import ConsultCard from '@/ui/Slider/ConsultCard/ConsultCard'
import PopUp from '@/ui/PopUp/PopUp'
import HelpToPickForm from '@/components/client/HelpToPickForm/HelpToPickForm'
import ClosePopupButton from '@/ui/Buttons/Actions/ClosePopupButton/ClosePopupButton'
import ClosePopupButtonFilled from '@/ui/Buttons/Actions/ClosePopupButtonFilled/ClosePopupButtonFilled'
import ActionButton from '@/ui/Buttons/Actions/ActionButton/ActionButton'

interface PreparedSolutionsProps {
	programs: IProgram[]
}

const PreparedSolutions: FC<PreparedSolutionsProps> = ({ programs }) => {
	const [openPopup, setOpenPopup] = useState(false)
	const [alertToggle, setAlertToggle] = useState(false)
	const [alertText, setAlertText] = useState('')

	const alertHandler = (t: string) => {
		setAlertText(t)
		setAlertToggle(true)
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
			<Slider dataLength={10}>
				{Array.from({ length: 10 }, (_, i) => (
					<CardProgram key={i} />
					// <DiplomaCard />
					// <ReviewCard />
					// <ConsultCard />
				))}
			</Slider>
			<div className="container">
				<ActionButton
					onClick={() => setOpenPopup(true)}
					className={s.actionButton}
					text={help_to_pick}
				/>
			</div>
			{openPopup && (
				<PopUp className={s.popup} closePopup={setOpenPopup}>
					<ClosePopupButton closePopup={setOpenPopup} />
					<HelpToPickForm
						alertHandler={alertHandler}
						setOpenPopup={setOpenPopup}
					/>
				</PopUp>
			)}
			{alertToggle && (
				<PopUp closePopup={setAlertToggle}>
					<ClosePopupButtonFilled closePopup={setAlertToggle} />
					<Description text={alertText} />
				</PopUp>
			)}
		</section>
	)
}
export default PreparedSolutions
