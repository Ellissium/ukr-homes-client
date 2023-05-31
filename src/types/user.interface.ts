import { IPost } from './post.interface'

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
	role: string
	posts: IPost[]
	favoritePosts: IPost[]
}
