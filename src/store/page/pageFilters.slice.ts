import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PageFilters } from './pageFilters.interface'
import { EnumPostCategory, EnumPostSort } from '@/services/post/post.types'

const initialState: PageFilters = {
	page: 1,
	userPage: 1,
	perPage: 3,
	sort: EnumPostSort.OLDEST,
	query: '',
	category: undefined
}

export const pageFiltersSlice = createSlice({
	name: 'pageFilters',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			return {
				...state,
				page: action.payload
			}
		},
		setUserPage: (state, action: PayloadAction<number>) => {
			return {
				...state,
				userPage: action.payload
			}
		},
		setPerPage: (state, action: PayloadAction<number>) => {
			return {
				...state,
				perPage: action.payload
			}
		},
		setQuery: (state, action: PayloadAction<string>) => {
			return {
				...state,
				query: action.payload
			}
		},
		setSort: (state, action: PayloadAction<EnumPostSort>) => {
			return {
				...state,
				sort: action.payload
			}
		},
		setCategory: (
			state,
			action: PayloadAction<EnumPostCategory | undefined>
		) => {
			return {
				...state,
				category: action.payload
			}
		}
	}
})

export const {
	setPage,
	setUserPage,
	setPerPage,
	setQuery,
	setSort,
	setCategory
} = pageFiltersSlice.actions

export default pageFiltersSlice.reducer
