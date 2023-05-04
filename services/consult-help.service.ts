import { adminAxios, defaultAxios } from '../api'
import { getConsultHelpUrl } from '../config/api'
import {
	IConsultHelp,
	IConsultHelpCreate,
} from '../shared/models/consult-help.interface'

export const ConsultHelpService = {
	async create(dto: IConsultHelpCreate, lang: string | null) {
		await defaultAxios.post(getConsultHelpUrl('/create'), dto, {
			headers: {
				language: lang,
			},
		})
	},

	// Admin
	async getAllApplied() {
		return await adminAxios.get<IConsultHelp[]>(
			getConsultHelpUrl('/confirmed')
		)
	},

	async getNotApplied() {
		return await adminAxios.get<IConsultHelp[]>(
			getConsultHelpUrl('/not-confirmed')
		)
	},

	async toggleConfirmation(_id: string) {
		await adminAxios.put(getConsultHelpUrl('/toggle-confirmation/' + _id))
	},

	async delete(_id: string) {
		await adminAxios.delete(getConsultHelpUrl('/' + _id))
	},
}
