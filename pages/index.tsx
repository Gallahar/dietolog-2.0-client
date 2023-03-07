import About from '@/modules/Main/About/About'
import Main from '@/modules/Main/Main'
import PreparedSolutions from '@/modules/Main/PreparedSolutions/PreparedSolutions'
import SignForConsult from '@/modules/Main/SignForConsult/SignForConsult'

export default function Home() {
	return (
		<>
			<Main />
			<About />
			<SignForConsult />
			<PreparedSolutions/>
		</>
	)
}
