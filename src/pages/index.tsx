import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { setCategory, setPage } from '@/store/page/pageFilters.slice'

import Home from '@/screens/home/Home'

const HomePage: NextPage = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setPage(1))
		dispatch(setCategory(undefined))
	}, [])
	return (
		<Meta title='Home'>
			<Layout hideDistance={600}>
				<Home />
			</Layout>
		</Meta>
	)
}

export default HomePage
