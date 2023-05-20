import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { useEditProgram } from './useEditProgram'
import s from './EditProgram.module.scss'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import LanguagedField from '@/components/admin/LanguagedField/LanguagedField'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import UploadField from '@/ui/Fields/UploadField/UploadField'
import { IEditProgram } from '@/shared/models/program.interface'
import AdminField from '@/ui/Fields/AdminField/AdminField'
import SlugField from '@/ui/Fields/SlugField/SlugField'
import { generateSlug } from '@/utils/string'
import LanguagedTextEditor from '@/components/admin/LanguagedTextEditor/LanguagedTextEditor'
import AdminEditRadioItem from './EditProgramRadioItem'
import EditProgramIncludedItem from './EditProgramIncludedItem'

const EditProgram: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
		getValues,
	} = useForm<IEditProgram>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useEditProgram(setValue)

	const {
		append: appendIncluded,
		remove: removeIncluded,
		fields: included,
	} = useFieldArray({
		control,
		name: 'included',
	})

	const {
		append: appendRadio,
		remove: removeRadio,
		fields: radios,
	} = useFieldArray({
		control,
		name: 'radios',
	})

	const addIncludedHandler = () => {
		appendIncluded({
			ru: '',
			ua: '',
			en: '',
		})
	}

	const addRadioHandler = () => {
		appendRadio({
			options: [],
			title: {
				ru: '',
				ua: '',
				en: '',
			},
			title_short: {
				ru: '',
				ua: '',
				en: '',
			},
		})
	}

	return (
		<Meta title="Program edit">
			<AdminNavbar />
			<AdminHeading text="Обновление программы" />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? null : (
					<>
						<div className={s.fields}>
							<div className={s.availableFieldWrapper}>
								<label>
									Программа активна?
									<input
										{...register('isAvailable')}
										type="checkbox"
									/>
								</label>
							</div>
							<LanguagedField
								register={register}
								field="title"
								errors={errors}
								placeholder="Название"
							/>
							<div className={s.heading}>
								Описание (ru, ua, en)
							</div>
							<LanguagedTextEditor
								control={control}
								name="description"
							/>
							<div className={s.heading}>
								Краткое описание (ru, ua, en)
							</div>
							<LanguagedTextEditor
								control={control}
								name="description_short"
							/>
							<div style={{ width: '30%' }}>
								<SlugField
									register={register}
									generate={() => {
										setValue(
											'slug',
											generateSlug(getValues('title.en'))
										)
									}}
									error={errors.slug}
								/>
							</div>
							<AdminField
								style={{
									width: '30%',
									marginTop: '10px',
								}}
								{...register('price', {
									required: `Это поле обязательно`,
								})}
								placeholder="Цена"
								error={errors.price}
							/>
						</div>
						<div className={s.file_wrapper}>
							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="programs"
										placeholder="Фото программы"
									/>
								)}
								rules={{
									required: 'Фото обязательно',
								}}
							/>
							<Controller
								control={control}
								name="photo_small"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="programs"
										placeholder="Превью программы"
									/>
								)}
								rules={{
									required: 'Фото обязательно',
								}}
							/>
						</div>
						<AdminHeading text="Опции" />
						<AdminButton
							style={{
								margin: '30px 0',
							}}
							text="Добавить опцию"
							onClick={addIncludedHandler}
						/>
						<div className={s.included}>
							{included.map((i, index) => {
								return (
									<EditProgramIncludedItem
										removeHandler={removeIncluded}
										index={String(index)}
										errors={errors}
										register={register}
										key={i.en + index}
									/>
								)
							})}
						</div>
						<AdminHeading text="Вопросы" />
						<AdminButton
							style={{
								margin: '30px 0',
							}}
							text="Добавить вопрос"
							onClick={addRadioHandler}
						/>
						<div className={s.included}>
							{radios.map((r, index) => {
								return (
									<AdminEditRadioItem
										control={control}
										removeHandler={removeRadio}
										index={String(index)}
										errors={errors}
										register={register}
										key={r.title.en + index}
									/>
								)
							})}
						</div>
						<AdminButton
							style={{
								marginTop: '50px',
								fontSize: '20px',
							}}
							text="Обновить"
							isSubmit
						/>
					</>
				)}
			</form>
		</Meta>
	)
}

export default EditProgram
