export const POSTS = '/post'

export type TypePostData = {
	activity: boolean
	name: string
	images: string[]
	description: string
	price: number
	utilitiesPrice: number
	region: string
	city: string
	street: string
	houseNumber: string
	mapCoordinates: string
	roomsNumber: number
	bedsNumber: number
	bathroomsNumber: number
	floor: number
	area: number
	minRentalPeriod: number
	categoryId: number
	authorId: number
}

export type TypePostDataFilters = {
	user?: number
	sort?: EnumPostSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
	category?: string
}

export enum EnumPostSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export enum EnumPostCategory {
	SALE = 'sale',
	RENT = 'rent',
	REFUGEE = 'refugee'
}
