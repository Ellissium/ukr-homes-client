import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import {
	setCategory,
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
	setRegion
} from '@/store/page/pageFilters.slice'

import Home from '@/screens/home/Home'
import { SearchRegionEnum } from '@/services/category/dropdownEnum.types'
import { EnumPostCategory } from '@/services/post/post.types'

const PostsRentPage: NextPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setPage(1))
		dispatch(setCategory(EnumPostCategory.RENT))
		dispatch(setMinPrice(undefined))
		dispatch(setMaxPrice(undefined))
		dispatch(setMinArea(undefined))
		dispatch(setMaxArea(undefined))
		dispatch(setMinFloor(undefined))
		dispatch(setMaxFloor(undefined))
		dispatch(setMinRooms(undefined))
		dispatch(setMaxRooms(undefined))
		dispatch(setMinRent(undefined))
		dispatch(setMaxRent(undefined))
		dispatch(setMinBeds(undefined))
		dispatch(setMaxBeds(undefined))
		dispatch(setMinBathRooms(undefined))
		dispatch(setMaxBathRooms(undefined))
		dispatch(setRegion(SearchRegionEnum[0].key))
	}, [])

	return (
		<Meta title='Rent'>
			<Layout hideDistance={600}>
				<Home />
			</Layout>
		</Meta>
	)
}

export default PostsRentPage
