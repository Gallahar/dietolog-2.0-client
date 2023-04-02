import { ILanguagedString } from 'languages/template'

export const currentLanguage = (
	field: ILanguagedString,
	mark: string
): string => {
	switch (mark) {
		case 'ru':
			return field.ru
		case 'en':
			return field.en
		default:
			return field.ua
	}
}
