import { FC } from 'react'

import NotFound from '@/ui/notFound/NotFound'
import PostList from '@/ui/postList/PostList'

import { useProfile } from '@/hooks/useProfile'

import styles from './Favorites.module.scss'

const Favorites: FC = () => {
	const profile = useProfile()

	return (
		<div className={styles.favorite}>
			<div className={styles.favorite__main} />
			<div className={styles.favorite__content}>
				<h1 className={styles.favorite__heading}>Обрані</h1>
				{profile?.favoritePosts.length ? (
					<PostList
						length={
							profile?.favoritePosts.length ? profile.favoritePosts.length : 0
						}
						posts={profile?.favoritePosts ? profile?.favoritePosts : []}
					></PostList>
				) : (
					<NotFound />
				)}
			</div>
		</div>
	)
}

export default Favorites
