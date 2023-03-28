import { ILanguagedString } from '../../languages/template'

export interface IOrderParam {
	title: string
	value: string
}

export interface IOrder {
	_id: string
	program_title: string
	params: IOrderParam[]
	name: string
	phone: string
	email: string
	isConfirmed: boolean
	createdAt: Date
}
export interface IOrderCreate
	extends Omit<IOrder, '_id' | 'createdAt' | 'isConfirmed'> {}
