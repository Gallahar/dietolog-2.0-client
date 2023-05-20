import { ILanguagedString } from '../../languages/template'

export interface IProgramOption {
	answer: ILanguagedString
	answer_short: ILanguagedString
}

export interface IProgramRadio {
	title: ILanguagedString
	title_short: ILanguagedString
	options: IProgramOption[]
}

export interface IProgram {
	_id: string
	title: ILanguagedString
	slug: string
	price: number
	photo: string
	photo_small: string
	description: ILanguagedString
	description_short: ILanguagedString
	included: ILanguagedString[]
	radios: IProgramRadio[]
	isAvailable: boolean
}

export interface IEditProgram extends Omit<IProgram, '_id'> {}
