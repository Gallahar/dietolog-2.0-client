import { IPackage, IEditPackage } from '@/shared/models/package.interface'
import { adminAxios, defaultAxios } from '../api'
import { getPackagesUrl } from '../config/api'

export const packageService = {
	async getAll() {
		return await defaultAxios.get<IPackage[]>(getPackagesUrl(''))
	},

	// Admin
	async getById(_id: string) {
		return await adminAxios.get<IEditPackage>(getPackagesUrl(`/${_id}`))
	},

	async create() {
		await adminAxios.post(getPackagesUrl('/create'))
	},

	async update(_id: string, dto: IEditPackage) {
		await adminAxios.put(getPackagesUrl(`/${_id}`), dto)
	},

	async delete(_id: string) {
		await adminAxios.delete(getPackagesUrl(`/${_id}`))
	},
}
