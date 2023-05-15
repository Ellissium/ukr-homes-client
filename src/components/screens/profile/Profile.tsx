import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC } from 'react'

import Footer from '@/ui/footer/Footer'
import Meta from '@/ui/meta/Meta'
import Navbar from '@/ui/navbar/Navbar'
import Paginate from '@/ui/paginate/Paginate'
import PostList from '@/ui/postList/PostList'

import { PageFilters } from '@/store/page/pageFilters.interface'
import { TypeRootState } from '@/store/store'

import { useProfile } from '@/hooks/useProfile'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { TypePaginationPosts } from '@/types/post.interface'

import styles from './Profile.module.scss'
import { PostService } from '@/services/post/post.service'

const Profile: FC = () => {
	const profile = useProfile()
	const pageFilters = useTypedSelector<PageFilters>(
		(state: TypeRootState) => state.pageFilters
	)
	const { data, isLoading } = useQuery<TypePaginationPosts>(
		['user posts', profile?.id, pageFilters.userPage],
		() =>
			PostService.getAll({
				user: profile?.id,
				page: pageFilters.userPage,
				perPage: pageFilters.perPage
			}),
		{
			keepPreviousData: true,
			staleTime: 60000,
			cacheTime: 600000
		}
	)
	return (
		<Meta title='profile'>
			<div className={styles.profile}>
				<div className={styles.profile__navbar}>
					<Navbar />
				</div>
				<div className={styles.profile__main}>
					{profile?.avatarPath ? (
						<Image
							priority={true}
							src={profile.avatarPath}
							alt='My Image'
							width={200}
							height={200}
							className={styles.profile__mainImage}
						/>
					) : (
						<div />
					)}
					<div className={styles.profile__mainInfo}>
						<div className={styles.profile__name}>
							{profile?.name + '.#' + profile?.id}
						</div>
						<div className={styles.profile__email}>{profile?.email}</div>
						<div className={styles.profile__phone}>{profile?.phone}</div>
					</div>
				</div>
				<div className={styles.profile__posts}>
					<PostList
						length={data?.length ? data.length : 0}
						posts={data?.posts ? data.posts : []}
					></PostList>
					{data?.length ? <Paginate data={data} userPage={true} /> : <div />}
				</div>
				<Footer />
			</div>
		</Meta>
	)
}

export default Profile
