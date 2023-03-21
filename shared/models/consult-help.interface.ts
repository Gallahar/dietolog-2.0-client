export interface IConsultHelp {
	_id: string
	name: string
	phone: string
	email: string
	description: string
	isConfirmed: boolean
	createdAt: Date
}

export interface IConsultHelpCreate
	extends Omit<IConsultHelp, '_id' | 'isConfirmed' | 'createdAt'> {}
