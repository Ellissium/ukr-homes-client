import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setPage, setSort } from '@/store/page/pageFilters.slice'
import { TypeRootState } from '@/store/store'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './Dropdown.module.scss'
import { EnumPostSort } from '@/services/post/post.types'

function Dropdown() {
	const dispatch = useDispatch()
	const pageFilters = useTypedSelector(
		(state: TypeRootState) => state.pageFilters
	)
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleItemClick = (item: EnumPostSort) => {
		dispatch(setPage(1))
		dispatch(setSort(item))
		setIsOpen(false)
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdown__toggle} onClick={toggleDropdown}>
				{pageFilters.sort}
				<span
					className={`${styles.dropdown__arrow} ${
						isOpen ? styles.dropdown__arrow_down : styles.dropdown__arrow_up
					}`}
				/>
			</div>
			{isOpen && (
				<div className={styles.dropdown__menu}>
					<ul>
						{Object.values(EnumPostSort).map(item => (
							<li key={item} onClick={() => handleItemClick(item)}>
								{item}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Dropdown
