import { FC } from 'react'

import { TypePaginationPosts } from '@/types/post.interface'

import PostCard from '../postCard/PostCard'

import styles from './PostList.module.scss'

const PostList: FC<TypePaginationPosts> = data => {
	return (
		<div>
			<div className={styles.home__postList}>
				{data?.posts?.map(post => (
					<PostCard key={post.id} post={post}></PostCard>
				))}
			</div>
		</div>
	)
}

export default PostList
