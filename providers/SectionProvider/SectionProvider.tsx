import { useRouter } from 'next/router'
import { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { SectionContextInitialValue } from './section-provider.data'
import { SectionContextProps } from './section-provider.interface'

export const SectionContext = createContext<SectionContextProps>(
	SectionContextInitialValue
)

interface SectionProviderProps {
	children: ReactNode
}

const SectionProvider: FC<SectionProviderProps> = ({ children }) => {
	const [currentSection, setCurrentSection] = useState('main')
	const { push, pathname } = useRouter()

	// useEffect(() => {
	// 	const handler = () => {
	// 		push('/', '', { shallow: true })
	// 	}

	// 	window.addEventListener('hashchange', handler)
	// 	return () => window.removeEventListener('hashchange', handler)
	// }, [pathname])

	return (
		<SectionContext.Provider
			value={{
				currentSection,
				setCurrentSection,
			}}
		>
			{children}
		</SectionContext.Provider>
	)
}

export default SectionProvider
