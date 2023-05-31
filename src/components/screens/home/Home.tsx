import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

import Dropdown from '@/ui/dropdown/Dropdown'
import Loader from '@/ui/loader/Loader'
import NotFound from '@/ui/notFound/NotFound'
import Paginate from '@/ui/paginate/Paginate'
import PostFilter from '@/ui/postFilter/PostFilter'
import PostList from '@/ui/postList/PostList'

import { PageFilters } from '@/store/page/pageFilters.interface'
import { setPage, setSort } from '@/store/page/pageFilters.slice'
import { TypeRootState } from '@/store/store'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { TypePaginationPosts } from '@/types/post.interface'

import styles from './Home.module.scss'
import main from '@/../public/images/main.jpg'
import { PostSortEnum } from '@/services/category/dropdownEnum.types'
import { PostService } from '@/services/post/post.service'

const Home: FC = () => {
	const dispatch = useDispatch()
	const {
		page,
		perPage,
		sort,
		query,
		category,
		minPrice,
		maxPrice,
		minArea,
		maxArea,
		minFloor,
		maxFloor,
		minRooms,
		maxRooms,
		minRent,
		maxRent,
		minBeds,
		maxBeds,
		minBathRooms,
		maxBathRooms,
		region
	} = useTypedSelector<PageFilters>((state: TypeRootState) => state.pageFilters)
	const { data, isLoading, refetch } = useQuery<TypePaginationPosts>(
		['posts', page, perPage, sort, category],
		() =>
			PostService.getAll({
				user: undefined,
				page: page,
				perPage: perPage,
				category: category,
				sort: sort,
				searchTerm: query,
				minPrice: minPrice,
				maxPrice: maxPrice,
				minArea: minArea,
				maxArea: maxArea,
				minFloor: minFloor,
				maxFloor: maxFloor,
				minRooms: minRooms,
				maxRooms: maxRooms,
				minRent: minRent,
				maxRent: maxRent,
				minBeds: minBeds,
				maxBeds: maxBeds,
				minBathRooms: minBathRooms,
				maxBathRooms: maxBathRooms,
				region: region
			}),
		{
			keepPreviousData: true,
			staleTime: 60000,
			cacheTime: 600000
		}
	)

	const selectedSort = PostSortEnum.find(item => item.key === sort)

	const selectedSortKey = selectedSort ? selectedSort.key : undefined
	const handleSortChange = (selectedKey: string) => {
		dispatch(setPage(1))
		dispatch(setSort(selectedKey))
	}

	return (
		<div className={styles.home}>
			<div className={styles.home__main}>
				<Image
					priority={true}
					src={main}
					alt='My Image'
					className={styles.home__mainImage}
				/>
				<PostFilter refetch={refetch} />
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.home__contentContainer}>
					{data?.length ? (
						<div className={styles.home__content}>
							<PostList
								length={data?.length ? data.length : 0}
								posts={data?.posts ? data.posts : []}
							></PostList>
							<div className={styles.home__contentDropdown}>
								<Dropdown
									enumValues={PostSortEnum}
									defaultValue={selectedSortKey}
									onDropdownChange={handleSortChange}
								/>
							</div>
						</div>
					) : (
						<NotFound />
					)}

					{data?.length ? <Paginate data={data} userPage={false} /> : <div />}
				</div>
			)}
		</div>
	)
}

export default Home
