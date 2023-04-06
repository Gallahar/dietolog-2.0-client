import { IS_CLIENT, IS_SERVER } from '@/config/constants'
import { en } from 'languages/en'
import { ru } from 'languages/ru'
import { LanguageTemplate } from 'languages/template'
import { ua } from 'languages/ua'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { LanguageContextInitialValue } from './language-provider.data'
import { LanguageContextProps } from './language-provider.interface'

export const LanguageContext = createContext<LanguageContextProps>(
	LanguageContextInitialValue
)

interface LanguageProviderProps {
	children: ReactNode
}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
	const [language, setLanguage] = useState<LanguageTemplate>(ua)

	useEffect(() => {
		if (IS_CLIENT) {
			const langStorage = localStorage.getItem('lang')
			if (langStorage === 'ru') {
				setLanguage(ru)
			} else if (langStorage === 'en') {
				setLanguage(en)
			}
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('lang', language.mark)
	}, [language])

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageProvider
