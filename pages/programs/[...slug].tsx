import Program from '@/modules/Program/Program'
import { programService } from '@/services/program.service'
import { IProgram } from '@/shared/models/program.interface'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface ProgramPageProps {
	program: IProgram
}

const ProgramPage: NextPage<ProgramPageProps> = ({ program }) => {
	return <Program program={program} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: programs } = await programService.getAll()
		const paths = programs.map(({ slug }) => ({
			params: { slug: [slug] },
		}))

		return {
			paths,
			fallback: false,
		}
	} catch (e) {
		console.error(e)

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: program } = await programService.getBySlug(
			String(params?.slug)
		)
		return {
			props: {
				program,
			},
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default ProgramPage
