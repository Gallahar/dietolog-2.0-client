import { useLanguageContext } from '@/hooks/useLanguageContext'
import Description from '@/ui/Descriptions/Description/Description'
import Heading from '@/ui/Headings/Heading/Heading'
import Image from 'next/image'
import preparedImg from '@/assets/prepared_solutions/prepared-solutions-img.png'
import constructorImg from '@/assets/prepared_solutions/constructor-img.png'
import parse from 'html-react-parser'
import s from './PreparedSolutions.module.scss'
import cn from 'classnames'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Slider from '@/ui/Slider/Slider'
import CardProgram from '@/ui/Slider/CardProgram/CardProgram'
import { IProgram } from '@/shared/models/program.interface'
import { FC, Fragment, useState } from 'react'
import PopUp from '@/ui/PopUp/PopUp'
import HelpToPickForm from '@/components/client/HelpToPickForm/HelpToPickForm'
import ClosePopupButton from '@/ui/Buttons/Actions/ClosePopupButton/ClosePopupButton'
import ClosePopupButtonFilled from '@/ui/Buttons/Actions/ClosePopupButtonFilled/ClosePopupButtonFilled'
import Section from '@/ui/Backgrounds/Section/Section'

interface PreparedSolutionsProps {
	programs: IProgram[]
}

const PreparedSolutions: FC<PreparedSolutionsProps> = ({ programs }) => {
	const [openPopup, setOpenPopup] = useState(false)
	const [alertToggle, setAlertToggle] = useState(false)
	const [alertText, setAlertText] = useState('')
	const [isMoving, setIsMoving] = useState(false)

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
	} = useLanguageContext().prepared_solutions

	const constructorData = [
		constructor_1,
		constructor_2,
		constructor_3,
		constructor_4,
		constructor_5,
	]

	return (
		<Section id="turnkey_solutions" className={s.preparedSolutionsWrapper}>
			<Leaf className={s.leaf_1} />
			<Leaf className={s.leaf_2} />
			<div className="container">
				<div className={cn('section', s.readyMadeWrapper)}>
					<Heading text={prepared_solutions} />
					<div className={s.descriptionWrapper}>
						<div className={s.descLeft}>
							<Description text={parse(col_1_part_1)} />
							<br />
							<Description text={col_1_part_2} />
						</div>
						<div className={s.descRight}>
							<Description text={parse(col_2_part_1)} />
							<br />
							<Description text={parse(col_2_part_2)} />
						</div>
					</div>
				</div>
				<div className={cn('section', s.constructorMenuWrapper)}>
					<div className={s.constructorImageWrapper}>
						<Image fill src={preparedImg} alt="preparedImg" />
						<div className={s.outline} />
					</div>
					<div className={s.constructorTextWrapper}>
						<Heading text={constructor_heading} />
						<div className={s.constructorDescriptionWrapper}>
							{constructorData.map((block, index) => (
								<Fragment key={block}>
									<Description
										text={
											index === 2 || index === 3
												? parse(block)
												: block
										}
									/>
									{index !== constructorData.length - 1 && (
										<br />
									)}
								</Fragment>
							))}
						</div>
					</div>
				</div>
				<div className={s.constructorBottomImgWrapper}>
					<Image src={constructorImg} fill alt="constructor-img" />
					<div className={s.outlineMobile} />
				</div>
				<div className={cn('section', s.constructorBottomWrapper)}>
					<div className={s.leftBlock}>
						<Description text={parse(constructor_col_1_part_1)} />
						<br />
						<Description text={constructor_col_1_part_2} />
						<br />
						<Description text={constructor_col_1_part_3} />
					</div>
					<div id="programs" className={s.rightBlock}>
						<Description text={constructor_col_2_part_1} />
						<br />
						<Description text={constructor_col_2_part_2} />
						<br />
						<Description text={constructor_col_2_part_3} />
					</div>
				</div>
				<Heading
					className={s.sliderHeading}
					text={programs_and_checks}
				/>
			</div>
			<div className={s.sliderWrapper}>
				<Slider setIsMoving={setIsMoving} buttonsType={false}>
					{[...programs, ...programs, ...programs, ...programs].map(
						(program) => (
							<CardProgram
								isMoving={isMoving}
								program={program}
								key={program._id}
							/>
						)
					)}
				</Slider>
			</div>
			<div className={`container ${s.actionButton}`}>
				<button onClick={() => setOpenPopup(true)}>
					{help_to_pick}
				</button>
			</div>
			{openPopup && (
				<PopUp
					className={s.popup}
					closePopup={() => setOpenPopup(false)}
				>
					<ClosePopupButton closePopup={() => setOpenPopup(false)} />
					<HelpToPickForm
						alertHandler={alertHandler}
						setOpenPopup={() => setOpenPopup(false)}
					/>
				</PopUp>
			)}
			{alertToggle && (
				<PopUp closePopup={() => setAlertToggle(false)}>
					<ClosePopupButtonFilled
						closePopup={() => setAlertToggle(false)}
					/>
					<p>{alertText}</p>
				</PopUp>
			)}
		</Section>
	)
}
export default PreparedSolutions
