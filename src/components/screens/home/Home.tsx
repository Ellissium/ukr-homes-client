import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'

import Dropdown from '@/ui/dropdown/Dropdown'
import Footer from '@/ui/footer/Footer'
import Loader from '@/ui/loader/Loader'
import Meta from '@/ui/meta/Meta'
import Navbar from '@/ui/navbar/Navbar'
import PostCard from '@/ui/postCard/PostCard'
import PostFilter from '@/ui/postFilter/PostFilter'

import { setPage } from '@/store/page/pageFilters.slice'
import { TypeRootState } from '@/store/store'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { TypePaginationPosts } from '@/types/post.interface'

import styles from './Home.module.scss'
import main from '@/../public/images/main.jpg'
import { PostService } from '@/services/post/post.service'

const Home: FC = () => {
	const dispatch = useDispatch()
	const pageFilters = useTypedSelector(
		(state: TypeRootState) => state.pageFilters
	)
	const { data, isLoading } = useQuery<TypePaginationPosts>(
		['posts', pageFilters],
		() =>
			PostService.getAll({
				page: pageFilters.page,
				perPage: 3,
				category: pageFilters.category,
				sort: pageFilters.sort,
				searchTerm: pageFilters.query
			}),
		{
			keepPreviousData: true,
			staleTime: 60000,
			cacheTime: 600000
		}
	)
	const handlePageChange = (selectedPage: { selected: number }) => {
		dispatch(setPage(selectedPage.selected + 1))
	}
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
					></Image>
					<PostFilter />
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div>
						<div>
							<Dropdown />
						</div>
						<div className={styles.home__postList}>
							{data?.posts.map(post => (
								<PostCard key={post.id} post={post}></PostCard>
							))}
						</div>
						{data?.length ? (
							<ReactPaginate
								pageCount={data?.length ? data.length / 3 : 1}
								pageRangeDisplayed={3}
								marginPagesDisplayed={1}
								forcePage={pageFilters.page - 1}
								onPageChange={handlePageChange}
								previousLabel={<div className={styles.square}>{'<'}</div>}
								nextLabel={<div className={styles.square}>{'>'}</div>}
								breakLabel={<div className={styles.square}>{'...'}</div>}
								containerClassName={styles.home__paginateContainer}
								pageClassName={styles.home__paginatePage}
								pageLinkClassName={styles.home__paginatePageLink}
								activeClassName={styles.home__paginateActive}
								previousClassName={styles.home__paginatePrevious}
								nextClassName={styles.home__paginateNext}
							/>
						) : (
							<div />
						)}
					</div>
				)}
				<Footer />
			</div>
		</Meta>
	)
}

export default Home
