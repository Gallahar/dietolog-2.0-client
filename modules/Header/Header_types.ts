import { LanguageTemplate } from 'languages/template'

export interface INavbarItem {
	title: string
	href: string
}

export interface ISwitchButton {
	language: LanguageTemplate
	title: string
}
