import { IAuthor, ICategory } from './category.interface'

export interface IPost {
	id: number
	createdAt: string
	updatedAt: string

	activity: boolean
	name: string
	slug: string
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

	author: IAuthor
	category: ICategory
}

export interface IPostDetails {
	post: IPost
}

export type TypePosts = {
	posts: IPost[]
}

export type TypePaginationPosts = {
	onDeletePost?: (postId: number | string) => void
	isProfileList?: boolean
	length: number
	posts: IPost[]
}

export interface IPostTemp {
	name: string

	images: string[]
}
