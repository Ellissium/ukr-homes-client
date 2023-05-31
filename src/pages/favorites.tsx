import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { setCategory, setUserPage } from '@/store/page/pageFilters.slice'

import Favorites from '@/screens/favorites/Favorites'

const FavoritesPage: NextPageAuth = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setUserPage(1))
		dispatch(setCategory(undefined))
	}, [])
	return (
		<Meta title='Favorites'>
			<Layout>
				<Favorites />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true
export default FavoritesPage
