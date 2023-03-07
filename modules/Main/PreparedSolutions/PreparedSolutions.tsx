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

const PreparedSolutions = () => {
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
			<div className={`container ${s.programCheckListWrapper}`}>
				<Heading text={programs_and_checks} />
				<div className={s.sliderWrapper}></div>
				<ActionLink path="openPopup" text={help_to_pick} />
			</div>
		</section>
	)
}
export default PreparedSolutions
