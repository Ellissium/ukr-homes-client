import { IUser } from '@/types/user.interface'

import { instance } from '@/api/api_interceptor'

const USERS = '/users'

export type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string[]
	phone?: string
}

export const UserService = {
	async getProfile() {
		const { data } = await instance<IUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})

		return data
	},

	async updateProfile(data: any) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},

	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
