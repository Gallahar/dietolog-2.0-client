import { adminAxios, defaultAxios } from '../api'
import { getRecordsUrl } from '../config/api'
import { IRecord, IRecordCreate } from '../shared/models/record.interface'

export const RecordService = {
	async create(dto: IRecordCreate, lang: string | null) {
		await defaultAxios.post(getRecordsUrl('/create'), dto, {
			headers: {
				language: lang,
			},
		})
	},

	// Admin
	async getAllApplied() {
		return await adminAxios.get<IRecord[]>(getRecordsUrl('/confirmed'))
	},

	async getNotApplied() {
		return await adminAxios.get<IRecord[]>(getRecordsUrl('/not-confirmed'))
	},

	async toggleConfirmation(_id: string) {
		await adminAxios.put(getRecordsUrl('/toggle-confirmation/' + _id))
	},

	async delete(_id: string) {
		await adminAxios.delete(getRecordsUrl('/' + _id))
	},
}
