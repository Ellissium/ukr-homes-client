export interface PageFilters {
	page: number
	userPage: number
	perPage: number
	sort: string
	query: string
	category: string | undefined
	minPrice: string | number | undefined
	maxPrice: string | number | undefined
	minArea: string | number | undefined
	maxArea: string | number | undefined
	minFloor: string | number | undefined
	maxFloor: string | number | undefined
	minRooms: string | number | undefined
	maxRooms: string | number | undefined
	minRent: string | number | undefined
	maxRent: string | number | undefined
	minBeds: string | number | undefined
	maxBeds: string | number | undefined
	minBathRooms: string | number | undefined
	maxBathRooms: string | number | undefined
	region: string
}
