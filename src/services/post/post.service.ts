import { IPost, TypePaginationPosts } from '@/types/post.interface'

import { axiosClassic, instance } from '@/api/api_interceptor'

import { POSTS, TypePostDataFilters } from './post.types'

export const PostService = {
	async getAll(queryData = {} as TypePostDataFilters) {
		console.log('postService')
		const { data } = await axiosClassic<TypePaginationPosts>({
			url: POSTS,
			method: 'GET',
			params: queryData
		})
		return data
	},

	async getSimilar(id: string | number) {
		return axiosClassic<IPost[]>({
			url: `${POSTS}/similar/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IPost>({
			url: `${POSTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByPostSlug(postSlug: string) {
		return axiosClassic<IPost[]>({
			url: `${POSTS}/by-post/${postSlug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		const { data } = await instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'GET'
		})
		return data
	},

	async create(post: any) {
		//instance!!
		const { data } = await instance<IPost>({
			url: POSTS,
			method: 'POST',
			data: post,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		return data
	},

	async update(id: string | number, post: any) {
		const { data } = await instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'PUT',
			data: post,
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return data
	},

	async delete(id: string | number) {
		return instance<IPost>({
			url: `${POSTS}/${id}`,
			method: 'DELETE'
		})
	}
}
