import Certificates from '@/modules/Certificates/Certificates'
import { certificateService } from '@/services/certificate.service'
import { ICertificate } from '@/shared/models/certificate.interface'
import { GetStaticProps, NextPage } from 'next'

interface CertificatesPageProps {
	certificates: ICertificate[]
}

const CertificatesPage: NextPage<CertificatesPageProps> = ({
	certificates,
}) => {
	return <Certificates certificates={certificates ?? []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: certificates } = await certificateService.getAll()
		return {
			props: {
				certificates,
			},
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default CertificatesPage
