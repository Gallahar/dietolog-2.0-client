import { IPackage } from '@/shared/models/package.interface'
import { FC } from 'react'
import s from './DetailedPrices.module.scss'
import PackageItem from '@/modules/DetailedPrices/PackageItem'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import Description from '@/ui/Descriptions/Description/Description'
import { useLanguage } from '@/hooks/useLanguage'
import ActionLink from '@/ui/Buttons/Actions/ActionLink/ActionLink'

interface DetailedPricesProps {
	packages: IPackage[]
}

const DetailedPrices: FC<DetailedPricesProps> = ({ packages }) => {
	const { global, detailed_prices } = useLanguage()
	const { _return } = global
	const { remark } = detailed_prices

	return (
		<div className={s.detailedPrices}>
			<div className={`container`}>
				<Leaf className={s.leaf_1} />
				<Leaf className={s.leaf_2} />
				<Leaf className={s.leaf_3} />
				<Leaf className={s.leaf_4} />
				<Ellipse className={s.ellipse_1} />
				<Ellipse className={s.ellipse_2} />
				<Ellipse className={s.ellipse_3} />
				<Ellipse className={s.ellipse_4} />
				<Ellipse className={s.ellipse_5} />
				{packages.map((_package, index) => (
					<PackageItem
						key={_package._id}
						isOdd={index % 2 !== 0}
						_package={_package}
					/>
				))}
				<Description className={s.remark} text={`* ${remark}`} />
				<ActionLink locationClass={s.link} text={_return} path="/" />
			</div>
		</div>
	)
}
export default DetailedPrices
