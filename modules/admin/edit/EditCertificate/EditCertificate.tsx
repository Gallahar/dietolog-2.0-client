import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useEditCertificate } from './useEditCertificates'
import s from './EditCertificate.module.scss'
import AdminButton from '@/ui/Buttons/AdminButton/AdminButton'
import LanguagedField from '@/components/admin/LanguagedField/LanguagedField'
import AdminHeading from '@/ui/Headings/AdminHeading/AdminHeading'
import UploadField from '@/ui/Fields/UploadField/UploadField'
import { IEditCertificate } from '@/shared/models/certificate.interface'

const EditCertificate: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<IEditCertificate>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useEditCertificate(setValue)

	return (
		<Meta title="Certificate edit">
			<AdminNavbar />
			<AdminHeading text="Обновление сертификата" />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? null : (
					<>
						<div className={s.fields}>
							<LanguagedField
								register={register}
								field="title"
								errors={errors}
								placeholder="Название"
							/>
							<div className={s.file_wrapper}>
								<Controller
									control={control}
									name="link"
									defaultValue=""
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
										<UploadField
											onChange={onChange}
											value={value}
											error={error}
											folder="certificates"
											placeholder="Фото сертификата"
										/>
									)}
									rules={{
										required: 'Фото обязательно',
									}}
								/>
								<Controller
									control={control}
									name="preview"
									defaultValue=""
									render={({
										field: { value, onChange },
										fieldState: { error },
									}) => (
										<UploadField
											onChange={onChange}
											value={value}
											error={error}
											folder="certificates"
											placeholder="Превью сертификата"
										/>
									)}
									rules={{
										required: 'Превью обязательно',
									}}
								/>
							</div>
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

export default EditCertificate
