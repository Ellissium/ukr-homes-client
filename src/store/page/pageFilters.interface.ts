import { EnumPostCategory, EnumPostSort } from '@/services/post/post.types'

export interface PageFilters {
	page: number
	sort: EnumPostSort
	query: string
	category: EnumPostCategory | undefined
}
