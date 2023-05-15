import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCategory, setPage } from '@/store/page/pageFilters.slice'

import Home from '@/screens/home/Home'
import { EnumPostCategory } from '@/services/post/post.types'

const PostsRentPage: NextPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setPage(1))
		dispatch(setCategory(EnumPostCategory.REFUGEE))
	}, [])

	return <Home />
}

export default PostsRentPage
