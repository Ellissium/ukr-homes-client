import { createSlice } from '@reduxjs/toolkit'

import { getLocalStorage } from '@/utils/local-storage'

import { auth, checkAuth, logout } from './user.action'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: getLocalStorage('user'),
	isLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(auth.pending, state => {
				state.isLoading = true
			})
			.addCase(auth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(auth.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	}
})
