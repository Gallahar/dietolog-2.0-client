import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import dayjs from 'dayjs'
import { FC } from 'react'
import {
	Control,
	useFieldArray,
	UseFieldArrayRemove,
	UseFormRegister,
} from 'react-hook-form'
import LanguagedField from '../../../../components/admin/LanguagedField/LanguagedField'

import s from './EditProgram.module.scss'
import EditProgramOptionItem from './EditProgramOptionItem'

interface AdminEditRadioItemProps {
	index: string
	removeHandler: UseFieldArrayRemove
	register: UseFormRegister<any>
	control: Control<any, any>
	errors: any
}

const AdminEditRadioItem: FC<AdminEditRadioItemProps> = ({
	index,
	removeHandler,
	register,
	errors,
	control,
}) => {
	const {
		append: appendOption,
		remove: removeOption,
		fields: options,
	} = useFieldArray({
		control,
		name: `radios[${index}].options`,
	})

	const addOptionHandler = () => {
		appendOption({
			answer: {
				ru: '',
				ua: '',
				en: '',
			},
			answer_short: {
				ru: '',
				ua: '',
				en: '',
			},
		})
	}

	return (
		<div className={s.radio}>
			<LanguagedField
				register={register}
				field={`radios.${index}.title`}
				errors={errors}
				placeholder={`Вопрос ${parseInt(index) + 1}`}
			/>
			<LanguagedField
				register={register}
				field={`radios.${index}.title_short`}
				errors={errors}
				placeholder={`Вопрос ${parseInt(index) + 1} сокр.`}
			/>
			<AdminButton
				style={{
					margin: '30px 0',
				}}
				text="Добавить ответ"
				onClick={addOptionHandler}
			/>
			<div className={s.included} style={{ marginBottom: '20px' }}>
				{options.map((o, i) => {
					return (
						<EditProgramOptionItem
							removeHandler={removeOption}
							radioIndex={index}
							index={String(i)}
							errors={errors}
							register={register}
							key={i * 2}
						/>
					)
				})}
			</div>
			<AdminButton
				text="Удалить вопрос"
				onClick={() => removeHandler(parseInt(index))}
			/>
		</div>
	)
}
export default AdminEditRadioItem
