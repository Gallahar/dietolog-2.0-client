import { ChangeEvent, FC, HtmlHTMLAttributes } from 'react'
import s from './RadioButton.module.scss'

interface RadioButtonProps {
	className?: string
	name: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	answer: string
}

const RadioButton: FC<RadioButtonProps> = ({
	className,
	name,
	value,
	answer,
	onChange,
}) => {
	return (
		<label className={`${s.label} ${className}`}>
			{answer}
			<input name={name} value={value} onChange={onChange} type="radio" />
			<span className={s.checkBox}>
				<span></span>
			</span>
		</label>
	)
}
export default RadioButton
