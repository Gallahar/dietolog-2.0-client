import { LanguageContext } from 'providers/LanguageProvider/LanguageProvider'
import { useContext } from 'react'

export const useLanguageContext = () => useContext(LanguageContext).language
