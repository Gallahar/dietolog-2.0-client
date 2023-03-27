import { useLanguage } from '@/hooks/useLanguage'
import { ILanguagedString } from 'languages/template'

export const currentLanguage = (field: ILanguagedString): string => {
	const mark = useLanguage().mark
	switch (mark) {
		case 'ru':
			return field.ru
		case 'en':
			return field.en
		default:
			return field.ua
	}
}
