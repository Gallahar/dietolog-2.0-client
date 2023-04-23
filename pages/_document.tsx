import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
	return (
		<Html>
			<Head>
				<link
					rel="preload"
					href="/fonts/mr_hamiltoneg.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
