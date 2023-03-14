import { GetStaticProps, NextPage } from 'next'

import About from '@/modules/Main/About/About'
import Contacts from '@/modules/Main/Contacts/Contacts'
import Main from '@/modules/Main/Main'
import PreparedSolutions from '@/modules/Main/PreparedSolutions/PreparedSolutions'
import SignForConsult from '@/modules/Main/SignForConsult/SignForConsult'
import { programService } from '@/services/program.service'
import { IProgram } from '@/shared/models/program.interface'

interface HomePageProps {
	programs: IProgram[]
}

const HomePage: NextPage<HomePageProps> = ({ programs }) => {
	return (
		<>
			<Main />
			<About />
			<SignForConsult />
			<PreparedSolutions programs={programs ?? []} />
			<Contacts />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: programs } = await programService.getAll()
		return {
			props: {
				programs,
			},
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default HomePage
