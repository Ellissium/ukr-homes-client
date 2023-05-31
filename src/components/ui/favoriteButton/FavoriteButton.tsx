import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { FC } from 'react'
import { FiHeart } from 'react-icons/fi'

import { useProfile } from '@/hooks/useProfile'

import styles from './FavoriteButton.module.scss'
import { UserService } from '@/services/user/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const profile = useProfile()

	const queryClient = useQueryClient()
	const queryCache = queryClient.getQueryCache()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				console.log('success')
				queryClient.invalidateQueries()
			}
		}
	)
	if (!profile) return null
	const isExists = profile?.favoritePosts?.some(
		favoritePosts => favoritePosts.id === productId
	)

	const toggleFavorite = (e: any) => {
		e.stopPropagation()
		mutate()
	}
	return (
		<div className={styles.favoriteButton} onClick={toggleFavorite}>
			<FiHeart
				className={cn(
					styles.favoriteButton__favoriteIcon,
					isExists ? styles.favoriteButton__favoriteIcon_active : ''
				)}
			/>
		</div>
		// <div>
		// 	<Button onClick={() => mutate()}>
		//
		// 	</Button>
		// </div>
	)
}

export default FavoriteButton
