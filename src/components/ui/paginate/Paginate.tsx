import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'

import { PageFilters } from '@/store/page/pageFilters.interface'
import { setPage, setUserPage } from '@/store/page/pageFilters.slice'
import { TypeRootState } from '@/store/store'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { TypePaginationPosts } from '@/types/post.interface'

import styles from './Paginate.module.scss'

interface IPaginateProps {
	userPage?: boolean
	data: TypePaginationPosts
}
const Paginate: FC<IPaginateProps> = ({ userPage = false, data }) => {
	const dispatch = useDispatch()
	const pageFilters = useTypedSelector<PageFilters>(
		(state: TypeRootState) => state.pageFilters
	)
	const handlePageChange = (selectedPage: { selected: number }) => {
		if (userPage) {
			dispatch(setUserPage(selectedPage.selected + 1))
		} else {
			dispatch(setPage(selectedPage.selected + 1))
		}
	}
	return (
		<ReactPaginate
			pageCount={data?.length ? data.length / 3 : 1}
			pageRangeDisplayed={3}
			marginPagesDisplayed={1}
			forcePage={userPage ? pageFilters.userPage - 1 : pageFilters.page - 1}
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
	)
}

export default Paginate
