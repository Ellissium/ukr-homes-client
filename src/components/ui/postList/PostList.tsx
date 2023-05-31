import { FC } from 'react'

import { TypePaginationPosts } from '@/types/post.interface'

import PostCard from '../postCard/PostCard'

import styles from './PostList.module.scss'

const PostList: FC<TypePaginationPosts> = ({
	isProfileList = false,
	posts,
	onDeletePost,
	length
}) => {
	return (
		<div>
			<div className={styles.home__postList}>
				{posts?.map(post => (
					<PostCard
						isProfilePost={isProfileList}
						key={post.id}
						post={post}
						handleDeletePost={onDeletePost}
					></PostCard>
				))}
			</div>
		</div>
	)
}

export default PostList
