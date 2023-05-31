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
	sort?: string
	searchTerm?: string
	page?: string | number
	perPage?: string | number
	category?: string | number
	minPrice?: string | number
	maxPrice?: string | number
	minArea?: string | number
	maxArea?: string | number
	minFloor?: string | number
	maxFloor?: string | number
	minRooms?: string | number
	maxRooms?: string | number
	minRent?: string | number
	maxRent?: string | number
	minBeds?: string | number
	maxBeds?: string | number
	minBathRooms?: string | number
	maxBathRooms?: string | number
	region?: string
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
