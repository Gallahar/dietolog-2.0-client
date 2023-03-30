import '@/assets/styles/globals.scss'
import Footer from '@/modules/Footer/Footer'
import Header from '@/modules/Header/Header'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'
import SectionProvider from 'providers/SectionProvider/SectionProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<SectionProvider>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</SectionProvider>
		</MainProvider>
	)
}
