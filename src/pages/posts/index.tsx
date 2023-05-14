import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCategory, setPage } from '@/store/page/pageFilters.slice'

import { TypePaginationPosts } from '@/types/post.interface'

import Home from '@/screens/home/Home'

const PostsPage: NextPage<TypePaginationPosts> = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setPage(1))
		dispatch(setCategory(undefined))
	}, [])
	return <Home />
}

export default PostsPage
