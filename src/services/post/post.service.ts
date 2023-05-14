import { IPost, TypePaginationPosts } from '@/types/post.interface'

import { instance } from '@/api/api_interceptor'

import { POSTS, TypePostData, TypePostDataFilters } from './post.types'

export const PostService = {
	async getAll(queryData = {} as TypePostDataFilters) {
		console.log('postService')
		const { data } = await instance<TypePaginationPosts>({
			url: POSTS,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getSimilar(id: string | number) {
		return instance<IPost[]>({
			url: `${POSTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<IPost>({
			url: `${POSTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByPost(postSlug: string) {
		return instance<IPost[]>({
			url: `${POSTS}/by-post/${postSlug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IPost>({
			url: POSTS,
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypePostData) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'PUT',
			data
		})
	},

	async delete(id: string | number) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'DELETE'
		})
	}
}
