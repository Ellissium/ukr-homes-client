import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PageFilters } from './pageFilters.interface'
import {
	PostSortEnum,
	SearchRegionEnum
} from '@/services/category/dropdownEnum.types'

const initialState: PageFilters = {
	page: 1,
	userPage: 1,
	perPage: 3,
	sort: PostSortEnum[0].key,
	query: '',
	category: undefined,
	minPrice: undefined,
	maxPrice: undefined,
	minArea: undefined,
	maxArea: undefined,
	minFloor: undefined,
	maxFloor: undefined,
	minRooms: undefined,
	maxRooms: undefined,
	minRent: undefined,
	maxRent: undefined,
	minBeds: undefined,
	maxBeds: undefined,
	minBathRooms: undefined,
	maxBathRooms: undefined,
	region: SearchRegionEnum[0].key
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
		setSort: (state, action: PayloadAction<string>) => {
			return {
				...state,
				sort: action.payload
			}
		},
		setCategory: (state, action: PayloadAction<string | undefined>) => {
			return {
				...state,
				category: action.payload
			}
		},
		setMinPrice: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				minPrice: action.payload
			}
		},
		setMaxPrice: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				maxPrice: action.payload
			}
		},
		setMinArea: (state, action: PayloadAction<string | number | undefined>) => {
			return {
				...state,
				minArea: action.payload
			}
		},
		setMaxArea: (state, action: PayloadAction<string | number | undefined>) => {
			return {
				...state,
				maxArea: action.payload
			}
		},
		setMinFloor: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				minFloor: action.payload
			}
		},
		setMaxFloor: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				maxFloor: action.payload
			}
		},
		setMinRooms: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				minRooms: action.payload
			}
		},
		setMaxRooms: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				maxRooms: action.payload
			}
		},
		setMinRent: (state, action: PayloadAction<string | number | undefined>) => {
			return {
				...state,
				minRent: action.payload
			}
		},
		setMaxRent: (state, action: PayloadAction<string | number | undefined>) => {
			return {
				...state,
				maxRent: action.payload
			}
		},
		setMinBeds: (state, action: PayloadAction<string | number | undefined>) => {
			return {
				...state,
				minBeds: action.payload
			}
		},
		setMaxBeds: (state, action: PayloadAction<string | number | undefined>) => {
			return {
				...state,
				maxBeds: action.payload
			}
		},
		setMinBathRooms: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				minBathRooms: action.payload
			}
		},
		setMaxBathRooms: (
			state,
			action: PayloadAction<string | number | undefined>
		) => {
			return {
				...state,
				maxBathRooms: action.payload
			}
		},
		setRegion: (state, action: PayloadAction<string>) => {
			return {
				...state,
				region: action.payload
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
	setCategory,
	setMinPrice,
	setMaxPrice,
	setMinArea,
	setMaxArea,
	setMinFloor,
	setMaxFloor,
	setMinRooms,
	setMaxRooms,
	setMinRent,
	setMaxRent,
	setMinBeds,
	setMaxBeds,
	setMinBathRooms,
	setMaxBathRooms,
	setRegion
} = pageFiltersSlice.actions

export default pageFiltersSlice.reducer
