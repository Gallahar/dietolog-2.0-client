import '@/assets/styles/globals.scss'
import { IS_CLIENT } from '@/config/constants'
import Footer from '@/modules/Footer/Footer'
import Header from '@/modules/Header/Header'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</MainProvider>
	)
}
