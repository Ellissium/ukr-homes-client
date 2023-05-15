import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC } from 'react'

import Dropdown from '@/ui/dropdown/Dropdown'
import Footer from '@/ui/footer/Footer'
import Loader from '@/ui/loader/Loader'
import Meta from '@/ui/meta/Meta'
import Navbar from '@/ui/navbar/Navbar'
import Paginate from '@/ui/paginate/Paginate'
import PostFilter from '@/ui/postFilter/PostFilter'
import PostList from '@/ui/postList/PostList'

import { PageFilters } from '@/store/page/pageFilters.interface'
import { TypeRootState } from '@/store/store'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { TypePaginationPosts } from '@/types/post.interface'

import styles from './Home.module.scss'
import main from '@/../public/images/main.jpg'
import { PostService } from '@/services/post/post.service'

const Home: FC = () => {
	const { page, perPage, sort, query, category } =
		useTypedSelector<PageFilters>((state: TypeRootState) => state.pageFilters)
	const { data, isLoading } = useQuery<TypePaginationPosts>(
		['posts', page, perPage, sort, query, category],
		() =>
			PostService.getAll({
				user: undefined,
				page: page,
				perPage: perPage,
				category: category,
				sort: sort,
				searchTerm: query
			}),
		{
			keepPreviousData: true,
			staleTime: 60000,
			cacheTime: 600000
		}
	)
	return (
		<Meta title='Home'>
			<div className={styles.home}>
				<div className={styles.home__main}>
					<Navbar hideDistance={600} />
					<Image
						priority={true}
						src={main}
						alt='My Image'
						className={styles.home__mainImage}
					/>
					<PostFilter />
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div>
						<div>
							<Dropdown />
						</div>
						<PostList
							length={data?.length ? data.length : 0}
							posts={data?.posts ? data.posts : []}
						></PostList>
						{data?.length ? <Paginate data={data} userPage={false} /> : <div />}
					</div>
				)}
				<Footer />
			</div>
		</Meta>
	)
}

export default Home
