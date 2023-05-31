import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Layout from '@/ui/layout/Layout'
import Meta from '@/ui/meta/Meta'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { setCategory, setUserPage } from '@/store/page/pageFilters.slice'

import Profile from '@/screens/profile/Profile'

const ProfilePage: NextPageAuth = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setUserPage(1))
		dispatch(setCategory(undefined))
	}, [])
	return (
		<Meta title='Profile'>
			<Layout>
				<Profile />
			</Layout>
		</Meta>
	)
}

ProfilePage.isOnlyUser = true
export default ProfilePage
