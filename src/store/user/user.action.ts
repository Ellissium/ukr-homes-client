import { createAsyncThunk } from '@reduxjs/toolkit'

import { errorCatch } from '@/api/api_helper'

import {
	IAuthResponse,
	IEmailPassword,
	IUserEmailPassword
} from './user.interface'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const auth = createAsyncThunk<
	IAuthResponse,
	{ type: string; data: IEmailPassword | IUserEmailPassword }
>('auth', async ({ type, data }, thunkApi) => {
	try {
		const response = await AuthService.main(
			type === 'register' ? 'register' : 'login',
			data
		)
		return response
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error))
	}
})

export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
