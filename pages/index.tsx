import { GetStaticProps, NextPage } from 'next'

import About from '@/modules/Main/About/About'
import Contacts from '@/modules/Main/Contacts/Contacts'
import Main from '@/modules/Main/Main'
import PreparedSolutions from '@/modules/Main/PreparedSolutions/PreparedSolutions'
import SignForConsult from '@/modules/Main/SignForConsult/SignForConsult'
import { programService } from '@/services/program.service'
import { IProgram } from '@/shared/models/program.interface'
import ConsultsAndRates from '@/modules/Main/ConsultsAndRates/ConsultsAndRates'
import { IConsultation } from '@/shared/models/consultation.interface'
import { consultationService } from '@/services/consultation.service'

interface HomePageProps {
	programs: IProgram[]
	consults: IConsultation[]
}

const HomePage: NextPage<HomePageProps> = ({ programs, consults }) => {
	return (
		<>
			<Main />
			<About />
			<ConsultsAndRates consults={consults ?? []} />
			<SignForConsult />
			<PreparedSolutions programs={programs ?? []} />
			<Contacts />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: programs } = await programService.getAll()
		const { data: consults } = await consultationService.getAll()
		return {
			props: {
				programs,
				consults,
			},
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default HomePage
