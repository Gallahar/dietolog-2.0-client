import { IPackage } from '@/shared/models/package.interface'
import { currentLanguage } from '@/utils/currentLanguage'
import s from './DetailedPrices.module.scss'
import { FC, useEffect, useState } from 'react'
import HeadingSmall from '@/ui/Headings/HeadingSmall/HeadingSmall'
import Heading from '@/ui/Headings/Heading/Heading'
import { useLanguageContext } from '@/hooks/useLanguageContext'
import Description from '@/ui/Descriptions/Description/Description'

interface PackageItemProps {
	_package: IPackage
}

const PackageItem: FC<PackageItemProps> = ({ _package }) => {
	const [mobile, setMobile] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 729 && !mobile) {
				setMobile(true)
			}
			if (window.innerWidth >= 729 && mobile) {
				setMobile(false)
			}
		}
		if (window.innerWidth <= 729 && !mobile) {
			setMobile(true)
		}
		if (window.innerWidth >= 729 && mobile) {
			setMobile(false)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [mobile])

	const mark = useLanguageContext().mark
	const { package: packageTitle, service_type } =
		useLanguageContext().detailed_prices

	const {
		title,
		description,
		heading_1,
		heading_2,
		services,
		sub_heading_1,
		sub_heading_2,
	} = _package
	return (
		<div className={s.packageBlock}>
			<div className={s.wrapperDescription}>
				<div className={s.description}>
					<Heading
						text={`${
							title.ru !== 'Повторные консультации *'
								? packageTitle
								: ''
						}${currentLanguage(title, mark)}`}
					/>
					<Description text={currentLanguage(description, mark)} />
				</div>
			</div>

			<div className={s.table}>
				<div className={s.heading}>
					<HeadingSmall text={service_type} />
					<div className={s.h1}>
						<HeadingSmall text={currentLanguage(heading_1, mark)} />
						{currentLanguage(sub_heading_1, mark) !== '-' ? (
							<HeadingSmall
								text={currentLanguage(sub_heading_1, mark)}
							/>
						) : null}
					</div>
					<div className={s.h2}>
						<HeadingSmall text={currentLanguage(heading_2, mark)} />
						{currentLanguage(sub_heading_2, mark) !== '-' ? (
							<HeadingSmall
								text={currentLanguage(sub_heading_2, mark)}
							/>
						) : null}
					</div>
				</div>
				<div className={s.rowWrapper}>
					{services.map(({ title, price_1, price_2 }) => {
						return (
							<div key={title.ru} className={s.row}>
								<Description
									text={currentLanguage(title, mark)}
								/>
								<p className={`price ${s.price1}`}>
									{price_1} ₴
								</p>
								<p className={`price ${s.price2}`}>
									{price_2} ₴
								</p>
							</div>
						)
					})}
				</div>
			</div>
			{mobile && (
				<div className={s.table}>
					<div className={s.heading}>
						<HeadingSmall text={service_type} />
						<div className={s.h1}>
							<HeadingSmall
								text={currentLanguage(heading_2, mark)}
							/>
							{currentLanguage(sub_heading_2, mark) !== '-' ? (
								<HeadingSmall
									text={currentLanguage(sub_heading_2, mark)}
								/>
							) : null}
						</div>
						<div className={s.h2}>
							<HeadingSmall
								text={currentLanguage(heading_1, mark)}
							/>
							{currentLanguage(sub_heading_1, mark) !== '-' ? (
								<HeadingSmall
									text={currentLanguage(sub_heading_1, mark)}
								/>
							) : null}
						</div>
					</div>
					<div className={s.rowWrapper}>
						{services.map(({ title, price_1, price_2 }) => {
							return (
								<div key={title.ru} className={s.row}>
									<Description
										text={currentLanguage(title, mark)}
									/>
									<p className={`price ${s.price1}`}>
										{price_2} ₴
									</p>
									<p className={`price ${s.price2}`}>
										{price_1} ₴
									</p>
								</div>
							)
						})}
					</div>
				</div>
			)}
		</div>
	)
}
export default PackageItem
