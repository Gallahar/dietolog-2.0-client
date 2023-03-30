import { Dispatch, SetStateAction } from 'react'

export interface SectionContextProps {
	currentSection: string
	setCurrentSection: Dispatch<SetStateAction<string>>
}
