import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'

import { PageFilters } from '@/store/page/pageFilters.interface'
import {
	setMaxArea,
	setMaxBathRooms,
	setMaxBeds,
	setMaxFloor,
	setMaxPrice,
	setMaxRent,
	setMaxRooms,
	setMinArea,
	setMinBathRooms,
	setMinBeds,
	setMinFloor,
	setMinPrice,
	setMinRent,
	setMinRooms,
	setPage,
	setQuery,
	setRegion
} from '@/store/page/pageFilters.slice'
import { TypeRootState } from '@/store/store'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import Dropdown from '../dropdown/Dropdown'
import Input from '../input/Input'

import styles from './PostFilter.module.scss'
import { SearchRegionEnum } from '@/services/category/dropdownEnum.types'

interface IPostFilterProps {
	refetch: any
}

const PostFilter: FC<IPostFilterProps> = ({ refetch }) => {
	const dispatch = useDispatch()
	const [searchQuery, setSearchQuery] = useState<string>('')
	const {
		page,
		perPage,
		sort,
		query,
		category,
		minPrice,
		maxPrice,
		minArea,
		maxArea
	} = useTypedSelector<PageFilters>((state: TypeRootState) => state.pageFilters)
	const handleSearch = () => {
		dispatch(setPage(1))
		dispatch(setQuery(searchQuery))
		console.log(maxArea)
		refetch()
		// dispatch(setMinPrice(undefined))
		// dispatch()
	}

	const handleMinPrice = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinPrice(undefined))
		} else {
			dispatch(setMinPrice(e.target.value))
		}
	}

	const handleMaxPrice = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxPrice(undefined))
		} else {
			dispatch(setMaxPrice(e.target.value))
		}
	}

	const handleMinArea = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinArea(undefined))
		} else {
			dispatch(setMinArea(e.target.value))
		}
	}

	const handleMaxArea = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxArea(undefined))
		} else {
			dispatch(setMaxArea(e.target.value))
		}
	}

	const handleMinFloor = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinFloor(undefined))
		} else {
			dispatch(setMinFloor(e.target.value))
		}
	}

	const handleMaxFloor = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxFloor(undefined))
		} else {
			dispatch(setMaxFloor(e.target.value))
		}
	}

	const handleMinRooms = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinRooms(undefined))
		} else {
			dispatch(setMinRooms(e.target.value))
		}
	}

	const handleMaxRooms = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxRooms(undefined))
		} else {
			dispatch(setMaxRooms(e.target.value))
		}
	}

	const handleMinRent = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinRent(undefined))
		} else {
			dispatch(setMinRent(e.target.value))
		}
	}

	const handleMaxRent = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxRent(undefined))
		} else {
			dispatch(setMaxRent(e.target.value))
		}
	}

	const handleMinBeds = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinBeds(undefined))
		} else {
			dispatch(setMinBeds(e.target.value))
		}
	}

	const handleMaxBeds = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxBeds(undefined))
		} else {
			dispatch(setMaxBeds(e.target.value))
		}
	}

	const handleMinBathRooms = (e: any) => {
		if (!e.target.value) {
			dispatch(setMinBathRooms(undefined))
		} else {
			dispatch(setMinBathRooms(e.target.value))
		}
	}

	const handleMaxBathRooms = (e: any) => {
		if (!e.target.value) {
			dispatch(setMaxBathRooms(undefined))
		} else {
			dispatch(setMaxBathRooms(e.target.value))
		}
	}

	const handleRegionChange = (selectedKey: string) => {
		// setSelectedCategoryId(selectedKey)
		// setValue('category.id', +selectedKey)
		dispatch(setRegion(selectedKey))
		console.log(selectedKey)
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
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>Ціна (₴)</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinPrice}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxPrice}
						/>
					</div>
				</div>
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>Площа (м²)</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinArea}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxArea}
						/>
					</div>
				</div>
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>
						Час оренди (місяців)
					</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinRent}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxRent}
						/>
					</div>
				</div>

				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>Поверх</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinFloor}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxFloor}
						/>
					</div>
				</div>
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>Кількість кімнат</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinRooms}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxRooms}
						/>
					</div>
				</div>
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>Кількість ліжок</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinBeds}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxBeds}
						/>
					</div>
				</div>
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>
						Кількість санвузлів
					</h3>
					<div className={styles.postFilter__crumbsPriceInputs}>
						<Input
							className={styles.price}
							placeholder='від'
							type='number'
							onChange={handleMinBathRooms}
						/>
						<Input
							className={styles.price}
							placeholder='до'
							type='number'
							onChange={handleMaxBathRooms}
						/>
					</div>
				</div>
				<div className={styles.postFilter__crumbsPrice}>
					<h3 className={styles.postFilter__crumbsHeading}>Область</h3>
					<Dropdown
						regiondropdown={true}
						enumValues={SearchRegionEnum}
						defaultValue={'ALL'}
						onDropdownChange={handleRegionChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default PostFilter
