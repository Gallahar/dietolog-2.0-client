import { useLanguageContext } from '@/hooks/useLanguageContext'
import { currentLanguage } from '@/utils/currentLanguage'
import { ILanguagedString } from 'languages/template'
import { ChangeEvent, FC } from 'react'
import s from './RadioButton.module.scss'

interface RadioButtonProps {
	className?: string
	name: string
	value: ILanguagedString
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	answer: ILanguagedString
}

const RadioButton: FC<RadioButtonProps> = ({
	className,
	name,
	value,
	answer,
	onChange,
}) => {
	const mark = useLanguageContext().mark
	const answerLong = currentLanguage(answer, mark)
	const answerShort = currentLanguage(value, mark)
	return (
		<label className={`${s.label} ${className}`}>
			{answerLong}
			<input
				name={name}
				value={answerShort}
				onChange={onChange}
				type="radio"
			/>
			<span className={s.checkBox}>
				<span></span>
			</span>
		</label>
	)
}
export default RadioButton
