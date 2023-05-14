import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PageFilters } from './pageFilters.interface'
import { EnumPostCategory, EnumPostSort } from '@/services/post/post.types'

const initialState: PageFilters = {
	page: 1,
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

export const { setPage, setQuery, setSort, setCategory } =
	pageFiltersSlice.actions

export default pageFiltersSlice.reducer
