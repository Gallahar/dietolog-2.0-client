import { GetStaticProps, NextPage } from 'next'
import { packageService } from '@/services/packages.service'
import { IPackage } from '@/shared/models/package.interface'
import DetailedPrices from '@/modules/DetailedPrices/DetailedPrices'

interface DetailedPricesPageProps {
	packages: IPackage[]
}

const DetailedPricesPage: NextPage<DetailedPricesPageProps> = ({
	packages,
}) => {
	return <DetailedPrices packages={packages ?? []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: packages } = await packageService.getAll()
		return {
			props: {
				packages,
			},
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default DetailedPricesPage
