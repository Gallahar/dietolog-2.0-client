import s from './Program.module.scss'
import RadioButton from '@/ui/Fields/Inputs/RadioButton/RadioButton'
import { useLanguageContext } from '@/hooks/useLanguageContext'
import Heading from '@/ui/Headings/Heading/Heading'
import parse from 'html-react-parser'
import { IProgram } from '@/shared/models/program.interface'
import { FC, useContext, useEffect, useState } from 'react'
import { currentLanguage } from '@/utils/currentLanguage'
import { LanguageContext } from 'providers/LanguageProvider/LanguageProvider'
import ActionCircleButton from '@/ui/Buttons/Actions/ActionCircleButton/ActionCircleButton'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'
import Image from 'next/image'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import PopUp from '@/ui/PopUp/PopUp'
import ClosePopupButton from '@/ui/Buttons/Actions/ClosePopupButton/ClosePopupButton'
import ClosePopupButtonFilled from '@/ui/Buttons/Actions/ClosePopupButtonFilled/ClosePopupButtonFilled'
import Description from '@/ui/Descriptions/Description/Description'
import OrderProgramForm from '@/components/client/OrderProgramForm/OrderProgramForm'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Link from 'next/link'

const checkAnswers = (arr: (string | null)[]) => {
	return arr.every((a) => a !== null)
}

interface ProgramProps {
	program: IProgram
}

const Program: FC<ProgramProps> = ({ program }) => {
	const {
		_program,
		included_to_program,
		choose_radios,
		back_to_programs,
		fields_required,
	} = useLanguageContext().program
	const mark = useLanguageContext().mark
	const { apply } = useLanguageContext().global
	const { language } = useContext(LanguageContext)
	const { title, price, description, included, radios, photo } = program
	const [key, setKey] = useState(0)
	const [answers, setAnswers] = useState<(string | null)[]>(
		radios.map(() => null)
	)

	const [proceed, setProceed] = useState(false)

	const [openPopup, setOpenPopup] = useState(false)
	const [alertToggle, setAlertToggle] = useState(false)
	const [alertText, setAlertText] = useState('')


	const closePopUpHandler = () => {
		setProceed(false)
		setOpenPopup(false)
	}

	const alertHandler = (alert: string) => {
		setAlertText(alert)
		setAlertToggle(true)
	}
	const updateAnswersHandler = (idx: number, value: string) => {
		setAnswers((prev) => prev.map((a, i) => (i === idx ? value : a)))
	}

	useEffect(() => {
		setAnswers(answers.map(() => null))
		setKey((prev) => prev + 1)
	}, [language])

	const allChosen = checkAnswers(answers)

	return (
		<section className={`${s.programWrapper} `}>
			<div className={s.background}>
				<Image
					alt={`program-${currentLanguage(title, mark)}`}
					fill
					src={photo}
				/>
			</div>
			<Ellipse className={s.ellipse_1} />
			<Leaf className={s.leaf_1} />
			<div className={s.contentWrapper}>
				<Heading text={`${_program} ${currentLanguage(title, mark)}`} />
				<p className={s.price}>{`${price} ₴`}</p>
				<div className={s.description_list_Wrapper}>
					<div className={s.description}>
						{parse(currentLanguage(description, mark))}
					</div>
					<br />
					<p>{`${included_to_program} :`}</p>
					<br />
					<ul className={s.includedList}>
						{included.map((o) => (
							<li key={o.en}>{currentLanguage(o, mark)}</li>
						))}
					</ul>
					<br />
					<p>{choose_radios}</p>
				</div>
				<div key={key} className={s.radiosSection}>
					{radios.map((radio, i) => {
						const { title, options } = radio
						return (
							<div key={title.en} className={s.radiosBlock}>
								<p>{currentLanguage(title, mark)}</p>
								<div className={s.answersWrapper}>
									{options.map(({ answer, answer_short }) => {
										return (
											<RadioButton
												onChange={(e) => {
													updateAnswersHandler(
														i,
														e.target.value
													)
												}}
												key={answer.en}
												name={title.en + i}
												answer={answer}
												value={answer_short}
												className={
													answer.ua.length > 15 &&
													options.length >= 3
														? s.answerLong
														: ''
												}
											/>
										)
									})}
								</div>
							</div>
						)
					})}
				</div>
				<ActionCircleButton
					onClick={() => {
						allChosen
							? setOpenPopup(true)
							: alertHandler(fields_required)
					}}
					className={s.submitButton}
					text={apply}
				/>
				<Link className={s.link} href="/#programs">
					<button>{back_to_programs}</button>
				</Link>
			</div>
			{openPopup && (
				<PopUp className={s.popup} closePopup={closePopUpHandler}>
					<ClosePopupButton
						className={proceed ? s.mobileStep1 : ''}
						closePopup={closePopUpHandler}
					/>
					<OrderProgramForm
						proceed={proceed}
						setProceed={() => setProceed(true)}
						program={program}
						answers={answers as string[]}
						setOpenPopup={closePopUpHandler}
						alertHandler={alertHandler}
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
		</section>
	)
}
export default Program
