import { FC, InputHTMLAttributes } from 'react'
import { forwardRef, Ref } from 'react'
import s from './TextArea.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	error?: string
	ref?: Ref<HTMLTextAreaElement>
}

const TextArea: FC<InputProps> = forwardRef(
	({ className, error, ...rest }, ref) => {
		return (
			<div className={`${s.textArea} ${className}`}>
				<textarea ref={ref} {...rest} />
				{error && <p>{error}</p>}
			</div>
		)
	}
)
TextArea.displayName = 'TextArea'
export default TextArea
