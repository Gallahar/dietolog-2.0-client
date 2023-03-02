import { FC, InputHTMLAttributes } from 'react'
import { forwardRef, Ref } from 'react'
import s from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	error?: string
	ref?: Ref<HTMLInputElement>
}

const Input: FC<InputProps> = forwardRef(({ className,error, ...rest }, ref) => {
	return (
		<div className={`${s.input} ${className}`}>
			<input ref={ref} {...rest} />
			{error&& <p>{error}</p>}
		</div>
	)
})
export default Input
