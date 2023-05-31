import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api_helper'

import { UserService } from '@/services/user/user.service'

export const useProfile = () => {
	console.log('invalid')
	const { data } = useQuery(
		['get profile'],
		async () => await UserService.getProfile(),
		{
			select: data => data,
			onError: error => {
				console.log(errorCatch(error))
			}
		}
	)
	return data
}
