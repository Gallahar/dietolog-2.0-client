import { API_URL } from '@/config/api'
import { IS_CLIENT } from '@/config/constants'
import axios from 'axios'

export const defaultAxios = axios.create({
	baseURL: API_URL,
	headers: {
		language: IS_CLIENT && localStorage.getItem('lang'),
	},
})

// Only for Admin (contains special admin hash)
export const adminAxios = axios.create({
	baseURL: API_URL,
	headers: {
		hash: IS_CLIENT && localStorage.getItem('hash'),
	},
})
