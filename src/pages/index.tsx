import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCategory, setPage } from '@/store/page/pageFilters.slice'

import Home from '@/screens/home/Home'

const HomePage: NextPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setPage(1))
		dispatch(setCategory(undefined))
	}, [])
	return <Home />
}

export default HomePage
