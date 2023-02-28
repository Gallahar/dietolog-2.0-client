import { IPackage } from '@/shared/models/package.interface'
import { currentLanguage } from '@/utils/language'
import s from './DetailedPrices.module.scss'
import { FC } from 'react'
import HeadingSmall from '@/ui/Headings/HeadingSmall/HeadingSmall'
import Heading from '@/ui/Headings/Heading/Heading'
import { useLanguage } from '@/hooks/useLanguage'
import Description from '@/ui/Descriptions/Description/Description'

interface PackageItemProps {
	isOdd: boolean
	_package: IPackage
}

const PackageItem: FC<PackageItemProps> = ({ isOdd, _package }) => {
	const { package: packageTitle, service_type } =
		useLanguage().detailed_prices

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
			<div
				className={`${s.wrapperDescription} ${
					isOdd ? s.wrapperEven : ''
				}`}
			>
				<div className={s.description}>
					<Heading
						text={`${
							title.en.startsWith('Re-') ? packageTitle : ''
						} ${currentLanguage(title)}`}
					/>
					<Description text={currentLanguage(description)} />
				</div>
			</div>

			<div className={s.table}>
				<div className={s.heading}>
					<HeadingSmall text={service_type} />
					<div>
						<HeadingSmall text={currentLanguage(heading_1)} />
						{currentLanguage(sub_heading_1) !== '-' ? (
							<HeadingSmall
								text={currentLanguage(sub_heading_1)}
							/>
						) : null}
					</div>
					<div>
						<HeadingSmall text={currentLanguage(heading_2)} />
						{currentLanguage(sub_heading_2) !== '-' ? (
							<HeadingSmall
								text={currentLanguage(sub_heading_2)}
							/>
						) : null}
					</div>
				</div>
				{services.map(({ title, price_1, price_2 }, index) => {
					return (
						<div
							key={title.ru}
							className={`${s.row} ${
								index % 2 !== 0 ? s.filled : ''
							}`}
						>
							<Description text={currentLanguage(title)} />
							<p className="price">{price_1} ₴</p>
							<p className="price">{price_2} ₴</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default PackageItem
