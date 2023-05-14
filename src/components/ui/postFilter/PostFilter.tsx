import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setPage, setQuery } from '@/store/page/pageFilters.slice'

import FilterCrumb from '../filterCrumb/FilterCrumb'
import Input from '../input/Input'

import styles from './PostFilter.module.scss'

const PostFilter: FC = () => {
	const dispatch = useDispatch()
	const [searchQuery, setSearchQuery] = useState<string>('')
	const handleSearch = () => {
		dispatch(setPage(1))
		dispatch(setQuery(searchQuery))
	}
	return (
		<div className={styles.postFilter}>
			<div className={styles.postFilter__input}>
				<Input
					type='search'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder={'Пошук'}
					handleSearch={handleSearch}
				/>
			</div>

			<div className={styles.postFilter__crumbs}>
				<FilterCrumb>Новые</FilterCrumb>
				<FilterCrumb>Недалеко от вас</FilterCrumb>
				<FilterCrumb>1 комната</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
				<FilterCrumb>1</FilterCrumb>
			</div>
		</div>
	)
}

export default PostFilter
