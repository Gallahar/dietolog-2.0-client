import { adminAxios, defaultAxios } from '../api'
import { getOrdersUrl } from '../config/api'
import { IOrder, IOrderCreate } from '../shared/models/order.interface'

export const OrderService = {
	async create(dto: IOrderCreate, lang: string | null) {
		await defaultAxios.post(getOrdersUrl('/create'), dto, {
			headers: {
				language: lang,
			},
		})
	},

	// Admin
	async getAllApplied() {
		return await adminAxios.get<IOrder[]>(getOrdersUrl('/confirmed'))
	},

	async getNotApplied() {
		return await adminAxios.get<IOrder[]>(getOrdersUrl('/not-confirmed'))
	},

	async toggleConfirmation(_id: string) {
		await adminAxios.put(getOrdersUrl('/confirm/' + _id))
	},

	async delete(_id: string) {
		await adminAxios.delete(getOrdersUrl('/' + _id))
	},
}
