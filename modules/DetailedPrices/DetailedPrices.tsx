import { IPackage } from '@/shared/models/package.interface'
import { FC } from 'react'
import s from './DetailedPrices.module.scss'
import PackageItem from '@/modules/DetailedPrices/PackageItem'
import Leaf from '@/ui/Backgrounds/Leaf/Leaf'
import Ellipse from '@/ui/Backgrounds/Ellipse/Ellipse'
import Description from '@/ui/Descriptions/Description/Description'
import { useLanguageContext } from '@/hooks/useLanguageContext'
import ActionLink from '@/ui/Buttons/Actions/ActionButton/ActionLink'

interface DetailedPricesProps {
	packages: IPackage[]
}

const DetailedPrices: FC<DetailedPricesProps> = ({ packages }) => {
	const { global, detailed_prices } = useLanguageContext()
	const { _return } = global
	const { remark } = detailed_prices

	return (
		<div className={`section ${s.detailedPrices}`}>
			<div className="container">
				<Leaf className={s.leaf_1} />
				<Leaf className={s.leaf_2} />
				<Leaf className={s.leaf_3} />
				<Leaf className={s.leaf_4} />
				<Ellipse className={s.ellipse_1} />
				<Ellipse className={s.ellipse_2} />
				<Ellipse className={s.ellipse_3} />
				<Ellipse className={s.ellipse_4} />
				<Ellipse className={s.ellipse_5} />
				{packages.map((_package) => (
					<PackageItem key={_package._id} _package={_package} />
				))}

				<p className={s.remark}>{`* ${remark}`}</p>
				<ActionLink
					className={s.link}
					text={_return}
					path="/#consults_and_rates"
				/>
			</div>
		</div>
	)
}
export default DetailedPrices
