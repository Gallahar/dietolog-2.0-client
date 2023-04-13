import '@/assets/styles/globals.scss'
import localFont from '@next/font/local'
import Footer from '@/modules/Footer/Footer'
import Header from '@/modules/Header/Header'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'
import SectionProvider from 'providers/SectionProvider/SectionProvider'

const hamilton = localFont({
	src: '../assets/fonts/mr_hamiltoneg.woff2',
	weight: '400',
	preload: true,
	style: 'normal',
	display: 'auto',
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<SectionProvider>
				<style jsx global>{`
					.hamilton,
					.customFont {
						font-family: ${hamilton.style.fontFamily};
					}
				`}</style>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</SectionProvider>
		</MainProvider>
	)
}
